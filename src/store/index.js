import { createStore } from "vuex";

export default createStore({
  state: {
    activeCategory: 0,
    quiz: [
      {
        title: "Game of Thrones",
        quote:
          "Quand on joue au jeu des Trônes, soit on gagne, soit on meurt. Il n'y a pas de compromis.",
        source: "Cercei Lannister",
        questions: [
          {
            title:
              "Quelle est la première intention de Jorah Mormont lorsqu'il se met au service des Targaryen ?",
            choices: [
              {
                text:
                  "Monter une armée avec les Targaryen et ainsi se venger d'Eddard Stark"
              },
              {
                text:
                  "Espionner pour le roi et ainsi obtenir une amnistie lui permettant de revenir à Westeros",
                correct: true
              },
              {
                text:
                  "Épouser Daenerys et ainsi devenir roi lorsqu'elle s'emparera du trône"
              },
              {
                text: "Assassiner les derniers Targaryen sous ordre du roi"
              }
            ]
          },
          {
            title:
              "Qui est surnommée la Reine des Épines en raison de son caractère des plus piquants ?",
            choices: [
              {
                text: "Cersei Lannister"
              },
              {
                text: "Olenna Tyrell",
                correct: true
              },
              {
                text: "Lisa Arryn"
              },
              { text: "Catelyn Stark" }
            ]
          },
          {
            title: "Que signifie Valar Morghulis ?",
            choices: [
              {
                text: "La nuit est sombre et pleine de terreurs"
              },
              { text: "Tout homme doit servir" },
              {
                text: "Le Val d'Arryn est tombé"
              },
              {
                text: "Tout homme doit mourir",
                correct: true
              }
            ]
          },
          {
            title:
              "Dans la saison 8, quelle stratégie Tyrion adopte pour persuader Cersei de se rendre ?",
            choices: [
              {
                text: "Il lui dit qu'elle sera épargnée"
              },
              {
                text: "Il en appelle à son humanité"
              },
              {
                text: "Il évoque son bébé à naître",
                correct: true
              },
              { text: "Il lui dit que Jaime est en route" }
            ]
          },
          {
            title:
              "Quel est le nom du dragon que Jon chevauche pour la première fois ?",
            choices: [
              {
                text: "Drogon"
              },
              {
                text: "Rhaegal",
                correct: true
              },
              {
                text: "Viserion"
              },
              {
                text: "Balerion"
              }
            ]
          },
          {
            title: "Qui est responsable de la création du Roi de la nuit ?",
            choices: [
              {
                text: "Les Enfants de la forêt",
                correct: true
              },
              {
                text: "Le Seigneur de la lumière"
              },
              {
                text: "Le Dieu noyé"
              },
              {
                text: "Les Premiers hommes"
              }
            ]
          },
          {
            title: "Quel est le nom du loup géant de Jon Snow ?",
            choices: [
              {
                text: "Fantôme",
                correct: true
              },
              {
                text: "Été"
              },
              {
                text: "Nymeria"
              },
              {
                text: "Vent Gris"
              }
            ]
          },
          {
            title:
              "Quelle punition Arya doit-elle endurer pour avoir volé le Dieu Multiface ?",
            choices: [
              {
                text: "La perte de la mémoire"
              },
              {
                text: "La mort"
              },
              {
                text: "La perte de l'audition"
              },
              {
                text: "La cécité",
                correct: true
              }
            ]
          },
          {
            title:
              "Qui est à l'origine de la citation « Tu ne sais rien, Jon Snow » ?",
            choices: [
              {
                text: "Cercei Lannister"
              },
              {
                text: "Ygritte",
                correct: true
              },
              {
                text: "Podrick Payne"
              },
              {
                text: "Melissandre"
              }
            ]
          },
          {
            title: "Pourquoi Samwell Tarly rejoint-il la Garde de nuit ?",
            choices: [
              {
                text: "Par sanction pour avoir volé"
              },
              {
                text: "En tant qu'orphelin, il n'avait pas le choix"
              },
              {
                text: "Son père menace de le tuer s'il refuse de la rejoindre",
                correct: true
              },
              {
                text: "Par conviction pour défendre le Mur des sauvageons"
              }
            ]
          }
        ]
      },
      {
        title: "Star Wars",
        quote:
          "La peur est le chemin vers le côté obscur : la peur mène à la colère, la colère mène à la haine, la haine mène à la souffrance.",
        source: "Yoda",
        questions: [
          {
            title:
              "Sur quelle planète Luke Skywalker rencontre-t-il Yoda pour la première fois ?",
            choices: [
              {
                text: "Naboo"
              },
              {
                text: "Dagobah",
                correct: true
              },
              {
                text: "Yavin IV"
              },
              { text: "Tatooine" }
            ]
          },
          {
            title: "Quel est l'ordre 66 ?",
            choices: [
              {
                text: "L'ordre donné aux clones de tuer tous les Jedi",
                correct: true
              },
              {
                text:
                  "L'ordre donné aux clones de libérer Anakin et Padmé sur la planète Géonosis"
              },
              {
                text:
                  "L'ordre donné aux rebelles de dérober les plans de l'Étoile noire"
              },
              { text: "L'ordre donné aux rebelles de détruire l'Étoile noire" }
            ]
          },
          {
            title: "Combien de soleils possède Tatooine ?",
            choices: [
              {
                text: "0"
              },
              {
                text: "1"
              },
              { text: "2", correct: true },
              { text: "3" }
            ]
          },
          {
            title:
              "Comment se nomme la course gagnée par Anakin Skywalker dans l'épisode « ­La Menace Fantôme ? »",
            choices: [
              {
                text: "Le rallye enflammé"
              },
              {
                text: "La Course de Phoebos"
              },
              { text: "La Vinta Harvest" },
              { text: "Le classique de la Boonta", correct: true }
            ]
          },
          {
            title:
              "Pourquoi les Ewoks aident-ils finalement les membres de l'Alliance rebelle ?",
            choices: [
              {
                text: "Parce-qu'ils pensent que C-3PO est un dieu",
                correct: true
              },
              {
                text: "Pour protéger leur territoire"
              },
              { text: "Parce-qu'ils y sont obligés par Luke" },
              { text: "Parce-que l'Alliance leur a promis des richesses" }
            ]
          },
          {
            title:
              "Dans l'épisode IV, où la princesse Leia cache-t-elle les plans de l’Etoile noire ?",
            choices: [
              {
                text: "Sous les racines d'un arbre de la planète Naboo"
              },
              {
                text: "A bord du vaisseau Faucon Millenium"
              },
              { text: "Dans la mémoire de R2-D2", correct: true },
              { text: "Dans un avant-poste de la Rébellion sur Hoth" }
            ]
          },
          {
            title:
              "Sur quelle planète a lieu l'affrontement final entre Obi-Wan Kenobi et Anakin Skywalker ?",
            choices: [
              {
                text: "Kamino"
              },
              {
                text: "Coruscant"
              },
              { text: "Felucia" },
              { text: "Mustafar", correct: true }
            ]
          }
        ]
      },
      {
        title: "Le Seigneur des Anneaux",
        quote:
          "Un magicien n'est jamais en retard, ni en avance d'ailleurs. Il arrive précisément à l'heure prévue.",
        source: "Gandalf",
        questions: [
          {
            title: "Comment s'appellent les cavaliers du Rohan ?",
            choices: [
              { text: "Les Dùnedain" },
              { text: "Les Rohirrim", correct: true },
              { text: "Les Edain" },
              { text: "Les Orientaux" }
            ]
          },
          {
            title: "De qui Aragorn est-il le descendant ?",
            choices: [
              { text: "Denethor" },
              { text: "Sauron" },
              { text: "Eorl" },
              { text: "Isildur", correct: true }
            ]
          },
          {
            title: "Comment se nomme l'araignée qui garde Cirith Ungol ?",
            choices: [
              { text: "Shelob", correct: true },
              { text: "Shagrat" },
              { text: "Sheila" },
              { text: "Narseil" }
            ]
          },
          {
            title:
              "Que se passe t-il lorsque Arwen donne son médaillon à Aragorn ?",
            choices: [
              { text: "Arwen perd son immortalité", correct: true },
              { text: "Aragorn devient immortel" },
              { text: "Arwen est répudiée par son père" },
              { text: "Aragorn devient le Roi Elessar" }
            ]
          },
          {
            title:
              "À travers quel artefact Saroumane communique t-il avec Sauron ?",
            choices: [
              { text: "Le miroir de Galadriel" },
              { text: "Son bâton de magicien" },
              { text: "Le Palantír", correct: true },
              { text: "La pierre d’Erech" }
            ]
          },
          {
            title: "Que sont les Nazgûl ?",
            choices: [
              { text: "Des orques dirigés par Azog le Profanateur" },
              {
                text:
                  "D'anciens rois et seigneurs corrompus par le pouvoir de Sauron",
                correct: true
              },
              { text: "Des esprits vengeurs du Mordor" },
              { text: "Des invocations de Saroumane" }
            ]
          },
          {
            title: "Quel est le chef des Nazgûl ?",
            choices: [
              { text: "Dwalïn" },
              { text: "Morgoth" },
              { text: "Hoarmurath" },
              { text: "Le Roi-Sorcier d'Angmar", correct: true }
            ]
          },
          {
            title: "Où se trouve la forteresse de Saroumane ?",
            choices: [
              { text: "Au Mordor" },
              { text: "Dans la Forêt Noire" },
              { text: "À Isengard", correct: true },
              { text: "Dans la Comté" }
            ]
          }
        ]
      },
      {
        title: "Doctor Who (2005)",
        quote:
          "Lorsque j'étais petite, j'avais un ami imaginaire, et lorsque j'ai grandi il est revenu. Il s'appelle le Docteur. Il vient de partout ailleurs. Il possède une boîte appelée le TARDIS qui est plus grande à l'intérieur qu'à l'extérieur et qui peut voyager n'importe où dans le temps et l'espace. J'ai fui avec lui, et depuis, nous n'avons cessé de courir.",
        source: "Amelia Pond",
        questions: [
          {
            title:
              "Le Docteur et Rose Tyler sont liés à jamais par les mots « Bad Wolf ». Mais comment ces mots se sont-ils retrouvés éparpillés dans le temps et l’espace ?",
            choices: [
              {
                text:
                  "Rose les a placés lorsqu’elle était possédée par le vortex temporel",
                correct: true
              },
              {
                text:
                  "Le Docteur les a placés après les événements, changeant sa propre ligne temporelle"
              },
              {
                text:
                  "River Song les a placés afin d’avertir le Docteur des dangers à venir"
              },
              {
                text:
                  "Le Maître les a placés dans le but de provoquer le Docteur"
              }
            ]
          },
          {
            title:
              "Dans le premier épisode de la saison 5, après avoir fait la connaissance de la jeune Amelia Pond, le Docteur doit prendre le TARDIS et promet de revenir 5 minutes plus tard. Combien de temps Amelia devra-t-elle finalement attendre ?",
            choices: [
              {
                text: "12 heures"
              },
              {
                text: "12 semaines"
              },
              {
                text: "12 mois"
              },
              {
                text: "12 ans",
                correct: true
              }
            ]
          },
          {
            title:
              "Quel pseudonyme le Docteur utilise t-il lorsqu'il souhaite se faire passer pour un humain ?",
            choices: [
              {
                text: "John Smith",
                correct: true
              },
              {
                text: "Harry Davis"
              },
              {
                text: "Peter Allen"
              },
              {
                text: "Gabriel Bond"
              }
            ]
          },
          {
            title:
              "Dans l'épisode « Le Seigneur des Rêves » (Amy's Choice), quelle réalité est la bonne ?",
            choices: [
              {
                text: "Leadworth"
              },
              {
                text: "Le TARDIS"
              },
              {
                text: "Les deux mondes"
              },
              {
                text: "Aucun des deux mondes",
                correct: true
              }
            ]
          },
          {
            title:
              "Sous quel monument le Docteur et Amelia trouvent Pandorica, la prison contenant la chose la plus crainte de l'univers ?",
            choices: [
              {
                text: "La statue de la Liberté"
              },
              {
                text: "Stonehenge",
                correct: true
              },
              {
                text: "Le temple d'Artémis"
              },
              {
                text: "Le Colisée"
              }
            ]
          },
          {
            title:
              "Dans l’épisode « Le Mariage de River Song » (The Wedding of River Song), alors que le Docteur et River Song viennent de se marier, que murmure le Docteur à l’oreille de sa nouvelle épouse ?",
            choices: [
              {
                text: "Il lui révèle son véritable nom"
              },
              {
                text: "Il lui dit de regarder dans son œil ",
                correct: true
              },
              {
                text: "Il lui dit qu'il l'aime"
              },
              {
                text: "Il lui propose de partir en lune de miel "
              }
            ]
          },
          {
            title:
              "Dans l’épisode « Les Anges Pleureurs » (Blink), quel conseil le Docteur donne t-il à Sally Sparrow afin de se protéger des anges pleureurs ?",
            choices: [
              {
                text: "Il lui dit de ne faire aucun bruit"
              },
              {
                text: "Il lui dit de ne pas croiser leurs regards"
              },
              {
                text: "Il lui dit de les garder constamment en vue",
                correct: true
              },
              {
                text: "Il lui dit de garder les yeux fermer"
              }
            ]
          },
          {
            title: "Qu'est-ce que le « Moment » ?",
            choices: [
              {
                text:
                  "Une émission télévisée futuriste présentée par Anne Droïd"
              },
              {
                text: "Une prophétie des Moines sans Tête"
              },
              {
                text: "Il s'agit de l'heure de la mort du Docteur"
              },
              {
                text:
                  "La plus puissante et la plus dangereuse de toutes les armes de l'univers",
                correct: true
              }
            ]
          },
          {
            title:
              "Que peut-on trouver sur « Planet One », la planète considérée comme étant la plus vieille de l'univers ?",
            choices: [
              {
                text: "Un enfant hors du temps"
              },
              {
                text: "Un désert sans fin"
              },
              {
                text: "Une falaise de diamants",
                correct: true
              },
              {
                text: "Un cimetière de TARDIS"
              }
            ]
          }
        ]
      }
    ],
    startQuiz: false,
    questionIndex: 0,
    selectedChoice: null,
    questionsNumber: null,
    showError: false,
    showResults: false,
    userAnswers: [],
    correctAnswers: 0,
    showCorrection: false
  },
  getters: {
    getActiveCategory: state => state.activeCategory,
    getQuiz: state => state.quiz,
    getStartQuiz: state => state.startQuiz,
    getQuestionIndex: state => state.questionIndex,
    getShowError: state => state.showError,
    getSelectedChoice: state => state.selectedChoice,
    getQuestionsNumber: state => {
      state.questionsNumber = state.quiz[state.activeCategory].questions.length;
      return state.questionsNumber;
    },
    getUserAnswers: state => state.userAnswers,
    getShowResults: state => state.showResults,
    getCorrectAnswers: state => state.correctAnswers,
    getShowCorrection: state => state.showCorrection
  },
  mutations: {
    setActiveCategory: (state, payload) => {
      state.activeCategory = payload;
      state.startQuiz = false;
      state.questionIndex = 0;
      state.selectedChoice = null;
      state.showError = false;
      state.showResults = false;
      state.userAnswers = [];
      state.showCorrection = false;
    },
    startQuiz: state => (state.startQuiz = true),
    decrementIndex: state => state.questionIndex--,
    incrementIndex: state => {
      state.questionIndex++;
      state.selectedChoice = null;
    },
    setSelectedChoice: (state, payload) => (state.selectedChoice = payload),
    restartQuiz: state => {
      state.startQuiz = false;
      state.showResults = false;
      state.questionIndex = 0;
      state.userAnswers = [];
      state.showCorrection = false;
    },
    prevQuestion: state => {
      if (state.questionIndex > 0) {
        state.questionIndex--;
        state.userAnswers.pop();
        state.selectedChoice = null;
        window.scrollTo(0, 0);
      }
    },
    nextQuestion: state => {
      if (state.selectedChoice === null) {
        state.showError = true;
      } else {
        state.showError = false;
        state.questionIndex++;

        state.userAnswers.push({
          question:
            state.quiz[state.activeCategory].questions[state.questionIndex - 1]
              .title,
          correctAnswer: state.quiz[state.activeCategory].questions[
            state.questionIndex - 1
          ].choices.find(text => text.correct).text,
          selectedChoice:
            state.quiz[state.activeCategory].questions[state.questionIndex - 1]
              .choices[state.selectedChoice].text
        });

        if (
          state.questionIndex >
          state.quiz[state.activeCategory].questions.length - 1
        ) {
          state.showResults = true;
        }

        state.selectedChoice = null;

        window.scrollTo(0, 0);
      }
    },
    showCorrection: state => (state.showCorrection = true)
  },
  actions: {
    setActiveCategory: ({ commit }, payload) =>
      commit("setActiveCategory", payload),
    startQuiz: ({ commit }) => commit("startQuiz"),
    decrementIndex: ({ commit }) => commit("decrementIndex"),
    incrementIndex: ({ commit }) => commit("incrementIndex"),
    setSelectedChoice: ({ commit }, payload) =>
      commit("setSelectedChoice", payload),
    restartQuiz: ({ commit }) => commit("restartQuiz"),
    prevQuestion: ({ commit }) => commit("prevQuestion"),
    nextQuestion: ({ commit }) => commit("nextQuestion"),
    showCorrection: ({ commit }) => commit("showCorrection")
  },
  modules: {}
});
