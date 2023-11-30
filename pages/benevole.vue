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

        <div class="card__content-mini">
          <h3>Inscription</h3>
          <!-- <form @submit.prevent="login">-->
            <input v-model="firstname" placeholder="Votre prénom" type="firstname">
            <input v-model="lastname" placeholder="Votre nom" type="lastname">

            <input v-model="email" placeholder="Votre email" type="email">
            <input v-model="password" placeholder="Mot de passe" type="password">

            <div class="btn--group">
              <button class="btn--green" type="submit">Connexion</button>
              <button class="btn--green--alt" @click="signup('Signup')">Inscription</button>
            </div>
          <!-- </form>-->
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "/assets/styles/benevole.modules.scss";
</style>

<script>

export default {
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
      const {firstname, lastname, email, password} = this;
      const res = await $fetch(
          "https://frequencies-web-default-rtdb.europe-west1.firebasedatabase.app/utilisateurs",
          {
            method: "POST",
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
    }
  }
};
</script>