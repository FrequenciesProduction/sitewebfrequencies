<template>
  <header class="header" role="banner">
    <NuxtLink aria-label="retour à l'accueil" class="logo" to="/">
        <img class="img-logo" src="img/logo_facebook.jpg" alt="logo frequencies"/>
    </NuxtLink>
    <input id="menu-btn" class="menu-btn" type="checkbox" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
    <ul class="menu">
      <li>
        <router-link class="button--white" to="/projets">Nos projets</router-link>
      </li>
      <li>
        <router-link class="button--white" to="/description">Qui sommes nous ?</router-link>
      </li>
    </ul>
    <a class="button--blue"
       href="https://frequencies.assoconnect.com/collect/description/340064-c-collecte-de-dons-pour-frequencies"
       target="blank">
      Faire un don
      <span aria-label="ouvre un nouvel onglet"></span>
    </a>
  </header>
</template>


<style>
@import './header.modules.scss';
</style>
<script lang="ts" setup>
</script>