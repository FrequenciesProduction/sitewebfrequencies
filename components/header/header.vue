<template>
  <header class="header" role="banner">
    <a aria-label="retour à l'accueil" class="logo" href="/static">
        <img
          class="img-logo"
          src="/logo_facebook.jpg"
          alt="logo frequencies"
          width="64"
          height="64"
        />
      </a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
    <ul class="menu">
      <li>
        <NuxtLink class="button--white" to="/projets">Nos projets</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink class="button--white" to="/emissions">Nos émissions</NuxtLink>
      </li> -->
      <li>
        <NuxtLink class="button--white" to="/projetsv2">Projets V2</NuxtLink>
      </li>
      <li>
        <NuxtLink class="button--white" to="/description">Qui sommes nous ?</NuxtLink>
      </li>
      <li>
        <a class="button--blue" href="https://frequencies.assoconnect.com/collect/description/340064-c-collecte-de-dons-pour-frequencies" target="blank">
          Faire un don
          <span aria-label="ouvre un nouvel onglet"></span>
        </a>
      </li>
    </ul>
  </header>
</template>


<style>
@import './header.modules.scss';
</style>
