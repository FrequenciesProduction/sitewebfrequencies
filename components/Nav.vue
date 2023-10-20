<template>
  <header class="header" role="banner">
      <NuxtLink to="/" class="logo" aria-label="retour à l'accueil">
        <img class="img-logo" src="img/logo_facebook.jpg" alt="logo frequencies" width="64" height="64"/>
      </NuxtLink>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
    <ul class="menu">
      <li>
        <router-link class="button--white" to="/projets">Nos projets</router-link>
      </li>
      <!-- <li>
        <router-link class="button--white" to="/emissions">Nos émissions</router-link>
      </li> -->
      <li>
        <router-link class="button--white" to="/projetsv2">Projets V2</router-link>
      </li>
      <li>
        <router-link class="button--white" to="/description">Qui sommes nous ?</router-link>
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


<style scoped>
body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
}

.header {
  background-image: linear-gradient(#141414 90%, hsla(0, 0%, 8%, 0));
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.header li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid #c23636;
  margin: 1vw;
}

.img-logo {
}

/* menu */

.menu {
    display: flex;
}
.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

ul.menu > li {
    display: flex;
}

ul.menu > li > a {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #fff;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #fff;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* Media queries */
/* 750 */
@media (min-width: 46.875rem) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}

/* 600 (très petit) */
@media (max-width: 37.5rem) {
  ul.menu {
    font-size: .75rem
  }
}
</style>
