<template>
    <main class="main_box" role="main">
        <add-emission />
    </main>
</template>

<script setup>
  useHead({
    title: 'Ajout emission'
  })
</script>

<script>
import {defineComponent} from '@vue/composition-api'
import AddEmission from '~/components/addEmission/addEmission.vue';

export default defineComponent({
    
})
</script>
