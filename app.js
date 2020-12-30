//remplir les tableaux dans data sur app.js avec vos  contenus
// utiliser des v-for pour afficher tout les tableaux de data
// faire un peu de css pour rendre le projet jolie

var vm = new Vue({
  el: "#app",
  data: {
    exp: [
      {
        name: "Bac+2 en dév",
        post: "Développeur web et mobile",
        dateA: "01/01/2020",
        dateD: "01/04/2020",
      },
    ],
    formation: [
      {
        name: "Lebocal",
        titre: "Développeur web et mobile full-stack",
        dateA: "01/09/2020",
        dateD: "22/12/2020",
      },
    ],
    skills: ["HTML", "CSS", "Java Script", "JQuery", "VueJS", "Laravel", "WordPress"],
    me: [{ firstName: "Joseph", lastName: "Schulman" }],
  },
});
