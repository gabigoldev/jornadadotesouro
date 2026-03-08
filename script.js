// ===== GAME STATE COM KARMA TRACKING =====
let gameState = {
    currentQuestionId: 'Q1',
    questionsAnswered: 0,
    answers: [],
    totalScore: 0,
    karma: {
        // Virtudes Positivas
        courage: 0,
        wisdom: 0,
        compassion: 0,
        patience: 0,
        integrity: 0,
        humility: 0,
        sacrifice: 0,
        trust: 0,
        
        // Características Neutras
        pragmatism: 0,
        tactics: 0,
        survival: 0,
        independence: 0,
        
        // Emoções/Estados
        fear: 0,
        desperation: 0,
        thirst: 0,
        hunger: 0,
        urgency: 0,
        doubt: 0,
        
        // Negativos
        greed: 0,
        pride: 0,
        violence: 0,
        deception: 0,
        selfishness: 0
    },
    emotionalJourney: [], // Track de como emoções mudaram
    path: ['Q1'], // IDs das questões percorridas
    startTime: null,
    timeSpent: 0
};

// ===== PARTICLES ANIMATION =====
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== SCREEN MANAGEMENT =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// ===== START JOURNEY =====
function startJourney() {
    gameState = {
        currentQuestionId: 'Q1',
        questionsAnswered: 0,
        answers: [],
        totalScore: 0,
        karma: {
            courage: 0, wisdom: 0, compassion: 0, patience: 0,
            integrity: 0, humility: 0, sacrifice: 0, trust: 0,
            pragmatism: 0, tactics: 0, survival: 0, independence: 0,
            fear: 0, desperation: 0, thirst: 0, hunger: 0,
            urgency: 0, doubt: 0,
            greed: 0, pride: 0, violence: 0, deception: 0, selfishness: 0
        },
        emotionalJourney: [],
        path: ['Q1'],
        startTime: Date.now(),
        timeSpent: 0
    };

    showScreen('journey-screen');
    loadQuestion();
}

// ===== LOAD QUESTION =====
function loadQuestion() {
    const question = journeyQuestions.find(q => q.id === gameState.currentQuestionId);

    if (!question) {
        console.error('Questão não encontrada:', gameState.currentQuestionId);
        return;
    }

    // Se chegou em um final (ENDING ou FINAL)
    if (question.id.startsWith('FINAL') || question.id.startsWith('ENDING') || question.id === 'END') {
        finishJourney();
        return;
    }

    // Calcula progresso baseado no capítulo
    const progress = calculateProgress(question.phase);
    
    // Update UI
    document.getElementById('current-obstacle').textContent = gameState.questionsAnswered + 1;
    document.getElementById('progress-percent').textContent = Math.round(progress) + '%';
    document.getElementById('progress-fill').style.width = progress + '%';

    // Update question
    document.getElementById('journey-badge').textContent = question.badge;
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('question-context').textContent = question.context;

    // Update options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.onclick = () => handleAnswer(option, index, question);

        button.innerHTML = `
            <div class="option-content">
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option.text}</div>
            </div>
        `;

        optionsContainer.appendChild(button);
    });
}

// ===== CALCULAR PROGRESSO =====
function calculateProgress(phase) {
    // Baseado no capítulo
    const phaseProgress = {
        'cap1-chamado': 5,
        'cap2-aceitou': 15,
        'cap2-recusou': 15,
        'cap2-desconfiou': 15,
        'cap3-fuga-solo': 35,
        'cap3-tatico': 35,
        'cap3-rendido': 35,
        'cap3-retorno': 35,
        'cap3-fuga-egoista': 35,
        'cap3-confronto': 35,
        'cap3-segredo': 35,
        'cap3-ladrao': 35,
        'cap3-confronto-assassinos': 35,
        'cap4-cidade-perdida': 60,
        'cap4-conspiracao': 60,
        'cap4-traicao': 60,
        'cap5-portal': 85,
        'cap5-estudioso': 85,
        'cap5-preso': 85,
        'cap5-destruicao': 85,
        'cap5-ordem': 85,
        'ending': 100
    };

    return phaseProgress[phase] || Math.min((gameState.questionsAnswered / 15) * 100, 95);
}

// ===== HANDLE ANSWER =====
function handleAnswer(option, optionIndex, currentQuestion) {
    // Disable all buttons
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.disabled = true;
    });

    // Highlight selected
    const selectedButton = document.querySelectorAll('.option-button')[optionIndex];
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }

    // Save answer with full context
    gameState.answers.push({
        questionId: gameState.currentQuestionId,
        phase: currentQuestion.phase,
        badge: currentQuestion.badge,
        title: currentQuestion.title,
        choice: option.text,
        points: option.points,
        feedback: option.feedback,
        karma: option.karma || {}
    });

    // Update karma
    if (option.karma) {
        Object.keys(option.karma).forEach(key => {
            if (gameState.karma[key] !== undefined) {
                gameState.karma[key] += option.karma[key];
            }
        });
        
        // Snapshot emocional
        gameState.emotionalJourney.push({
            question: gameState.currentQuestionId,
            karma: {...gameState.karma}
        });
    }

    // Update score
    gameState.totalScore += option.points;
    gameState.questionsAnswered++;

    // Update path
    if (option.nextQuestionId) {
        gameState.path.push(option.nextQuestionId);
    }

    // Show feedback briefly
    setTimeout(() => {
        if (option.nextQuestionId) {
            gameState.currentQuestionId = option.nextQuestionId;
            loadQuestion();
        } else {
            finishJourney();
        }
    }, 1500);
}

// ===== FINISH JOURNEY =====
function finishJourney() {
    gameState.timeSpent = Math.floor((Date.now() - gameState.startTime) / 1000);
    
    showScreen('teaser-screen');

    // Save to localStorage
    localStorage.setItem('journeyResults', JSON.stringify({
        score: gameState.totalScore,
        answers: gameState.answers,
        karma: gameState.karma,
        emotionalJourney: gameState.emotionalJourney,
        path: gameState.path,
        questionsAnswered: gameState.questionsAnswered,
        timeSpent: gameState.timeSpent,
        date: new Date().toISOString()
    }));
}

// ===== PAYMENT =====
function showPayment() {
    showScreen('payment-screen');
}

function backToTeaser() {
    showScreen('teaser-screen');
}

function switchPaymentMethod(method) {
    document.querySelectorAll('.payment-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-method="${method}"]`).classList.add('active');

    document.querySelectorAll('.payment-method').forEach(pm => {
        pm.classList.remove('active');
    });
    document.getElementById(`${method}-payment`).classList.add('active');
}

function copyPixCode() {
    const code = document.getElementById('pix-code-text').textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('✓ Código PIX copiado!');
    });
}

function simulatePayment() {
    const statusText = document.querySelector('.status-text');
    const statusIcon = document.querySelector('.status-icon');

    if (statusText) {
        statusText.textContent = 'Processando pagamento...';
        statusIcon.textContent = '⏳';
    }

    setTimeout(() => {
        if (statusText) {
            statusText.textContent = '✓ Pagamento aprovado!';
            statusIcon.textContent = '✓';
        }

        setTimeout(() => {
            showResults();
        }, 1000);
    }, 2000);
}

// ===== SHOW RESULTS (ANÁLISE PROFUNDA) =====
function showResults() {
    showScreen('results-screen');

    const results = JSON.parse(localStorage.getItem('journeyResults'));
    
    // Calcula nota final (0-100)
    const finalScore = calculateFinalScore(results);
    
    // Determina arquétipo
    const archetype = determineArchetype(results);
    
    // Análise emocional
    const emotionalAnalysis = analyzeEmotions(results.karma);
    
    // Conselhos personalizados
    const advice = generateAdvice(results.karma, emotionalAnalysis);

    // Update UI
    document.getElementById('final-score').textContent = finalScore + '%';
    document.getElementById('archetype-title').textContent = archetype.title;
    document.getElementById('archetype-description').textContent = archetype.description;

    // Build journey path
    buildJourneyPath(results.answers);

    // Build emotional radar
    buildEmotionalRadar(results.karma);

    // Show insights
    buildInsights(emotionalAnalysis, advice);
}

// ===== CALCULAR NOTA FINAL =====
function calculateFinalScore(results) {
    const maxPossibleScore = results.questionsAnswered * 100;
    const rawPercentage = (results.score / maxPossibleScore) * 100;
    
    // Bônus por virtudes
    const virtueBonus = (
        results.karma.courage * 2 +
        results.karma.wisdom * 3 +
        results.karma.compassion * 3 +
        results.karma.sacrifice * 4 +
        results.karma.integrity * 2
    );
    
    // Penalidade por vícios
    const vicePenalty = (
        results.karma.greed * 3 +
        results.karma.violence * 2 +
        results.karma.selfishness * 3 +
        results.karma.deception * 2
    );
    
    // Score final
    const finalScore = Math.max(0, Math.min(100, rawPercentage + virtueBonus - vicePenalty));
    
    return Math.round(finalScore);
}

// ===== DETERMINAR ARQUÉTIPO =====
function determineArchetype(results) {
    const k = results.karma;
    
    // Identifica traço dominante
    const traits = {
        courage: k.courage,
        wisdom: k.wisdom,
        compassion: k.compassion,
        pragmatism: k.pragmatism,
        fear: k.fear,
        greed: k.greed
    };
    
    const dominant = Object.keys(traits).reduce((a, b) => traits[a] > traits[b] ? a : b);
    
    // Arquétipos baseados em combinações
    if (k.wisdom > 15 && k.compassion > 10) {
        return {
            title: '🌟 O Iluminado',
            description: 'Você trilhou o caminho da sabedoria compassiva. Suas escolhas revelam profundo entendimento da natureza humana e genuíno desejo de ajudar outros. Você não buscou poder ou riqueza - buscou VERDADE. E a encontrou.'
        };
    }
    
    if (k.courage > 15 && k.sacrifice > 8) {
        return {
            title: '⚔️ O Herói Verdadeiro',
            description: 'Coragem sem egoísmo. Você enfrentou perigos mortais não por glória, mas porque era o certo a fazer. Seus sacrifícios salvaram outros. Você é o tipo raro de herói que o mundo precisa desesperadamente.'
        };
    }
    
    if (k.wisdom > 12 && k.tactics > 8) {
        return {
            title: '🧠 O Estrategista Sábio',
            description: 'Você pensa 10 passos à frente. Suas escolhas demonstram inteligência aguçada e planejamento cuidadoso. Você não confia em sorte - confia em ESTRATÉGIA. E por isso, você vence.'
        };
    }
    
    if (k.compassion > 12 && k.sacrifice > 6) {
        return {
            title: '❤️ O Guardião Compassivo',
            description: 'Seu coração guia suas ações. Você escolheu proteger e curar mesmo quando isso te custou. Empatia profunda e vontade genuína de aliviar sofrimento definem quem você é. O mundo é melhor porque você existe.'
        };
    }
    
    if (k.pragmatism > 12 && k.survival > 8) {
        return {
            title: '🎯 O Sobrevivente Pragmático',
            description: 'Você entende a realidade crua: sobrevivência exige decisões difíceis. Suas escolhas foram práticas, calculadas, eficientes. Você não se ilude com idealismo - você lida com o que É, não com o que deveria ser.'
        };
    }
    
    if (k.fear > 10 && k.desperation > 8) {
        return {
            title: '😰 O Assombrado',
            description: 'Medo e desespero dominaram sua jornada. Você sobreviveu... mas a que custo? Suas escolhas foram guiadas por pânico, não por razão. Há lições aqui sobre enfrentar medos ao invés de fugir deles.'
        };
    }
    
    if (k.greed > 10 || k.selfishness > 10) {
        return {
            title: '💰 O Ganancioso',
            description: 'Você priorizou ganho pessoal acima de tudo. Suas escolhas revelam fome por poder, riqueza, vantagem. Você pode ter "vencido"... mas perdeu algo mais valioso no processo: sua humanidade.'
        };
    }
    
    // Default
    return {
        title: '🌱 O Aprendiz',
        description: 'Sua jornada foi exploratória. Você ainda está descobrindo quem é. Não demonstrou traços dominantes fortes - o que significa que seu caráter ainda está sendo moldado. E isso é OK. Crescimento é um processo.'
    };
}

// ===== ANALISAR EMOÇÕES =====
function analyzeEmotions(karma) {
    const analysis = {
        strengths: [],
        weaknesses: [],
        dominantEmotion: '',
        balance: 0
    };
    
    // Identifica forças (karma positivo alto)
    if (karma.courage >= 8) analysis.strengths.push({ trait: 'Coragem', value: karma.courage });
    if (karma.wisdom >= 8) analysis.strengths.push({ trait: 'Sabedoria', value: karma.wisdom });
    if (karma.compassion >= 8) analysis.strengths.push({ trait: 'Compaixão', value: karma.compassion });
    if (karma.patience >= 6) analysis.strengths.push({ trait: 'Paciência', value: karma.patience });
    if (karma.sacrifice >= 6) analysis.strengths.push({ trait: 'Sacrifício', value: karma.sacrifice });
    
    // Identifica fraquezas (karma negativo alto ou falta de positivos)
    if (karma.fear >= 8) analysis.weaknesses.push({ trait: 'Medo Excessivo', value: karma.fear });
    if (karma.greed >= 6) analysis.weaknesses.push({ trait: 'Ganância', value: karma.greed });
    if (karma.violence >= 6) analysis.weaknesses.push({ trait: 'Violência', value: karma.violence });
    if (karma.selfishness >= 6) analysis.weaknesses.push({ trait: 'Egoísmo', value: karma.selfishness });
    if (karma.courage < 3 && karma.fear > 5) analysis.weaknesses.push({ trait: 'Falta de Coragem', value: 0 });
    if (karma.compassion < 3) analysis.weaknesses.push({ trait: 'Falta de Empatia', value: 0 });
    
    // Emoção dominante
    const emotions = {
        'Medo': karma.fear,
        'Coragem': karma.courage,
        'Sabedoria': karma.wisdom,
        'Desespero': karma.desperation,
        'Compaixão': karma.compassion
    };
    analysis.dominantEmotion = Object.keys(emotions).reduce((a, b) => emotions[a] > emotions[b] ? a : b);
    
    // Balanço emocional (0-100, quanto maior melhor)
    const positive = karma.courage + karma.wisdom + karma.compassion + karma.patience;
    const negative = karma.fear + karma.greed + karma.violence + karma.selfishness;
    analysis.balance = Math.max(0, Math.min(100, 50 + (positive - negative) * 3));
    
    return analysis;
}

// ===== GERAR CONSELHOS =====
function generateAdvice(karma, analysis) {
    const advice = [];
    
    // Conselhos baseados em fraquezas
    if (karma.fear > 8) {
        advice.push({
            weakness: 'Medo Excessivo',
            mission: 'Missão: Coragem Pequena',
            description: 'Faça UMA coisa por dia que te assusta (mesmo que seja pequena). Ligue ao invés de mandar mensagem. Fale com um desconhecido. Peça desconto. Pequenos atos de coragem criam músculos de bravura.',
            why: 'No jogo, medo paralisou você. Na vida real, crescimento vive do outro lado do medo.'
        });
    }
    
    if (karma.compassion < 3 || karma.selfishness > 6) {
        advice.push({
            weakness: 'Falta de Compaixão',
            mission: 'Missão: Compaixão em Ação',
            description: 'Ajude alguém SEM esperar nada em troca. Pague o café de quem está atrás de você. Escute REALMENTE alguém que precisa. Faça uma boa ação anônima.',
            why: 'No jogo, você ignorou pedidos de ajuda. Generosidade sem expectativa transforma sua alma.'
        });
    }
    
    if (karma.patience < 3 || karma.urgency > 8) {
        advice.push({
            weakness: 'Impaciência',
            mission: 'Missão: Paciência Estratégica',
            description: 'Dedique 20 minutos por dia a algo que exige PACIÊNCIA: meditar, ler um livro denso, aprender algo novo devagar, cozinhar uma receita complexa.',
            why: 'No jogo, você sempre escolheu o caminho rápido. As melhores coisas demoram.'
        });
    }
    
    if (karma.greed > 6) {
        advice.push({
            weakness: 'Ganância',
            mission: 'Missão: Generosidade Radical',
            description: 'DOE algo que você realmente gosta (não lixo). Ajude alguém financeiramente sem esperar retorno. Pratique desapego.',
            why: 'No jogo, você priorizou ganho pessoal. Aprenda que dar é mais satisfatório que acumular.'
        });
    }
    
    if (karma.wisdom < 5) {
        advice.push({
            weakness: 'Falta de Reflexão',
            mission: 'Missão: Diário de Sabedoria',
            description: 'Todo dia, escreva: 1) O que aprendi hoje? 2) Que erro cometi? 3) Como posso melhorar amanhã? Reflexão diária cria sabedoria.',
            why: 'No jogo, você agiu sem pensar. Sabedoria vem de refletir sobre experiências.'
        });
    }
    
    // Sempre adiciona gratidão
    advice.push({
        weakness: 'Bônus Universal',
        mission: 'Missão: Gratidão Diária',
        description: 'Escreva 3 gratidões por dia durante 7 dias (antes de dormir). Podem ser pequenas: "Café quente" vale! Foque em SENTIR a gratidão.',
        why: 'Pessoas gratas são mais felizes, resilientes e bem-sucedidas. Gratidão muda sua química cerebral.'
    });
    
    return advice.slice(0, 4); // Máximo 4 missões
}

// ===== BUILD JOURNEY PATH =====
function buildJourneyPath(answers) {
    const pathContainer = document.getElementById('journey-path');
    pathContainer.innerHTML = '';

    answers.forEach((answer, index) => {
        const step = document.createElement('div');
        step.className = 'journey-step';

        const pointsPercent = Math.round((answer.points / 100) * 100);

        step.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <div class="step-badge">${answer.badge}</div>
                <div class="step-title">${answer.title}</div>
                <div class="step-choice">"${answer.choice}"</div>
                <div class="step-result">${answer.feedback} (${pointsPercent}% de sabedoria)</div>
            </div>
        `;

        pathContainer.appendChild(step);
    });
}

// ===== BUILD EMOTIONAL RADAR =====
function buildEmotionalRadar(karma) {
    const radarContainer = document.getElementById('emotional-radar');
    if (!radarContainer) return;

    const emotions = [
        { label: 'Coragem', value: Math.min(100, karma.courage * 10), color: '#ef4444' },
        { label: 'Sabedoria', value: Math.min(100, karma.wisdom * 10), color: '#8b5cf6' },
        { label: 'Compaixão', value: Math.min(100, karma.compassion * 10), color: '#ec4899' },
        { label: 'Pragmatismo', value: Math.min(100, karma.pragmatism * 10), color: '#3b82f6' },
        { label: 'Medo', value: Math.min(100, karma.fear * 10), color: '#6b7280' },
        { label: 'Ganância', value: Math.min(100, karma.greed * 10), color: '#f59e0b' }
    ];

    radarContainer.innerHTML = emotions.map(emotion => `
        <div class="emotion-bar">
            <div class="emotion-label">${emotion.label}</div>
            <div class="emotion-track">
                <div class="emotion-fill" style="width: ${emotion.value}%; background: ${emotion.color}"></div>
            </div>
            <div class="emotion-value">${emotion.value}%</div>
        </div>
    `).join('');
}

// ===== BUILD INSIGHTS (Análise + Conselhos) =====
function buildInsights(analysis, advice) {
    const insightsContainer = document.getElementById('insights-grid');
    if (!insightsContainer) return;

    insightsContainer.innerHTML = `
        <div class="insight-section">
            <h3>💪 Suas Forças</h3>
            ${analysis.strengths.length > 0 ? 
                analysis.strengths.map(s => `<div class="strength-item">✅ ${s.trait} (Nível: ${s.value})</div>`).join('') :
                '<div class="strength-item">⚠️ Nenhuma força dominante detectada</div>'
            }
        </div>

        <div class="insight-section">
            <h3>⚠️ Áreas de Melhoria</h3>
            ${analysis.weaknesses.length > 0 ?
                analysis.weaknesses.map(w => `<div class="weakness-item">❌ ${w.trait}</div>`).join('') :
                '<div class="weakness-item">✅ Sem fraquezas críticas detectadas!</div>'
            }
        </div>

        <div class="insight-section">
            <h3>🎯 Emoção Dominante</h3>
            <div class="dominant-emotion">${analysis.dominantEmotion}</div>
            <div class="balance-meter">
                <div class="balance-label">Balanço Emocional:</div>
                <div class="balance-bar">
                    <div class="balance-fill" style="width: ${analysis.balance}%"></div>
                </div>
                <div class="balance-value">${analysis.balance}%</div>
            </div>
        </div>

        <div class="insight-section missions-section">
            <h3>🎮 Missões na Vida Real</h3>
            <p class="missions-intro">Baseado nas suas escolhas no jogo, aqui estão missões REAIS para crescimento pessoal:</p>
            ${advice.map((mission, index) => `
                <div class="mission-card">
                    <div class="mission-header">
                        <span class="mission-number">${index + 1}</span>
                        <span class="mission-title">${mission.mission}</span>
                    </div>
                    <div class="mission-weakness">Trabalha em: ${mission.weakness}</div>
                    <div class="mission-description">${mission.description}</div>
                    <div class="mission-why"><strong>Por quê?</strong> ${mission.why}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// ===== RESET JOURNEY =====
function resetJourney() {
    if (confirm('🎯 Tem certeza que quer começar uma nova jornada?')) {
        localStorage.removeItem('journeyResults');
        location.reload();
    }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    showScreen('landing-screen');
});
