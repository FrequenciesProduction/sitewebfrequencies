<template>
  <div class="container">
    <div v-for="item in filteredItems" :key="item.title" class="project_mini">
      <div>
        <h3 class="title">{{ item.title }}</h3>
      </div>
      <div >
        <h4 class="date">{{ item.formattedDate }}</h4>
      </div>
      <div style="text-align: right !important;">
        <button class="button_red">Je regarde</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Parser from 'rss-parser'
import { deleteEmissionUrl, emissionsBaseUrl } from '../../firebase';

export default {
  data() {
    return {
      emissionsData: [],
      parser: new Parser(),
      filteredItems: [],
    }
  },
  async mounted() {
    try {
      const response = await axios.get(emissionsBaseUrl)
      const data = response.data;

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const sourceValue = data[key].rss;

          const res = await axios.get(sourceValue);
          const feedData = await this.parser.parseString(res.data);

          this.emissionsData.push(feedData);
        }
      }

      const allItems = this.emissionsData.flatMap(rssFeed => rssFeed.items);

      allItems.sort((a, b) => {
        const dateA = new Date(a.isoDate);
        const dateB = new Date(b.isoDate);
        return dateB - dateA;
      });
      
      const filteredItems = allItems.filter(item => {
        return !(
          item.title.includes("Histoires courtes") || 
          item.title.includes("Extrait")
        );
      });

      filteredItems.forEach(item => {
        const date = new Date(item.isoDate);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
        item.formattedDate = date.toLocaleDateString('fr-FR', options);
      });
      
      this.filteredItems = filteredItems.slice(0, 5);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error)
    }
  }
}
</script>
<style scoped>
@import 'projectsMini.modules.scss';
</style>
