<template>
  <main class="main main_box" role="main">
    <div class="container__head">
      <img alt="image accueil" src="/img/qui_sommes_nous_1.png">
      <h2>Devenir bénévole</h2>
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
          <form @submit.prevent="login">
            <div>
              <label for="firstName">first name</label>
              <input v-model="firstName" name="firstName" placeholder="first name">
            </div>
            <div>
              <label for="lastName">last name</label>
              <input v-model="lastName" name="lastName" placeholder="last name">
            </div>
            <div>
              <div>
                <label for="email">email</label>
                <input v-model="email" name="email" placeholder="email">
              </div>
              <label for="password">password</label>
              <input v-model="password" name="password" placeholder="password" type="password">
            </div>
            <button type="submit" value="register">S'inscrire</button>
            <button type="submit" value="login">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import '/assets/styles/benevole.modules.scss'

useHead({
  title: 'Devenir un bénévole'
})
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },

  methods: {
    submit() {
      console.log(this.name)
    }
  }
}

</script>