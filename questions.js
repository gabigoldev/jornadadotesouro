// ===== SISTEMA HIERÁRQUICO REVOLUCIONÁRIO =====
// Cada ID conta a história completa: Q1-C-B-A = Guerreiro → Arco → Salvar Lobo → Parceria
// 
// LEGENDA DE CAMINHOS PRINCIPAIS:
// Q1-A = Cautela/Recusa (caminho da humildade forçada)
// Q1-B = Sabedoria (caminho do conhecimento)
// Q1-C = Coragem (caminho do guerreiro)
// Q1-D = Pragmatismo (caminho do mercador)

const journeyQuestions = [
    // ========================================
    // Q1 - INÍCIO UNIVERSAL
    // ========================================
    {
        id: 'Q1',
        phase: 'início',
        badge: '🗺️ O CHAMADO',
        title: 'O Velho Sábio e o Mapa Sangrento',
        context: 'Na praça da vila, um velho de olhos penetrantes te entrega um mapa manchado de sangue. "Este mapa leva ao Tesouro das Almas - muitos partiram, poucos retornaram, nenhum voltou o mesmo." Suas mãos tremem. O que você faz?',
        options: [
            {
                text: 'Recuso. Isso parece perigoso demais.',
                points: 20,
                feedback: 'Cautela... mas o destino tem outros planos.',
                nextQuestionId: 'Q1-A',
                karma: { caution: +1 }
            },
            {
                text: 'Pergunto: "Por que EU? O que você sabe sobre mim?"',
                points: 85,
                feedback: 'Sabedoria! Fazer perguntas é o primeiro passo.',
                nextQuestionId: 'Q1-B',
                karma: { wisdom: +2 }
            },
            {
                text: 'Aceito! "Quando começo? Há inimigos?"',
                points: 70,
                feedback: 'Coragem pura! Um guerreiro nato.',
                nextQuestionId: 'Q1-C',
                karma: { courage: +2 }
            },
            {
                text: 'Analiso: "Vale quanto? É divisível?"',
                points: 65,
                feedback: 'Pragmatismo. Mente de mercador.',
                nextQuestionId: 'Q1-D',
                karma: { pragmatism: +2 }
            }
        ]
    },

    // ========================================
    // Q1-A - CAMINHO DA CAUTELA (Recusou)
    // ========================================
    {
        id: 'Q1-A',
        phase: 'cautela-1',
        badge: '🏠 PRIMEIRA RECUSA',
        title: 'O Arrependimento Cresce',
        context: 'Você recusou o mapa. Três meses depois, você sonha com ele toda noite. Na praça, vê o velho dar um mapa para uma jovem guerreira. Ela parte animada. Você sente... inveja?',
        options: [
            {
                text: 'Corro e IMPLORO: "Me dê uma chance!"',
                points: 75,
                feedback: 'Humildade! Admitir erro é força.',
                nextQuestionId: 'Q1-A-A',
                karma: { humility: +2 }
            },
            {
                text: 'Aceito minha escolha e volto pra casa.',
                points: 30,
                feedback: 'Você tenta... mas o DESTINO não aceita.',
                nextQuestionId: 'Q1-A-B',
                karma: { resignation: +1 }
            },
            {
                text: 'Sigo a guerreira em SEGREDO.',
                points: 60,
                feedback: 'Orgulho misturado com coragem.',
                nextQuestionId: 'Q1-A-C',
                karma: { pride: +1, courage: +1 }
            },
            {
                text: 'Ofereço ser APRENDIZ do velho.',
                points: 90,
                feedback: 'Sabedoria profunda! Ele aceita surpreso.',
                nextQuestionId: 'Q1-A-D',
                karma: { wisdom: +3 }
            }
        ]
    },

    {
        id: 'Q1-A-A',
        phase: 'cautela-humilde',
        badge: '❤️ SEGUNDA CHANCE',
        title: 'O Caminho da Compaixão',
        context: 'O velho te dá uma segunda chance. "Você voltou humilde - isso é raro. Curandeiros entendem que ajudar outros é ajudar a si mesmo." Ele te dá ervas medicinais. Como você começa?',
        options: [
            {
                text: 'Uso as ervas para ajudar doentes da vila ANTES de partir.',
                points: 95,
                feedback: 'Generosidade! Os aldeões te abençoam.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { compassion: +3 }
            },
            {
                text: 'Guardo as ervas - posso precisar na jornada.',
                points: 60,
                feedback: 'Pragmatismo egoísta.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { selfishness: +1 }
            },
            {
                text: 'Vendo metade das ervas para comprar provisões.',
                points: 70,
                feedback: 'Estratégia comercial.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { pragmatism: +2 }
            },
            {
                text: 'Peço ao velho para me ENSINAR antes de partir.',
                points: 90,
                feedback: 'Paciência e sabedoria!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +2, patience: +1 }
            }
        ]
    },

    {
        id: 'Q1-A-B',
        phase: 'cautela-forçada',
        badge: '💰 DESTINO FORÇADO',
        title: 'A Dívida Impossível',
        context: 'Você tenta viver em paz... mas GUARDAS batem à sua porta. "Seu pai deixou uma DÍVIDA de 1000 moedas de ouro. 30 dias ou perde TUDO." Você NÃO tem escolha agora. Precisa do tesouro!',
        options: [
            {
                text: 'Procuro o velho: "PRECISO do mapa agora!"',
                points: 70,
                feedback: 'Desespero te motiva.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { desperation: +2 }
            },
            {
                text: 'Vendo TUDO e parto sozinho.',
                points: 75,
                feedback: 'Sacrifício total. Determinação.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { sacrifice: +2 }
            },
            {
                text: 'Busco a guerreira: "Parceria 50/50?"',
                points: 85,
                feedback: 'Inteligência! Ela aceita.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { collaboration: +2 }
            },
            {
                text: 'Pesquiso TUDO sobre o tesouro primeiro.',
                points: 80,
                feedback: 'Preparação estratégica.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { strategy: +2 }
            }
        ]
    },

    {
        id: 'Q1-A-C',
        phase: 'cautela-orgulhosa',
        badge: '🚶 CAMINHO SOLO',
        title: 'Seguindo nas Sombras',
        context: 'Você segue a guerreira em segredo, orgulhoso demais para pedir ajuda. No primeiro dia, você se perde completamente. Ela desapareceu. Você está SOZINHO e SEM MAPA. E agora?',
        options: [
            {
                text: 'Grito por ajuda! "Espera! Me perdi!"',
                points: 70,
                feedback: 'Humildade forçada. Ela volta e ri.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { humility: +2 }
            },
            {
                text: 'Sigo sozinho. Não preciso de ninguém!',
                points: 50,
                feedback: 'Orgulho perigoso.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { pride: +2, risk: +1 }
            },
            {
                text: 'Observo a natureza: rastros, estrelas, animais.',
                points: 90,
                feedback: 'Autodidata! Você aprende sozinho.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, independence: +2 }
            },
            {
                text: 'Volto e peço desculpas ao velho.',
                points: 85,
                feedback: 'Maturidade! Admitir erro é crescimento.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { humility: +3, wisdom: +1 }
            }
        ]
    },

    {
        id: 'Q1-A-D',
        phase: 'cautela-aprendiz',
        badge: '📖 O APRENDIZ',
        title: 'Treinamento com o Mestre',
        context: 'O velho aceita te treinar! "Você será meu último aprendiz. Posso te ensinar tudo em 3 ANOS... ou você parte em 1 mês com conhecimento parcial." Paciência vs. Urgência.',
        options: [
            {
                text: 'Fico 3 ANOS. Maestria exige tempo.',
                points: 100,
                feedback: 'PACIÊNCIA SUPREMA! Você se torna MESTRE.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +5, patience: +3 }
            },
            {
                text: 'Fico 1 ANO. Equilíbrio.',
                points: 85,
                feedback: 'Meio-termo sábio.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, balance: +1 }
            },
            {
                text: 'Parto em 1 MÊS. Não posso esperar!',
                points: 60,
                feedback: 'Impaciência. Você aprende 20%.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { impatience: +1 }
            },
            {
                text: 'Proponho: "Me ensine VIAJANDO juntos!"',
                points: 95,
                feedback: 'INOVAÇÃO! Teoria + Prática!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, innovation: +2 }
            }
        ]
    },

    // ========================================
    // Q1-B - CAMINHO DA SABEDORIA
    // ========================================
    {
        id: 'Q1-B',
        phase: 'sabedoria-1',
        badge: '📚 CAMINHO DO CONHECIMENTO',
        title: 'A Biblioteca Proibida',
        context: 'O velho te leva a uma biblioteca secreta. "Escolha UM livro como guia." Você vê: História, Natureza, Psicologia Humana, Magia Ancestral. Qual escolhe?',
        options: [
            {
                text: 'HISTÓRIA - "Aprendo com erros do passado."',
                points: 80,
                feedback: 'Padrões se revelam.',
                nextQuestionId: 'Q1-B-A',
                karma: { wisdom: +1, patterns: +1 }
            },
            {
                text: 'NATUREZA - "O mundo natural tem respostas."',
                points: 85,
                feedback: 'Sinais, pegadas, clima... aliados.',
                nextQuestionId: 'Q1-B-B',
                karma: { wisdom: +1, nature: +2 }
            },
            {
                text: 'PSICOLOGIA - "Entender pessoas é tudo."',
                points: 90,
                feedback: 'Insight sobre motivações humanas.',
                nextQuestionId: 'Q1-B-C',
                karma: { wisdom: +1, empathy: +3 }
            },
            {
                text: 'MAGIA - "Há forças além da razão."',
                points: 75,
                feedback: 'Poder... mas a que custo?',
                nextQuestionId: 'Q1-B-D',
                karma: { wisdom: +1, magic: +2 }
            }
        ]
    },

    {
        id: 'Q1-B-A',
        phase: 'sabedoria-historia',
        badge: '📜 LIÇÕES DO PASSADO',
        title: 'O Erro Repetido',
        context: 'Lendo sobre aventureiros anteriores, você vê um padrão: TODOS que foram gananciosos morreram. Os que buscaram sabedoria, prosperaram. Primeira lição aprendida.',
        options: [
            {
                text: 'Decido: vou buscar SABEDORIA, não ouro.',
                points: 100,
                feedback: 'ILUMINAÇÃO precoce! Você entendeu.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +4, enlightenment: +1 }
            },
            {
                text: 'Penso: "Eles erraram. EU sou diferente."',
                points: 50,
                feedback: 'Orgulho. A história se repete...',
                nextQuestionId: 'CONVERGENCIA',
                karma: { pride: +2, wisdom: -1 }
            },
            {
                text: 'Anoto tudo para evitar os mesmos erros.',
                points: 90,
                feedback: 'Sabedoria prática!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, preparation: +2 }
            },
            {
                text: 'Questiono: "E se esses relatos forem falsos?"',
                points: 85,
                feedback: 'Ceticismo saudável!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +2, critical_thinking: +2 }
            }
        ]
    },

    {
        id: 'Q1-B-B',
        phase: 'sabedoria-natureza',
        badge: '🌿 SINAIS DA TERRA',
        title: 'Lendo o Mundo',
        context: 'O livro te ensina: pegadas revelam intenções, clima prevê perigos, plantas curam ou matam. Você aprende a LER o mundo. Primeira aplicação: pegadas estranhas no caminho.',
        options: [
            {
                text: 'Sigo as pegadas. Curiosidade científica.',
                points: 80,
                feedback: 'Descoberta! Você acha uma caverna secreta.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { curiosity: +2, discovery: +1 }
            },
            {
                text: 'EVITO as pegadas. Pode ser armadilha.',
                points: 70,
                feedback: 'Cautela. Você evita perigo... e oportunidade.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { caution: +2 }
            },
            {
                text: 'Analiso PROFUNDAMENTE antes de decidir.',
                points: 95,
                feedback: 'SABEDORIA! Você identifica: é um lobo ferido.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, analysis: +2 }
            },
            {
                text: 'Marco e continuo - volto depois se precisar.',
                points: 75,
                feedback: 'Estratégia de longo prazo.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { strategy: +2 }
            }
        ]
    },

    {
        id: 'Q1-B-C',
        phase: 'sabedoria-psicologia',
        badge: '🧠 MESTRE DAS MENTES',
        title: 'O Teste do Guardião',
        context: 'Você encontra um guardião que bloqueia o caminho. Usando psicologia, você percebe: ele QUER ser convencido, mas precisa "perder" com dignidade. Como age?',
        options: [
            {
                text: 'Ataco! Força é a língua universal.',
                points: 40,
                feedback: 'Você IGNOROU a lição de psicologia!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { violence: +1, wisdom: -1 }
            },
            {
                text: 'Argumento lógico: "Deixe-me passar, por favor."',
                points: 70,
                feedback: 'Funciona parcialmente.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { logic: +1 }
            },
            {
                text: 'Ofereço: "Me teste. Se eu passar, deixe ir."',
                points: 95,
                feedback: 'PERFEITO! Ele aceita com dignidade.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { empathy: +3, wisdom: +2 }
            },
            {
                text: 'Elogio: "Você é o melhor guardião que vi."',
                points: 85,
                feedback: 'Manipulação positiva! Funciona.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { charisma: +2, manipulation: +1 }
            }
        ]
    },

    {
        id: 'Q1-B-D',
        phase: 'sabedoria-magia',
        badge: '🔮 FEITIÇOS ANCESTRAIS',
        title: 'O Primeiro Poder',
        context: 'O livro revela um feitiço: "Visão do Futuro" - veja 1 dia adiante, mas CUSTA 1 ano de vida por uso. Poder tem preço. Você usa?',
        options: [
            {
                text: 'USO uma vez. Preciso ver o caminho seguro.',
                points: 70,
                feedback: 'Você vê perigos... mas perdeu 1 ano de vida.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { magic: +1, lifespan: -1 }
            },
            {
                text: 'NUNCA uso. Vida vale mais que atalhos.',
                points: 90,
                feedback: 'Sabedoria! Verdadeiro poder vem de dentro.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, self_reliance: +2 }
            },
            {
                text: 'Estudo a LÓGICA do feitiço sem usar.',
                points: 100,
                feedback: 'GENIAL! Você decifra sem custo!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +4, analysis: +3 }
            },
            {
                text: 'USO várias vezes. Quero ver tudo!',
                points: 40,
                feedback: 'VÍCIO! Você vê 5 anos... mas perde 5 anos.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { magic: +2, lifespan: -5, addiction: +1 }
            }
        ]
    },

    // ========================================
    // Q1-C - CAMINHO DA CORAGEM (Guerreiro)
    // ========================================
    {
        id: 'Q1-C',
        phase: 'coragem-1',
        badge: '⚔️ CAMINHO DO GUERREIRO',
        title: 'A Escolha das Armas',
        context: 'O velho te leva ao arsenal. "Sua arma define sua luta." Você vê: Espada+Escudo (equilíbrio), Duas Adagas (velocidade), Machado Pesado (força), Arco Longo (tátic). Escolha.',
        options: [
            {
                text: 'Espada+Escudo - Honra e equilíbrio.',
                points: 75,
                feedback: 'Você pensa em sobreviver, não só vencer.',
                nextQuestionId: 'Q1-C-A',
                karma: { courage: +1, defense: +2 }
            },
            {
                text: 'Duas Adagas - Velocidade mata.',
                points: 80,
                feedback: 'Letal e estratégico.',
                nextQuestionId: 'Q1-C-B',
                karma: { courage: +1, agility: +3 }
            },
            {
                text: 'Machado Pesado - Um golpe certeiro.',
                points: 70,
                feedback: 'Força bruta. Confiança ou arrogância?',
                nextQuestionId: 'Q1-C-C',
                karma: { courage: +1, strength: +3 }
            },
            {
                text: 'Arco Longo - Inteligência tática.',
                points: 85,
                feedback: 'Mestres escolhem ONDE lutar.',
                nextQuestionId: 'Q1-C-D',
                karma: { courage: +1, tactics: +3 }
            }
        ]
    },

    {
        id: 'Q1-C-A',
        phase: 'coragem-espada',
        badge: '🛡️ CAVALEIRO HONRADO',
        title: 'O Primeiro Combate',
        context: 'Com espada e escudo, você encontra 3 bandidos atacando uma família. Você está em desvantagem numérica. Como luta?',
        options: [
            {
                text: 'ATACO de frente! Honra não recua!',
                points: 80,
                feedback: 'Coragem heroica! Você vence mas fica ferido.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { courage: +3, honor: +2, health: -1 }
            },
            {
                text: 'Uso o ESCUDO para proteger a família primeiro.',
                points: 95,
                feedback: 'HEROÍSMO! Defesa antes de ataque.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { courage: +2, protection: +3 }
            },
            {
                text: 'Táticas: ataco um de cada vez, usando terreno.',
                points: 90,
                feedback: 'Guerreiro inteligente!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { courage: +2, tactics: +3 }
            },
            {
                text: 'Grito para assustar: "GUARDAS ESTÃO VINDO!"',
                points: 70,
                feedback: 'Blefe funciona! Bandidos fogem.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { tactics: +2, deception: +1 }
            }
        ]
    },

    {
        id: 'Q1-C-B',
        phase: 'coragem-adagas',
        badge: '🗡️ ASSASSINO ÁGIL',
        title: 'Velocidade Mortal',
        context: 'Com duas adagas, você é RÁPIDO. Um oponente enorme e lento te desafia. "Lute comigo ou pague pedágio!" Como age?',
        options: [
            {
                text: 'Aceito! Velocidade vence força.',
                points: 90,
                feedback: 'DANÇA MORTAL! Você corta 100 vezes antes dele reagir.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { courage: +2, agility: +3 }
            },
            {
                text: 'Ataco as PERNAS primeiro. Imobilizo.',
                points: 95,
                feedback: 'TÁTICA BRUTAL! Eficiente e letal.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { tactics: +3, ruthlessness: +1 }
            },
            {
                text: 'Nego e contorno. Não vale a pena.',
                points: 60,
                feedback: 'Pragmatismo. Ele ri de você.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { pragmatism: +1, reputation: -1 }
            },
            {
                text: 'Desafio: "Se você ME acertar UMA vez, pago dobrado."',
                points: 85,
                feedback: 'CONFIANÇA! Ele não te acerta. Você vence.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { confidence: +3, showmanship: +1 }
            }
        ]
    },

    {
        id: 'Q1-C-C',
        phase: 'coragem-machado',
        badge: '🪓 BERSERKER BRUTAL',
        title: 'Força Absoluta',
        context: 'Seu machado pesa 20kg. Poucos conseguem erguer. Você encontra uma PORTA DE PEDRA bloqueando o caminho. Outros tentaram abrir com inteligência. Você tem força. E agora?',
        options: [
            {
                text: 'DESTRUO a porta com o machado!',
                points: 80,
                feedback: 'FORÇA BRUTA! A porta se estilhaça.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { strength: +3, direct_approach: +1 }
            },
            {
                text: 'Procuro mecanismo escondido primeiro.',
                points: 75,
                feedback: 'Guerreiro sábio. Você encontra alavanca.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +2, patience: +1 }
            },
            {
                text: 'Uso força para ARRANCAR a porta do batente.',
                points: 85,
                feedback: 'CRIATIVIDADE BRUTAL! Funciona!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { strength: +3, creativity: +1 }
            },
            {
                text: 'Grito: "HÁ ALGUÉM AÍ?" Talvez abram de dentro.',
                points: 70,
                feedback: 'Comunicação funciona! Alguém abre.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { charisma: +1, wisdom: +1 }
            }
        ]
    },

    {
        id: 'Q1-C-D',
        phase: 'coragem-arco',
        badge: '🏹 ARQUEIRO TÁTICO',
        title: 'O Lobo Ferido',
        context: 'Com arco, você vê de longe: um lobo ferido protegendo filhotes. Armadilha de caçadores o pegou. Você poderia matá-lo facilmente à distância ou...',
        options: [
            {
                text: 'Mato de longe. Rápido e sem risco.',
                points: 50,
                feedback: 'Eficiente mas... algo se apaga em você.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { efficiency: +1, compassion: -2 }
            },
            {
                text: 'Aproximo e LIBERTO da armadilha.',
                points: 95,
                feedback: 'RISCO ENORME! Mas o lobo ENTENDE. Aliado ganho!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { courage: +2, compassion: +3, animal_bond: +2 }
            },
            {
                text: 'Ignoro. Não é meu problema.',
                points: 40,
                feedback: 'Frieza. Você segue com olhos do lobo te seguindo.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { coldness: +1 }
            },
            {
                text: 'Observo de longe. Estudo comportamento.',
                points: 75,
                feedback: 'Tático! Você aprende padrões de animais.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { tactics: +2, observation: +2 }
            }
        ]
    },

    // ========================================
    // Q1-D - CAMINHO DO PRAGMATISMO (Mercador)
    // ========================================
    {
        id: 'Q1-D',
        phase: 'pragmatismo-1',
        badge: '💰 CAMINHO DO MERCADOR',
        title: 'O Investimento Inicial',
        context: 'O velho ri: "Mercadores entendem que dinheiro faz dinheiro." Ele te EMPRESTA 100 moedas. "O que você faz com isso para COMEÇAR rico?" 4 mercadores oferecem negócios...',
        options: [
            {
                text: 'Compro provisões em MASSA. Segurança.',
                points: 60,
                feedback: 'Você está preparado... mas sem capital futuro.',
                nextQuestionId: 'Q1-D-A',
                karma: { safety: +2 }
            },
            {
                text: 'Compro BARATO aqui, vendo CARO na próxima cidade.',
                points: 90,
                feedback: 'ARBITRAGEM! Verdadeiro empreendedor.',
                nextQuestionId: 'Q1-D-B',
                karma: { trade: +3, entrepreneurship: +2 }
            },
            {
                text: 'Guardo 50, gasto 50. Balanço prudente.',
                points: 75,
                feedback: 'Conservador. Pensamento de longo prazo.',
                nextQuestionId: 'Q1-D-C',
                karma: { prudence: +2, planning: +1 }
            },
            {
                text: 'EMPRESTO as 100 com JUROS! Renda passiva!',
                points: 85,
                feedback: 'INVESTIDOR! Ousado e inteligente.',
                nextQuestionId: 'Q1-D-D',
                karma: { investment: +3, boldness: +1 }
            }
        ]
    },

    {
        id: 'Q1-D-A',
        phase: 'pragmatismo-seguro',
        badge: '📦 ACUMULADOR',
        title: 'Excesso de Peso',
        context: 'Você comprou TUDO: comida para 6 meses, água, ferramentas, armas extras. Mochila pesa 40kg. Primeiro dia: você está EXAUSTO. Não consegue andar rápido. Como resolve?',
        options: [
            {
                text: 'Continuo assim. Preparação vale o sacrifício.',
                points: 60,
                feedback: 'Teimosia. Você anda lento mas seguro.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { stubbornness: +1, endurance: +1 }
            },
            {
                text: 'VENDO metade. Lucro + fico mais leve.',
                points: 85,
                feedback: 'Adaptação inteligente!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { adaptability: +2, profit: +1 }
            },
            {
                text: 'DOO para aldeões. Ganho gratidão.',
                points: 75,
                feedback: 'Generosidade estratégica. Eles te ajudarão depois.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { generosity: +2, social_capital: +1 }
            },
            {
                text: 'ESCONDO metade. Pego depois se precisar.',
                points: 70,
                feedback: 'Planejamento de contingência.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { planning: +2 }
            }
        ]
    },

    {
        id: 'Q1-D-B',
        phase: 'pragmatismo-comerciante',
        badge: '🤝 EMPREENDEDOR',
        title: 'A Primeira Negociação',
        context: 'Você comprou especiarias por 100 moedas. Na próxima cidade, valem 500! MAS um vendedor desesperado te oferece seu ESTOQUE INTEIRO por 400. Se você comprar, não pode vender suas especiarias. Dilema!',
        options: [
            {
                text: 'Vendo minhas especiarias. Lucro garantido agora.',
                points: 75,
                feedback: 'Lucro sólido de 400 moedas.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { pragmatism: +2 }
            },
            {
                text: 'Compro o estoque dele. MAIS mercadoria = MAIS lucro depois.',
                points: 85,
                feedback: 'AMBIÇÃO! Risco calculado alto.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { ambition: +2, risk: +2 }
            },
            {
                text: 'SOCIEDADE: junto meu estoque com o dele, vendemos tudo juntos.',
                points: 95,
                feedback: 'WIN-WIN! Parceria perfeita.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { collaboration: +3, networking: +2 }
            },
            {
                text: 'Negotio: compro parte do estoque dele com parte do meu.',
                points: 90,
                feedback: 'CRIATIVIDADE FINANCEIRA! Swap inteligente.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { creativity: +2, negotiation: +2 }
            }
        ]
    },

    {
        id: 'Q1-D-C',
        phase: 'pragmatismo-prudente',
        badge: '⚖️ PLANEJADOR',
        title: 'Decisão Equilibrada',
        context: 'Com 50 moedas guardadas e 50 em provisões, você encontra uma OPORTUNIDADE: investir em uma caravana (30 moedas) que pode TRIPLICAR em 1 mês. Mas você perde liquidez. Investe?',
        options: [
            {
                text: 'SIM! Invisto 30. Risco calculado.',
                points: 85,
                feedback: 'FUNCIONA! 30 viram 90 moedas.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { investment: +2, returns: +3 }
            },
            {
                text: 'NÃO. Liquidez é rei. Mantenho tudo disponível.',
                points: 70,
                feedback: 'Segurança. Você evita risco... e oportunidade.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { safety: +2, missed_opportunity: +1 }
            },
            {
                text: 'Invisto 15. Hedge - metade seguro, metade arriscado.',
                points: 80,
                feedback: 'BALANÇO PERFEITO! Retorno moderado, risco baixo.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { balance: +3, prudence: +2 }
            },
            {
                text: 'Investigo PRIMEIRO. Audito a caravana antes.',
                points: 95,
                feedback: 'DUE DILIGENCE! Você descobre que é golpe!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, analysis: +3, dodge: +1 }
            }
        ]
    },

    {
        id: 'Q1-D-D',
        phase: 'pragmatismo-investidor',
        badge: '💵 CAPITALISTA',
        title: 'Empréstimo com Juros',
        context: 'Você emprestou 100 moedas a 10% ao mês. Mês 1: você recebe 110 de volta. Mas o devedor pede: "Empresta mais 200? Prometo 20% de retorno!" Confia?',
        options: [
            {
                text: 'SIM! Dobro a aposta. Alto risco, alto retorno.',
                points: 75,
                feedback: 'ELE PAGA! Mas você quase perdeu tudo. Sorte.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { risk: +3, luck: +1 }
            },
            {
                text: 'NÃO. Uma vez foi bom, duas é ganância.',
                points: 85,
                feedback: 'SABEDORIA! Ele some com dinheiro de outros.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, caution: +2 }
            },
            {
                text: 'Empresto 100. Teste de confiança gradual.',
                points: 80,
                feedback: 'Meio-termo. Ele paga, você lucra moderadamente.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { balance: +2, trust: +1 }
            },
            {
                text: 'Exijo GARANTIA real. Negócio ou propriedade.',
                points: 95,
                feedback: 'MESTRE! Você empresta COM garantia. Zero risco!',
                nextQuestionId: 'CONVERGENCIA',
                karma: { wisdom: +3, security: +3 }
            }
        ]
    },

    // ========================================
    // CONVERGÊNCIA - Questões mais profundas
    // ========================================

    // ========== EXEMPLOS DE 3º NÍVEL (Demonstração) ==========
    
    {
        id: 'Q1-C-D-B',
        phase: 'coragem-arco-compassivo',
        badge: '🐺 GUARDIÃO DOS LOBOS',
        title: 'A Matilha Leal',
        context: 'VOCÊ SALVOU O LOBO! Ele e seus filhotes te seguem agora. Você é o ALFA. Durante um ataque de bandidos, os lobos PROTEGEM você ferozmente. Parceria inesperada!',
        options: [
            {
                text: 'Liberto os lobos. "Sigam livres!"',
                points: 85,
                feedback: 'Liberdade! Mas eles ESCOLHEM ficar por amor.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { freedom: +2, loyalty_earned: +3 }
            },
            {
                text: 'Treino os lobos para combate. Equipe letal!',
                points: 90,
                feedback: 'PACK TÁTICO! Você e matilha = imparáveis.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { tactics: +3, companionship: +2 }
            },
            {
                text: 'Ensino lobos a proteger aldeias fracas.',
                points: 100,
                feedback: 'HEROÍSMO! Vocês se tornam LENDA: "Guardiões do Bem".',
                nextQuestionId: 'CONVERGENCIA',
                karma: { heroism: +5, legacy: +3 }
            },
            {
                text: 'Uso lobos para caçar. Sobrevivência simbiótica.',
                points: 75,
                feedback: 'Pragmático. Harmonia com natureza.',
                nextQuestionId: 'CONVERGENCIA',
                karma: { survival: +2, nature: +2 }
            }
        ]
    },

    // ========================================
    // CONVERGÊNCIA - TODOS OS CAMINHOS SE ENCONTRAM
    // ========================================
    {
        id: 'CONVERGENCIA',
        phase: 'convergência',
        badge: '🌅 O ENCONTRO',
        title: 'Todos os Caminhos Se Cruzam',
        context: 'Após sua jornada única, você chega a uma encruzilhada sagrada. Outros viajantes aparecem de diferentes direções. Cada um trilhou um caminho diferente. Um portal se abre: "Apenas quem merece passa." Como você procede?',
        options: [
            {
                text: 'Corro para o portal! Cheguei aqui primeiro!',
                points: 40,
                feedback: 'Egoísmo. Combate violento acontece...',
                nextQuestionId: 'FINAL-CONFLITO',
                karma: { selfishness: +2 }
            },
            {
                text: 'Proponho: "Vamos JUNTOS!"',
                points: 95,
                feedback: 'SABEDORIA COLETIVA! Portal se EXPANDE!',
                nextQuestionId: 'FINAL-UNIAO',
                karma: { collaboration: +4, wisdom: +3 }
            },
            {
                text: 'Ofereço: "Entrem vocês primeiro."',
                points: 90,
                feedback: 'HUMILDADE! Todos INSISTEM que você entre primeiro.',
                nextQuestionId: 'FINAL-HONRA',
                karma: { humility: +4 }
            },
            {
                text: 'Analiso: "Isso é TESTE. Portal é armadilha!"',
                points: 100,
                feedback: 'DISCERNIMENTO! Você está CERTO!',
                nextQuestionId: 'FINAL-REVELACAO',
                karma: { wisdom: +5, perception: +3 }
            }
        ]
    },

    // ========================================
    // FINAIS MÚLTIPLOS
    // ========================================
    {
        id: 'FINAL-UNIAO',
        phase: 'final-união',
        badge: '🤝 UNIÃO SAGRADA',
        title: 'O Poder da Colaboração',
        context: 'Vocês entram JUNTOS. Dentro, 5 tesouros aparecem: Sabedoria, Coragem, Riqueza, Compaixão, Equilíbrio. Todos podem escolher. Qual você pega?',
        options: [
            {
                text: 'O tesouro que CORRESPONDE ao meu caminho.',
                points: 80,
                feedback: 'Autenticidade! Você honra quem você é.',
                nextQuestionId: 'END-ILUMINADO',
                karma: { authenticity: +3 }
            },
            {
                text: 'O que EU MAIS PRECISO (fraqueza).',
                points: 90,
                feedback: 'CRESCIMENTO! Você busca melhorar.',
                nextQuestionId: 'END-ILUMINADO',
                karma: { growth: +4 }
            },
            {
                text: 'Deixo outros escolherem primeiro.',
                points: 95,
                feedback: 'HUMILDADE! Todos INSISTEM que você escolha primeiro!',
                nextQuestionId: 'END-ILUMINADO',
                karma: { humility: +5 }
            },
            {
                text: 'Proponho: "Combinamos TODOS os 5!"',
                points: 100,
                feedback: 'VISÃO SUPREMA! Os tesouros se FUNDEM!',
                nextQuestionId: 'END-TRANSCENDENTE',
                karma: { wisdom: +5, unity: +5 }
            }
        ]
    },

    {
        id: 'FINAL-REVELACAO',
        phase: 'final-revelação',
        badge: '💡 A VERDADE',
        title: 'O Verdadeiro Tesouro',
        context: 'Você descobriu: o portal era armadilha! O verdadeiro caminho está atrás - uma escada simples. Os outros quase caem na armadilha. Você grita para salvá-los?',
        options: [
            {
                text: 'GRITO: "PAREM! É armadilha!"',
                points: 95,
                feedback: 'HEROÍSMO! Você salva todos.',
                nextQuestionId: 'END-ILUMINADO',
                karma: { heroism: +4 }
            },
            {
                text: 'Subo sozinho. Cada um por si.',
                points: 40,
                feedback: 'Egoísmo. Vitória vazia e solitária.',
                nextQuestionId: 'END-VAZIO',
                karma: { selfishness: +3, loneliness: +2 }
            },
            {
                text: 'Destruo portal E mostro caminho certo.',
                points: 100,
                feedback: 'LIDERANÇA SUPREMA! Elimina ilusão!',
                nextQuestionId: 'END-TRANSCENDENTE',
                karma: { leadership: +5, wisdom: +5 }
            },
            {
                text: 'Aviso depois que entrar primeiro.',
                points: 60,
                feedback: 'Meio-termo egoísta. Metade morre. Culpa.',
                nextQuestionId: 'END-CULPA',
                karma: { guilt: +3 }
            }
        ]
    },

    {
        id: 'FINAL-CONFLITO',
        phase: 'final-conflito',
        badge: '⚔️ BATALHA FINAL',
        title: 'Guerra Pelo Tesouro',
        context: 'Egoísmo causou GUERRA. Todos lutam. Sangue derrama. Você vê: ganância corrompeu todos. O que faz?',
        options: [
            {
                text: 'Luto para VENCER! Vim até aqui!',
                points: 40,
                feedback: 'Você vence... coberto de sangue.',
                nextQuestionId: 'END-VAZIO',
                karma: { violence: +3 }
            },
            {
                text: 'PARO e grito: "VEJAM O QUE SOMOS!"',
                points: 90,
                feedback: 'Sua voz ecoa. Todos PARAM. Você salvou todos!',
                nextQuestionId: 'END-ILUMINADO',
                karma: { wisdom: +4, leadership: +3 }
            },
            {
                text: 'Fujo. Não vale a pena.',
                points: 60,
                feedback: 'Sobrevivência. Culpa te segue.',
                nextQuestionId: 'END-RESIGNADO',
                karma: { guilt: +2 }
            },
            {
                text: 'Destruo portal: "Se não podemos compartilhar, ninguém terá!"',
                points: 85,
                feedback: 'Sacrifício heroico! Justiça.',
                nextQuestionId: 'END-MARTIR',
                karma: { sacrifice: +5 }
            }
        ]
    },

    {
        id: 'FINAL-HONRA',
        phase: 'final-honra',
        badge: '🙏 HUMILDADE RECOMPENSADA',
        title: 'A Câmara Final',
        context: 'Sua humildade comoveu todos. Você entra primeiro por vontade coletiva. Dentro: um espelho gigante mostrando TODAS as suas escolhas. Uma voz: "O tesouro é QUEM VOCÊ SE TORNOU." Atrás do espelho: um baú com ouro OU livro de sabedoria infinita. Escolha.',
        options: [
            {
                text: 'Escolho OURO. Farei bem com recursos.',
                points: 70,
                feedback: 'Pragmatismo. Você constrói hospitais, escolas...',
                nextQuestionId: 'END-FILANTROPO',
                karma: { pragmatism: +2, impact: +3 }
            },
            {
                text: 'Escolho LIVRO. Sabedoria é imortal.',
                points: 90,
                feedback: 'Você se torna o maior mestre da história.',
                nextQuestionId: 'END-MESTRE',
                karma: { wisdom: +5, legacy: +4 }
            },
            {
                text: 'Pego AMBOS. Mereço tudo!',
                points: 30,
                feedback: 'Ganância. O espelho se quebra. Você perde tudo.',
                nextQuestionId: 'END-VAZIO',
                karma: { greed: +3, loss: +2 }
            },
            {
                text: 'Deixo AMBOS. "Já tenho o tesouro."',
                points: 100,
                feedback: 'TRANSCENDÊNCIA TOTAL! Iluminação absoluta!',
                nextQuestionId: 'END-TRANSCENDENTE',
                karma: { transcendence: +5, enlightenment: +5 }
            }
        ]
    },

    // ========================================
    // FINAIS (ENDs)
    // ========================================
    {
        id: 'END-TRANSCENDENTE',
        phase: 'fim',
        badge: '✨ O TRANSCENDENTE',
        title: 'Além do Material',
        context: 'Você transcendeu completamente o material. Não precisa de ouro nem livros - você SE TORNOU sabedoria viva. Você volta transformado, irradiando luz. Pessoas buscam você sem entender por quê. Você impacta milhões apenas EXISTINDO. O nível mais alto de consciência humana alcançado.',
        options: []
    },

    {
        id: 'END-ILUMINADO',
        phase: 'fim',
        badge: '🌟 O ILUMINADO',
        title: 'Sabedoria Conquistada',
        context: 'Você entendeu: o verdadeiro tesouro era a jornada. Você volta transformado, sábio, compassivo, corajoso. Pessoas sentem sua presença. Você vive propósito profundo, impactando milhares. Maestria alcançada.',
        options: []
    },

    {
        id: 'END-MESTRE',
        phase: 'fim',
        badge: '📚 O MESTRE ETERNO',
        title: 'Legado Imortal',
        context: 'Com o livro de sabedoria infinita, você se torna o maior professor que o mundo viu. Suas lições ecoam por séculos. Você morre pobre em ouro, infinitamente rico em impacto. Nome nunca esquecido.',
        options: []
    },

    {
        id: 'END-FILANTROPO',
        phase: 'fim',
        badge: '💰 O FILANTROPO',
        title: 'Impacto Tangível',
        context: 'Com o ouro, você constrói 50 hospitais, 100 escolas, alimenta 10 mil famílias. Recursos materiais transformados em mudança REAL e mensurável. Herói pragmático que salvou vidas concretas.',
        options: []
    },

    {
        id: 'END-VAZIO',
        phase: 'fim',
        badge: '⚫ O VAZIO',
        title: 'Ganância Punida',
        context: 'Ganância destruiu tudo. Você volta de mãos vazias. A jornada ensinou: querer TUDO resulta em NADA. Lição cara... mas necessária. Há sempre uma próxima jornada - se você aprender.',
        options: []
    },

    {
        id: 'END-MARTIR',
        phase: 'fim',
        badge: '⚔️ O MÁRTIR',
        title: 'Sacrifício Heroico',
        context: 'Você morreu defendendo o certo. Sua morte inspirou revolução. Gerações contam sua história como símbolo de coragem. Você vive eternamente na memória coletiva. Herói verdadeiro.',
        options: []
    },

    {
        id: 'END-RESIGNADO',
        phase: 'fim',
        badge: '🏠 O RESIGNADO',
        title: 'Vida Comum',
        context: 'Você voltou para vida comum. Sem grandes vitórias, sem grandes derrotas. Às vezes pergunta "e se"... mas logo afasta o pensamento. A vida segue. Talvez na próxima encarnação você tenha mais coragem.',
        options: []
    },

    {
        id: 'END-CULPA',
        phase: 'fim',
        badge: '💔 O PESO DA CULPA',
        title: 'Decisões e Consequências',
        context: 'Suas escolhas egoístas causaram mortes. Você alcançou o tesouro... mas a culpa te assombra. Toda noite você vê os rostos daqueles que você poderia ter salvado. Riqueza não compra paz interior. Lição brutal aprendida.',
        options: []
    },

    {
        id: 'END',
        phase: 'fim',
        badge: '🏁 FIM',
        title: 'Fim da Jornada',
        context: 'Sua jornada terminou. Você aprendeu sobre si mesmo.',
        options: []
    }
];
