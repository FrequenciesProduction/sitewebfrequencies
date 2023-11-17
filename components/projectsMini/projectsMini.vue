<template>
    <div class="container">
    <div v-for="emission in emissionsData" class="project">
      <img :src="emission.itemObject.image">
      <div>
        <h2 class="black_outline">{{ emission.itemObject.title }}</h2>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Parser from 'rss-parser'
import {deleteEmissionUrl, emissionsBaseUrl} from '../../firebase';

let parser = new Parser();

</script>
<style scoped>
@import 'projectsMini.modules.scss';
</style>
