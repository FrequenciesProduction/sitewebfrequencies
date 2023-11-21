<template>
  <main class="main main_box" role="main">
    <div class="head">
      <img alt="image accueil" src="/img/qui_sommes_nous_1.png">
      <h1>Devenir bénévole</h1>
    </div>

    <div class="container">
      <div class="container-intro">
        <h2>Pourquoi bénévole chez frequencies?</h2>
        <p>
          - Présenter brièvement l'importance du bénévolat dans l'association.
          - Mettre en avant les avantages du bénévolat, tels que l'impact positif sur la communauté et l'opportunité de
          contribuer à un projet significatif.
        </p>
      </div>

      <div class="container-process">
        <h2>Comment devenir bénévole chez frequencies?</h2>
        <p>
          - Expliquer étape par étape comment les visiteurs peuvent devenir bénévoles,
          y compris la soumission d'une candidature et les critères de sélection.
          - Mettre en évidence les compétences ou les expériences souhaitées pour les bénévoles.
        </p>
      </div>

      <div class="container-testimonial">
        <h2>Qu'en pensent nos bénévoles?</h2>
        <p>
          - Partager des témoignages de bénévoles actuels pour donner un aperçu de leur expérience et de l'impact de
          leur travail.
          - Inclure des photos et des histoires personnelles de bénévoles pour rendre le contenu plus authentique.
        </p>
      </div>

      <div class="container-form">
        <h2>Inscription</h2>
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
  </main>
</template>

<script setup>
useHead({
  title: 'Devenir un bénévole'
})
</script>