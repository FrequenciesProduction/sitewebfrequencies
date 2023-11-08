<template>
  <header id="header" aria-label="En-tete" class="header" role="banner">
    <NuxtLink aria-label="retour à l'accueil" class="logo" to="/">
        <img class="img-logo" src="/img/logo_facebook.jpg" alt="logo frequencies"/>
    </NuxtLink>
    <input id="menu-btn" class="menu-btn" type="checkbox" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
    <ul class="menu">
      <li>
        <menuButton
            btnClass="menu--button"
            lien="/projets"
            label="Nos projets"
            texte="Nos projets" />
        <!-- <router-link class="menu-button" to="/projets">Nos projets</router-link>-->
      </li>
      <li>
        <menuButton
            btnClass="menu--button"
            lien="/description"
            label="Qui sommes-nous ?"
            texte="Qui sommes nous?" />
        <!-- <router-link class="button--white" to="/description">Qui sommes nous ?</router-link>-->
      </li>
    </ul>
    <donatedButton
        btnClass="donated--button"
        texte="Faire un don"
        lien="https://frequencies.assoconnect.com/collect/description/340064-c-collecte-de-dons-pour-frequencies"
        label="Faire un don"
        />
  </header>
</template>


<style>
  @import './header.modules.scss';
</style>
<script>

import {defineComponent} from "vue";
import MenuButton from "~/components/buttons/menuButton.vue";
import DonatedButton from "~/components/buttons/donatedButton.vue";

export default defineComponent({
  components: {DonatedButton, MenuButton}
})
</script>