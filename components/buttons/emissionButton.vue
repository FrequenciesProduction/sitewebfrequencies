<template>
    <button class='button--blue'>
        {{ texte }} 
        <span aria-label="{{ labelEmission }}"></span>
    </button>
</template>

<script>
    export default {
        props: ['texte','labelEmission']
    }
</script>

<style scoped>
@import 'assets/styles/buttons.modules.scss';
</style>