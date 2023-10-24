<template>
    <a href="{{ link }}" class="button--white" target="_blank">
        {{ texte }}
        <span aria-label="Ouvre un nouvel onglet"></span>
    </a>
</template>

<script>
    export default {
        props: ['texte', 'link']
    }
</script>

<style scoped>
    @import '/assets/styles/buttons.modules.scss';
</style>