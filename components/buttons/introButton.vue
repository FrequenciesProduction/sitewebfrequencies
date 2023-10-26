<template>
  <a class="button--white" href="{{ lien }}" target="_blank">
        {{ texte }}
    <span aria-label="Ouvre un nouvel onglet"></span>
    </a>
</template>

<script>
    export default {
        props: {
            lien: {
                type: String
            },
            texte: {
                type: String
            },
            label: {
                type: String
            },
            btnClass: {
                type: String
            }
        }
    }
</script>

<style scoped>
@import 'assets/styles/buttons.modules.scss';
</style>