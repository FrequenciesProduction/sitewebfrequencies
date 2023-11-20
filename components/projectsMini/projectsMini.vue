<template>
    <div class="container">
    <div v-for="emission in emissionsData" class="project">
      <!-- <img :src="emission.itemObject.image"> -->
      <!-- <div>
        <h2 class="black_outline">{{ emission.itemObject.title }}</h2>
      </div> -->
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
      emissionsData: [], // Initialise ton tableau de données ici
      parser: new Parser(),
      // Autres données que tu utilises dans ton composant
      // ...
    }
  },
  async mounted() {
    try {
      const response = await axios.get(emissionsBaseUrl)
      const data = response.data;

      // Itère sur chaque élément récupéré depuis Firebase
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const sourceValue = data[key].rss;

          // Utilise Axios pour récupérer les données du flux RSS
          const res = await axios.get(sourceValue);
          const feedData = await this.parser.parseString(res.data);

          // Ajoute les données du flux RSS dans emissionsData
          this.emissionsData.push(feedData);
        }
      }

      // Fusion de toutes les sous-listes d'items en une seule liste
      const allItems = this.emissionsData.flatMap(rssFeed => rssFeed.items);

      // Tri de la liste combinée par date (en supposant que la date est accessible via une propriété 'isoDate')
      allItems.sort((a, b) => {
        const dateA = new Date(a.isoDate);
        const dateB = new Date(b.isoDate);
        return dateB - dateA; // Trie de la plus récente à la plus ancienne
      });

      // Affichage des éléments triés par date
      allItems.forEach(item => {
        console.log(item.title, item.isoDate); // Affiche le titre et la date de chaque élément
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error)
    }
  }
}
</script>
<style scoped>
@import 'projectsMini.modules.scss';
</style>
