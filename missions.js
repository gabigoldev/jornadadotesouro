// ===== BANCO DE MISSÕES REAIS =====
// Missões adaptadas às fraquezas detectadas durante o jogo

const missionDatabase = {
    // FALTA DE CORAGEM
    cowardice: {
        title: 'Coragem Pequena',
        category: 'CORAGEM',
        difficulty: 1,
        emoji: '⚔️',
        description: 'Faça UMA coisa que você normalmente evita por medo',
        suggestions: [
            'Fale com um desconhecido sobre algo aleatório',
            'Peça desconto em uma loja (mesmo com vergonha)',
            'Levante a mão em uma reunião e dê sua opinião',
            'Experimente um alimento que você nunca quis',
            'Ligue para alguém ao invés de mandar mensagem',
            'Faça uma pergunta "óbvia" em público'
        ],
        why: 'No jogo, você escolheu segurança várias vezes. Na vida real, crescimento exige desconforto. Pequenos atos de coragem criam músculos de bravura.',
        reward: 'Você vai perceber que o medo era maior que o perigo real.'
    },

    // FALTA DE COMPAIXÃO
    selfishness: {
        title: 'Compaixão em Ação',
        category: 'COMPAIXÃO',
        difficulty: 2,
        emoji: '❤️',
        description: 'Ajude alguém SEM esperar nada em troca',
        suggestions: [
            'Pague o café de quem está atrás de você na fila',
            'Ofereça ajuda a um colega sobrecarregado',
            'Doe algo que você gosta (não lixo) para caridade',
            'Escute REALMENTE alguém que precisa desabafar (sem dar conselhos)',
            'Faça uma boa ação anônima',
            'Ajude um estranho sem que ele peça'
        ],
        why: 'No jogo, você ignorou pedidos de ajuda. Na vida real, conexão humana é o verdadeiro tesouro. Generosidade sem expectativa transforma sua alma.',
        reward: 'Você vai sentir uma satisfação que dinheiro não compra.'
    },

    // IMPACIÊNCIA
    impatience: {
        title: 'Paciência Estratégica',
        category: 'PACIÊNCIA',
        difficulty: 3,
        emoji: '🧘',
        description: 'Dedique 20 minutos por dia a algo que exige PACIÊNCIA',
        suggestions: [
            'Medite por 20 minutos (apenas respire e observe pensamentos)',
            'Leia um livro físico denso (não rede social) por 20 minutos',
            'Aprenda algo novo devagar (idioma, instrumento, desenho)',
            'Cozinhe uma receita complexa do zero, sem pressa',
            'Faça um quebra-cabeça de 500+ peças',
            'Pratique origami ou outra arte manual'
        ],
        why: 'No jogo, você sempre escolheu o caminho rápido. Na vida real, as melhores coisas demoram. Paciência é o superpoder dos bem-sucedidos.',
        reward: 'Você vai treinar seu cérebro para valorizar o processo, não só o resultado.'
    },

    // ORGULHO EXCESSIVO
    pride: {
        title: 'Humildade Verdadeira',
        category: 'HUMILDADE',
        difficulty: 3,
        emoji: '🙏',
        description: 'Peça ajuda em algo que você "deveria" saber',
        suggestions: [
            'Admita "não sei" 3 vezes esta semana',
            'Peça ajuda em uma tarefa que você tem orgulho de fazer sozinho',
            'Reconheça o mérito de outra pessoa publicamente',
            'Aprenda algo com alguém "inferior" em status/hierarquia',
            'Confesse um erro que só você sabe',
            'Peça feedback honesto sobre suas limitações'
        ],
        why: 'No jogo, você recusou ajuda por orgulho. Humildade não é fraqueza - é sabedoria de saber que não sabemos tudo. Portas se abrem quando baixamos a guarda.',
        reward: 'Conexões genuínas e oportunidades que você nem sabia que existiam.'
    },

    // DESONESTIDADE
    dishonesty: {
        title: 'Integridade Radical',
        category: 'INTEGRIDADE',
        difficulty: 2,
        emoji: '⚖️',
        description: 'Seja totalmente honesto mesmo quando for difícil',
        suggestions: [
            'Confesse uma mentira pequena que você contou',
            'Devolva algo "emprestado" há muito tempo',
            'Admita um erro que ninguém mais sabe',
            'Seja transparente sobre uma limitação sua',
            'Recuse algo fácil mas eticamente questionável',
            'Corrija um mal-entendido que te favorece'
        ],
        why: 'No jogo, você enganou para progredir. Na vida real, atalhos desonestos cobram juros altos. Integridade traz paz interior que nada substitui.',
        reward: 'Você vai dormir em paz, sem pesos na consciência.'
    },

    // INDECISÃO
    indecision: {
        title: 'Decisão Rápida',
        category: 'DECISÃO',
        difficulty: 1,
        emoji: '⚡',
        description: 'Tome decisões rápidas sem pensar demais',
        suggestions: [
            'Escolha o que comer em menos de 2 minutos',
            'Compre algo sem pesquisar em 5 lojas diferentes',
            'Diga "sim" ou "não" imediatamente (sem "talvez")',
            'Escolha sua roupa em menos de 3 minutos',
            'Tome 3 decisões pequenas hoje sem consultar ninguém',
            'Na dúvida entre duas opções, jogue moeda e aceite'
        ],
        why: 'No jogo, você demorou muito para escolher. Análise excessiva paralisa. Decisão imperfeita executada > decisão perfeita que nunca acontece.',
        reward: 'Você vai ganhar tempo e energia mental para coisas que realmente importam.'
    },

    // PESSIMISMO
    pessimism: {
        title: 'Gratidão Diária',
        category: 'OTIMISMO',
        difficulty: 1,
        emoji: '🌟',
        description: 'Pratique gratidão ativamente todos os dias',
        suggestions: [
            'Escreva 3 gratidões por dia durante 7 dias (antes de dormir)',
            'Elogie genuinamente 1 pessoa por dia',
            'Encontre o lado bom em 1 problema que você tem',
            'Sorria para 5 estranhos por dia',
            'Compartilhe 1 notícia boa por dia (não tragédia)',
            'Agradeça verbalmente 3 pessoas esta semana'
        ],
        why: 'No jogo, você focou em riscos e problemas. Gratidão muda sua química cerebral. Pessoas gratas são mais felizes, resilientes e bem-sucedidas.',
        reward: 'Você vai ver beleza e oportunidades onde antes via apenas problemas.'
    },

    // MISSÃO BÔNUS (sempre aparece)
    gratitude: {
        title: 'Registro de Gratidão',
        category: 'GRATIDÃO',
        difficulty: 1,
        emoji: '📓',
        description: 'Mantenha um diário de gratidão por 7 dias',
        suggestions: [
            'Anote 3 coisas pelas quais você é grato (todo dia antes de dormir)',
            'Podem ser pequenas: "Café quente pela manhã" vale!',
            'Foque em SENTIR a gratidão, não só listar',
            'Releia suas anotações no 7º dia',
            'Compartilhe uma gratidão com alguém querido',
            'Agradeça mentalmente 3 coisas ao acordar'
        ],
        why: 'Independente das suas escolhas, gratidão é a base da felicidade. Pessoas gratas atraem mais coisas boas para suas vidas.',
        reward: 'Você vai notar mudanças sutis mas profundas na sua perspectiva de vida.'
    }
};

// ===== INSIGHTS DESBLOQUEÁVEIS =====
const insightDatabase = [{
        id: 1,
        title: 'GENEROSIDADE É INVESTIMENTO',
        description: 'Quando você ajuda outros sem esperar retorno, o universo te recompensa de formas inesperadas. Esta lição vale na vida real.',
        trigger: 'compassion',
        requiredCount: 3
    },
    {
        id: 2,
        title: 'CORAGEM NÃO É AUSÊNCIA DE MEDO',
        description: 'Coragem é agir APESAR do medo. Todo herói sentiu medo - a diferença é que eles não deixaram o medo decidir por eles.',
        trigger: 'courage',
        requiredCount: 3
    },
    {
        id: 3,
        title: 'SABEDORIA VEM DE ESCUTAR',
        description: 'As pessoas mais sábias falam menos e escutam mais. Perguntas certas valem mais que respostas apressadas.',
        trigger: 'wisdom',
        requiredCount: 3
    },
    {
        id: 4,
        title: 'PACIÊNCIA MULTIPLICA RESULTADOS',
        description: 'A pressa é inimiga da excelência. Grandes conquistas são construídas tijolo por tijolo, dia após dia.',
        trigger: 'patience',
        requiredCount: 2
    },
    {
        id: 5,
        title: 'INTEGRIDADE TRAZ PAZ INTERIOR',
        description: 'Fazer o certo quando ninguém está vendo é a definição de caráter. Você nunca perde o sono por fazer a coisa certa.',
        trigger: 'integrity',
        requiredCount: 2
    },
    {
        id: 6,
        title: 'HUMILDADE ABRE PORTAS',
        description: 'Admitir que não sabe é o primeiro passo para aprender. As maiores oportunidades vêm de conexões genuínas.',
        trigger: 'humility',
        requiredCount: 2
    },
    {
        id: 7,
        title: 'RESILIÊNCIA É SUPERPODER',
        description: 'Não importa quantas vezes você cai. Importa quantas vezes você levanta. Persistência vence talento.',
        trigger: 'resilience',
        requiredCount: 2
    },
    {
        id: 8,
        title: 'VISÃO DE LONGO PRAZO VENCE',
        description: 'Pensar 10 passos à frente te separa dos impulsivos. Grandes estrategistas jogam o jogo longo.',
        trigger: 'vision',
        requiredCount: 2
    },
    {
        id: 9,
        title: 'AUTENTICIDADE ATRAI OPORTUNIDADES',
        description: 'Ser genuíno é magnético. As melhores oportunidades vêm quando você é autenticamente você mesmo.',
        trigger: 'authenticity',
        requiredCount: 3
    }
];

// ===== MENTORES QUE PODEM APARECER =====
const mentorDatabase = {
    mage: {
        name: 'O Mago',
        emoji: '🧙',
        trigger: 'creativity',
        requiredCount: 3,
        message: 'Jovem viajante, observei suas escolhas. Você pensa fora da caixa, vê soluções onde outros veem muros. Isso é raro e valioso.',
        gift: 'ATALHO SECRETO: Você pode pular as próximas 2 questões se desejar.',
        giftType: 'skip',
        giftValue: 2
    },
    warrior: {
        name: 'O Guerreiro',
        emoji: '⚔️',
        trigger: 'courage',
        requiredCount: 4,
        message: 'Guerreiro reconhece guerreiro. Você enfrenta desafios de frente, sem recuar. Sua coragem é admirável.',
        gift: 'ESCUDO PROTETOR: Suas próximas 2 escolhas ruins NÃO causarão retrocesso.',
        giftType: 'protection',
        giftValue: 2
    },
    healer: {
        name: 'A Curandeira',
        emoji: '❤️',
        trigger: 'compassion',
        requiredCount: 3,
        message: 'Seu coração é puro e generoso. Em tempos egoístas, isso brilha como ouro. Continue sendo luz.',
        gift: 'CORAÇÃO EXTRA: Você ganhou +1 coração e proteção na próxima escolha.',
        giftType: 'heart',
        giftValue: 1
    },
    merchant: {
        name: 'O Mercador',
        emoji: '💼',
        trigger: 'strategy',
        requiredCount: 3,
        message: 'Você pensa estrategicamente, calcula riscos, joga o jogo longo. Isso é inteligência de mercado.',
        gift: 'BÔNUS DE PONTOS: Suas próximas 2 escolhas valem +30% de pontos extras.',
        giftType: 'bonus',
        giftValue: 0.3
    },
    sage: {
        name: 'A Sábia',
        emoji: '🦉',
        trigger: 'wisdom',
        requiredCount: 4,
        message: 'Você busca significado, não só resultados. Faz perguntas profundas. Isso é sabedoria verdadeira.',
        gift: 'REVELAÇÃO: Vou te contar um segredo sobre o verdadeiro tesouro... [Dica especial no final]',
        giftType: 'revelation',
        giftValue: 'O tesouro não é ouro - é quem você se torna na jornada'
    }
};

// ===== ARQUÉTIPOS FINAIS =====
const archetypeDatabase = {
    illuminated: {
        name: 'O Iluminado',
        emoji: '🌟',
        minScore: 85,
        description: 'Você compreendeu que o verdadeiro tesouro é a transformação pessoal. Suas escolhas revelam sabedoria, compaixão e coragem extraordinárias. Você está PRONTO para buscar seus sonhos mais ambiciosos.',
        message: 'Poucas pessoas chegam a este nível de consciência. Use sua sabedoria para iluminar o caminho de outros.'
    },
    sage_adventurer: {
        name: 'O Sábio Aventureiro',
        emoji: '🏆',
        minScore: 70,
        description: 'Você equilibrou coragem com prudência, generosidade com auto-preservação. Suas escolhas mostram maturidade e crescimento genuíno. Você está PRONTO para grandes desafios.',
        message: 'Continue refinando seu equilíbrio. Você tem o que poucos possuem: sabedoria E coragem.'
    },
    cautious_warrior: {
        name: 'O Guerreiro Cauteloso',
        emoji: '⚔️',
        minScore: 55,
        description: 'Você enfrentou a jornada com determinação, mas às vezes o medo guiou suas escolhas. Ainda há muito a aprender, mas você está no caminho certo.',
        message: 'Você tem potencial. Trabalhe na confiança e verá resultados surpreendentes.'
    },
    survivor: {
        name: 'O Sobrevivente',
        emoji: '🛡️',
        minScore: 40,
        description: 'Você focou em segurança e auto-preservação. A jornada te ensinou que às vezes é preciso arriscar para crescer. Use essa lição.',
        message: 'Sobreviver é importante, mas viver de verdade exige coragem. Você pode mais do que imagina.'
    },
    apprentice: {
        name: 'O Aprendiz',
        emoji: '🌱',
        minScore: 0,
        description: 'Sua jornada foi mais sobre descobrir seus limites do que sobre o tesouro. Há muito potencial em você esperando para ser revelado. Não desista.',
        message: 'Todo mestre já foi aprendiz. Suas quedas são lições. Levante-se e tente novamente com o que aprendeu.'
    }
};