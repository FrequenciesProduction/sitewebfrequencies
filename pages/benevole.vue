<template>
  <main class="main main_box" role="main">
    <div class="container__head">
      <img alt="image accueil" src="/img/qui_sommes_nous_1.png">
      <h2>Inscription</h2>
    </div>

    <div class="container">
      <div class="cards__content">
        <div class="card__content-mini">
          <h3>Pourquoi devenir bénévole chez frequencies?</h3>
          <p>
            - Présenter brièvement l'importance du bénévolat dans l'association.
            - Mettre en avant les avantages du bénévolat, tels que l'impact positif sur la communauté et l'opportunité
            de
            contribuer à un projet significatif.
          </p>
        </div>

        <div class="card__content-mini">
          <h3>Comment devenir bénévole chez frequencies?</h3>
          <p>
            - Expliquer étape par étape comment les visiteurs peuvent devenir bénévoles,
            y compris la soumission d'une candidature et les critères de sélection.
            - Mettre en évidence les compétences ou les expériences souhaitées pour les bénévoles.
          </p>
        </div>
      </div>

      <div class="cards__content">
        <div class="card__content-mini">
          <h3>Qu'en pensent nos bénévoles?</h3>
          <p>
            - Partager des témoignages de bénévoles actuels pour donner un aperçu de leur expérience et de l'impact de
            leur travail.
            - Inclure des photos et des histoires personnelles de bénévoles pour rendre le contenu plus authentique.
          </p>
        </div>

        < class="card__content-mini">
          <h3>Inscription</h3>
<
        <donatedButton
            link="https://docs.google.com/forms/d/e/1FAIpQLSc9T5X5v1Ydinnh5OY0PR2RWsXEp_Ac5zkPIKZrpblGRT2S4g/viewform" />


        <donatedButton
            link="https://docs.google.com/forms/d/e/1FAIpQLSc9T5X5v1Ydinnh5OY0PR2RWsXEp_Ac5zkPIKZrpblGRT2S4g/viewform" />

      </div>
    </div>
  </main>
</template>

<style>
@import './assets/styles/benevole.scss';
</style>

<script>

import DonatedButton from "~/components/buttons/donatedButton.vue";

export default {
  components: {DonatedButton},
  setup() {
    useHead({
      title: 'Inscription'
    })
    const route = useRoute()
    const name = route.query.user

    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const {email, password} = this;
      const res = await $fetch(
          "https://frequencies-web-default-rtdb.europe-west1.firebasedatabase.app/utilisateurs",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              firstname,
              lastname,
              email,
              password
            })
          }
      );
      const data = await res.json();
      console.log(data);
    },

    async signup() {
      const {firstname, lastname, email, password} = this;
      const res = await $fetch(
          "https://frequencies-web-default-rtdb.europe-west1.firebasedatabase.app/utilisateurs",
          {
            method: "GET",
            headers: {}
          }
      )
    }
  }
};
</script>