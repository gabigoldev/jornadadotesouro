// ===== SISTEMA DE JORNADA RAMIFICADA =====
// Cada opção pode levar a diferentes próximas questões (nextQuestionId)
// Múltiplos caminhos narrativos baseados nas escolhas!

const journeyQuestions = [
    // ========== QUESTÃO INICIAL ==========
    {
        id: 'Q1',
        phase: 'início',
        badge: '🗺️ INÍCIO DA JORNADA',
        title: 'O Velho Sábio e o Mapa',
        context: 'Na praça da vila, um velho de barba branca te entrega um mapa amarelado. "Este mapa leva ao maior tesouro do mundo", ele diz. "Mas a jornada é perigosa e poucos retornam." O que você faz?',
        options: [{
                text: 'Recuso educadamente e volto para casa. É perigoso demais.',
                points: 15,
                feedback: 'Você escolheu a segurança... mas será que a aventura acabou mesmo?',
                nextQuestionId: 'Q1A' // CAMINHO ALTERNATIVO - Volta pra casa!
            },
            {
                text: 'Peço mais informações sobre o tesouro antes de decidir.',
                points: 60,
                feedback: 'Sabedoria vem com perguntas. Bom começo!',
                nextQuestionId: 'Q2' // CAMINHO PRINCIPAL
            },
            {
                text: 'Aceito imediatamente e começo a jornada sem pensar duas vezes.',
                points: 40,
                feedback: 'Coragem é importante, mas cautela também.',
                nextQuestionId: 'Q2' // CAMINHO PRINCIPAL
            },
            {
                text: 'Agradeço pelo mapa e pergunto se posso ajudá-lo em troca de mais conhecimento.',
                points: 95,
                feedback: 'Generosidade e sabedoria! Você entende o valor do conhecimento.',
                nextQuestionId: 'Q2' // CAMINHO PRINCIPAL
            }
        ]
    },

    // ========== CAMINHO ALTERNATIVO 1: VOLTOU PRA CASA ==========
    {
        id: 'Q1A',
        phase: 'reconsideração',
        badge: '🏠 RETORNO À VILA',
        title: 'A Segunda Chance',
        context: 'Você volta para casa, mas algo mudou dentro de você. Dias depois, na mesma praça, uma jovem mercadora te aborda: "Ouvi dizer que você recusou o mapa do velho sábio. Que pena... Eu também tenho um mapa. Mas este é diferente - é mais seguro, porém o tesouro é menor." O que você responde?',
        options: [{
                text: 'Recuso novamente. Já decidi que não quero aventuras.',
                points: 10,
                feedback: 'Duas recusas... O medo está te controlando.',
                nextQuestionId: 'Q1B' // Terceira chance forçada!
            },
            {
                text: 'Aceito o mapa "mais seguro" dela e começo uma jornada cautelosa.',
                points: 50,
                feedback: 'Você escolheu o caminho da prudência.',
                nextQuestionId: 'Q2A' // Caminho alternativo mais fácil
            },
            {
                text: 'Pergunto se ela conhece o velho sábio e peço o mapa original dele.',
                points: 85,
                feedback: 'Arrependimento transformado em coragem!',
                nextQuestionId: 'Q2' // Volta pro caminho principal!
            },
            {
                text: 'Peço para ir COM ela na jornada, em parceria.',
                points: 75,
                feedback: 'Inteligente! Dois viajantes são mais fortes.',
                nextQuestionId: 'Q2A' // Caminho com parceiro
            }
        ]
    },

    // ========== TERCEIRA CHANCE FORÇADA - DÍVIDA! ==========
    {
        id: 'Q1B',
        phase: 'dívida-forçada',
        badge: '💰 A DÍVIDA INESPERADA',
        title: 'O Destino Te Alcança',
        context: 'Uma semana depois de recusar ambos os mapas, um coletor de dívidas bate à sua porta. "Seu pai deixou uma dívida de 1000 moedas de ouro antes de morrer. Você tem 30 dias para pagar ou perderá tudo." Você NÃO tem esse dinheiro. De repente, você se lembra dos mapas... O velho sábio falou de um GRANDE tesouro. A jovem mercadora falou de um pequeno mas seguro. O que você faz?',
        options: [{
                text: 'Procuro o velho sábio e IMPLORO pelo mapa do grande tesouro.',
                points: 90,
                feedback: 'O desespero te deu coragem! Ele aceita te dar uma última chance.',
                nextQuestionId: 'Q2' // Finalmente entra na jornada principal!
            },
            {
                text: 'Procuro a mercadora e aceito o mapa "mais seguro" dela.',
                points: 60,
                feedback: 'Você escolheu segurança, mas será suficiente para a dívida?',
                nextQuestionId: 'Q2A' // Caminho alternativo
            },
            {
                text: 'Vendo tudo que tenho e junto com o pouco dinheiro, vou atrás do mapa sozinho.',
                points: 70,
                feedback: 'Sacrifício e determinação! Você está perdendo tudo, mas ganhando propósito.',
                nextQuestionId: 'Q2' // Caminho principal, mas sem recursos
            },
            {
                text: 'Procuro AMBOS e proponho uma expedição conjunta - dividimos o tesouro.',
                points: 95,
                feedback: 'Estratégia brilhante! Unidos, vocês têm mais chances.',
                nextQuestionId: 'Q2B' // Caminho especial com grupo!
            }
        ]
    },

    // ========== CAMINHO PRINCIPAL - QUESTÃO 2 ==========
    {
        id: 'Q2',
        phase: 'preparação',
        badge: '🎒 PREPARAÇÃO',
        title: 'A Escolha da Provisão',
        context: 'Você tem espaço limitado na mochila. Precisa escolher apenas 3 itens para levar. Qual combinação você escolhe para esta jornada desconhecida?',
        options: [{
                text: 'Comida, água e um saco de moedas de ouro.',
                points: 50,
                feedback: 'Prático, mas o ouro pode pesar demais...',
                nextQuestionId: 'Q3'
            },
            {
                text: 'Mapa, bússola e um livro de conhecimentos antigos.',
                points: 90,
                feedback: 'Conhecimento é o melhor tesouro! Excelente escolha.',
                nextQuestionId: 'Q3'
            },
            {
                text: 'Espada, escudo e uma tocha.',
                points: 35,
                feedback: 'Proteção é importante, mas só isso basta?',
                nextQuestionId: 'Q3'
            },
            {
                text: 'Corda, faca multiuso e um caderno para registrar a jornada.',
                points: 85,
                feedback: 'Versatilidade e sabedoria de documentar. Muito bom!',
                nextQuestionId: 'Q3'
            }
        ]
    },

    // ========== CAMINHO ALTERNATIVO "MAIS SEGURO" ==========
    {
        id: 'Q2A',
        phase: 'preparação-cautelosa',
        badge: '🎒 PREPARAÇÃO CAUTELOSA',
        title: 'O Caminho Mais Fácil',
        context: 'A mercadora te dá provisões extras: "Este caminho é mais curto e tem menos perigos. Mas você ainda precisa escolher sabiamente." O que você leva?',
        options: [{
                text: 'Apenas o essencial: água, comida e uma faca.',
                points: 65,
                feedback: 'Minimalismo funcional.',
                nextQuestionId: 'Q3A' // Caminho fácil continua
            },
            {
                text: 'Levo tudo que consigo carregar - quero estar preparado!',
                points: 40,
                feedback: 'Excesso de peso vai te atrasar...',
                nextQuestionId: 'Q3A'
            },
            {
                text: 'Pergunto à mercadora o que ELA levaria e confio na experiência dela.',
                points: 80,
                feedback: 'Sabedoria em ouvir quem já trilhou o caminho!',
                nextQuestionId: 'Q3A'
            },
            {
                text: 'Levo itens para TROCAR - posso negociar no caminho.',
                points: 85,
                feedback: 'Pensamento comercial inteligente!',
                nextQuestionId: 'Q3A'
            }
        ]
    },

    // ========== CAMINHO EM GRUPO ==========
    {
        id: 'Q2B',
        phase: 'preparação-grupo',
        badge: '👥 PREPARAÇÃO EM GRUPO',
        title: 'Dividindo Tarefas',
        context: 'Vocês agora são 3: você, o velho sábio e a mercadora. Cada um pode carregar itens diferentes. Como vocês se organizam?',
        options: [{
                text: 'Cada um carrega o que quer - liberdade total.',
                points: 45,
                feedback: 'Falta de coordenação pode causar problemas...',
                nextQuestionId: 'Q3'
            },
            {
                text: 'Eu cuido da comida, o sábio dos mapas, a mercadora das ferramentas.',
                points: 90,
                feedback: 'Especialização inteligente! Trabalho em equipe perfeito.',
                nextQuestionId: 'Q3B' // Caminho especial com vantagens de grupo
            },
            {
                text: 'Levo TUDO sozinho para não depender dos outros.',
                points: 30,
                feedback: 'Desconfiança... Isso vai pesar literalmente.',
                nextQuestionId: 'Q3'
            },
            {
                text: 'Proponho levar itens duplicados para segurança.',
                points: 75,
                feedback: 'Redundância estratégica. Bom planejamento!',
                nextQuestionId: 'Q3B'
            }
        ]
    },

    // ========== QUESTÃO 3 - CAMINHO PRINCIPAL ==========
    {
        id: 'Q3',
        phase: 'primeiro-desafio',
        badge: '🌊 PRIMEIRO OBSTÁCULO',
        title: 'O Rio Sem Ponte',
        context: 'Você chega a um rio largo e profundo. Não há ponte. Há troncos de árvores caídos próximos, uma correnteza forte, e você vê pegadas de animais que levam para longe do rio.',
        options: [{
                text: 'Tento nadar atravessando pela correnteza.',
                points: 20,
                feedback: 'Muito arriscado! A correnteza quase te levou.',
                nextQuestionId: 'Q4'
            },
            {
                text: 'Uso os troncos para construir uma jangada improvisada.',
                points: 95,
                feedback: 'Engenhosidade e paciência! Você atravessou com segurança.',
                nextQuestionId: 'Q4'
            },
            {
                text: 'Sigo as pegadas de animais para encontrar um caminho alternativo.',
                points: 75,
                feedback: 'Observação inteligente! Os animais conhecem os caminhos.',
                nextQuestionId: 'Q4A' // Caminho pela floresta
            },
            {
                text: 'Acampo aqui e espero alguém passar para pedir ajuda.',
                points: 40,
                feedback: 'Paciência... mas você perdeu tempo valioso.',
                nextQuestionId: 'Q4'
            }
        ]
    },

    // ========== QUESTÃO 3A - CAMINHO FÁCIL ==========
    {
        id: 'Q3A',
        phase: 'caminho-fácil',
        badge: '🌿 ROTA ALTERNATIVA',
        title: 'O Atalho Seguro',
        context: 'A mercadora conhecia este caminho. Vocês chegam a um riacho pequeno e tranquilo. "Viu? Te disse que era mais fácil." Mas você percebe sinais de que alguém passou por aqui recentemente...',
        options: [{
                text: 'Atravesso rapidamente sem me preocupar.',
                points: 50,
                feedback: 'Velocidade, mas sem atenção aos detalhes.',
                nextQuestionId: 'Q4'
            },
            {
                text: 'Investigo os sinais - quem passou por aqui?',
                points: 85,
                feedback: 'Curiosidade e cautela! Você descobriu pistas importantes.',
                nextQuestionId: 'Q4C' // Descobre algo importante
            },
            {
                text: 'Pergunto à mercadora se ela conhece esses sinais.',
                points: 70,
                feedback: 'Bom uso do conhecimento dela.',
                nextQuestionId: 'Q4'
            },
            {
                text: 'Ignoro e sigo em frente - foco no objetivo.',
                points: 45,
                feedback: 'Determinação, mas perdeu informação valiosa.',
                nextQuestionId: 'Q4'
            }
        ]
    },

    // ========== QUESTÃO 3B - CAMINHO EM GRUPO ==========
    {
        id: 'Q3B',
        phase: 'desafio-grupo',
        badge: '👥 TRABALHO EM EQUIPE',
        title: 'O Rio - Versão Cooperativa',
        context: 'Vocês chegam ao rio juntos. O velho sábio diz: "Eu conheço uma técnica antiga de construção de pontes." A mercadora responde: "Eu tenho cordas fortes!" Você pode coordenar o grupo.',
        options: [{
                text: 'Deixo cada um fazer sua parte sem interferir.',
                points: 60,
                feedback: 'Confiança, mas falta liderança.',
                nextQuestionId: 'Q4'
            },
            {
                text: 'Assumo o comando e distribuo tarefas específicas.',
                points: 90,
                feedback: 'Liderança eficiente! A ponte ficou perfeita.',
                nextQuestionId: 'Q4B' // Caminho com vantagem de liderança
            },
            {
                text: 'Proponho que trabalhemos em turnos para não nos cansarmos.',
                points: 80,
                feedback: 'Gestão inteligente de energia!',
                nextQuestionId: 'Q4'
            },
            {
                text: 'Sugiro procurar outro caminho mais fácil para o grupo.',
                points: 55,
                feedback: 'Cuidado com o grupo, mas evitou o desafio.',
                nextQuestionId: 'Q4A'
            }
        ]
    },

    // ========== QUESTÃO 4 - ENCONTRO IMPORTANTE ==========
    {
        id: 'Q4',
        phase: 'encontro',
        badge: '👥 ENCONTRO INESPERADO',
        title: 'O Viajante Ferido',
        context: 'No caminho, você encontra um viajante caído, ferido e pedindo ajuda. Ele diz que foi atacado por ladrões. Sua provisão de água está acabando e você ainda tem um longo caminho pela frente.',
        options: [{
                text: 'Divido minha água e comida com ele, mesmo que sobre pouco para mim.',
                points: 100,
                feedback: 'Compaixão verdadeira! Ele te revela um segredo sobre o tesouro.',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Dou apenas um pouco de água e sigo rapidamente meu caminho.',
                points: 55,
                feedback: 'Ajuda mínima, mas pelo menos tentou.',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Ignoro e continuo andando. Preciso focar na minha jornada.',
                points: 10,
                feedback: 'Você escolheu o tesouro sobre a humanidade...',
                nextQuestionId: 'Q5A' // Consequência negativa
            },
            {
                text: 'Ajudo-o com meus primeiros socorros e peço que me acompanhe.',
                points: 90,
                feedback: 'Sabedoria e compaixão! Ele se junta a você.',
                nextQuestionId: 'Q5B' // Novo companheiro!
            }
        ]
    },

    // ========== QUESTÃO 4A - CAMINHO PELA FLORESTA ==========
    {
        id: 'Q4A',
        phase: 'floresta',
        badge: '🌲 DESVIO PELA FLORESTA',
        title: 'O Caminho dos Animais',
        context: 'Seguindo as pegadas, você entra numa floresta densa. As pegadas levam a uma clareira onde há frutas selvagens e um pequeno lago. Você poderia acampar aqui...',
        options: [{
                text: 'Acampo e recupero forças - esse lugar é perfeito.',
                points: 70,
                feedback: 'Descanso merecido, mas você perdeu tempo.',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Coleto frutas rapidamente e continuo seguindo as pegadas.',
                points: 85,
                feedback: 'Equilíbrio entre necessidade e progresso!',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Desconfio - isso parece bom demais. Sigo outro caminho.',
                points: 60,
                feedback: 'Cautela excessiva, mas às vezes é sábia.',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Estudo as pegadas com mais atenção - o que esses animais fazem aqui?',
                points: 95,
                feedback: 'Observação científica! Você descobriu um padrão importante.',
                nextQuestionId: 'Q5'
            }
        ]
    },

    // ========== QUESTÃO 4B - LIDERANÇA ESTABELECIDA ==========
    {
        id: 'Q4B',
        phase: 'liderança',
        badge: '👑 LÍDER DA EXPEDIÇÃO',
        title: 'Decisão do Líder',
        context: 'O grupo te vê como líder agora. Vocês encontram o viajante ferido. O velho sábio diz: "Precisamos ajudá-lo." A mercadora diz: "Vamos perder tempo." Como líder, você decide:',
        options: [{
                text: 'Ajudamos todos juntos - é isso que líderes fazem.',
                points: 100,
                feedback: 'Liderança compassiva! O grupo te respeita ainda mais.',
                nextQuestionId: 'Q5B'
            },
            {
                text: 'O sábio fica com ele enquanto eu e a mercadora seguimos.',
                points: 70,
                feedback: 'Pragmatismo, mas divide o grupo.',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Votamos democraticamente - cada um dá sua opinião.',
                points: 85,
                feedback: 'Liderança democrática! Bom equilíbrio.',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Dou recursos ao ferido mas seguimos - não posso comprometer o grupo.',
                points: 75,
                feedback: 'Decisão difícil, mas responsável.',
                nextQuestionId: 'Q5'
            }
        ]
    },

    // ========== QUESTÃO 4C - DESCOBERTA IMPORTANTE ==========
    {
        id: 'Q4C',
        phase: 'descoberta',
        badge: '🔍 PISTA VALIOSA',
        title: 'Os Sinais Revelados',
        context: 'Investigando melhor, você descobre que os sinais são de outro grupo de aventureiros que passou há poucos dias. Eles deixaram um bilhete: "Cuidado - a ponte está quebrada à frente. Use o caminho sul." Mas o seu mapa marca o caminho norte...',
        options: [{
                text: 'Confio no bilhete e vou pro caminho sul.',
                points: 80,
                feedback: 'Sabedoria em confiar na experiência de outros!',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Sigo o mapa - ele nunca me enganou até agora.',
                points: 50,
                feedback: 'Lealdade ao plano original.',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Vou ao norte PRIMEIRO para confirmar se a ponte está quebrada.',
                points: 90,
                feedback: 'Verificação inteligente! Você descobriu um atalho.',
                nextQuestionId: 'Q5'
            },
            {
                text: 'Deixo uma mensagem para outros viajantes também.',
                points: 95,
                feedback: 'Generosidade! Você está ajudando futuros aventureiros.',
                nextQuestionId: 'Q5'
            }
        ]
    },

    // ========== QUESTÃO 5 - METADE DA JORNADA - DÍVIDA LEMBRADA! ==========
    {
        id: 'Q5',
        phase: 'meio-caminho',
        badge: '⚡ METADE DO CAMINHO - REVELAÇÃO',
        title: 'A Lembrança da Dívida',
        context: 'Você para para descansar e de repente lembra: você tem apenas 15 dias restantes para pagar a dívida (se foi forçado por ela), ou você percebe que investiu TUDO nesta jornada e PRECISA do tesouro agora. Não há mais volta. À frente, você vê uma bifurcação: caminho da esquerda (mais curto, mas perigoso) ou direita (mais longo, mas seguro).',
        options: [{
                text: 'Vou pela esquerda - preciso ser rápido, não tenho tempo!',
                points: 70,
                feedback: 'Urgência te deu coragem, mas também imprudência.',
                nextQuestionId: 'Q6A' // Caminho perigoso
            },
            {
                text: 'Vou pela direita - chegar vivo é mais importante que chegar rápido.',
                points: 85,
                feedback: 'Sabedoria sob pressão! Paciência estratégica.',
                nextQuestionId: 'Q6B' // Caminho longo
            },
            {
                text: 'Procuro um terceiro caminho - deve haver outra opção.',
                points: 95,
                feedback: 'Pensamento criativo! Você encontrou um atalho secreto.',
                nextQuestionId: 'Q6C' // Caminho secreto
            },
            {
                text: 'Tento negociar mais tempo com o coletor de dívidas (se aplicável).',
                points: 60,
                feedback: 'Você perdeu tempo tentando negociar... Continue com urgência.',
                nextQuestionId: 'Q6A'
            }
        ]
    },

    // CONTINUA COM MAIS 7-8 QUESTÕES ATÉ O FIM...
    // (Vou adicionar mais questões agora)

    // ========== QUESTÕES FINAIS - MÚLTIPLOS CAMINHOS ==========

    {
        id: 'Q6A',
        phase: 'caminho-perigoso',
        badge: '⚔️ CAMINHO ARRISCADO',
        title: 'A Ravina Mortal',
        context: 'O caminho curto te leva a uma ravina estreita com ventos fortíssimos. Há uma ponte de cordas velhas balançando perigosamente.',
        options: [{
                text: 'Atravesso correndo antes que a ponte desabe.',
                points: 60,
                feedback: 'Velocidade salvou você... por pouco!',
                nextQuestionId: 'Q10' // Pula pra perto do fim
            },
            {
                text: 'Teste a ponte com pedras primeiro.',
                points: 90,
                feedback: 'Prudência mesmo sob pressão!',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Procuro outro jeito de descer a ravina.',
                points: 75,
                feedback: 'Criatividade! Você achou um caminho lateral.',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Volto e pego o caminho seguro - não vale a pena.',
                points: 50,
                feedback: 'Você perdeu tempo, mas está vivo.',
                nextQuestionId: 'Q6B'
            }
        ]
    },

    {
        id: 'Q6B',
        phase: 'caminho-longo',
        badge: '🛤️ CAMINHO SEGURO',
        title: 'A Estrada Longa',
        context: 'O caminho longo contorna a montanha. É mais seguro mas você encontra uma caravana de comerciantes. Eles oferecem te levar de carruagem... por 100 moedas.',
        options: [{
                text: 'Pago as 100 moedas - tempo é dinheiro.',
                points: 70,
                feedback: 'Investimento estratégico em velocidade!',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Ofereço trabalhar para eles em troca da carona.',
                points: 95,
                feedback: 'Engenhosidade! Você ganhou amigos e transporte.',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Recuso e continuo a pé - não confio em estranhos.',
                points: 55,
                feedback: 'Desconfiança te fez perder uma oportunidade.',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Negocio e consigo pagar apenas 50 moedas.',
                points: 85,
                feedback: 'Habilidade de negociação!',
                nextQuestionId: 'Q10'
            }
        ]
    },

    {
        id: 'Q6C',
        phase: 'caminho-secreto',
        badge: '✨ CAMINHO OCULTO',
        title: 'A Passagem Esquecida',
        context: 'Procurando, você encontra ruínas antigas com inscrições: "Aqueles que buscam com sabedoria encontram atalhos." Há um túnel escuro que parece atravessar a montanha.',
        options: [{
                text: 'Entro no túnel com minha tocha acesa.',
                points: 80,
                feedback: 'Coragem! O túnel economizou dias de viagem.',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Estudo as inscrições antes de entrar.',
                points: 100,
                feedback: 'PERFEITO! As inscrições revelaram armadilhas a evitar.',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Marco o túnel para outros mas não entro - muito arriscado.',
                points: 60,
                feedback: 'Generoso, mas você perdeu a vantagem.',
                nextQuestionId: 'Q6B'
            },
            {
                text: 'Jogo uma pedra primeiro para testar o eco e entendo a estrutura.',
                points: 95,
                feedback: 'Inteligência científica! Você mapeou o caminho.',
                nextQuestionId: 'Q10'
            }
        ]
    },

    // ========== QUESTÃO 10 - QUASE NO FIM ==========
    {
        id: 'Q10',
        phase: 'quase-lá',
        badge: '🔥 PROVAÇÃO FINAL',
        title: 'A Caverna do Dragão',
        context: 'Você finalmente chega ao local marcado no mapa: uma caverna guardada por um dragão adormecido. O tesouro brilha ao fundo. Você tem APENAS 5 DIAS para voltar e pagar a dívida (ou está faminto e cansado). Como age?',
        options: [{
                text: 'Tento passar silenciosamente pelo dragão adormecido.',
                points: 60,
                feedback: 'Você conseguiu, mas quase o acordou!',
                nextQuestionId: 'Q11'
            },
            {
                text: 'Ataco o dragão preventivamente antes que ele acorde.',
                points: 30,
                feedback: 'Agressão causou um combate terrível...',
                nextQuestionId: 'Q11'
            },
            {
                text: 'Tento conversar com o dragão quando ele acordar.',
                points: 90,
                feedback: 'Sabedoria! O dragão respeitou sua coragem.',
                nextQuestionId: 'Q11'
            },
            {
                text: 'Observo e percebo que o "tesouro" pode não ser ouro - investigo primeiro.',
                points: 100,
                feedback: 'DISCERNIMENTO! Você começou a entender a verdade...',
                nextQuestionId: 'Q11'
            }
        ]
    },

    // ========== QUESTÃO FINAL ==========
    {
        id: 'Q11',
        phase: 'revelação',
        badge: '💎 A GRANDE REVELAÇÃO',
        title: 'O Verdadeiro Tesouro',
        context: 'Você chega ao "tesouro". É um espelho antigo gigante. No reflexo, você vê: todas as pessoas que ajudou, todos os desafios superados, toda a sabedoria ganha, toda a coragem desenvolvida. Uma inscrição brilha: "O maior tesouro sempre esteve dentro de você. Mas olhe atrás do espelho..." Atrás há um baú pequeno com exatamente 1000 moedas de ouro - suficiente para a dívida.',
        options: [{
                text: 'Pego o ouro e corro de volta - consegui! A dívida será paga!',
                points: 50,
                feedback: 'Você conseguiu o objetivo prático... mas perdeu a lição maior.',
                nextQuestionId: 'END'
            },
            {
                text: 'Fico frustrado - só isso? Vim até aqui por apenas 1000 moedas?!',
                points: 20,
                feedback: 'Você ainda não entendeu a jornada...',
                nextQuestionId: 'END'
            },
            {
                text: 'Pego o ouro, mas levo também o espelho como lembrança da transformação.',
                points: 95,
                feedback: 'SABEDORIA! Você entendeu que a jornada te transformou.',
                nextQuestionId: 'END'
            },
            {
                text: 'Deixo o ouro e levo apenas o espelho - a verdadeira riqueza é quem eu me tornei.',
                points: 100,
                feedback: 'ILUMINAÇÃO TOTAL! Você transcendeu a busca material.',
                nextQuestionId: 'END'
            }
        ]
    },

    // ========== POSSÍVEIS FINAIS ALTERNATIVOS ==========
    {
        id: 'Q5A',
        phase: 'consequência',
        badge: '⚠️ CONSEQUÊNCIAS',
        title: 'Karma Negativo',
        context: 'Mais à frente, VOCÊ está ferido após uma queda. Outro viajante passa... e te ignora, exatamente como você fez antes. Você percebe o erro.',
        options: [{
                text: 'Grito pedindo ajuda com desespero.',
                points: 40,
                feedback: 'Humilhante, mas necessário.',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Aceito a consequência e me curo sozinho com dificuldade.',
                points: 70,
                feedback: 'Você aprendeu uma lição dura sobre empatia.',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Reflito e decido: se encontrar alguém ferido novamente, vou ajudar.',
                points: 85,
                feedback: 'Crescimento pessoal! Você evoluiu.',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Fico com raiva - o mundo é cruel, eu estava certo em focar em mim.',
                points: 15,
                feedback: 'Amargura te afasta do verdadeiro tesouro...',
                nextQuestionId: 'Q10'
            }
        ]
    },

    {
        id: 'Q5B',
        phase: 'companheiro',
        badge: '🤝 NOVO ALIADO',
        title: 'Gratidão Retribuída',
        context: 'O viajante que você ajudou se recuperou e se revela: "Eu sou um guardião do tesouro, testando quem é digno. Você passou no teste. Posso te guiar diretamente ao tesouro, pulando metade dos perigos."',
        options: [{
                text: 'Aceito! Finalmente sorte ao meu lado!',
                points: 70,
                feedback: 'Atalho conquistado pela bondade!',
                nextQuestionId: 'Q10'
            },
            {
                text: 'Recuso - quero merecer o tesouro enfrentando todos os desafios.',
                points: 95,
                feedback: 'Integridade admirável! Você quer ganhar de verdade.',
                nextQuestionId: 'Q6B'
            },
            {
                text: 'Aceito apenas orientações, mas vou enfrentar os desafios sozinho.',
                points: 90,
                feedback: 'Equilíbrio perfeito entre ajuda e merecimento!',
                nextQuestionId: 'Q6B'
            },
            {
                text: 'Pergunto: qual é o verdadeiro teste? Aceitar ou recusar?',
                points: 100,
                feedback: 'SABEDORIA MÁXIMA! Você entendeu que TUDO é um teste.',
                nextQuestionId: 'Q10'
            }
        ]
    },

    // Questão END não precisa de opções - é o final
    {
        id: 'END',
        phase: 'fim',
        badge: '🏆 FIM DA JORNADA',
        title: 'Fim',
        context: 'Sua jornada terminou.',
        options: []
    }
];