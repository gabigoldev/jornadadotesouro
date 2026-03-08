// ===== GAME STATE =====
let gameState = {
    currentQuestionId: 'Q1', // Agora usamos IDs ao invés de índices
    questionsAnswered: 0,
    answers: [],
    totalScore: 0,
    timeLeft: 180, // 3 minutos em segundos
    timerInterval: null,
    startTime: null,
    path: [] // Track do caminho percorrido
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
        timeLeft: 180,
        timerInterval: null,
        startTime: Date.now(),
        path: ['Q1']
    };

    showScreen('journey-screen');
    loadQuestion();
    startTimer();
}

// ===== TIMER FUNCTIONS =====
function startTimer() {
    updateTimerDisplay();

    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();

        if (gameState.timeLeft <= 0) {
            handleTimeout();
        } else if (gameState.timeLeft <= 30) {
            document.getElementById('timer').classList.add('warning');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeLeft / 60);
    const seconds = gameState.timeLeft % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = display;
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    gameState.timeLeft = 180;
    document.getElementById('timer').classList.remove('warning');
    startTimer();
}

function handleTimeout() {
    stopTimer();

    // Auto-seleciona opção aleatória
    const question = journeyQuestions.find(q => q.id === gameState.currentQuestionId);
    if (!question) return;

    const randomOption = question.options[Math.floor(Math.random() * question.options.length)];

    alert('⏰ Tempo esgotado! Uma escolha foi feita por você...');
    handleAnswer(randomOption, 0);
}

// ===== LOAD QUESTION =====
function loadQuestion() {
    // Busca a questão pelo ID
    const question = journeyQuestions.find(q => q.id === gameState.currentQuestionId);

    if (!question) {
        console.error('Questão não encontrada:', gameState.currentQuestionId);
        return;
    }

    // Se chegamos no END, termina a jornada
    if (question.id === 'END') {
        finishJourney();
        return;
    }

    // Calcula progresso baseado em quantas questões respondeu
    // Estimamos ~12 questões no caminho principal
    const estimatedTotal = 12;
    const progress = Math.min((gameState.questionsAnswered / estimatedTotal) * 100, 95); // Max 95% até o fim

    // Update progress
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
        button.onclick = () => handleAnswer(option, index);

        button.innerHTML = `
            <div class="option-content">
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option.text}</div>
            </div>
        `;

        optionsContainer.appendChild(button);
    });

    resetTimer();
}

// ===== HANDLE ANSWER =====
function handleAnswer(option, optionIndex) {
    stopTimer();

    // Disable all buttons
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.disabled = true;
    });

    // Highlight selected
    const selectedButton = document.querySelectorAll('.option-button')[optionIndex];
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }

    // Get current question
    const currentQuestion = journeyQuestions.find(q => q.id === gameState.currentQuestionId);

    // Save answer
    gameState.answers.push({
        questionId: gameState.currentQuestionId,
        phase: currentQuestion.phase,
        title: currentQuestion.title,
        points: option.points,
        feedback: option.feedback,
        choice: option.text
    });

    gameState.totalScore += option.points;
    gameState.questionsAnswered++;

    // Determina próxima questão baseada na escolha
    const nextQuestionId = option.nextQuestionId;

    // Show feedback briefly
    setTimeout(() => {
        if (nextQuestionId && nextQuestionId !== 'END') {
            // Vai para a próxima questão específica
            gameState.currentQuestionId = nextQuestionId;
            gameState.path.push(nextQuestionId);
            loadQuestion();
        } else {
            // Chegou no fim
            finishJourney();
        }
    }, 1500);
}

// ===== FINISH JOURNEY =====
function finishJourney() {
    stopTimer();
    showScreen('teaser-screen');

    // Save to localStorage for results
    localStorage.setItem('journeyResults', JSON.stringify({
        score: gameState.totalScore,
        answers: gameState.answers,
        path: gameState.path, // Salva o caminho percorrido
        questionsAnswered: gameState.questionsAnswered,
        date: new Date().toISOString()
    }));
}

// ===== PAYMENT METHODS =====
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

// ===== SHOW RESULTS =====
function showResults() {
    showScreen('results-screen');

    const results = JSON.parse(localStorage.getItem('journeyResults'));
    const score = results.score;

    // Calcula score máximo baseado em quantas questões foram respondidas
    const questionsAnswered = results.answers.length;
    const maxScore = questionsAnswered * 100; // 100 pontos por questão

    const percentage = Math.round((score / maxScore) * 100);

    // Update main score
    document.getElementById('final-score').textContent = percentage + '%';

    // Determine archetype
    const archetype = getArchetype(percentage, results.answers);
    document.getElementById('archetype-title').textContent = archetype.title;
    document.getElementById('archetype-description').textContent = archetype.description;

    // Build journey path
    buildJourneyPath(results.answers);

    // Build insights
    buildInsights(results.answers, percentage);
}

// ===== ARCHETYPE DETERMINATION =====
function getArchetype(percentage, answers) {
    if (percentage >= 85) {
        return {
            title: '🌟 O Iluminado',
            description: 'Você compreendeu que o verdadeiro tesouro é a transformação pessoal. Suas escolhas revelam sabedoria, compaixão e coragem extraordinárias.'
        };
    } else if (percentage >= 70) {
        return {
            title: '🏆 O Sábio Aventureiro',
            description: 'Você equilibrou coragem com prudência, generosidade com auto-preservação. Suas escolhas mostram maturidade e crescimento.'
        };
    } else if (percentage >= 55) {
        return {
            title: '⚔️ O Guerreiro Cauteloso',
            description: 'Você enfrentou a jornada com determinação, mas às vezes o medo guiou suas escolhas. Ainda há muito a aprender.'
        };
    } else if (percentage >= 40) {
        return {
            title: '🛡️ O Sobrevivente',
            description: 'Você focou em segurança e auto-preservação. A jornada te ensinou que às vezes é preciso arriscar para crescer.'
        };
    } else {
        return {
            title: '🌱 O Aprendiz',
            description: 'Sua jornada foi mais sobre descobrir seus limites do que sobre o tesouro. Há muito potencial em você esperando para ser revelado.'
        };
    }
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
                <div class="step-title">${answer.title}</div>
                <div class="step-result">${answer.feedback} (${pointsPercent}% de sabedoria)</div>
            </div>
        `;

        pathContainer.appendChild(step);
    });
}

// ===== BUILD INSIGHTS =====
function buildInsights(answers, percentage) {
    const insightsContainer = document.getElementById('insights-grid');
    insightsContainer.innerHTML = '';

    // Calculate category scores
    const compassion = calculateCategoryScore(answers, ['encontro', 'escolha-moral', 'sacrifício']);
    const wisdom = calculateCategoryScore(answers, ['início', 'teste', 'revelação']);
    const courage = calculateCategoryScore(answers, ['primeiro-desafio', 'montanha', 'quase-lá']);
    const creativity = calculateCategoryScore(answers, ['preparação', 'deserto', 'ilusão']);

    const insights = [
        { label: 'Compaixão', value: compassion, max: 300 },
        { label: 'Sabedoria', value: wisdom, max: 300 },
        { label: 'Coragem', value: courage, max: 300 },
        { label: 'Criatividade', value: creativity, max: 300 }
    ];

    insights.forEach(insight => {
        const percent = Math.round((insight.value / insight.max) * 100);

        const card = document.createElement('div');
        card.className = 'insight-card';
        card.innerHTML = `
            <div class="insight-label">${insight.label}</div>
            <div class="insight-value">${percent}%</div>
            <div class="insight-bar">
                <div class="insight-fill" style="width: ${percent}%"></div>
            </div>
        `;

        insightsContainer.appendChild(card);
    });
}

function calculateCategoryScore(answers, phases) {
    return answers
        .filter(a => phases.includes(a.phase))
        .reduce((sum, a) => sum + a.points, 0);
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