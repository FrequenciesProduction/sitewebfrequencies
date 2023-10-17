<template>
    <main class="main_box" role="main">
        <add-emission></add-emission>
    </main>
</template>
<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
    head() {
        return {
            title: "Ajout emission"
        };
    }
})
</script>
