// ===== JORNADA DO TESOURO DAS ALMAS - 80+ QUESTÕES =====
// 5 CAPÍTULOS ÉPICOS COM CONVERGÊNCIAS NARRATIVAS
// Estrutura: Q1 → Q2A/B/C → Q3A1/A2/A3/B1/B2/B3/C1/C2/C3 → Q4A/B/C → Q5... → FINAIS
//
// SENTIMENTOS: Tensão, Medo, Sede, Fome, Alegria, Dúvida, Vontade, Desespero
// REVIRAVOLTAS: Traições, Mortes, Ressurreições, Segredos

const journeyQuestions = [
    
    // ========================================
    // CAPÍTULO 1: O CHAMADO
    // ========================================
    
    {
        id: 'Q1',
        phase: 'cap1-chamado',
        badge: '🗺️ CAPÍTULO 1: O CHAMADO',
        title: 'O Velho e o Mapa Sangrento',
        context: 'Chuva pesada. Noite escura. Você caminha pela praça vazia quando um VELHO surge das sombras. Seus olhos brilham com urgência doentia. Ele empurra um mapa manchado de sangue fresco em suas mãos trêmulas. "RUN!" ele sussurra com voz rouca, "eles estão vindo... o tesouro... você é o escolhido..." Ele tosse sangue e cai morto aos seus pés. Guardas gritam ao longe. O mapa queima em suas mãos. VOCÊ TEM 10 SEGUNDOS PARA DECIDIR.',
        options: [
            {
                text: 'ACEITO O MAPA e corro! Seja lá o que for, isso é importante!',
                points: 70,
                feedback: 'ADRENALINA! Você corre entre vielas escuras, coração batendo...',
                nextQuestionId: 'Q2A',
                karma: { courage: +2, curiosity: +1 }
            },
            {
                text: 'RECUSO! Jogo o mapa longe e finjo que não vi nada. Isso é armadilha!',
                points: 50,
                feedback: 'MEDO prudente. Você se afasta... mas algo te puxa de volta.',
                nextQuestionId: 'Q2B',
                karma: { caution: +2, survival: +1 }
            },
            {
                text: 'DESCONFIO! Examino o corpo do velho. Isso pode ser encenação!',
                points: 85,
                feedback: 'INTELIGÊNCIA! Você percebe: há uma TATUAGEM no pulso dele...',
                nextQuestionId: 'Q2C',
                karma: { wisdom: +2, perception: +2 }
            }
        ]
    },

    // ========================================
    // CAPÍTULO 2: PRIMEIRAS ESCOLHAS
    // ========================================
    
    // ===== CAMINHO A: ACEITOU O MAPA =====
    {
        id: 'Q2A',
        phase: 'cap2-aceitou',
        badge: '⚡ CAPÍTULO 2: A FUGA',
        title: 'Correndo Por Sua Vida',
        context: 'Você corre. Guardas gritam "ALI!" Flechas assobiam. Você vira um beco. BECO SEM SAÍDA! Paredes altas, lixo fétido, ratos por todo lado. Guardas se aproximam. Sua GARGANTA SECA de sede. PERNAS TREMEM de cansaço. Você olha o mapa rapidamente: há marcas... coordenadas... um símbolo estranho. Você tem 3 segundos.',
        options: [
            {
                text: 'ESCALO a parede! Força bruta, adrenalina pura!',
                points: 75,
                feedback: 'Suas UNHAS SANGRAM. Músculos GRITAM. Mas você SOBE!',
                nextQuestionId: 'Q3A1',
                karma: { strength: +2, determination: +2 }
            },
            {
                text: 'GRITO: "Vocês querem o mapa?! PEGUEM!" e jogo longe. Distração!',
                points: 85,
                feedback: 'INTELIGÊNCIA TÁTICA! Guardas correm para o mapa. Você escapa!',
                nextQuestionId: 'Q3A2',
                karma: { tactics: +3, cunning: +1 }
            },
            {
                text: 'ME RENDO! "Não matem! Eu explico tudo!" Negociação sob pressão.',
                points: 60,
                feedback: 'Guardas hesitam. Você tem 10 segundos para convencê-los...',
                nextQuestionId: 'Q3A3',
                karma: { charisma: +1, desperation: +1 }
            }
        ]
    },

    {
        id: 'Q2B',
        phase: 'cap2-recusou',
        badge: '🏠 CAPÍTULO 2: A RECUSA',
        title: 'A Noite Que Não Acaba',
        context: 'Você joga o mapa longe e volta pra casa. Mas... você NÃO CONSEGUE DORMIR. Toda vez que fecha os olhos, vê o rosto do velho. "Você é o escolhido..." ecoa na sua mente. 3h da manhã. Você SUA frio. Lá fora, GRITOS. Você espia pela janela: A CIDADE ESTÁ EM CHAMAS! Soldados invadem casas. Estão procurando... ALGO. Ou ALGUÉM. Sua porta TREME com batidas violentas.',
        options: [
            {
                text: 'VOLTO para buscar o mapa! Eu PRECISO saber o que está acontecendo!',
                points: 80,
                feedback: 'CORAGEM ressurge! Você corre de volta para a praça...',
                nextQuestionId: 'Q3B1',
                karma: { courage: +2, curiosity: +2 }
            },
            {
                text: 'FUJO pelos fundos! Não é meu problema, preciso sobreviver!',
                points: 50,
                feedback: 'INSTINTO DE SOBREVIVÊNCIA. Você escapa... mas pra onde ir?',
                nextQuestionId: 'Q3B2',
                karma: { survival: +2, selfishness: +1 }
            },
            {
                text: 'ABRO a porta e ENFRENTO! "O que vocês querem?!"',
                points: 70,
                feedback: 'BRAVURA! O soldado te encara: "Onde está o MAPA?"',
                nextQuestionId: 'Q3B3',
                karma: { courage: +1, confrontation: +1 }
            }
        ]
    },

    {
        id: 'Q2C',
        phase: 'cap2-desconfiou',
        badge: '🔍 CAPÍTULO 2: A INVESTIGAÇÃO',
        title: 'O Segredo da Tatuagem',
        context: 'Você examina o corpo. A tatuagem no pulso dele: uma SERPENTE devorando a própria cauda. Você reconhece... é o símbolo da ORDEM DOS SILENCIOSOS - uma sociedade secreta que "protege conhecimentos proibidos". O velho não era um mendigo. Era um GUARDIÃO. Ele morreu te passando algo MUITO importante. De repente, você ouve passos. MUITOS passos. Não são guardas comuns. São ASSASSINOS.',
        options: [
            {
                text: 'SIGO O VELHO secretamente antes que cheguem! Preciso saber mais sobre ele!',
                points: 90,
                feedback: 'PERCEPÇÃO AGUÇADA! Você arrasta o corpo para as sombras e procura...',
                nextQuestionId: 'Q3C1',
                karma: { perception: +3, boldness: +1 }
            },
            {
                text: 'ROUBO O MAPA do cadáver e FUJO! Não quero envolvimento com assassinos!',
                points: 70,
                feedback: 'PRAGMATISMO frio. Você pega o mapa e some nas sombras...',
                nextQuestionId: 'Q3C2',
                karma: { pragmatism: +2, theft: +1 }
            },
            {
                text: 'CONFRONTO OS ASSASSINOS! "Quem era esse homem?! O que ele guardava?!"',
                points: 65,
                feedback: 'OUSADIA SUICIDA! Eles param surpresos. Um deles RI...',
                nextQuestionId: 'Q3C3',
                karma: { courage: +2, recklessness: +1 }
            }
        ]
    },

    // ========================================
    // CAPÍTULO 3: CONSEQUÊNCIAS
    // ========================================
    
    // ===== Q3A1: Escalou a parede =====
    {
        id: 'Q3A1',
        phase: 'cap3-fuga-solo',
        badge: '🏃 CAPÍTULO 3: SOLIDÃO E SEDE',
        title: 'Sozinho no Deserto Urbano',
        context: 'Você escalou. Está nos telhados. Mas PERDEU o mapa na escalada! Ele caiu... lá embaixo... nas mãos dos guardas. Você tem apenas MEMÓRIA do símbolo: uma ESTRELA de 7 pontas. Agora você está sozinho, no topo da cidade, com SEDE DESESPERADORA. Sua boca parece lixa. Lábios racham. Você vê ao longe: um RIO... mas entre você e ele, há o BAIRRO PROIBIDO - onde ninguém entra e sai vivo.',
        options: [
            {
                text: 'DESÇO e procuro água nas vielas. Preciso BEBER ou morro!',
                points: 60,
                feedback: 'NECESSIDADE BÁSICA! Você desce tropeçando... e ouve vozes...',
                nextQuestionId: 'Q4A',
                karma: { desperation: +2, thirst: +1 }
            },
            {
                text: 'ATRAVESSO o Bairro Proibido! Coragem ou loucura? Não importa - PRECISO de água!',
                points: 75,
                feedback: 'DESESPERO te dá coragem! Você salta de telhado em telhado...',
                nextQuestionId: 'Q4A',
                karma: { courage: +2, desperation: +1 }
            },
            {
                text: 'RACIOCINO: foco no SÍMBOLO da estrela. Água posso achar depois. Preciso decifrar isso!',
                points: 90,
                feedback: 'DISCIPLINA MENTAL! Você ignora a sede torturante e PENSA...',
                nextQuestionId: 'Q4B',
                karma: { wisdom: +3, willpower: +2 }
            }
        ]
    },

    // ===== Q3A2: Jogou o mapa (tática) =====
    {
        id: 'Q3A2',
        phase: 'cap3-tatico',
        badge: '🧠 CAPÍTULO 3: O ESTRATEGISTA',
        title: 'Parceiros Improváveis',
        context: 'Você jogou o mapa como distração e escapou! GENIAL! Mas agora você não tem o mapa... e ALGUÉM viu tudo. Uma GAROTA de uns 16 anos sai das sombras. "Isso foi BRILLHANTE!", ela diz rindo. "Eu sou Lyra. Ladra profissional. E você... você tem TALENTO." Ela estende a mão. "Quer parceria? Eu SEI onde esses guardas vão levar o mapa. Podemos roubá-lo de volta... se você confiar em mim."',
        options: [
            {
                text: 'ACEITO! Sozinho eu morro. Juntos, temos chance!',
                points: 85,
                feedback: 'ALIANÇA FORMADA! Lyra sorri: "Você não vai se arrepender..."',
                nextQuestionId: 'Q4A',
                karma: { trust: +2, collaboration: +2 }
            },
            {
                text: 'RECUSO! "Não confio em ladrões." E vou sozinho recuperar o mapa.',
                points: 70,
                feedback: 'INDEPENDÊNCIA. Lyra dá de ombros: "Sua perda..." e some.',
                nextQuestionId: 'Q4A',
                karma: { independence: +1, mistrust: +1 }
            },
            {
                text: 'TESTO ela: "Me mostre algo que prove que sabe onde está o mapa."',
                points: 95,
                feedback: 'SABEDORIA! Ela mostra um MEDALHÃO do capitão da guarda. Roubou dele!',
                nextQuestionId: 'Q4B',
                karma: { wisdom: +3, caution: +2 }
            }
        ]
    },

    // ===== Q3A3: Se rendeu =====
    {
        id: 'Q3A3',
        phase: 'cap3-rendido',
        badge: '⛓️ CAPÍTULO 3: PRISIONEIRO',
        title: 'Nas Masmorras do Terror',
        context: 'Você se rendeu. ERRO FATAL. Guardas te arrastam para as MASMORRAS REAIS. Escuro. Úmido. Cheiro de MORTE e PODRIDÃO. Você ouve gritos distantes. Torturas. Sua GARGANTA SECA. ESTÔMAGO DOI de fome. Faz 3 dias sem água. Você está MORRENDO. De repente, um PRISIONEIRO na cela ao lado sussurra: "Psiu... você... o do mapa... EU SEI O QUE É... posso te tirar daqui... mas você tem que ME LIBERTAR primeiro..."',
        options: [
            {
                text: 'CONCORDO! "Me tira daqui e eu te ajudo a fugir também!"',
                points: 70,
                feedback: 'DESESPERO aceita qualquer coisa. Ele ri baixo: "Ótimo..."',
                nextQuestionId: 'Q4C',
                karma: { desperation: +2, deal: +1 }
            },
            {
                text: 'DESCONFIO: "Quem é você? Como sabe do mapa?!"',
                points: 85,
                feedback: 'CAUTELA mesmo desesperado! Ele suspira: "Eu ERA um guardião..."',
                nextQuestionId: 'Q4C',
                karma: { wisdom: +2, suspicion: +1 }
            },
            {
                text: 'GRITO pedindo GUARDAS! "Esse prisioneiro está tentando me manipular!"',
                points: 50,
                feedback: 'Guardas riem: "Ninguém liga pro que vocês fazem aí embaixo..."',
                nextQuestionId: 'Q4C',
                karma: { naivety: +1 }
            }
        ]
    },

    // ===== Q3B1: Voltou para buscar o mapa =====
    {
        id: 'Q3B1',
        phase: 'cap3-retorno',
        badge: '🔥 CAPÍTULO 3: NA CIDADE EM CHAMAS',
        title: 'O Arrependimento Ardente',
        context: 'Você volta correndo para a praça. A cidade QUEIMA! Calor SUFOCANTE. Fumaça CEGA seus olhos. Você tosse violentamente. Lágrimas escorrem. Quando chega na praça... O CORPO SUMIU! O mapa SUMIU! Mas há SANGUE fresco... um rastro... levando para o TEMPLO ABANDONADO no centro da cidade. Você ouve EXPLOSÕES. Soldados estão DEMOLINDO o templo! "ENCONTREM A CÂMARA!" eles gritam.',
        options: [
            {
                text: 'CORRO pro templo ANTES que seja destruído! O segredo está lá!',
                points: 85,
                feedback: 'URGÊNCIA EXTREMA! Você corre entre chamas e escombros...',
                nextQuestionId: 'Q4B',
                karma: { urgency: +3, courage: +2 }
            },
            {
                text: 'OBSERVO de longe. Espero eles acharem a câmara, DEPOIS roubo deles!',
                points: 75,
                feedback: 'PACIÊNCIA TÁTICA. Você se esconde e espera...',
                nextQuestionId: 'Q4B',
                karma: { tactics: +2, patience: +1 }
            },
            {
                text: 'DESISTO! Isso é GRANDE DEMAIS! Vou fugir da cidade enquanto posso!',
                points: 45,
                feedback: 'MEDO vence. Você vira as costas... mas algo te faz PARAR.',
                nextQuestionId: 'Q4A',
                karma: { fear: +2, doubt: +1 }
            }
        ]
    },

    // ===== Q3B2: Fugiu pelos fundos =====
    {
        id: 'Q3B2',
        phase: 'cap3-fuga-egoista',
        badge: '🌲 CAPÍTULO 3: EXÍLIO FORÇADO',
        title: 'Sozinho na Floresta Sombria',
        context: 'Você fugiu. Está na FLORESTA NEGRA nos arredores da cidade. Sozinho. Sem comida. Sem água. Sem direção. A noite cai. Sons ASSUSTADORES ecoam. Olhos BRILHAM na escuridão. Seu ESTÔMAGO GRITA de fome. Você encontra um RIACHO. Água! Você bebe desesperado... e VOMITA. Água ENVENENADA! Você cai de joelhos, TREMENDO. Visões estranhas: o VELHO aparece: "Covarde... você abandonou SEU destino... agora o destino te abandona..."',
        options: [
            {
                text: 'LUTO contra o veneno! Forço vômito, procuro ervas medicinais!',
                points: 80,
                feedback: 'VONTADE DE VIVER! Você vomita tudo, corpo convulsa, mas SOBREVIVE!',
                nextQuestionId: 'Q4A',
                karma: { survival: +3, willpower: +2 }
            },
            {
                text: 'ME RENDO ao veneno. "Talvez... seja melhor assim..." Desisto.',
                points: 30,
                feedback: 'DESISTÊNCIA... Você fecha os olhos... mas ALGO te acorda...',
                nextQuestionId: 'Q4C',
                karma: { despair: +2, weakness: +1 }
            },
            {
                text: 'IMPLORO às visões: "Me dê uma segunda chance! Eu vou voltar!"',
                points: 75,
                feedback: 'ARREPENDIMENTO sincero! A visão do velho sorri...',
                nextQuestionId: 'Q4B',
                karma: { humility: +2, redemption: +1 }
            }
        ]
    },

    // ===== Q3B3: Enfrentou os soldados =====
    {
        id: 'Q3B3',
        phase: 'cap3-confronto',
        badge: '⚔️ CAPÍTULO 3: INTERROGATÓRIO',
        title: 'A Verdade Dolorosa',
        context: 'Você abre a porta. O SOLDADO te encara. Ele é ENORME. Cicatriz no rosto. Olhos frios. "Onde está o MAPA?" Você responde: "Que mapa?" Ele SORRI. "Errado." SOCO no estômago. Você DOBRA de dor. Não consegue RESPIRAR. Ele te arrasta pela casa. "Última chance... fala... ou sua FAMÍLIA morre." Você NÃO TEM família. Ele está BLEFANDO. Ou não?',
        options: [
            {
                text: 'MINTO: "Está escondido no poço!" Ganho tempo!',
                points: 75,
                feedback: 'ESTRATÉGIA! Ele sai correndo. Você tem 30 segundos...',
                nextQuestionId: 'Q4A',
                karma: { deception: +2, quick_thinking: +1 }
            },
            {
                text: 'DIGO A VERDADE: "Eu joguei fora! Não quero envolvimento!"',
                points: 65,
                feedback: 'HONESTIDADE. Ele te encara... e RIcomeça: "Idiota..."',
                nextQuestionId: 'Q4C',
                karma: { honesty: +1, vulnerability: +1 }
            },
            {
                text: 'ATACO! Pego uma CADEIRA e bato nele! Luta ou morre!',
                points: 70,
                feedback: 'DESESPERO CORAJOSO! Você acerta a cabeça dele mas...',
                nextQuestionId: 'Q4C',
                karma: { courage: +2, violence: +1 }
            }
        ]
    },

    // ===== Q3C1: Seguiu o velho =====
    {
        id: 'Q3C1',
        phase: 'cap3-segredo',
        badge: '🗝️ CAPÍTULO 3: O GUARDIÃO SECRETO',
        title: 'A Ordem dos Silenciosos',
        context: 'Você arrasta o corpo para um BECO ESCURO. Procura por pistas. Encontra uma CHAVE pendurada no pescoço dele. Formato estranho. 7 pontas. De repente, o CORPO se mexe! ELE ESTÁ VIVO! "Você... passou... no teste..." ele sussurra. "Eu não morri... fingir... ver se você era... digno... A Ordem... precisa de você... eles virão... traga a chave... ao Templo... meia-noite..." Ele REALMENTE morre dessa vez.',
        options: [
            {
                text: 'VOU ao templo à meia-noite! Isso é DESTINO!',
                points: 90,
                feedback: 'ACEITAÇÃO do chamado! Você guarda a chave com cuidado...',
                nextQuestionId: 'Q4B',
                karma: { destiny: +3, trust: +1 }
            },
            {
                text: 'DESCONFIO! Isso pode ser armadilha! Vou MAS armado e preparado!',
                points: 85,
                feedback: 'SABEDORIA cautelosa! Você se prepara para o pior...',
                nextQuestionId: 'Q4B',
                karma: { wisdom: +2, preparation: +2 }
            },
            {
                text: 'FUJO! Isso é LOUCURA! Jogo a chave fora e sumo!',
                points: 50,
                feedback: 'MEDO vence. Você joga a chave... mas ela BRILHA...',
                nextQuestionId: 'Q4A',
                karma: { fear: +2 }
            }
        ]
    },

    // ===== Q3C2: Roubou o mapa =====
    {
        id: 'Q3C2',
        phase: 'cap3-ladrao',
        badge: '🎭 CAPÍTULO 3: O LADRÃO PRAGMÁTICO',
        title: 'Roubo e Fuga',
        context: 'Você rouba o mapa do cadáver. Assassinos chegam correndo. Você JÁ SUMIU. Ágil. Esperto. Mas agora... você TEM o mapa mas NÃO ENTENDE nada. Símbolos estranhos. Coordenadas impossíveis. Língua morta. Você precisa de um ESPECIALISTA. Conhece dois: 1) MARCUS, o tradutor - honesto mas lento. 2) VERA, a decifradora - rápida mas perigosa. Quem escolher pode te TRAIR ou SALVAR.',
        options: [
            {
                text: 'Procuro MARCUS. Prefiro segurança mesmo que demore!',
                points: 75,
                feedback: 'PRUDÊNCIA! Marcus estuda o mapa: "Isso é... impossível..."',
                nextQuestionId: 'Q4B',
                karma: { caution: +2, patience: +1 }
            },
            {
                text: 'Procuro VERA. Preciso de velocidade mesmo com risco!',
                points: 80,
                feedback: 'OUSADIA! Vera olha e SORRI: "Eu sei EXATAMENTE o que é isso..."',
                nextQuestionId: 'Q4C',
                karma: { risk: +2, urgency: +1 }
            },
            {
                text: 'TENTO DECIFRAR SOZINHO! Não confio em ninguém!',
                points: 70,
                feedback: 'INDEPENDÊNCIA! Você passa noites estudando...',
                nextQuestionId: 'Q4A',
                karma: { independence: +2, stubbornness: +1 }
            }
        ]
    },

    // ===== Q3C3: Confrontou os assassinos =====
    {
        id: 'Q3C3',
        phase: 'cap3-confronto-assassinos',
        badge: '💀 CAPÍTULO 3: DANÇA COM A MORTE',
        title: 'Os Que Não Têm Nome',
        context: 'Você confronta os ASSASSINOS. Eles param. Silêncio tenso. Um deles, o LÍDER, remove o capuz. Mulher. Linda. Cicatrizes rituais no rosto. "Coragem... ou estupidez?" ela pergunta, voz suave mas MORTAL. "Esse homem guardava um SEGREDO que matou 1000 pessoas. E você quer SABER mais? Interessante..." Ela ergue a mão. Os outros DESEMBAINHAM lâminas. "Última chance. Junte-se a nós... ou morra como ele."',
        options: [
            {
                text: 'ME JUNTO a eles! "Quero poder. Quero conhecimento. O que devo fazer?"',
                points: 75,
                feedback: 'AMBIÇÃO! Ela sorri: "Bom. Siga-nos. E NUNCA olhe para trás."',
                nextQuestionId: 'Q4C',
                karma: { ambition: +3, darkness: +2 }
            },
            {
                text: 'RECUSO: "Prefiro morrer livre que viver servo!" Preparo para lutar!',
                points: 85,
                feedback: 'HONRA! Ela respeita: "Então morra com honra." Ataque!',
                nextQuestionId: 'Q4A',
                karma: { honor: +3, courage: +2 }
            },
            {
                text: 'NEGOCIO: "E se eu souber onde está algo que VOCÊS procuram?"',
                points: 80,
                feedback: 'ESTRATÉGIA! Ela hesita. Você tem a atenção dela...',
                nextQuestionId: 'Q4B',
                karma: { negotiation: +2, cunning: +2 }
            }
        ]
    },

    // ========================================
    // CAPÍTULO 4: A GRANDE REVIRAVOLTA
    // (CONVERGÊNCIAS NARRATIVAS - Múltiplos caminhos levam aqui)
    // ========================================
    
    {
        id: 'Q4A',
        phase: 'cap4-cidade-perdida',
        badge: '🏛️ CAPÍTULO 4: A CIDADE PERDIDA',
        title: 'O Que Jaz Sob as Cinzas',
        context: 'TODOS os caminhos te trouxeram AQUI. Sob as ruínas do templo queimado, você descobre uma ESCADARIA SECRETA. Desce. Desce. Desce por HORAS. Quando finalmente chega ao fundo... MEU DEUS. Uma CIDADE INTEIRA enterrada! Milhares de anos! Prédios de cristal negro. Esqueletos por TODA PARTE. E no centro... um PORTAL pulsante de energia roxa. Você sente MEDO absoluto. E FASCÍNIO irresistível. O mapa brilha. "ESCOLHA", uma voz ecoa em sua mente.',
        options: [
            {
                text: 'ENTRO no portal! Vim até aqui, não vou parar agora!',
                points: 80,
                feedback: 'CORAGEM ABSOLUTA! Você mergulha na energia... TUDO se dissolve...',
                nextQuestionId: 'Q5A',
                karma: { courage: +4, recklessness: +1 }
            },
            {
                text: 'ESTUDO a cidade primeiro! Pode haver pistas, tesouros, RESPOSTAS!',
                points: 90,
                feedback: 'SABEDORIA! Você explora... e encontra DIÁRIOS dos antigos...',
                nextQuestionId: 'Q5B',
                karma: { wisdom: +3, patience: +2 }
            },
            {
                text: 'FUJO! Isso é GRANDE DEMAIS! Preciso avisar as autoridades!',
                points: 50,
                feedback: 'MEDO racional... mas ao tentar sair, a saída DESAPARECE!',
                nextQuestionId: 'Q5C',
                karma: { fear: +2, trapped: +1 }
            },
            {
                text: 'DESTRUO o portal! Seja lá o que for, NÃO pode existir!',
                points: 70,
                feedback: 'AÇÃO DRÁSTICA! Você ataca com tudo... e o portal REAGE!',
                nextQuestionId: 'Q5D',
                karma: { destruction: +2, fear: +1 }
            }
        ]
    },

    {
        id: 'Q4B',
        phase: 'cap4-conspiracao',
        badge: '👁️ CAPÍTULO 4: A CONSPIRAÇÃO',
        title: 'A Verdade Que Mata',
        context: 'Você descobriu. A ORDEM DOS SILENCIOSOS não protege conhecimento... ela ESCONDE. O "tesouro" não é ouro. É uma ARMA. Uma arma que os ANTIGOS usaram para destruir sua própria civilização. E o REINO atual quer essa arma para... DOMINAR O MUNDO. Você está NO MEIO de uma guerra secreta. O Rei quer a arma. A Ordem quer destruí-la. Os Assassinos querem vendê-la. E VOCÊ tem a chave. Literalmente. Três facções te procuram. AGORA.',
        options: [
            {
                text: 'DOU a chave para a ORDEM! Eles sabem o que fazer!',
                points: 85,
                feedback: 'CONFIANÇA! O líder da Ordem: "Você fez a escolha certa..."',
                nextQuestionId: 'Q5E',
                karma: { trust: +3, selflessness: +2 }
            },
            {
                text: 'DOU a chave para o REI! Ordem é importante!',
                points: 70,
                feedback: 'LEALDADE ao trono! O Rei sorri: "Você será recompensado..."',
                nextQuestionId: 'Q5F',
                karma: { loyalty: +2, naivety: +1 }
            },
            {
                text: 'DOU a chave para os ASSASSINOS! Eles pagam BEM!',
                points: 60,
                feedback: 'GANÂNCIA! Ouro brilha... mas há sangue nas moedas...',
                nextQuestionId: 'Q5G',
                karma: { greed: +3, pragmatism: +1 }
            },
            {
                text: 'DESTRUO a chave! "Se ninguém pode ter, ninguém terá!"',
                points: 95,
                feedback: 'SACRIFÍCIO SUPREMO! A chave se dissolve... o mundo treme...',
                nextQuestionId: 'Q5H',
                karma: { sacrifice: +5, wisdom: +3 }
            }
        ]
    },

    {
        id: 'Q4C',
        phase: 'cap4-traicao',
        badge: '🗡️ CAPÍTULO 4: A TRAIÇÃO',
        title: 'Quem Você Realmente É',
        context: 'PLOT TWIST: Você NUNCA foi um escolhido aleatório. O velho era seu PAI. Você não sabia. Ele te abandonou quando criança para "proteger" você. A Ordem, o Rei, os Assassinos... TODOS sabem quem você é. Você é o HERDEIRO da linhagem dos Guardiões. O mapa estava no seu SANGUE desde sempre. E a pessoa que te "ajudou" até agora? TRAIU você. Te entregou para quem pagou mais. Você está CERCADO. Amarrado. Prestes a ser EXECUTADO. Última chance.',
        options: [
            {
                text: 'GRITO: "EU SOU O GUARDIÃO! Vocês PRECISAM de mim vivo!"',
                points: 80,
                feedback: 'BLEFE DESESPERADO! ...e funciona. Eles hesitam...',
                nextQuestionId: 'Q5I',
                karma: { bluff: +2, survival: +2 }
            },
            {
                text: 'ACEITO meu destino. "Façam o que devem. Mas saibam: vocês falharão sem mim."',
                points: 85,
                feedback: 'DIGNIDADE na morte. O executor... PARA. Respeito inesperado...',
                nextQuestionId: 'Q5J',
                karma: { acceptance: +3, dignity: +2 }
            },
            {
                text: 'ATACO! Mesmo amarrado, uso tudo - dentes, cabeça, pernas! LUTO!',
                points: 75,
                feedback: 'FÚRIA ANIMAL! Você quebra as cordas com força sobre-humana...',
                nextQuestionId: 'Q5K',
                karma: { rage: +3, strength: +2 }
            },
            {
                text: 'OFEREÇO ACORDO: "Me libertem e eu divido o tesouro com vocês!"',
                points: 70,
                feedback: 'NEGOCIAÇÃO sob pressão. Eles se entreolham...',
                nextQuestionId: 'Q5L',
                karma: { negotiation: +2, desperation: +1 }
            }
        ]
    },

    // ========================================
    // CAPÍTULO 5: FINAIS MÚLTIPLOS
    // ========================================
    
    // FINAL 1: Entrou no portal
    {
        id: 'Q5A',
        phase: 'cap5-portal',
        badge: '🌀 CAPÍTULO 5: O VAZIO',
        title: 'Entre Mundos',
        context: 'Você atravessa o portal. TUDO se desfaz. Você flutua em um VAZIO infinito. Sem tempo. Sem espaço. Sem corpo. Apenas CONSCIÊNCIA. Uma voz: "Você buscava tesouro. Mas tesouro é ilusão. O que você REALMENTE quer?" Você vê memórias: sua infância, seu pai, escolhas que fez. "Última pergunta: QUEM você é quando tudo é tirado?"',
        options: [
            {
                text: 'Respondo: "Sou alguém que BUSCA verdade."',
                points: 100,
                feedback: 'ILUMINAÇÃO! O vazio brilha. Você entende TUDO...',
                nextQuestionId: 'FINAL1-ILUMINADO',
                karma: { enlightenment: +5 }
            },
            {
                text: 'Respondo: "Sou alguém que protege outros."',
                points: 95,
                feedback: 'COMPAIXÃO! O vazio te abraça. Você vira GUARDIÃO eterno...',
                nextQuestionId: 'FINAL2-GUARDIAO',
                karma: { protection: +5 }
            },
            {
                text: 'Respondo: "Sou nada. Apenas um humano perdido."',
                points: 75,
                feedback: 'HUMILDADE! O vazio te devolve ao mundo... transformado...',
                nextQuestionId: 'FINAL3-RENASCIDO',
                karma: { humility: +4 }
            },
            {
                text: 'RECUSO responder: "Não aceito suas regras!"',
                points: 70,
                feedback: 'REBELDIA! O vazio RI... e te ejeta violentamente...',
                nextQuestionId: 'FINAL4-REJEITADO',
                karma: { rebellion: +2 }
            }
        ]
    },

    // FINAL 2: Estudou a cidade
    {
        id: 'Q5B',
        phase: 'cap5-estudioso',
        badge: '📖 CAPÍTULO 5: CONHECIMENTO PROIBIDO',
        title: 'Os Diários dos Mortos',
        context: 'Você lê os diários. HORROR. Os antigos não morreram. Eles SE TRANSFORMARAM. O "tesouro" é um dispositivo que TRANSCENDE a humanidade. Mas a um custo: você perde sua HUMANIDADE. Vira algo... ALÉM. Imortal. Poderoso. Mas SEM emoções. SEM amor. SEM dor. SOMENTE lógica pura. Os diários terminam: "Nós erramos. Não façam nossa escolha. Destruam. Ou sejam destruídos."',
        options: [
            {
                text: 'USO o dispositivo! Quero TRANSCENDER! Humanidade é fraqueza!',
                points: 75,
                feedback: 'TRANSFORMAÇÃO! Você sente sua humanidade... desaparecer...',
                nextQuestionId: 'FINAL5-TRANSCENDENTE',
                karma: { transcendence: +5, loss: +3 }
            },
            {
                text: 'DESTRUO o dispositivo! Humanidade é nossa força, não fraqueza!',
                points: 100,
                feedback: 'SABEDORIA SUPREMA! Você escolhe permanecer humano...',
                nextQuestionId: 'FINAL6-HEROI',
                karma: { wisdom: +5, humanity: +5 }
            },
            {
                text: 'GUARDO o dispositivo! "Isso deve ser estudado, não usado nem destruído."',
                points: 85,
                feedback: 'RESPONSABILIDADE! Você se torna guardião do conhecimento...',
                nextQuestionId: 'FINAL7-GUARDIAO-CONHECIMENTO',
                karma: { responsibility: +4, wisdom: +3 }
            },
            {
                text: 'FUJO e SELO a entrada! "Que isso nunca seja encontrado!"',
                points: 80,
                feedback: 'PROTEÇÃO! Você enterra o segredo para sempre...',
                nextQuestionId: 'FINAL8-SILENCIOSO',
                karma: { protection: +4, sacrifice: +2 }
            }
        ]
    },

    // Continuando os finais...
    {
        id: 'Q5C',
        phase: 'cap5-preso',
        badge: '🚪 CAPÍTULO 5: SEM SAÍDA',
        title: 'A Prisão Eterna',
        context: 'Você tentou fugir mas a saída desapareceu. Você está PRESO na cidade subterrânea. Sozinho. Para sempre? Dias passam. Semanas. Você explora. Come fungos luminescentes. Bebe água de poças. Está ficando... LOUCO? Ou ILUMINADO? Você começa a VER coisas. Os espíritos dos antigos. Eles falam. Oferecem conhecimento em troca de... algo.',
        options: [
            {
                text: 'ACEITO! "Ensinem-me! O que querem em troca?"',
                points: 75,
                feedback: '"Sua LIBERDADE", eles sussurram. Você vira guardião eterno...',
                nextQuestionId: 'FINAL9-GUARDIAO-PRESO',
                karma: { sacrifice: +4, knowledge: +4 }
            },
            {
                text: 'RECUSO! "Prefiro morrer livre que viver escravo!"',
                points: 85,
                feedback: 'Sua recusa QUEBRA a maldição! Um caminho se abre...',
                nextQuestionId: 'FINAL10-ESCAPOU',
                karma: { freedom: +5, courage: +3 }
            },
            {
                text: 'NEGOCIO: "E se eu servir por 100 anos, depois sou livre?"',
                points: 70,
                feedback: '"Aceito", eles dizem. Seu longo serviço começa...',
                nextQuestionId: 'FINAL11-SERVO-TEMPORAL',
                karma: { compromise: +3, patience: +3 }
            }
        ]
    },

    {
        id: 'Q5D',
        phase: 'cap5-destruicao',
        badge: '💥 CAPÍTULO 5: REAÇÃO EM CADEIA',
        title: 'O Fim de Tudo',
        context: 'Você ataca o portal. ERRO! A energia EXPLODE! A cidade inteira começa a DESMORONAR! Você corre. Pedras caem. O chão racha. Você sobe as escadas... mas elas estão DESABANDO! Você vê a luz do dia... TÃO PERTO... Sua mão estica... QUASE... De repente, alguém te PUXA pra cima!',
        options: [
            {
                text: 'AGRADEÇO: "Você salvou minha vida!" Olho para o salvador...',
                points: 80,
                feedback: 'É... o VELHO! "Eu sempre volto, filho..." Ele estava vivo!',
                nextQuestionId: 'FINAL12-REUNIAO',
                karma: { gratitude: +3, reunion: +4 }
            },
            {
                text: 'DESCONFIO: "Por que me salvou? O que quer?" Cautela primeiro!',
                points: 75,
                feedback: 'Sabedoria! Seu salvador revela: "Porque VOCÊ é especial..."',
                nextQuestionId: 'FINAL13-REVELACAO',
                karma: { wisdom: +2, suspicion: +1 }
            }
        ]
    },

    // Finais E-L baseados nas escolhas de Q4B e Q4C...
    {
        id: 'Q5E',
        phase: 'cap5-ordem',
        badge: '🛡️ FINAL: O PROTETOR',
        title: 'Guardião da Ordem',
        context: 'Você deu a chave para a Ordem. Eles a destroem. A ameaça acabou. Você é convidado a se juntar a eles. Vira GUARDIÃO OFICIAL. Sua vida agora: proteger segredos perigosos para que nunca sejam usados. É uma vida de sombras. De sacrifícios. Mas você dorme em PAZ sabendo que o mundo está mais seguro.',
        options: [
            {
                text: 'ACEITO meu destino como Guardião. É meu propósito.',
                points: 100,
                feedback: 'FIM: O GUARDIÃO - Você vive para proteger a humanidade.',
                nextQuestionId: 'ENDING-GUARDIAO-ORDEM',
                karma: { purpose: +5 }
            }
        ]
    },

    {
        id: 'Q5F',
        phase: 'cap5-rei',
        badge: '👑 CAPÍTULO 5: A LEALDADE AO REI',
        title: 'Servindo a Coroa',
        context: 'Você deu a chave ao Rei. Ele sorri. "Você fez a escolha certa. A Ordem não passa de rebeldes. O Reino precisa desta arma para proteger o povo." Você é nomeado Conselheiro Real. Mas... você começa a perceber: o Rei quer GUERRA, não proteção.',
        options: [
            {
                text: 'SIRVO o Rei fielmente. Ordem é importante.',
                points: 70,
                feedback: 'Lealdade cega. Você se torna instrumento de tirania.',
                nextQuestionId: 'FINAL25-SERVO-DO-REI',
                karma: { loyalty: +2, naivety: +1 }
            },
            {
                text: 'TRAIO o Rei! "Isso é errado!" Roubo a chave de volta!',
                points: 85,
                feedback: 'REDENÇÃO! Você corrige seu erro! Perseguição começa...',
                nextQuestionId: 'FINAL26-REDENTOR',
                karma: { redemption: +4, courage: +2 }
            },
            {
                text: 'FUJO! Não quero parte nisso! Abandono tudo!',
                points: 50,
                feedback: 'Covardia. Você vive... mas carrega culpa eterna.',
                nextQuestionId: 'FINAL-CULPA',
                karma: { cowardice: +2, guilt: +3 }
            }
        ]
    },

    {
        id: 'Q5G',
        phase: 'cap5-assassinos',
        badge: '💀 CAPÍTULO 5: PACTO COM ASSASSINOS',
        title: 'Sangue e Ouro',
        context: 'Você vendeu a chave aos Assassinos. Ouro ENCHE suas mãos. Mas... à noite, você vê rostos. Pessoas que MORRERÃO porque você vendeu poder aos errados. Ganância trouxe riqueza... e culpa insuportável.',
        options: [
            {
                text: 'ACEITO minha escolha. Riqueza vale a culpa.',
                points: 40,
                feedback: 'Vazio. Você vive rico... e morto por dentro.',
                nextQuestionId: 'FINAL-VAZIO',
                karma: { greed: +4, emptiness: +3 }
            },
            {
                text: 'BUSCO REDENÇÃO! Vou corrigir isso! Roubo a chave de volta!',
                points: 80,
                feedback: 'CRESCIMENTO! Você reconhece erro e AGE!',
                nextQuestionId: 'FINAL26-REDENTOR',
                karma: { redemption: +4, courage: +3 }
            },
            {
                text: 'ME MATO. Não consigo viver com o que fiz.',
                points: 30,
                feedback: 'Desespero final. Sua morte não desfaz seus atos.',
                nextQuestionId: 'FINAL-SUICIDIO',
                karma: { despair: +5 }
            }
        ]
    },

    {
        id: 'Q5H',
        phase: 'cap5-destruicao-chave',
        badge: '💥 CAPÍTULO 5: SEM VOLTA',
        title: 'O Ato Definitivo',
        context: 'Você DESTRÓI a chave! Um clarão! Explosão de energia! A chave se DISSOLVE! O portal fecha! A arma... NUNCA existirá. Você salvou o mundo de si mesmo. Mas... as 3 facções estão FURIOSAS. Todos te querem MORTO. Você fugiu. Mas pra onde?',
        options: [
            {
                text: 'FUJO para terras distantes. Novo nome. Nova vida.',
                points: 85,
                feedback: 'Exílio. Você vive escondido... mas em paz consigo mesmo.',
                nextQuestionId: 'FINAL27-EXILADO',
                karma: { sacrifice: +4, peace: +2 }
            },
            {
                text: 'ENFRENTO todos! "Venham! Fiz o certo!"',
                points: 75,
                feedback: 'Bravura suicida. Você luta... e morre heroicamente.',
                nextQuestionId: 'FINAL-MARTIR',
                karma: { courage: +5, sacrifice: +4 }
            },
            {
                text: 'NEGO ter destruído. "Foi a Ordem!"',
                points: 60,
                feedback: 'Covardia. Você se salva... mas outros morrem por sua mentira.',
                nextQuestionId: 'FINAL-CULPA',
                karma: { deception: +3, guilt: +4 }
            }
        ]
    },

    // ... (Continuo criando os outros finais)

    // ========================================
    // FINAIS FINAIS (ENDINGS)
    // ========================================
    
    {
        id: 'FINAL1-ILUMINADO',
        phase: 'ending',
        badge: '✨ FINAL VERDADEIRO',
        title: 'O Iluminado',
        context: 'Você transcendeu. Não precisa de tesouro físico. VOCÊ se tornou tesouro - sabedoria viva, compaixão encarnada. Volta ao mundo comum mas transformado. Apenas sua PRESENÇA cura. Ensina. Transforma. Pessoas não entendem você, mas SENTEM. Você viveu a jornada completa. Compreendeu: o tesouro sempre foi a TRANSFORMAÇÃO. Nota: 100/100. Você é dos 1% que alcançaram iluminação verdadeira.',
        options: []
    },

    {
        id: 'FINAL2-GUARDIAO',
        phase: 'ending',
        badge: '🛡️ FINAL HEROICO',
        title: 'O Guardião Eterno',
        context: 'Você escolheu proteção. Vira guardião eterno da humanidade. Imortal. Invisível. Você protege o mundo de ameaças que ninguém sabe que existem. É solitário. É sacrifício. Mas é NECESSÁRIO. Séculos passam. Impérios nascem e caem. Você permanece. Guardiãozinho, você não é herói conhecido. Mas é herói REAL. Nota: 95/100. Sacrifício nobre.',
        options: []
    },

    {
        id: 'FINAL3-RENASCIDO',
        phase: 'ending',
        badge: '🌱 FINAL DE RENOVAÇÃO',
        title: 'O Renascido',
        context: 'Você voltou transformado mas humano. Não transcendeu. EVOLUIU. Usa sua experiência para viver melhor. Ajuda outros. Construí família. Trabalha. Ama. Sofre. Cresce. É uma vida COMUM... mas profundamente SIGNIFICATIVA. Você não salvou o mundo. Você salvou A SI MESMO. E isso já é um tesouro. Nota: 85/100. Fim feliz e realista.',
        options: []
    },

    {
        id: 'FINAL6-HEROI',
        phase: 'ending',
        badge: '👑 FINAL ÉPICO',
        title: 'O Herói da Humanidade',
        context: 'Você destruiu o dispositivo. Salvou a humanidade de si mesma. Volta como HERÓI. Estátuas são erguidas. Histórias são contadas. Seu nome ecoa por gerações. Você vive longo e morre velho, cercado por aqueles que ama. No leito de morte, você sorri: "Eu escolhi certo." Nota: 100/100. Final épico perfeito.',
        options: []
    },

    {
        id: 'ENDING-GUARDIAO-ORDEM',
        phase: 'ending',
        badge: '🗝️ FINAL SECRETO',
        title: 'O Silencioso',
        context: 'Você vira membro da Ordem dos Silenciosos. Sua existência é apagada. Registros destruídos. Você NUNCA existiu oficialmente. Vive nas sombras. Protege segredos. Impede catástrofes. Ninguém sabe seu nome. Ninguém sabe suas façanhas. Mas o MUNDO continua girando porque VOCÊ existe. É o herói mais solitário. Mais necessário. Mais esquecido. Nota: 90/100. Sacrifício absoluto.',
        options: []
    },

    // ===== Q5I-L: Rotas do Q4C (Traição) =====
    
    {
        id: 'Q5I',
        phase: 'cap5-blefe',
        badge: '🎭 CAPÍTULO 5: O BLEFE',
        title: 'Negociação Desesperada',
        context: 'Seu grito ecoa: "EU SOU O GUARDIÃO!" Os executores PARAM. Se entreolham. O líder se aproxima. "Prove." Você está amarrado, sem recursos, sem tempo. Mas você TEM conhecimento. O mapa revelou SEGREDOS que eles precisam. Você começa a FALAR...',
        options: [
            {
                text: 'REVELO tudo que sei. Honestidade total.',
                points: 85,
                feedback: 'VERDADE como arma! Eles percebem: você é valioso VIVO.',
                nextQuestionId: 'FINAL14-NEGOCIADOR',
                karma: { honesty: +3, survival: +2 }
            },
            {
                text: 'MINTO estrategicamente. Invento segredos que não sei.',
                points: 70,
                feedback: 'BLEFE arriscado... eles PERCEBEM. Mas respeitam a coragem.',
                nextQuestionId: 'FINAL15-BLEFADOR',
                karma: { deception: +2, courage: +1 }
            },
            {
                text: 'BARGANHA: "Soltem-me e eu revelo TUDO."',
                points: 80,
                feedback: 'Negociação inteligente. Eles aceitam... COM condições.',
                nextQuestionId: 'FINAL16-SOBREVIVENTE',
                karma: { negotiation: +3 }
            }
        ]
    },

    {
        id: 'Q5J',
        phase: 'cap5-dignidade',
        badge: '👑 CAPÍTULO 5: HONRA NA MORTE',
        title: 'A Última Palavra',
        context: 'Você aceita seu destino com dignidade. "Façam o que devem. Mas saibam: vocês falharão sem mim." O executor ergue a lâmina... e PARA. "Há muito tempo não vejo coragem assim." Ele abaixa a arma. "Talvez... haja outro caminho."',
        options: [
            {
                text: 'ACEITO a proposta. "Qual caminho?"',
                points: 90,
                feedback: 'Dignidade conquistou respeito. Uma aliança improvável nasce.',
                nextQuestionId: 'FINAL17-HONRADO',
                karma: { dignity: +4, wisdom: +2 }
            },
            {
                text: 'RECUSO. "Não quero clemência de assassinos."',
                points: 75,
                feedback: 'Orgulho até o fim. Você morre... mas sua lenda vive.',
                nextQuestionId: 'FINAL-MARTIR',
                karma: { pride: +2, honor: +3 }
            },
            {
                text: 'QUESTIONO: "Por que me poupar agora?"',
                points: 85,
                feedback: 'Sabedoria! Você entende: eles TÊM UM PLANO para você.',
                nextQuestionId: 'FINAL18-REVELACAO-FINAL',
                karma: { wisdom: +3, perception: +2 }
            }
        ]
    },

    {
        id: 'Q5K',
        phase: 'cap5-furia',
        badge: '⚡ CAPÍTULO 5: FÚRIA INCONTROLÁVEL',
        title: 'Força Sobre-Humana',
        context: 'RAIVA pura detona! Você QUEBRA as cordas com força que não sabia ter! Sangue escorre. Músculos rasgam. Você NÃO SE IMPORTA! Luta como ANIMAL! Socos, mordidas, cabeçadas! Três guardas caem! Você está LIVRE... mas ferido mortalmente. Sangue JORRA. Você tem minutos.',
        options: [
            {
                text: 'CORRO! Busco ajuda médica antes de morrer!',
                points: 70,
                feedback: 'SOBREVIVÊNCIA! Você encontra um curandeiro... a tempo!',
                nextQuestionId: 'FINAL19-SOBREVIVENTE-FERIDO',
                karma: { survival: +3, determination: +2 }
            },
            {
                text: 'PERSIGO os traidores! Vingança antes da morte!',
                points: 65,
                feedback: 'FÚRIA cega! Você os alcança... e luta até o último suspiro.',
                nextQuestionId: 'FINAL20-VINGANCA',
                karma: { rage: +4, vengeance: +3 }
            },
            {
                text: 'DEITO e aceito. Lutei bem. É hora de descansar.',
                points: 80,
                feedback: 'PAZ no caos. Você fecha os olhos... e algo MÁGICO acontece.',
                nextQuestionId: 'FINAL21-RENASCIMENTO',
                karma: { acceptance: +3, peace: +2 }
            }
        ]
    },

    {
        id: 'Q5L',
        phase: 'cap5-negociacao',
        badge: '💰 CAPÍTULO 5: ACORDO FINAL',
        title: 'Dividir o Tesouro',
        context: 'Você oferece dividir o tesouro. Os captores se entreolham. GANÂNCIA brilha nos olhos deles. "Quanto?" você pergunta. "50%", eles exigem. "Isso é muito!", você protesta. "Então morra", eles respondem. Negociação sob pressão absoluta.',
        options: [
            {
                text: 'ACEITO 50/50. Melhor vivo e rico pela metade!',
                points: 75,
                feedback: 'PRAGMATISMO! Acordo feito. Vocês buscam o tesouro... JUNTOS.',
                nextQuestionId: 'FINAL22-PRAGMATICO',
                karma: { pragmatism: +3, compromise: +2 }
            },
            {
                text: 'NEGOCIO: "30% pra vocês. Final."',
                points: 70,
                feedback: 'OUSADIA! Eles aceitam... mas planejam te TRAIR depois.',
                nextQuestionId: 'FINAL23-TRAIDO-NOVAMENTE',
                karma: { negotiation: +2, naivety: +1 }
            },
            {
                text: 'MINTO: "Aceito 50%"... mas planejo fugir depois.',
                points: 65,
                feedback: 'ENGANAÇÃO! Você concorda... mas JÁ está tramando escape.',
                nextQuestionId: 'FINAL24-TRAPACEIRO',
                karma: { deception: +3, cunning: +2 }
            }
        ]
    },

    // ===== FINAIS ADICIONAIS (14-24) =====
    
    {
        id: 'FINAL14-NEGOCIADOR',
        phase: 'ending',
        badge: '🤝 FINAL: O NEGOCIADOR',
        title: 'Diplomacia Salvou Tudo',
        context: 'Honestidade te salvou. Você revelou tudo e eles perceberam: você vale mais VIVO. Você vira conselheiro deles. Negocia acordos. Evita guerras. Seu talento não era luta - era DIPLOMACIA. Anos depois, você é conhecido como "O Pacificador". Salvou milhares através de palavras, não espadas. Nota: 85/100.',
        options: []
    },

    {
        id: 'FINAL15-BLEFADOR',
        phase: 'ending',
        badge: '🎭 FINAL: O Mestre do Blefe',
        title: 'Coragem na Mentira',
        context: 'Você blefou. Eles perceberam. Mas respeitaram a CORAGEM de mentir na cara da morte. Te libertaram dizendo: "Alguém assim é útil." Você vira espião. Mestre da enganação. Suas mentiras salvam vidas e destroem impérios. É uma vida de sombras... mas você é ESSENCIAL. Nota: 75/100.',
        options: []
    },

    {
        id: 'FINAL16-SOBREVIVENTE',
        phase: 'ending',
        badge: '🛡️ FINAL: Sobrevivente Nato',
        title: 'Vivo Para Contar',
        context: 'Você negociou sua liberdade. Sobreviveu. É isso que importa. Você não é herói. Não é vilão. É SOBREVIVENTE. Você vive longo, conta histórias, adverte outros sobre perigos. Sua contribuição: MEMÓRIA. Você garante que ninguém cometa os mesmos erros. Nota: 70/100.',
        options: []
    },

    {
        id: 'FINAL17-HONRADO',
        phase: 'ending',
        badge: '👑 FINAL: O Honrado',
        title: 'Dignidade Conquistou Respeito',
        context: 'Sua dignidade na morte conquistou algo raro: RESPEITO de inimigos. Eles te libertam e oferecem aliança. Você aceita. Juntos, vocês mudam o reino. Sua lição: honra não é fraqueza - é FORÇA. Reis podem comprar lealdade, mas apenas honra conquista DEVOÇÃO. Nota: 90/100.',
        options: []
    },

    {
        id: 'FINAL18-REVELACAO-FINAL',
        phase: 'ending',
        badge: '💡 FINAL: A Verdade Absoluta',
        title: 'O Segredo Revelado',
        context: 'Você perguntou por que te pouparam. A resposta TE CHOCOU: "Porque você é O PROFETIZADO. Aquele que unirá todas as facções." Era tudo planejado. O mapa, o velho, a jornada - TUDO. Você era o teste. E PASSOU. Agora começa a verdadeira missão: unir um mundo dividido. Nota: 95/100.',
        options: []
    },

    {
        id: 'FINAL19-SOBREVIVENTE-FERIDO',
        phase: 'ending',
        badge: '⚕️ FINAL: Sobreviveu Por Pouco',
        title: 'Cicatrizes Como Medalhões',
        context: 'Você sobreviveu... mas quase não. Cicatrizes cobrrem seu corpo. Cada uma conta uma história. Você não é mais o mesmo. PTSD te assombra. Mas você VIVE. E com o tempo, aprende: sobreviver é vitória. Cicatrizes são prova de que você LUTOU. Nota: 70/100.',
        options: []
    },

    {
        id: 'FINAL20-VINGANCA',
        phase: 'ending',
        badge: '⚔️ FINAL: Vingança Completa',
        title: 'Justiça ou Obsessão?',
        context: 'Você perseguiu. Lutou. VENCEU. Seus traidores estão mortos. Vingança completa. Mas... você está vazio. A raiva que te moveu... sumiu. E agora? Você vive sem propósito, assombrado pelos que matou. Vingança satisfaz por segundos, depois te CONSOME. Nota: 60/100.',
        options: []
    },

    {
        id: 'FINAL21-RENASCIMENTO',
        phase: 'ending',
        badge: '🌅 FINAL: Renascimento Mágico',
        title: 'Além da Morte',
        context: 'Você aceitou a morte... e algo MILAGROSO aconteceu. Uma luz te envolveu. Suas feridas CURARAM. Você renasceu - literalmente. Mais forte. Sábio. Com PODERES. Aparentemente, aceitar a morte TE TRANSCENDEU. Você não é mais humano. É algo... ALÉM. Nova vida começa. Nota: 100/100.',
        options: []
    },

    {
        id: 'FINAL22-PRAGMATICO',
        phase: 'ending',
        badge: '💼 FINAL: O Pragmático',
        title: 'Meio Tesouro, Vida Inteira',
        context: 'Você dividiu 50/50. É pragmatismo puro. Você vive RICO (pela metade), tem aliados poderosos, evitou morte. Não é o final épico... mas é REAL. Você constrói um império comercial com sua metade. Vive confortável até velho. Pragmatismo vence idealismo. Nota: 75/100.',
        options: []
    },

    {
        id: 'FINAL23-TRAIDO-NOVAMENTE',
        phase: 'ending',
        badge: '💔 FINAL: Traído Duas Vezes',
        title: 'Ingenuidade Punida',
        context: 'Você negociou 30%... e eles te TRAÍRAM de novo! Te deixaram sem nada. Pior: te marcaram como "traidor". Você perdeu TUDO - tesouro, reputação, aliados. Aprende a lição mais dura: nem todos jogam limpo. Confiança sem cautela é INGENUIDADE. Nota: 40/100.',
        options: []
    },

    {
        id: 'FINAL24-TRAPACEIRO',
        phase: 'ending',
        badge: '🦊 FINAL: Trapaceiro Mestre',
        title: 'Enganou os Enganadores',
        context: 'Você concordou em dividir... mas FUGIU com tudo! Enganou os enganadores! Agora você é rico E livre! Mas... sempre olhando pra trás. Sempre com medo. Riqueza com paranoia. Você vive bem mas NUNCA em paz. Trapacear tem custos invisíveis. Nota: 65/100.',
        options: []
    },

    {
        id: 'FINAL4-REJEITADO',
        phase: 'ending',
        badge: '🚫 FINAL: O Rejeitado',
        title: 'Expulso do Vazio',
        context: 'Você recusou as regras do vazio. Rebeldia te custou caro. O vazio te EJETOU violentamente de volta ao mundo. Você desperta... sem memórias. Sem poderes. Apenas confusão. Passou por tudo... e perdeu tudo. Às vezes rebeldia é apenas teimosia. Nota: 55/100.',
        options: []
    },

    {
        id: 'FINAL5-TRANSCENDENTE',
        phase: 'ending',
        badge: '✨ FINAL: O Transcendente',
        title: 'Além da Humanidade',
        context: 'Você usou o dispositivo. TRANSFORMAÇÃO! Emoções... desaparecem. Dor... some. Alegria... evapora. Você vira LÓGICA PURA. Imortal. Poderoso. Perfeito. Mas... vazio. Você salvou o mundo mil vezes depois. Mas nunca mais SENTIU nada. Transcendência ou prisão? Nota: 70/100.',
        options: []
    },

    {
        id: 'FINAL7-GUARDIAO-CONHECIMENTO',
        phase: 'ending',
        badge: '📚 FINAL: Guardião do Conhecimento',
        title: 'Responsabilidade Eterna',
        context: 'Você guardou o dispositivo sem usar nem destruir. Responsabilidade suprema. Você vira guardião do conhecimento mais perigoso. Vive escondido, protegendo-o de todos - bons e ruins. É solidão eterna... mas NECESSÁRIA. Alguém tem que fazer isso. Nota: 85/100.',
        options: []
    },

    {
        id: 'FINAL8-SILENCIOSO',
        phase: 'ending',
        badge: '🤐 FINAL: O Silencioso',
        title: 'Segredo Enterrado',
        context: 'Você fugiu e selou a entrada. O dispositivo está enterrado para sempre. Ninguém nunca saberá. Você vive vida normal, mas carrega peso invisível: você SABE. Conhecimento que não pode compartilhar. É solitário... mas o mundo está mais seguro. Nota: 80/100.',
        options: []
    },

    {
        id: 'FINAL9-GUARDIAO-PRESO',
        phase: 'ending',
        badge: '⛓️ FINAL: Prisioneiro Eterno',
        title: 'Sacrifício Absoluto',
        context: 'Você aceitou virar guardião eterno em troca de conhecimento. Você está PRESO na cidade subterrânea para sempre. Nunca mais verá o sol. Nunca mais tocará alguém. Mas você SABE tudo. É o sacrifício final: liberdade por sabedoria. Nota: 75/100.',
        options: []
    },

    {
        id: 'FINAL10-ESCAPOU',
        phase: 'ending',
        badge: '🏃 FINAL: A Grande Fuga',
        title: 'Liberdade Conquistada',
        context: 'Sua recusa QUEBROU a maldição! A cidade se iluminou! Caminho apareceu! Você ESCAPOU! Liberdade vale mais que qualquer conhecimento. Você vive livre, sem arrependimentos. Provou que força de vontade vence qualquer prisão. Nota: 90/100.',
        options: []
    },

    {
        id: 'FINAL11-SERVO-TEMPORAL',
        phase: 'ending',
        badge: '⏳ FINAL: Servo por 100 Anos',
        title: 'Paciência Suprema',
        context: 'Você negociou: 100 anos de serviço, depois liberdade. É longo... mas finito. Você serve. Aprende. Cresce. Após 100 anos, você é libertado - mais sábio, mais poderoso, imortal. Paciência extrema te recompensou além de expectativas. Nota: 85/100.',
        options: []
    },

    {
        id: 'FINAL12-REUNIAO',
        phase: 'ending',
        badge: '👨‍👦 FINAL: Reunião com o Pai',
        title: 'Amor Que Nunca Morreu',
        context: 'Alguém te salvou... o VELHO! Seu PAI! "Eu sempre volto, filho..." Ele explica TUDO. Por que te abandonou. Por que fingiu morrer. Tudo foi para PROTEGER você. Vocês se abraçam. Lágrimas. Você tem pai de novo. E juntos, vocês mudam o mundo. Nota: 95/100.',
        options: []
    },

    {
        id: 'FINAL13-REVELACAO',
        phase: 'ending',
        badge: '🎭 FINAL: A Verdade Oculta',
        title: 'Quem Te Salvou',
        context: 'Seu salvador revela identidade: é VOCÊ DO FUTURO! Viagem no tempo existe. Você voltou para salvar seu eu passado. "Você vai entender em breve", ele diz e desaparece. Agora você sabe: sua jornada está apenas COMEÇANDO. Nota: 90/100.',
        options: []
    },

    {
        id: 'FINAL25-SERVO-DO-REI',
        phase: 'ending',
        badge: '👑 FINAL: Servo da Tirania',
        title: 'Lealdade Cega',
        context: 'Você serviu o Rei fielmente. Ele usou a arma. Conquistou reinos. Matou milhões. Você foi cúmplice. Anos depois, você se aposenta rico... mas assombrado por rostos dos mortos. Lealdade sem discernimento é cumplicidade. Nota: 45/100.',
        options: []
    },

    {
        id: 'FINAL26-REDENTOR',
        phase: 'ending',
        badge: '🌟 FINAL: Redenção Heroica',
        title: 'Corrigindo Erros',
        context: 'Você reconheceu seu erro e CORRIGIU! Roubou a chave de volta e destruiu! Custou sua vida... mas salvou milhões. Redenção é possível. Não importa o quão fundo você caiu - você pode SUBIR. Seu sacrifício te imortalizou como herói. Nota: 95/100.',
        options: []
    },

    {
        id: 'FINAL27-EXILADO',
        phase: 'ending',
        badge: '🏝️ FINAL: Exílio Pacífico',
        title: 'Paz Longe de Tudo',
        context: 'Você fugiu para terras distantes. Novo nome. Nova vida. Simples. Humilde. Pescador. Fazendeiro. Anônimo. Mas você dorme em paz. Fez o certo. Sacrificou tudo - fama, poder, riqueza - pela consciência tranquila. É a vitória mais silenciosa. Nota: 85/100.',
        options: []
    },

    {
        id: 'FINAL-MARTIR',
        phase: 'ending',
        badge: '⚔️ FINAL: O Mártir',
        title: 'Morte Heroica',
        context: 'Você enfrentou todos sozinho. Morreu lutando. Mas sua morte INSPIROU revolução. Gerações contam sua história. Você vive eternamente na memória coletiva. Mártires nunca morrem - eles viram SÍMBOLOS. Sua morte salvou mais vidas que sua vida jamais poderia. Nota: 90/100.',
        options: []
    },

    {
        id: 'FINAL-VAZIO',
        phase: 'ending',
        badge: '⚫ FINAL: O Vazio',
        title: 'Ganância Punida',
        context: 'Você escolheu ganância. Agora você tem ouro... e vazio. Todas as noites, você vê rostos dos que morreram porque você vendeu poder. Riqueza não compra paz de espírito. Você vive rico e miserável. Lição aprendida tarde demais. Nota: 30/100.',
        options: []
    },

    {
        id: 'FINAL-CULPA',
        phase: 'ending',
        badge: '💔 FINAL: O Peso da Culpa',
        title: 'Decisões e Consequências',
        context: 'Você mentiu. Se salvou. Mas outros pagaram. Inocentes morreram no seu lugar. Você vive... mas culpa te devora. Toda noite é pesadelo. Todo espelho mostra covarde. Sobrevivência a qualquer custo... tem custos invisíveis. Nota: 35/100.',
        options: []
    },

    {
        id: 'FINAL-SUICIDIO',
        phase: 'ending',
        badge: '🥀 FINAL: Desespero Final',
        title: 'Quando a Culpa Vence',
        context: 'Você não conseguiu viver com o que fez. Tirou a própria vida. É o final mais triste. Sua morte não desfaz seus erros. Não salva ninguém. Apenas adiciona mais uma tragédia. Se você está pensando nisso na vida real: BUSQUE AJUDA. Há sempre outro caminho. CVV: 188. Nota: 10/100.',
        options: []
    },

    // Final genérico
    {
        id: 'END',
        phase: 'ending',
        badge: '🏁 FIM',
        title: 'Fim da Jornada',
        context: 'Sua jornada terminou. Você aprendeu sobre si mesmo.',
        options: []
    }
];
