<template>
  <a class="button--white" href="{{ link }}" target="_blank">
        {{ texte }}
    <span aria-label="Ouvre un nouvel onglet"></span>
    </a>
</template>

<script>
    export default {
      props: ['texte', 'lien']
    }
</script>

<style scoped>
@import 'assets/styles/buttons.modules.scss';
</style>