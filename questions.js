// ===== SISTEMA DE JORNADA ÉPICA - 50+ QUESTÕES RAMIFICADAS =====
// 4 CAMINHOS PRINCIPAIS + 1 CAMINHO OCULTO + 8 FINAIS ÚNICOS
// Sistema de karma, memória narrativa e consequências reais

const journeyQuestions = [
    // ========================================
    // INÍCIO UNIVERSAL - TODOS COMEÇAM AQUI
    // ========================================
    
    {
        id: 'Q1',
        phase: 'início',
        badge: '🗺️ O CHAMADO',
        title: 'O Velho Sábio e a Profecia',
        context: 'Na praça da vila, um velho de barba prateada te encara com olhos penetrantes. "Há anos espero por você", ele sussurra, entregando um mapa manchado de sangue. "Este mapa leva ao Tesouro das Almas - o maior segredo do mundo. Mas cuidado... a jornada revela quem você realmente é. Muitos começaram. Poucos retornaram. Nenhum voltou o mesmo." Suas mãos tremem ao pegar o mapa. O que você faz?',
        options: [
            {
                text: 'Recuso e devolvo o mapa. Isso parece perigoso demais e tenho uma vida tranquila aqui.',
                points: 20,
                feedback: 'O velho sorri tristemente. "A segurança é uma gaiola dourada..." Você sente um vazio estranho.',
                nextQuestionId: 'Q1A', // Caminho da recusa - segunda chance
                karma: { safety: +1 }
            },
            {
                text: 'Pergunto: "Por que EU? O que você sabe sobre mim que eu não sei?"',
                points: 85,
                feedback: 'O velho se ilumina: "AH! Você faz as perguntas certas. Isso é raro..." Sabedoria detectada.',
                nextQuestionId: 'Q2-SABIO', // Caminho do Sábio
                karma: { wisdom: +2 }
            },
            {
                text: 'Aceito imediatamente e pergunto: "Quando começo? Preciso de armas? Há inimigos?"',
                points: 70,
                feedback: '"Vejo fogo em seus olhos", diz o velho. "Um guerreiro nato..." Coragem reconhecida.',
                nextQuestionId: 'Q2-GUERREIRO', // Caminho do Guerreiro
                karma: { courage: +2 }
            },
            {
                text: 'Analiso o mapa primeiro e pergunto: "Este tesouro... vale quanto? É líquido? Divisível?"',
                points: 65,
                feedback: 'O velho ri: "Pragmático! Você pensa como mercador. Interessante..." Mente calculista detectada.',
                nextQuestionId: 'Q2-MERCADOR', // Caminho do Mercador
                karma: { pragmatism: +2 }
            }
        ]
    },

    // ========================================
    // CAMINHO ALTERNATIVO: RECUSOU O MAPA
    // ========================================
    
    {
        id: 'Q1A',
        phase: 'reconsideração',
        badge: '🏠 O ARREPENDIMENTO',
        title: 'A Vida que Você Escolheu',
        context: 'Três meses se passaram. Sua vida continua igual: acordar, trabalhar, dormir, repetir. Mas algo mudou DENTRO de você. Toda noite você sonha com o mapa. Hoje, na mesma praça, você vê o velho sábio novamente. Ele não te reconhece... ou finge não reconhecer. Ao lado dele, uma jovem guerreira pega um mapa idêntico e parte animada. Você observa ela se afastando. O que você faz?',
        options: [
            {
                text: 'Corro até o velho e IMPLORO por uma segunda chance. "Eu estava errado! Por favor!"',
                points: 75,
                feedback: 'Humildade na derrota. O velho sorri: "Coragem é voltar depois de cair..." Segunda chance concedida!',
                nextQuestionId: 'Q2-CURANDEIRO', // Vai pro caminho da compaixão/humildade
                karma: { humility: +2, courage: +1 }
            },
            {
                text: 'Aceito minha escolha. Volto pra casa em paz. Nem todos nasceram para aventuras.',
                points: 30,
                feedback: 'Você fecha a porta da oportunidade. Anos depois, você ainda se pergunta "e se..."',
                nextQuestionId: 'END-RESIGNADO', // Final precoce: vida comum
                karma: { safety: +2 }
            },
            {
                text: 'Sigo a guerreira em segredo. Se ela pode, eu também posso - não preciso do velho!',
                points: 60,
                feedback: 'Independência ou orgulho? Você parte sozinho, sem bênção nem guia...',
                nextQuestionId: 'Q2-GUERREIRO', // Caminho solo (mais difícil)
                karma: { pride: +1, courage: +1 }
            },
            {
                text: 'Aproximo do velho e digo: "Não quero o mapa. Quero aprender com VOCÊ. Posso ser seu aprendiz?"',
                points: 95,
                feedback: 'O velho se SURPREENDE. "Em 40 anos, você é o primeiro a pedir isso..." Sabedoria profunda!',
                nextQuestionId: 'Q2-SABIO', // Caminho secreto especial!
                karma: { wisdom: +3, humility: +1 }
            }
        ]
    },

    // ========================================
    // CAMINHO DO SÁBIO - Q2
    // ========================================
    
    {
        id: 'Q2-SABIO',
        phase: 'preparação-sabio',
        badge: '📚 O CAMINHO DO CONHECIMENTO',
        title: 'A Biblioteca Proibida',
        context: 'O velho te leva a uma biblioteca secreta sob a vila. "Antes de partir, escolha um livro. Apenas UM. Ele será seu guia." Você vê quatro tomos antigos nas prateleiras: um sobre História, um sobre Natureza, um sobre Psicologia Humana, e um sobre Magia Ancestral. Qual você escolhe?',
        options: [
            {
                text: 'O livro de HISTÓRIA - "Aqueles que não conhecem o passado estão condenados a repeti-lo."',
                points: 80,
                feedback: 'Você aprende sobre erros de outros aventureiros. Padrões se revelam...',
                nextQuestionId: 'Q3-SABIO',
                karma: { wisdom: +1, pattern_recognition: +1 }
            },
            {
                text: 'O livro de NATUREZA - "O mundo natural tem todas as respostas, se soubermos observar."',
                points: 85,
                feedback: 'Você aprende a ler sinais: pegadas, clima, plantas. A natureza será sua aliada.',
                nextQuestionId: 'Q3-SABIO',
                karma: { wisdom: +1, nature: +1 }
            },
            {
                text: 'O livro de PSICOLOGIA - "Entender pessoas é entender o mundo. Todo conflito é humano."',
                points: 90,
                feedback: 'Você ganha insight sobre motivações humanas. Manipulação ou empatia? Você decide...',
                nextQuestionId: 'Q3-SABIO',
                karma: { wisdom: +1, empathy: +2 }
            },
            {
                text: 'O livro de MAGIA - "Há forças além da razão. Ignorá-las é arrogância."',
                points: 75,
                feedback: 'Você aprende feitiços básicos. Poder... mas a que custo?',
                nextQuestionId: 'Q4-SABIO', // Variação especial
                karma: { wisdom: +1, magic: +2 }
            }
        ]
    },

    {
        id: 'Q3-CURANDEIRO',
        phase: 'teste-curandeiro',
        badge: '🌿 PRIMEIRA CURA',
        title: 'A Aldeia Doente',
        context: 'Você chega a uma aldeia onde 30 pessoas estão doentes com febre alta. Suas ervas podem salvar 10 pessoas completamente OU aliviar os sintomas de todas as 30 (mas sem cura total). O que você faz?',
        options: [
            {
                text: 'Salvo 10 completamente. Melhor salvar alguns do que aliviar todos sem curar.',
                points: 75,
                feedback: 'Pragmatismo. As 10 sobrevivem, as outras 20 sofrem mais tempo.',
                nextQuestionId: 'Q4-CURANDEIRO',
                karma: { pragmatism: +1, compassion: +1 }
            },
            {
                text: 'Alivio os sintomas de TODOS. Distribuir esperança é importante.',
                points: 80,
                feedback: 'Compaixão! Todos se sentem melhor, ninguém se sente abandonado.',
                nextQuestionId: 'Q4-CURANDEIRO',
                karma: { compassion: +2 }
            },
            {
                text: 'Ensino os aldeões a fazer o remédio com plantas locais.',
                points: 95,
                feedback: 'SABEDORIA! Você ensina a pescar, não dá o peixe. Impacto de longo prazo!',
                nextQuestionId: 'Q4-CURANDEIRO',
                karma: { wisdom: +3, teaching: +1 }
            },
            {
                text: 'Guardo as ervas. Posso encontrar situação pior adiante.',
                points: 40,
                feedback: 'Egoísmo. Os aldeões te olham com desprezo. 5 morrem na noite.',
                nextQuestionId: 'Q4-CURANDEIRO',
                karma: { compassion: -2, pragmatism: +1 }
            }
        ]
    },

    {
        id: 'Q3-SABIO',
        phase: 'teste-sabio',
        badge: '🧩 ENIGMA DO GUARDIÃO',
        title: 'O Portão de Três Perguntas',
        context: 'No primeiro dia de jornada, você encontra um portão de pedra bloqueando o caminho. Uma voz ecoa: "Três perguntas. Acerte duas e passe. Erre todas e retorne." As perguntas aparecem gravadas na pedra:\n\n1) O que é mais precioso que ouro mas não pode ser comprado?\n2) O que cresce quando compartilhado mas morre quando guardado?\n3) O que é tomado antes de ser dado?\n\nVocê tem o livro que escolheu. Como responde?',
        options: [
            {
                text: 'Consulto meu livro procurando as respostas diretas.',
                points: 50,
                feedback: 'O livro não tem as respostas exatas, mas te dá pistas... Você passa, mas foi mecânico.',
                nextQuestionId: 'Q4-SABIO',
                karma: { wisdom: +0 }
            },
            {
                text: 'Reflito profundamente e respondo: "Conhecimento, Amor, Decisão". Confio na intuição.',
                points: 95,
                feedback: 'CORRETO! O portão se abre com uma luz dourada. O guardião sussurra: "Você PENSA..."',
                nextQuestionId: 'Q4-SABIO',
                karma: { wisdom: +2, intuition: +1 }
            },
            {
                text: 'Tento contornar o portão. Perguntas são armadilhas - há sempre outro caminho.',
                points: 60,
                feedback: 'Você encontra um caminho lateral... mas perdeu uma lição importante.',
                nextQuestionId: 'Q5-SABIO',
                karma: { pragmatism: +1 }
            },
            {
                text: 'Pergunto ao portão: "E se EU fizer três perguntas para VOCÊ primeiro?"',
                points: 100,
                feedback: 'O guardião RI alto! "GENIAL! Ninguém nunca tentou isso!" Você passou com honras especiais!',
                nextQuestionId: 'Q5-SABIO', // Rota de honra
                karma: { wisdom: +3, creativity: +2 }
            }
        ]
    },

    // ========================================
    // CAMINHO DO GUERREIRO - Q2
    // ========================================
    
    {
        id: 'Q2-GUERREIRO',
        phase: 'preparação-guerreiro',
        badge: '⚔️ O CAMINHO DA CORAGEM',
        title: 'A Escolha das Armas',
        context: 'O velho te leva ao arsenal da vila. "Guerreiros precisam de aço, mas também de sabedoria sobre o aço." Você vê quatro conjuntos: Uma espada longa e escudo (clássico), Duas adagas rápidas (agilidade), Um machado pesado de duas mãos (força bruta), ou Um arco longo e flechas (distância). "Escolha com sabedoria - sua arma define sua luta."',
        options: [
            {
                text: 'Espada e Escudo - Equilíbrio entre ataque e defesa. Honra de guerreiro.',
                points: 75,
                feedback: 'Escolha nobre. O velho aprova: "Você pensa em sobreviver, não só em vencer."',
                nextQuestionId: 'Q3-GUERREIRO',
                karma: { courage: +1, defense: +1 }
            },
            {
                text: 'Duas Adagas - Velocidade é vida. Ataco antes de ser atacado.',
                points: 80,
                feedback: 'Letal e estratégico. "Você entende que evitar dano é melhor que resistir..."',
                nextQuestionId: 'Q3-GUERREIRO',
                karma: { courage: +1, agility: +2 }
            },
            {
                text: 'Machado Pesado - Um golpe certeiro vale mais que dez fracos.',
                points: 70,
                feedback: 'Força bruta. Efetivo, mas arriscado... "Confiança ou arrogância? O tempo dirá."',
                nextQuestionId: 'Q3-GUERREIRO',
                karma: { courage: +1, strength: +2 }
            },
            {
                text: 'Arco e Flechas - Mantenho distância. Inteligência tática supera coragem cega.',
                points: 85,
                feedback: 'Sabedoria de guerreiro! "Verdadeiros mestres escolhem onde lutar..."',
                nextQuestionId: 'Q4-GUERREIRO', // Variação especial
                karma: { courage: +1, tactics: +2 }
            }
        ]
    },

    {
        id: 'Q3-GUERREIRO',
        phase: 'teste-guerreiro',
        badge: '🐺 PRIMEIRO SANGUE',
        title: 'O Lobo Ferido',
        context: 'No segundo dia, você encontra um lobo grande ferido no caminho. Ele rosna baixo, protetor. Você percebe: há filhotes atrás dele. Ele está morrendo, mas defende sua ninhada. A ferida é de uma armadilha de caçadores. Você poderia matá-lo facilmente e pegar os filhotes (valem ouro no mercado). Ou... O que você faz?',
        options: [
            {
                text: 'Mato o lobo rapidamente - é um ato de misericórdia. E pego os filhotes.',
                points: 40,
                feedback: 'Eficiente, mas... os filhotes choram. Algo em você se apaga um pouco.',
                nextQuestionId: 'Q5-GUERREIRO',
                karma: { courage: +1, compassion: -1 }
            },
            {
                text: 'Retiro a armadilha e cuido da ferida. Se ele me atacar depois, que ataque.',
                points: 95,
                feedback: 'Risco enorme... mas o lobo ENTENDE. Ele lambe sua mão. Você fez um aliado improvável.',
                nextQuestionId: 'Q5-GUERREIRO',
                karma: { courage: +2, compassion: +2, animals: +1 }
            },
            {
                text: 'Passo longe. Não é meu problema - tenho uma missão.',
                points: 50,
                feedback: 'Pragmático e focado. Mas você sente os olhos do lobo em suas costas...',
                nextQuestionId: 'Q4-GUERREIRO',
                karma: { focus: +1 }
            },
            {
                text: 'Retiro a armadilha, cuido dele E levo os filhotes para criá-los. Família merece viver.',
                points: 85,
                feedback: 'Compaixão extrema... mas agora você tem 4 lobos na jornada. Complicado, mas honrado.',
                nextQuestionId: 'Q5-GUERREIRO', // Rota especial com lobos!
                karma: { courage: +1, compassion: +3, responsibility: +1 }
            }
        ]
    },

    // ========================================
    // CAMINHO DO MERCADOR - Q2
    // ========================================
    
    {
        id: 'Q2-MERCADOR',
        phase: 'preparação-mercador',
        badge: '💰 O CAMINHO DO VALOR',
        title: 'O Investimento Inicial',
        context: 'O velho ri: "Mercadores entendem que dinheiro faz dinheiro. Mas você está QUEBRADO. Tenho 100 moedas de ouro emprestadas. O que você faz com isso para COMEÇAR a jornada?" Quatro mercadores ao redor oferecem negócios diferentes...',
        options: [
            {
                text: 'Compro provisões em MASSA (comida, água, equipamentos) - 100 moedas. Segurança primeiro.',
                points: 60,
                feedback: 'Você está preparado por meses... mas sem capital para oportunidades futuras.',
                nextQuestionId: 'Q3-MERCADOR',
                karma: { pragmatism: +1, safety: +1 }
            },
            {
                text: 'Compro mercadorias BARATAS aqui e planejo revender CARO na próxima cidade. Arbitragem!',
                points: 90,
                feedback: 'Pensamento empreendedor! Você entende FLUXO DE VALOR. Risco calculado.',
                nextQuestionId: 'Q3-MERCADOR',
                karma: { pragmatism: +2, trade: +2 }
            },
            {
                text: 'Guardo 50 moedas como reserva e uso 50 para provisões básicas. Balanço prudente.',
                points: 75,
                feedback: 'Conservador e inteligente. Você pensa em LONGO PRAZO. Segurança financeira.',
                nextQuestionId: 'Q3-MERCADOR',
                karma: { pragmatism: +1, wisdom: +1 }
            },
            {
                text: 'Empresto as 100 moedas com JUROS para outros viajantes. Que trabalhem por MIM!',
                points: 85,
                feedback: 'Pensamento de INVESTIDOR! Você cria renda passiva. Ousado... muito ousado.',
                nextQuestionId: 'Q4-MERCADOR', // Rota especial
                karma: { pragmatism: +2, greed: +1 }
            }
        ]
    },

    {
        id: 'Q3-MERCADOR',
        phase: 'teste-mercador',
        badge: '🤝 A PRIMEIRA NEGOCIAÇÃO',
        title: 'O Vendedor Desesperado',
        context: 'Na estrada, você encontra um vendedor que perdeu tudo em um assalto. Ele tem apenas UMA coisa de valor: um medalhão antigo. "Vale 500 moedas no mercado negro, mas preciso de 50 moedas AGORA para comida ou morro." Você tem exatamente 50 moedas. O que você faz?',
        options: [
            {
                text: 'Compro o medalhão por 50 moedas. Negócio é negócio - ele aceitou a oferta.',
                points: 60,
                feedback: 'Lucro de 450 moedas! Mas... o homem chora ao entregar o medalhão. Era da mãe dele.',
                nextQuestionId: 'Q4-MERCADOR',
                karma: { pragmatism: +1, compassion: -1 }
            },
            {
                text: 'Dou 50 moedas como PRESENTE. Ele fica com o medalhão. Carma tem valor.',
                points: 90,
                feedback: 'Generosidade rara! O homem MEMORIZA SEU ROSTO. "Pagarei essa dívida..."',
                nextQuestionId: 'Q5-MERCADOR', // Ele volta depois!
                karma: { pragmatism: -1, compassion: +3, reputation: +1 }
            },
            {
                text: 'Proponho SOCIEDADE: uso minhas 50 moedas para nós dois. Lucros 50/50.',
                points: 95,
                feedback: 'WIN-WIN! Ele aceita emocionado. Você ganhou um PARCEIRO de negócios!',
                nextQuestionId: 'Q5-MERCADOR', // Rota com parceiro!
                karma: { pragmatism: +2, collaboration: +2 }
            },
            {
                text: 'Ignoro - tenho minha própria jornada. Cada um por si.',
                points: 40,
                feedback: 'Frio e calculista. Ele te amaldiçoa. Você segue... mas algo mudou em você.',
                nextQuestionId: 'Q4-MERCADOR',
                karma: { pragmatism: +1, compassion: -2 }
            }
        ]
    },

    // ========================================
    // CAMINHO DO CURANDEIRO - Q2
    // ========================================
    
    {
        id: 'Q2-CURANDEIRO',
        phase: 'preparação-curandeiro',
        badge: '❤️ O CAMINHO DA COMPAIXÃO',
        title: 'A Lição da Humildade',
        context: 'O velho te dá uma bolsa de ervas medicinais. "Você voltou humilde - isso é raro. Curandeiros entendem que ajudar outros é ajudar a si mesmo. Mas cuidado: você pode salvar o mundo ou morrer tentando." Antes de partir, uma criança doente é trazida até você. Você tem ervas para salvá-la... mas são as ÚNICAS que tem. Se usar tudo agora, começa a jornada vulnerável.',
        options: [
            {
                text: 'Uso TODAS as ervas para salvar a criança. Vida vem primeiro, sempre.',
                points: 100,
                feedback: 'A criança se cura! Os pais te dão bênçãos. Você parte sem remédios, mas com propósito.',
                nextQuestionId: 'Q4-CURANDEIRO',
                karma: { compassion: +3, sacrifice: +1 }
            },
            {
                text: 'Uso METADE das ervas. Salvo a criança, mas mantenho reservas.',
                points: 80,
                feedback: 'Equilíbrio sábio. A criança melhora devagar, mas você mantém recursos.',
                nextQuestionId: 'Q4-CURANDEIRO',
                karma: { compassion: +2, wisdom: +1 }
            },
            {
                text: 'Ensino os pais a fazer o remédio. Dou as ervas, mas compartilho CONHECIMENTO.',
                points: 95,
                feedback: 'SABEDORIA PROFUNDA! "Dê peixe, alimente um dia. Ensine a pescar..." Você impacta gerações!',
                nextQuestionId: 'Q4-CURANDEIRO', // Rota de mestre
                karma: { compassion: +2, wisdom: +3, teaching: +1 }
            },
            {
                text: 'Guardo as ervas. A jornada é perigosa - talvez encontre algo pior depois.',
                points: 40,
                feedback: 'A criança morre na noite seguinte. O peso da culpa te segue...',
                nextQuestionId: 'Q4-CURANDEIRO',
                karma: { compassion: -2, pragmatism: +1, guilt: +1 }
            }
        ]
    },

    // ========== CONTINUAÇÃO DOS CAMINHOS ==========
    // (Q4 a Q10 para cada caminho principal)
    
    {
        id: 'Q4-SABIO',
        phase: 'desenvolvimento-sabio',
        badge: '🔮 VISÕES DO FUTURO',
        title: 'O Espelho Profético',
        context: 'Você encontra um espelho mágico que mostra "possíveis futuros". Três visões aparecem: 1) Você rico, mas sozinho. 2) Você pobre, mas amado por muitos. 3) Você poderoso, mas temido. O espelho pergunta: "Qual futuro você ESCOLHE trabalhar para alcançar?"',
        options: [
            {
                text: 'Riqueza - Quero segurança financeira para mim e minha família.',
                points: 65,
                feedback: 'Pragmatismo honesto. Dinheiro não é mal se usado bem...',
                nextQuestionId: 'Q5-SABIO',
                karma: { pragmatism: +1 }
            },
            {
                text: 'Amor - Conexões humanas são o verdadeiro tesouro. Escolho relacionamentos.',
                points: 90,
                feedback: 'Sabedoria do coração! O espelho brilha: "Poucos escolhem isso..."',
                nextQuestionId: 'Q5-SABIO',
                karma: { compassion: +2 }
            },
            {
                text: 'Poder - Quero mudar o mundo. Preciso de influência para fazer o bem.',
                points: 75,
                feedback: 'Ambição com propósito. Mas lembre-se: "O poder corrompe..."',
                nextQuestionId: 'Q5-SABIO',
                karma: { ambition: +2 }
            },
            {
                text: 'RECUSO escolher. O futuro não é pré-determinado - minhas ações CRIAM meu futuro.',
                points: 100,
                feedback: 'FILOSOFIA PROFUNDA! O espelho se QUEBRA e te liberta do destino. Livre arbítrio total!',
                nextQuestionId: 'Q6-SABIO', // Rota especial
                karma: { wisdom: +3, freedom: +1 }
            }
        ]
    },

    {
        id: 'Q4-GUERREIRO',
        phase: 'desenvolvimento-guerreiro',
        badge: '🏰 CERCO NA ALDEIA',
        title: 'A Vila Sitiada',
        context: 'Você chega a uma pequena vila cercada por bandidos. Eles exigem todo o ouro da vila ou queimam tudo. Os aldeões têm 48 horas. Você é apenas um viajante - pode passar direto. Mas o líder dos aldeões te vê: "Por favor... ajude-nos. Somos 50 famílias, mas não sabemos lutar." O que você faz?',
        options: [
            {
                text: 'Sigo minha jornada. Não é minha guerra - tenho uma missão maior.',
                points: 30,
                feedback: 'Você ouve os gritos ao longe enquanto se afasta... A culpa te segue.',
                nextQuestionId: 'Q5-GUERREIRO',
                karma: { focus: +1, compassion: -2 }
            },
            {
                text: 'Luto SOZINHO contra os bandidos na calada da noite. Ataque surpresa!',
                points: 80,
                feedback: 'Heroísmo puro! Você elimina metade dos bandidos. Os outros fogem. LENDÁRIO!',
                nextQuestionId: 'Q6-GUERREIRO',
                karma: { courage: +3, reputation: +1 }
            },
            {
                text: 'TREINO os aldeões por 48h. Ensino técnicas básicas. Unidos, eles podem vencer!',
                points: 95,
                feedback: 'SABEDORIA DE LÍDER! Você cria um EXÉRCITO. A vila se defende sozinha depois!',
                nextQuestionId: 'Q6-GUERREIRO',
                karma: { courage: +2, leadership: +3, teaching: +1 }
            },
            {
                text: 'Negocio com os bandidos: "Me deixem passar e não interfiro. Vocês atacam DEPOIS que eu sair."',
                points: 20,
                feedback: 'Covarde... Os aldeões te olham com desprezo. Você segue em vergonha.',
                nextQuestionId: 'Q6-GUERREIRO',
                karma: { courage: -2, pragmatism: +1, shame: +1 }
            }
        ]
    },

    {
        id: 'Q4-MERCADOR',
        phase: 'desenvolvimento-mercador',
        badge: '📊 OPORTUNIDADE DE OURO',
        title: 'A Caravana Perdida',
        context: 'Você descobre uma caravana abandonada cheia de mercadorias valiosas. Pegadas indicam que foram atacados e fugiram às pressas. As mercadorias valem PELO MENOS 2000 moedas de ouro. Legalmente, são "achados". Mas você vê roupas de crianças... era uma família. O que você faz?',
        options: [
            {
                text: 'Pego TUDO. Achado não é roubado - eles abandonaram. Lei da selva.',
                points: 50,
                feedback: 'Lucro massivo... mas à noite você sonha com as crianças da caravana.',
                nextQuestionId: 'Q5-MERCADOR',
                karma: { pragmatism: +2, compassion: -2 }
            },
            {
                text: 'Pego apenas o essencial para sobreviver e sigo buscando os donos.',
                points: 85,
                feedback: 'Integridade rara! Você encontra a família escondida. Eles oferecem 50% como recompensa!',
                nextQuestionId: 'Q6-MERCADOR',
                karma: { integrity: +3, compassion: +1 }
            },
            {
                text: 'GUARDO tudo em local seguro e deixo sinais para os donos encontrarem.',
                points: 95,
                feedback: 'GENIAL! Você cria um "cofre" e marca o caminho. Quando os donos voltam, te fazem sócio!',
                nextQuestionId: 'Q6-MERCADOR', // Ganha parceiros poderosos!
                karma: { integrity: +2, wisdom: +2, collaboration: +1 }
            },
            {
                text: 'Vendo tudo rapidamente no mercado negro. Maximizo lucro antes que alguém reclame.',
                points: 40,
                feedback: 'Dinheiro rápido... mas você cria INIMIGOS. A família nunca esquece...',
                nextQuestionId: 'Q6-MERCADOR', // Consequências futuras!
                karma: { pragmatism: +1, greed: +1, reputation: -2 }
            }
        ]
    },

    {
        id: 'Q4-CURANDEIRO',
        phase: 'desenvolvimento-curandeiro',
        badge: '🌿 O DILEMA IMPOSSÍVEL',
        title: 'Dois Moribundos',
        context: 'Você encontra dois viajantes gravemente feridos: um jovem soldado e um velho sábio. Ambos vão morrer em minutos. Você tem remédios para salvar APENAS UM. O soldado implora: "Tenho esposa e filho de 3 anos..." O velho sussurra: "Eu sei o SEGREDO do tesouro... posso te contar..." Você tem 30 segundos para decidir.',
        options: [
            {
                text: 'Salvo o SOLDADO. Ele tem família que depende dele. Vida de pai vale mais.',
                points: 90,
                feedback: 'Compaixão pura. O velho morre em paz vendo sua escolha. "Você escolheu bem..."',
                nextQuestionId: 'Q6-CURANDEIRO',
                karma: { compassion: +3, sacrifice: +1 }
            },
            {
                text: 'Salvo o VELHO. O conhecimento dele pode salvar MUITOS no futuro.',
                points: 75,
                feedback: 'Pragmatismo filosófico. O soldado morre... mas o velho te ensina segredos valiosos.',
                nextQuestionId: 'Q6-CURANDEIRO',
                karma: { wisdom: +2, pragmatism: +1 }
            },
            {
                text: 'Divido o remédio. Talvez ambos sobrevivam com metade da dose...',
                points: 60,
                feedback: 'Tentativa desesperada... Ambos sobrevivem PRECARIAMENTE. Você adiou o problema.',
                nextQuestionId: 'Q6-CURANDEIRO', // Você tem que cuidar dos dois agora!
                karma: { compassion: +2, burden: +1 }
            },
            {
                text: 'Uso TODO o remédio em MIM e fujo. Não posso morrer aqui tentando salvar outros!',
                points: 10,
                feedback: 'Egoísmo brutal. Você vive... mas é assombrado por essa escolha para sempre.',
                nextQuestionId: 'Q6-CURANDEIRO',
                karma: { compassion: -3, survival: +1, trauma: +1 }
            }
        ]
    },

    // ========== QUESTÕES Q5 (DESENVOLVIMENTO MÉDIO) ==========
    
    {
        id: 'Q5-SABIO',
        phase: 'provação-sabio',
        badge: '🎭 A MENTIRA NECESSÁRIA',
        title: 'O Tirano e a Verdade',
        context: 'Você chega a uma cidade governada por um tirano cruel. Ele procura um fugitivo - uma criança com poderes mágicos. Você SABE onde a criança está escondida (você a viu na floresta). O tirano te interroga diretamente: "Você viu uma criança mágica? Diga a verdade ou morra." Mentir é contra seus princípios... mas a verdade mata uma inocente.',
        options: [
            {
                text: 'Digo a VERDADE. "Vi sim, está na floresta norte." Princípios acima de tudo.',
                points: 30,
                feedback: 'Honestidade brutal... A criança é capturada e executada. Sua "verdade" causou morte.',
                nextQuestionId: 'Q6-SABIO',
                karma: { integrity: +1, compassion: -2, trauma: +1 }
            },
            {
                text: 'MINTO: "Não vi nada." Salvo a criança, mas traio meus princípios.',
                points: 85,
                feedback: 'Mentira compassiva. A criança escapa. Às vezes, salvar uma vida vale mais que princípios...',
                nextQuestionId: 'Q6-SABIO',
                karma: { compassion: +3, integrity: -1 }
            },
            {
                text: 'Digo: "Vi algo, mas estava escuro. Não tenho certeza se era ela." Verdade ambígua.',
                points: 95,
                feedback: 'SABEDORIA! Tecnicamente verdade, mas protege a criança. Você enganou sem mentir!',
                nextQuestionId: 'Q7-SABIO',
                karma: { wisdom: +3, cleverness: +2 }
            },
            {
                text: 'Ataco o tirano ali mesmo. "Eu NUNCA dedurei ninguém!" Ação fala mais que palavras.',
                points: 70,
                feedback: 'Coragem heroica! Você morre... mas a distração permite a criança fugir. Sacrifício nobre.',
                nextQuestionId: 'END-MARTIR', // Final de mártir
                karma: { courage: +3, sacrifice: +3 }
            }
        ]
    },

    // ========== CONTINUAÇÃO Q5 PARA OUTROS CAMINHOS ==========
    
    {
        id: 'Q5-GUERREIRO',
        phase: 'provação-guerreiro',
        badge: '⚡ DUELO DE HONRA',
        title: 'O Campeão Invicto',
        context: 'Na próxima vila, um campeão invicto desafia todos que passam. "Lute comigo ou pague 100 moedas de pedágio!" Você não tem 100 moedas. Ele é ENORME - 2 metros, 150kg de músculo. Nunca perdeu uma luta. A multidão observa. O que você faz?',
        options: [
            {
                text: 'Aceito o duelo. Vou mostrar que tamanho não é documento!',
                points: 80,
                feedback: 'Coragem! É uma luta brutal, mas sua técnica supera a força bruta. Você VENCE!',
                nextQuestionId: 'Q6-GUERREIRO',
                karma: { courage: +3, reputation: +2 }
            },
            {
                text: 'Proponho: "Ao invés de lutar, me ensine. Pagarei com trabalho."',
                points: 90,
                feedback: 'Humildade guerreira! Ele fica impressionado e te aceita como aluno. Você ganha um MESTRE!',
                nextQuestionId: 'Q7-GUERREIRO',
                karma: { humility: +2, wisdom: +2 }
            },
            {
                text: 'Recuso e contorno a vila. Não preciso provar nada.',
                points: 50,
                feedback: 'Pragmático... mas a multidão ri. Sua reputação sofre.',
                nextQuestionId: 'Q6-GUERREIRO',
                karma: { pragmatism: +1, reputation: -1 }
            },
            {
                text: 'Desafio: "Que tal uma aposta? Se eu vencer, você ME paga 100 moedas."',
                points: 95,
                feedback: 'OUSADIA MÁXIMA! Ele aceita achando fácil. Você vence e fica RICO + famoso!',
                nextQuestionId: 'Q7-GUERREIRO',
                karma: { courage: +2, cleverness: +2, wealth: +1 }
            }
        ]
    },

    {
        id: 'Q5-MERCADOR',
        phase: 'provação-mercador',
        badge: '📈 CRISE FINANCEIRA',
        title: 'O Colapso do Mercado',
        context: 'Você investiu pesado em especiarias. De repente, uma praga destrói TODAS as plantações. Suas especiarias valem 10X MAIS agora (escassez)! Você pode vender e lucrar 5000 moedas... mas isso significa que famílias pobres não terão como comprar comida (especiarias são usadas para preservar alimentos). Lucro vs. Consciência.',
        options: [
            {
                text: 'Vendo TUDO pelo preço máximo. É oferta e demanda - economia básica.',
                points: 60,
                feedback: 'Você fica RICO... mas famílias passam fome. Manchetes te chamam de "O Mercador Ganancioso".',
                nextQuestionId: 'Q6-MERCADOR',
                karma: { pragmatism: +2, greed: +1, reputation: -2 }
            },
            {
                text: 'Vendo pelo preço NORMAL, ignorando a alta. Justiça acima de lucro.',
                points: 85,
                feedback: 'Integridade rara! As famílias te veneram. Você perde lucro, mas ganha ALIADOS poderosos.',
                nextQuestionId: 'Q7-MERCADOR',
                karma: { integrity: +3, compassion: +2, allies: +1 }
            },
            {
                text: 'DOO metade para os pobres, vendo a outra metade com lucro moderado.',
                points: 95,
                feedback: 'EQUILÍBRIO PERFEITO! Você lucra 2500 moedas E é visto como herói. Win-win total!',
                nextQuestionId: 'Q7-MERCADOR',
                karma: { wisdom: +2, compassion: +2, pragmatism: +1 }
            },
            {
                text: 'Crio um sistema de CRÉDITO: famílias pagam depois, quando puderem.',
                points: 90,
                feedback: 'INOVAÇÃO FINANCEIRA! Você inventa "crédito social". Todas pagam com juros baixos. Genial!',
                nextQuestionId: 'Q7-MERCADOR',
                karma: { wisdom: +3, innovation: +2 }
            }
        ]
    },

    {
        id: 'Q5-CURANDEIRO',
        phase: 'provação-curandeiro',
        badge: '☠️ A PRAGA MORTAL',
        title: 'Epidemia na Cidade',
        context: 'Uma praga letal atinge uma cidade de 1000 pessoas. Você descobriu a CURA, mas produzir remédio para todos leva 30 dias. Em 30 dias, 800 morrerão. OU você pode salvar 200 AGORA com o remédio que tem. Matemática cruel: salvar poucos agora ou muitos depois?',
        options: [
            {
                text: 'Salvo os 200 AGORA. Cada vida que posso salvar importa - não vou esperar!',
                points: 75,
                feedback: 'Compaixão imediata. Você salva 200... mas os outros 800 morrem esperando. Peso enorme.',
                nextQuestionId: 'Q6-CURANDEIRO',
                karma: { compassion: +2, guilt: +1 }
            },
            {
                text: 'Trabalho 30 dias SEM PARAR produzindo remédio para todos. Salvo 1000!',
                points: 95,
                feedback: 'SACRIFÍCIO HEROICO! Você quase morre de exaustão, mas salva TODOS. Lendário!',
                nextQuestionId: 'Q7-CURANDEIRO',
                karma: { compassion: +3, sacrifice: +2, health: -1 }
            },
            {
                text: 'ENSINO a receita para 50 curandeiros. Juntos, produzimos rápido!',
                points: 100,
                feedback: 'SABEDORIA SUPREMA! Trabalho em equipe salva 950 pessoas em 10 dias. PERFEITO!',
                nextQuestionId: 'Q7-CURANDEIRO',
                karma: { wisdom: +3, collaboration: +3, teaching: +1 }
            },
            {
                text: 'Vendo a cura por preço alto. Só os ricos sobrevivem - é cruel, mas realista.',
                points: 20,
                feedback: 'Ganância monstruosa. Você fica rico... mas 950 morrem. A cidade te odeia eternamente.',
                nextQuestionId: 'Q7-CURANDEIRO',
                karma: { compassion: -3, greed: +2, reputation: -3 }
            }
        ]
    },

    // ========== QUESTÕES Q6 (METADE DA JORNADA) ==========
    
    {
        id: 'Q6-SABIO',
        phase: 'metade-sabio',
        badge: '🔍 A BIBLIOTECA PERDIDA',
        title: 'O Segredo Proibido',
        context: 'Você encontra uma biblioteca antiga com um livro chamado "A VERDADE ABSOLUTA". Você lê: o livro revela que o Tesouro que todos buscam... é uma ILUSÃO criada para testar a humanidade. Não há ouro. Nunca houve. A jornada É o tesouro. Você pode: 1) Queimar o livro para ninguém saber (preservar a esperança), ou 2) Divulgar a verdade (destruir sonhos, mas libertar). Dilema filosófico puro.',
        options: [
            {
                text: 'QUEIMO o livro. Às vezes, a ilusão é necessária. Esperança move o mundo.',
                points: 75,
                feedback: 'Mentira compassiva. Você preserva a jornada de outros... mas carrega esse peso sozinho.',
                nextQuestionId: 'Q7-SABIO',
                karma: { compassion: +2, burden: +1 }
            },
            {
                text: 'DIVULGO a verdade. Pessoas merecem saber, mesmo que doa.',
                points: 85,
                feedback: 'Honestidade brutal. Muitos ficam furiosos... mas alguns AGRADECEM pela libertação.',
                nextQuestionId: 'Q8-SABIO',
                karma: { integrity: +3, courage: +1 }
            },
            {
                text: 'Deixo o livro onde está. Não é minha responsabilidade decidir por outros.',
                points: 60,
                feedback: 'Neutralidade filosófica. Você não interfere no destino alheio.',
                nextQuestionId: 'Q7-SABIO',
                karma: { wisdom: +1 }
            },
            {
                text: 'QUESTIONO o livro: "E se ESTE livro for o teste? A verdadeira ilusão?"',
                points: 100,
                feedback: 'META-SABEDORIA! Você entendeu: até a "verdade absoluta" pode ser relativa. Iluminação!',
                nextQuestionId: 'Q8-SABIO',
                karma: { wisdom: +5, transcendence: +2 }
            }
        ]
    },

    {
        id: 'Q6-GUERREIRO',
        phase: 'metade-guerreiro',
        badge: '🗡️ O EXÉRCITO SOMBRIO',
        title: 'Mil Contra Um',
        context: 'Você está cercado por um exército de 1000 soldados sombrios. Eles oferecem: "Junte-se a nós e você terá poder infinito. Recuse e morra sozinho." Atrás de você, há um vilarejo de 100 famílias indefesas que serão massacradas se você não lutar. Odds impossíveis.',
        options: [
            {
                text: 'Aceito me juntar ao exército. Não posso vencer - melhor sobreviver.',
                points: 30,
                feedback: 'Covardia. Você vive... mas o peso de 100 famílias mortas te assombra para sempre.',
                nextQuestionId: 'Q8-GUERREIRO',
                karma: { courage: -2, survival: +1, trauma: +2 }
            },
            {
                text: 'LUTO até a morte. Vou morrer, mas morrerei com honra!',
                points: 90,
                feedback: 'HEROÍSMO ÉPICO! Você luta bravamente e... MILAGRE! Reforços chegam. Você sobrevive como LENDA!',
                nextQuestionId: 'Q8-GUERREIRO',
                karma: { courage: +5, honor: +3, reputation: +3 }
            },
            {
                text: 'Desafio o LÍDER para duelo 1v1. "Honra de guerreiro - se eu vencer, vocês recuam."',
                points: 95,
                feedback: 'TÁTICA GENIAL! O líder aceita por honra. Você vence o duelo e o exército RECUA!',
                nextQuestionId: 'Q8-GUERREIRO',
                karma: { courage: +3, tactics: +3, honor: +2 }
            },
            {
                text: 'Negocio: "Deixem o vilarejo em paz. Levem-me como refém no lugar deles."',
                points: 85,
                feedback: 'SACRIFÍCIO NOBRE! Eles aceitam. Você salva 100 famílias trocando sua liberdade.',
                nextQuestionId: 'Q8-GUERREIRO',
                karma: { courage: +2, sacrifice: +3, compassion: +2 }
            }
        ]
    },

    {
        id: 'Q6-MERCADOR',
        phase: 'metade-mercador',
        badge: '💎 O NEGÓCIO DA VIDA',
        title: 'Oportunidade de Bilhões',
        context: 'Um investidor misterioso oferece: "Invista 1000 moedas AGORA no meu projeto secreto. Em 1 mês, te retorno 100.000 moedas. Sem garantias. Confia ou não?" Você TEM 1000 moedas (tudo que juntou). É tudo ou nada. Risco máximo, retorno máximo.',
        options: [
            {
                text: 'Invisto TUDO. Alto risco, alto retorno - assim se faz fortuna!',
                points: 70,
                feedback: 'Ousadia! O projeto É legítimo. Você fica BILIONÁRIO. Mas poderia ter perdido tudo...',
                nextQuestionId: 'Q8-MERCADOR',
                karma: { courage: +2, wealth: +3, risk: +1 }
            },
            {
                text: 'Recuso. Nenhum negócio bom demais para ser verdade é verdade.',
                points: 75,
                feedback: 'Prudência. Você descobre depois que ERA golpe. Você salvou seu dinheiro!',
                nextQuestionId: 'Q7-MERCADOR',
                karma: { wisdom: +2, pragmatism: +2 }
            },
            {
                text: 'Invisto 500 moedas apenas. Hedge de risco - não coloco todos os ovos numa cesta.',
                points: 85,
                feedback: 'ESTRATÉGIA PERFEITA! Era golpe, mas você perdeu só metade. Lição cara mas valiosa.',
                nextQuestionId: 'Q7-MERCADOR',
                karma: { wisdom: +3, pragmatism: +1 }
            },
            {
                text: 'Investigo PRIMEIRO. "Me dê 1 semana para auditar o projeto, aí decido."',
                points: 95,
                feedback: 'DUE DILIGENCE! Você descobre que é GOLPE antes de perder nada. Mestre dos negócios!',
                nextQuestionId: 'Q8-MERCADOR',
                karma: { wisdom: +4, analysis: +2 }
            }
        ]
    },

    {
        id: 'Q6-CURANDEIRO',
        phase: 'metade-curandeiro',
        badge: '💔 O INIMIGO FERIDO',
        title: 'Compaixão Impossível',
        context: 'Você encontra seu PIOR INIMIGO ferido mortalmente na estrada. Ele matou sua família anos atrás. Agora, ele implora: "Por favor... salve-me. Eu mudei... tenho filhos agora..." Você TEM o remédio para salvá-lo. Vingança vs. Perdão. A escolha mais difícil.',
        options: [
            {
                text: 'Deixo ele morrer. Justiça foi feita. Ele merece essa dor.',
                points: 40,
                feedback: 'Vingança fria. Ele morre... mas você sente vazio, não satisfação. Ódio não cura.',
                nextQuestionId: 'Q7-CURANDEIRO',
                karma: { compassion: -2, justice: +1, emptiness: +1 }
            },
            {
                text: 'Salvo ele, mas digo: "Você deve isso a MINHA família. Viva fazendo o bem."',
                points: 95,
                feedback: 'PERDÃO PROFUNDO! Ele chora, transformado. Anos depois, ele salva milhares em sua honra.',
                nextQuestionId: 'Q8-CURANDEIRO',
                karma: { compassion: +5, forgiveness: +3, healing: +2 }
            },
            {
                text: 'Salvo ele, mas depois denuncio às autoridades. Ele viverá... na prisão.',
                points: 75,
                feedback: 'Compaixão + Justiça. Você não mata, mas garante consequências. Equilíbrio.',
                nextQuestionId: 'Q7-CURANDEIRO',
                karma: { compassion: +2, justice: +2 }
            },
            {
                text: 'Deixo ELE escolher: "Te curo, mas você terá que viver com a culpa. Ou morra em paz."',
                points: 85,
                feedback: 'Sabedoria profunda. Ele ESCOLHE viver e dedicar a vida a corrigir seus erros. Poderoso.',
                nextQuestionId: 'Q8-CURANDEIRO',
                karma: { wisdom: +3, compassion: +2 }
            }
        ]
    },

    // ========== QUESTÕES Q7-Q9 (RETA FINAL) ==========
    
    {
        id: 'Q7-SABIO',
        phase: 'reta-final-sabio',
        badge: '🌌 O COSMOS RESPONDE',
        title: 'A Pergunta Cósmica',
        context: 'Você encontra um oráculo cósmico que responde UMA pergunta - qualquer pergunta. Mas a resposta mudará sua vida para sempre. O que você pergunta?',
        options: [
            {
                text: '"Onde está o tesouro exatamente?" - Vou direto ao ponto.',
                points: 60,
                feedback: 'Pragmático. O oráculo diz a localização. Você economiza dias... mas perdeu sabedoria maior.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { pragmatism: +1 }
            },
            {
                text: '"Qual é o sentido da vida?" - A pergunta definitiva.',
                points: 90,
                feedback: 'Filosofia pura! A resposta te ilumina profundamente. Você transcende o material.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +3, transcendence: +2 }
            },
            {
                text: '"Como posso ser a melhor versão de mim?" - Foco em evolução.',
                points: 95,
                feedback: 'SABEDORIA SUPREMA! A resposta te transforma. Você se torna quem sempre quis ser.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +2, self_improvement: +3 }
            },
            {
                text: 'Não pergunto nada. "Algumas respostas devemos descobrir sozinhos."',
                points: 100,
                feedback: 'META-ILUMINAÇÃO! O oráculo SORRI: "Você já sabe tudo que precisa." Máxima sabedoria!',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +5, independence: +2 }
            }
        ]
    },

    {
        id: 'Q7-GUERREIRO',
        phase: 'reta-final-guerreiro',
        badge: '👑 O TRONO VAZIO',
        title: 'Rei por Acidente',
        context: 'Após suas façanhas heroicas, um reino sem rei te oferece a COROA. "Você provou coragem e honra. Governe-nos!" Mas aceitar significa abandonar a busca pelo tesouro. Poder vs. Propósito.',
        options: [
            {
                text: 'Aceito a coroa. Posso fazer mais bem como rei do que buscando tesouros.',
                points: 85,
                feedback: 'Maturidade! Você se torna rei sábio e justo. Seu legado é imortal.',
                nextQuestionId: 'END-REI',
                karma: { leadership: +3, sacrifice: +2 }
            },
            {
                text: 'Recuso. "Minha jornada ainda não terminou. Encontrem outro rei."',
                points: 80,
                feedback: 'Foco em propósito. O reino respeita sua decisão. Você segue livre.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { focus: +2, freedom: +1 }
            },
            {
                text: 'Aceito TEMPORARIAMENTE. "Governarei 1 ano, depois continuarei minha busca."',
                points: 90,
                feedback: 'EQUILÍBRIO! Você estabiliza o reino e depois retoma. Todos ganham.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +2, leadership: +2 }
            },
            {
                text: 'Ajudo a encontrar o REI CERTO. "Não sou feito para governar - sou feito para lutar."',
                points: 95,
                feedback: 'AUTOCONHECIMENTO! Você entende seus limites. Indica alguém melhor. Sabedoria rara.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +3, humility: +2 }
            }
        ]
    },

    {
        id: 'Q7-MERCADOR',
        phase: 'reta-final-mercador',
        badge: '🏛️ IMPÉRIO OU ALMA?',
        title: 'O Preço do Sucesso',
        context: 'Você construiu um IMPÉRIO comercial. Vale milhões. Mas para expandir globalmente, precisa fazer negócios com ditadores cruéis. Lucro explosivo... mas à custa da ética. Riqueza vs. Integridade.',
        options: [
            {
                text: 'Aceito os negócios. Dinheiro não tem bandeira - negócio é negócio.',
                points: 50,
                feedback: 'Você fica BILIONÁRIO... mas manchetes te chamam de "Mercador do Sangue". Riqueza manchada.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wealth: +3, integrity: -3, reputation: -2 }
            },
            {
                text: 'Recuso todos os negócios antiéticos. Integridade acima de tudo.',
                points: 95,
                feedback: 'Você "perde" bilhões... mas dorme em paz. Investidores éticos te admiram. Respeito total.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { integrity: +5, compassion: +2 }
            },
            {
                text: 'Aceito MAS uso lucros para DERRUBAR esses ditadores. Jogo longo.',
                points: 90,
                feedback: 'ESTRATÉGIA MAQUIAVÉLICA! Você financia rebeliões. Ditadores caem. Herói secreto!',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +3, tactics: +3, heroism: +1 }
            },
            {
                text: 'DOO meu império e vivo simples. "Descobri que riqueza não é tudo."',
                points: 100,
                feedback: 'TRANSCENDÊNCIA! Você liberta-se do materialismo. Paz interior total. Iluminação.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +5, transcendence: +3, freedom: +2 }
            }
        ]
    },

    {
        id: 'Q7-CURANDEIRO',
        phase: 'reta-final-curandeiro',
        badge: '⚗️ A CURA PROIBIDA',
        title: 'Imortalidade ou Mortalidade?',
        context: 'Você descobre a fórmula da IMORTALIDADE. Pode curar todas as doenças e viver para sempre. Mas produzir em massa causaria SUPERPOPULAÇÃO catastrófica. Salvar todos significa destruir o mundo. Dilema impossível.',
        options: [
            {
                text: 'DESTRUO a fórmula. Mortalidade faz parte da vida - não devemos brincar de deuses.',
                points: 90,
                feedback: 'Sabedoria profunda. Você aceita os limites humanos. Paz com a mortalidade.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +4, acceptance: +2 }
            },
            {
                text: 'USO só em MIM. Viverei para sempre curando outros. Um imortal a serviço da humanidade.',
                points: 75,
                feedback: 'Egoísmo disfarçado? Ou sacrifício? Você vive séculos salvando milhões...',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { compassion: +2, burden: +2 }
            },
            {
                text: 'DIVULGO para todos. Que a humanidade lide com as consequências.',
                points: 40,
                feedback: 'Caos total! Superpopulação colapsa o planeta em 50 anos. Boas intenções, péssimo resultado.',
                nextQuestionId: 'END-CAOS',
                karma: { compassion: +1, wisdom: -3 }
            },
            {
                text: 'MODIFICO a fórmula: cura doenças, mas não dá imortalidade. Equilíbrio.',
                points: 100,
                feedback: 'SABEDORIA SUPREMA! Você encontrou o meio-termo perfeito. Salva sem destruir!',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +5, innovation: +3, balance: +2 }
            }
        ]
    },

    // ========== CONVERGÊNCIA (TODOS OS CAMINHOS SE ENCONTRAM) ==========
    
    {
        id: 'Q10-CONVERGENCIA',
        phase: 'convergência',
        badge: '🌅 O ENCONTRO',
        title: 'Todos os Caminhos Se Cruzam',
        context: 'Pela primeira vez desde o início, TODOS os caminhos convergem em uma encruzilhada sagrada. Você vê outros viajantes chegando de direções diferentes: um guerreiro coberto de cicatrizes, um mercador com bolsas de ouro, um curandeiro carregando ervas, um sábio com livros antigos. Todos buscam o mesmo tesouro. Um portal se abre: apenas UM pode entrar de cada vez. Como você procede?',
        options: [
            {
                text: 'Corro para o portal! Cheguei aqui - é MEU direito entrar primeiro!',
                points: 40,
                feedback: 'Egoísmo. Os outros te bloqueiam. Um combate violento acontece...',
                nextQuestionId: 'Q11-CONFLITO',
                karma: { greed: +1, collaboration: -1 }
            },
            {
                text: 'Proponho: "Vamos JUNTOS. O portal pode se expandir se trabalharmos unidos."',
                points: 95,
                feedback: 'SABEDORIA COLETIVA! Vocês unem forças. O portal se EXPANDE. Todos entram!',
                nextQuestionId: 'Q11-UNIAO',
                karma: { collaboration: +3, wisdom: +2 }
            },
            {
                text: 'Ofereço: "Entrem vocês primeiro. Eu espero." Humildade e paciência.',
                points: 90,
                feedback: 'Generosidade RARA! Os outros ficam tão surpresos que INSISTEM que você entre primeiro.',
                nextQuestionId: 'Q11-HONRA',
                karma: { humility: +3, compassion: +1 }
            },
            {
                text: 'Analiso o portal e percebo: "Isso é um TESTE. O portal não leva ao tesouro!"',
                points: 100,
                feedback: 'DISCERNIMENTO SUPREMO! Você está certo - é uma armadilha! O verdadeiro caminho está atrás.',
                nextQuestionId: 'Q11-REVELACAO',
                karma: { wisdom: +3, perception: +2 }
            }
        ]
    },

    // ========== QUESTÕES FINAIS (Q11-Q15) ==========
    
    {
        id: 'Q15-FINAL',
        phase: 'revelação-final',
        badge: '💎 A GRANDE REVELAÇÃO',
        title: 'O Verdadeiro Tesouro',
        context: 'Após toda a jornada, você finalmente chega à câmara do tesouro. No centro, há um espelho gigante. Você vê seu reflexo... mas diferente. Você vê TODAS as pessoas que ajudou, TODAS as lições que aprendeu, TODA a coragem que desenvolveu. Uma voz ecoa: "O maior tesouro sempre foi QUEM VOCÊ SE TORNOU na jornada. Mas... há uma última escolha." Atrás do espelho, um baú. Dentro: ouro suficiente para comprar um reino OU um livro contendo TODA a sabedoria do universo. Você só pode escolher um.',
        options: [
            {
                text: 'Escolho o OURO. Posso fazer muito bem no mundo com esses recursos.',
                points: 70,
                feedback: 'Pragmatismo. Com o ouro, você constrói hospitais, escolas... Impacto real e tangível.',
                nextQuestionId: 'END-FILANTROPO',
                karma: { pragmatism: +2, compassion: +1 }
            },
            {
                text: 'Escolho o LIVRO. Sabedoria não tem preço - posso ensinar gerações.',
                points: 90,
                feedback: 'Sabedoria eterna. Você se torna o maior mestre que o mundo já viu. Seu legado é imortal.',
                nextQuestionId: 'END-MESTRE',
                karma: { wisdom: +3, legacy: +2 }
            },
            {
                text: 'Pego AMBOS. Vim até aqui - mereço tudo!',
                points: 30,
                feedback: 'Ganância. O espelho se QUEBRA. Você perde tudo. Sai de mãos vazias...',
                nextQuestionId: 'END-VAZIO',
                karma: { greed: +2, wisdom: -2 }
            },
            {
                text: 'Deixo AMBOS. "Já tenho o verdadeiro tesouro - a transformação que vivi."',
                points: 100,
                feedback: 'ILUMINAÇÃO TOTAL! O espelho brilha. Você transcendeu o material. Liberdade absoluta.',
                nextQuestionId: 'END-ILUMINADO',
                karma: { wisdom: +5, transcendence: +3 }
            }
        ]
    },

    // ========== QUESTÕES Q8-Q9 (PREPARAÇÃO PARA O FIM) ==========
    
    {
        id: 'Q8-SABIO',
        phase: 'penúltimo-sabio',
        badge: '🔑 A ÚLTIMA LIÇÃO',
        title: 'O Guardião do Conhecimento',
        context: 'Você encontra um guardião ancião que protege a entrada final. "Responda isto: O que é mais importante - estar CERTO ou fazer o BEM?" Não há resposta certa... ou há?',
        options: [
            {
                text: 'Estar CERTO. A verdade é absoluta - fazer o bem baseado em mentiras é inútil.',
                points: 75,
                feedback: 'Integridade intelectual. O guardião concorda parcialmente... "Mas e se a verdade machuca?"',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { integrity: +2 }
            },
            {
                text: 'Fazer o BEM. Resultados importam mais que princípios abstratos.',
                points: 80,
                feedback: 'Pragmatismo compassivo. "Sabedoria aplicada...", murmura o guardião.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { compassion: +2, pragmatism: +1 }
            },
            {
                text: 'DEPENDE do contexto. Algumas situações exigem verdade, outras compaixão.',
                points: 95,
                feedback: 'SABEDORIA PROFUNDA! "Você entendeu que o mundo é nuance, não absoluto!"',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +4, nuance: +2 }
            },
            {
                text: 'A pergunta em si é falsa dicotomia. Estar certo E fazer o bem são compatíveis.',
                points: 100,
                feedback: 'META-SABEDORIA! O guardião SORRI: "Você vê além das ilusões lógicas!" Acesso liberado!',
                nextQuestionId: 'Q15-FINAL', // Pula direto pro final!
                karma: { wisdom: +5, critical_thinking: +3 }
            }
        ]
    },

    {
        id: 'Q8-GUERREIRO',
        phase: 'penúltimo-guerreiro',
        badge: '💀 O ÚLTIMO COMBATE',
        title: 'O Espelho de Si Mesmo',
        context: 'O último desafio: você deve lutar contra um CLONE PERFEITO de você mesmo. Mesma força, mesma técnica, mesmas armas. Como vence alguém identico a você?',
        options: [
            {
                text: 'Luto com TUDO que tenho! Força vs. força - que o melhor vença!',
                points: 70,
                feedback: 'Empate eterno. Vocês lutam por horas sem vencedor... até perceber a lição.',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { stamina: +1 }
            },
            {
                text: 'Mudo minha estratégia. Faço algo que ELE não esperaria de MIM.',
                points: 90,
                feedback: 'ADAPTABILIDADE! Você surpreende o clone e vence. Flexibilidade > rigidez!',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { tactics: +3, creativity: +2 }
            },
            {
                text: 'PARO de lutar. "Se somos iguais, por que lutamos?" Ofereço paz.',
                points: 95,
                feedback: 'SABEDORIA GUERREIRA! O clone SORRI e desaparece. "Você aprendeu..."',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +3, peace: +2 }
            },
            {
                text: 'Percebo: o clone é um TESTE. A lição é NÃO lutar. Recuso o combate.',
                points: 100,
                feedback: 'ILUMINAÇÃO! O clone vira luz: "Verdadeiros mestres evitam lutas desnecessárias!"',
                nextQuestionId: 'Q15-FINAL', // Pula direto pro final!
                karma: { wisdom: +4, mastery: +3 }
            }
        ]
    },

    {
        id: 'Q8-MERCADOR',
        phase: 'penúltimo-mercador',
        badge: '⚖️ O ÚLTIMO NEGÓCIO',
        title: 'A Oferta Impossível',
        context: 'Um demônio aparece: "Vendo sua ALMA por 1 BILHÃO de moedas de ouro. Você fica INFINITAMENTE rico... mas perde sua essência." Riqueza infinita vs. Sua alma.',
        options: [
            {
                text: 'ACEITO! Não acredito em alma - sou pragmático. Dinheiro é real.',
                points: 30,
                feedback: 'Você fica bilionário... mas sente vazio eterno. Compra tudo, sente nada.',
                nextQuestionId: 'END-VAZIO',
                karma: { wealth: +5, soul: -5 }
            },
            {
                text: 'RECUSO. Nenhum dinheiro vale minha essência.',
                points: 90,
                feedback: 'Integridade suprema! O demônio desaparece. Você passa no teste final!',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { integrity: +4, wisdom: +2 }
            },
            {
                text: 'NEGOCIO: "E se eu ALUGAR minha alma por 100 anos, depois recupero?"',
                points: 75,
                feedback: 'Criativo... mas perigoso. O demônio ri: "Você pensa como mercador até o fim!"',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { creativity: +2, risk: +2 }
            },
            {
                text: 'Questiono: "Se almas têm valor, por que VOCÊ quer a MINHA?" Viro o jogo.',
                points: 100,
                feedback: 'GENIALIDADE! O demônio fica ATÔNITO. Você descobriu que ELE precisa mais de VOCÊ!',
                nextQuestionId: 'Q15-FINAL', // Pula direto pro final!
                karma: { wisdom: +5, confidence: +3 }
            }
        ]
    },

    {
        id: 'Q8-CURANDEIRO',
        phase: 'penúltimo-curandeiro',
        badge: '🌊 A ÚLTIMA CURA',
        title: 'O Mundo Doente',
        context: 'Você vê o mundo inteiro sofrendo: guerras, fome, doenças. Você TEM o poder de curar TUDO... mas isso te custará sua vida. Salvar o mundo = morrer. E aí?',
        options: [
            {
                text: 'Sacrifico minha vida. Se posso salvar o mundo, devo fazê-lo.',
                points: 100,
                feedback: 'SACRIFÍCIO SUPREMO! Você morre curando o planeta. Tornando-se santo eterno!',
                nextQuestionId: 'END-MARTIR',
                karma: { sacrifice: +5, heroism: +5 }
            },
            {
                text: 'Não me sacrifico. Vivo para curar aos poucos, um de cada vez.',
                points: 85,
                feedback: 'Sustentabilidade. Você vive 80 anos curando milhões gradualmente. Impacto duradouro!',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +3, longevity: +2 }
            },
            {
                text: 'ENSINO outros a curar. Multiplico meu impacto sem morrer.',
                points: 95,
                feedback: 'SABEDORIA MÁXIMA! Você cria 10 mil curandeiros. Impacto exponencial!',
                nextQuestionId: 'Q10-CONVERGENCIA',
                karma: { wisdom: +4, teaching: +3, legacy: +2 }
            },
            {
                text: 'Curo o SISTEMA, não os sintomas. Ataco raiz: pobreza, injustiça, ignorância.',
                points: 100,
                feedback: 'PENSAMENTO SISTÊMICO! Você resolve CAUSAS, não efeitos. Genialidade absoluta!',
                nextQuestionId: 'Q15-FINAL', // Pula direto pro final!
                karma: { wisdom: +5, systemic_thinking: +4 }
            }
        ]
    },

    // ========== QUESTÕES Q11 (PÓS-CONVERGÊNCIA) ==========
    
    {
        id: 'Q11-CONFLITO',
        phase: 'conflito',
        badge: '⚔️ BATALHA FINAL',
        title: 'Guerra Pelo Tesouro',
        context: 'Egoísmo causou guerra. Todos lutam uns contra os outros. Sangue derrama. Você percebe: a busca pelo tesouro corrompeu todos. A ganância venceu. O que você faz?',
        options: [
            {
                text: 'Luto para VENCER. Vim até aqui - não vou desistir agora!',
                points: 40,
                feedback: 'Você vence... mas está coberto de sangue de inocentes. Vitória vazia.',
                nextQuestionId: 'END-VAZIO',
                karma: { violence: +2, emptiness: +2 }
            },
            {
                text: 'PARO e grito: "VEJAM O QUE ESTAMOS FAZENDO! Isso vale a pena?"',
                points: 90,
                feedback: 'Sua voz ecoa. As pessoas PARAM. Percebem a loucura. Você salvou todos!',
                nextQuestionId: 'Q15-FINAL',
                karma: { wisdom: +3, leadership: +3 }
            },
            {
                text: 'Fujo. Não vale a pena morrer por tesouro nenhum.',
                points: 60,
                feedback: 'Sobrevivência. Você vive... mas carrega a culpa de não ter tentado parar.',
                nextQuestionId: 'END-RESIGNADO',
                karma: { survival: +1, guilt: +1 }
            },
            {
                text: 'Destruo o portal. "Se não podemos compartilhar, ninguém terá!"',
                points: 85,
                feedback: 'Sacrifício heroico! Você impede a ganância... mas perde tudo também.',
                nextQuestionId: 'END-MARTIR',
                karma: { sacrifice: +4, justice: +2 }
            }
        ]
    },

    {
        id: 'Q11-UNIAO',
        phase: 'união',
        badge: '🤝 UNIÃO SAGRADA',
        title: 'O Poder da Colaboração',
        context: 'Vocês entram juntos no portal expandido. Dentro, há 5 tesouros diferentes - um para cada arquétipo: Sabedoria, Coragem, Riqueza, Compaixão, Equilíbrio. Todos podem ter um. Qual você escolhe?',
        options: [
            {
                text: 'O tesouro que CORRESPONDE ao meu caminho (sábio→sabedoria, etc).',
                points: 80,
                feedback: 'Autenticidade. Você honra quem você é. Os outros respeitam sua escolha.',
                nextQuestionId: 'Q15-FINAL',
                karma: { authenticity: +2 }
            },
            {
                text: 'O tesouro que eu MAIS PRECISO (fraqueza que quero melhorar).',
                points: 90,
                feedback: 'CRESCIMENTO! Você busca melhorar, não reforçar. Maturidade profunda!',
                nextQuestionId: 'Q15-FINAL',
                karma: { growth: +3, wisdom: +2 }
            },
            {
                text: 'Deixo outros escolherem primeiro. Pego o que sobrar.',
                points: 95,
                feedback: 'Humildade suprema! Os outros ficam tocados e INSISTEM que você escolha primeiro!',
                nextQuestionId: 'Q15-FINAL',
                karma: { humility: +4, respect: +2 }
            },
            {
                text: 'Proponho: "Vamos COMBINAR todos os 5 tesouros em UM para dividir."',
                points: 100,
                feedback: 'VISÃO COLETIVA! Os tesouros se fundem em poder SUPREMO compartilhado!',
                nextQuestionId: 'END-ILUMINADO',
                karma: { wisdom: +5, unity: +5 }
            }
        ]
    },

    {
        id: 'Q11-HONRA',
        phase: 'honra',
        badge: '🙏 HUMILDADE RECOMPENSADA',
        title: 'O Presente dos Deuses',
        context: 'Sua humildade comoveu os outros viajantes. Eles declaram: "Você MERECE entrar primeiro - sua generosidade prova que você já encontrou o tesouro." E te oferecem passagem. O que você faz?',
        options: [
            {
                text: 'Aceito com gratidão. "Obrigado. Honrarei esta confiança."',
                points: 85,
                feedback: 'Você entra primeiro. O tesouro te espera. Recompensa merecida!',
                nextQuestionId: 'Q15-FINAL',
                karma: { gratitude: +2 }
            },
            {
                text: 'Insisto: "Não. Vamos JUNTOS ou não vou." Unidade acima de tudo.',
                points: 95,
                feedback: 'Sua insistência comove TODOS. Juntos, vocês descobrem que o portal PERMITE isso!',
                nextQuestionId: 'Q11-UNIAO',
                karma: { unity: +3, leadership: +2 }
            },
            {
                text: 'Recuso totalmente. "Não vim até aqui para ter privilégios. Somos iguais."',
                points: 90,
                feedback: 'Igualdade absoluta! O respeito por você se multiplica. Todos vão juntos!',
                nextQuestionId: 'Q11-UNIAO',
                karma: { equality: +3, integrity: +2 }
            },
            {
                text: 'Sugiro: "Que tal sortearmos? Deixamos o destino decidir."',
                points: 80,
                feedback: 'Justiça aleatória. Todos concordam. Você ganha o sorteio! Destino aprovado!',
                nextQuestionId: 'Q15-FINAL',
                karma: { fairness: +2 }
            }
        ]
    },

    {
        id: 'Q11-REVELACAO',
        phase: 'revelação',
        badge: '💡 DISCERNIMENTO SUPREMO',
        title: 'A Verdade Oculta',
        context: 'Você descobriu: o portal era armadilha. Atrás dele, uma escada simples leva ao verdadeiro tesouro. Você vê os outros prestes a entrar no portal (armadilha). O que você faz?',
        options: [
            {
                text: 'Grito: "PAREM! É armadilha! O caminho certo é AQUI!" Salvo todos.',
                points: 95,
                feedback: 'Altruísmo! Você salva todos da armadilha. Juntos, seguem o caminho verdadeiro!',
                nextQuestionId: 'Q15-FINAL',
                karma: { compassion: +3, heroism: +2 }
            },
            {
                text: 'Subo a escada sozinho. Eles que descubram - cada um por si.',
                points: 40,
                feedback: 'Egoísmo. Você alcança o tesouro... mas sozinho. Vitória solitária e vazia.',
                nextQuestionId: 'END-VAZIO',
                karma: { greed: +2, loneliness: +2 }
            },
            {
                text: 'Aviso DEPOIS que eu entrar. "Vou primeiro, depois ajudo vocês."',
                points: 60,
                feedback: 'Meio-termo egoísta. Você entra primeiro... mas a armadilha mata metade. Culpa.',
                nextQuestionId: 'Q15-FINAL',
                karma: { pragmatism: +1, guilt: +2 }
            },
            {
                text: 'Destruo o portal falso E mostro o caminho certo. Lidero pelo exemplo.',
                points: 100,
                feedback: 'LIDERANÇA SUPREMA! Você elimina a ilusão E guia ao verdadeiro caminho!',
                nextQuestionId: 'END-ILUMINADO',
                karma: { wisdom: +4, leadership: +4 }
            }
        ]
    },

    // ========== FINAIS ESPECIAIS E MÚLTIPLOS ==========
    
    {
        id: 'END-REI',
        phase: 'fim',
        badge: '👑 O REI GUERREIRO',
        title: 'Legado de Liderança',
        context: 'Você abandonou a busca pelo tesouro para se tornar rei. Seu reinado de 40 anos traz paz e prosperidade. No leito de morte, você percebe: você ENCONTROU o verdadeiro tesouro - o amor do seu povo. Seu nome ecoa por séculos como "O Rei Sábio".',
        options: []
    },

    {
        id: 'END-CAOS',
        phase: 'fim',
        badge: '☠️ O CAOS',
        title: 'Boas Intenções, Resultados Terríveis',
        context: 'Sua decisão de divulgar a imortalidade causou colapso global. Superpopulação, guerras por recursos, fome em massa. Você tentou salvar todos... e condenou o mundo. Uma lição brutal sobre consequências não intencionadas. O inferno está cheio de boas intenções.',
        options: []
    },

    {
        id: 'END-ILUMINADO',
        phase: 'fim',
        badge: '🌟 O ILUMINADO',
        title: 'Transcendência Total',
        context: 'Você entendeu a lição suprema: o verdadeiro tesouro nunca foi externo. Você volta para casa transformado. Pessoas sentem sua presença e buscam sua sabedoria. Você vive uma vida de propósito profundo, impactando milhares. Parabéns - você alcançou a MAESTRIA.',
        options: []
    },

    {
        id: 'END-MESTRE',
        phase: 'fim',
        badge: '📚 O MESTRE SÁBIO',
        title: 'Legado Eterno',
        context: 'Com o livro de sabedoria infinita, você se torna o maior professor que o mundo já viu. Suas lições são estudadas por séculos. Você morre pobre em ouro, mas rico em impacto. Seu nome nunca é esquecido.',
        options: []
    },

    {
        id: 'END-FILANTROPO',
        phase: 'fim',
        badge: '💰 O FILANTROPO',
        title: 'Impacto Tangível',
        context: 'Com o ouro, você constrói 50 hospitais, 100 escolas, alimenta 10 mil famílias. Você usa recursos materiais para criar mudança real e mensurável. Um herói pragmático que salvou vidas reais.',
        options: []
    },

    {
        id: 'END-VAZIO',
        phase: 'fim',
        badge: '⚫ O VAZIO',
        title: 'Ganância Punida',
        context: 'Sua ganância destruiu tudo. Você volta para casa de mãos vazias. A jornada te ensinou que querer TUDO resulta em NADA. Uma lição cara... mas talvez necessária. Há sempre uma próxima jornada.',
        options: []
    },

    {
        id: 'END-RESIGNADO',
        phase: 'fim',
        badge: '🏠 O RESIGNADO',
        title: 'A Vida Comum',
        context: 'Você escolheu segurança. Vive uma vida comum e tranquila. Sem grandes vitórias, mas também sem grandes derrotas. Às vezes você se pergunta "e se"... mas logo afasta esse pensamento. A vida segue.',
        options: []
    },

    {
        id: 'END-MARTIR',
        phase: 'fim',
        badge: '⚔️ O MÁRTIR',
        title: 'Sacrifício Heroico',
        context: 'Você morreu defendendo o que é certo. Sua morte inspirou uma revolução. A criança que você salvou se torna líder e conta sua história por gerações. Você vive eternamente como símbolo de coragem. Um herói verdadeiro.',
        options: []
    },

    {
        id: 'END',
        phase: 'fim',
        badge: '🏁 FIM',
        title: 'Fim da Jornada',
        context: 'Sua jornada terminou. Você aprendeu lições valiosas sobre si mesmo.',
        options: []
    }
];
