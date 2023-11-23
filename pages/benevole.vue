<template>
  <main class="main main_box" role="main">
    <div class="container__head">
      <img alt="image accueil" src="/img/qui_sommes_nous_1.png">
      <h2>Devenir bénévole</h2>
    </div>

    <div class="container">
      <div class="cards_content1">
        <div class="card__content-intro">
          <h3>Pourquoi devenir bénévole chez frequencies?</h3>
          <p>
            - Présenter brièvement l'importance du bénévolat dans l'association.
            - Mettre en avant les avantages du bénévolat, tels que l'impact positif sur la communauté et l'opportunité
            de
            contribuer à un projet significatif.
          </p>
        </div>

        <div class="card__content-process">
          <h3>Comment devenir bénévole chez frequencies?</h3>
          <p>
            - Expliquer étape par étape comment les visiteurs peuvent devenir bénévoles,
            y compris la soumission d'une candidature et les critères de sélection.
            - Mettre en évidence les compétences ou les expériences souhaitées pour les bénévoles.
          </p>
        </div>
      </div>

      <div class="cards_content2">
        <div class="card__content-testimonial">
          <h3>Qu'en pensent nos bénévoles?</h3>
          <p>
            - Partager des témoignages de bénévoles actuels pour donner un aperçu de leur expérience et de l'impact de
            leur travail.
            - Inclure des photos et des histoires personnelles de bénévoles pour rendre le contenu plus authentique.
          </p>
        </div>

        <div class="card__content-form">
          <h3>Inscription</h3>
          <form @submit.prevent="signup">
            <input v-model="name" placeholder="Votre nom" type="text">
            <input v-model="firstname" placeholder="Votre prénom" type="text">
            <input v-model="email" placeholder="Votre email" type="email">
            <input v-model="password" placeholder="Mot de passe" type="password">
            <input v-model="passwordConfirm" placeholder="Confirmation" type="password">

            <div v-if="authStatus === 'loading'" class="loader"></div>

            <div v-else class="btn--group">
              <button class="btn--green" type="submit">Inscription</button>
              <button class="btn--green--alt" @click="login('Login')">Connexion</button>
            </div>
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