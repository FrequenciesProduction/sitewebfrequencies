<template>
    <header class="bandeau" role="banner">
        <NuxtLink to="/" aria-label="retour à l'accueil">
            <img class="logo" src="/logo_facebook.jpg" alt="logo frequencies"/>
        </NuxtLink>
        <nav role="navigation">
          <ul>
            <li>
              <NuxtLink class="button--white" to="/projets">Nos projets</NuxtLink>
            </li>
            <li>
              <NuxtLink class="button--white" to="/description">Qui sommes nous ?</NuxtLink>
            </li>
            <li>
              <a class="button--blue" href="https://linktr.ee/don.frequencies" target="blank">Faire un don<span aria-label="ouvre un nouvel onglet"></span></a>
            </li>
          </ul>
        </nav>
      </header>
</template>

<style scoped>
.bandeau {
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-image: linear-gradient(rgba(20,20,20,1) 90%, rgba(20,20,20,0));
}
.logo {
  border-radius: 8px;
  border: 1px solid #c23636;
  overflow: hidden;
  width: clamp(10px, 4vw, 300px);
  margin: 1vw;
}

nav {
  display: flex;
}

</style>