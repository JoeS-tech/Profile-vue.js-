//remplir les tableaux dans data sur app.js avec vos  contenus
// utiliser des v-for pour afficher tout les tableaux de data
// faire un peu de css pour rendre le projet jolie

var vm = new Vue({
  el: "#app",
  data: {
    exp: [
      {
        project: "Digital Books",
        Tasks: "Créer un site web avec une boutique en utilisant vue.js à l’aide des routers en vue.js, relié au html, on a construit un site web dynamique et fonctionnel et en créant des boutons en routers, cela permet d’accéder aux pages plus facilement et beaucoup plus rapides !",
      },
      {
        project: "Projet Disquaire",
        Tasks: "Créer une base de donnée intégré au site web utilisant php et mySQL. Toutes les données sont stockées dans MySQL pour accéder au site web.",
      },
      {
        project: "Reminder (projet Laravel)",
        Tasks: "Un mise en forme de site web (Trello-like) a été adapté. Utilisant une base de donnée mySQL avec les commandes en Laravel, on a pu créer un tableau de bord personnalisable par profile.",
      },
      {
        project: "Reeasy",
        Tasks: "Une application mobile utilisant la géolocalisation a été adapté avec Laravel en intégrant vue.js pour donner un concept d’app web et mobile.",
      },
    ],
    formation: [
      {
        name: "Lebocal",
        titre: "Développeur web et mobile full-stack (Bac+2)",
        dateA: "01/09/2020",
        dateD: "22/12/2020",
      },
    ],
    skills: ["HTML", "CSS", "Java Script", "JQuery", "VueJS", "Laravel", "WordPress"],
    me: [{ firstName: "Joseph", lastName: "Schulman" }],
  },
});
