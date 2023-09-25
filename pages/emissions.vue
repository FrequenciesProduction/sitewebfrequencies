<template>
    <main class="main_box" role="main">
        <div class="projects_page">
            <h1>Nos emissions</h1>
            <NuxtLink class="button--white" to="/emission/ajout">Ajouter une émission</NuxtLink>
            <emissions></emissions>
        </div>
    </main>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    head() {
        return {
            title: "Emissions"
        };
    }
})
</script>
<style scoped>
.projects_page {
    width: 100%;
} 
.projects_page img {
    width: 100%;
    object-fit: contain;
}
</style>