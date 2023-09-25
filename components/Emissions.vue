<template>
    <div class="projects_box">
        <div class="project" v-for="emission in emissionsData" :key="emission.id">
            <div>
                <h2 class="black_outline">{{ emission.titre }}</h2>
                <p>{{ emission.description }}</p>
            </div>
            <b-link class="button--blue" v-on:click="supprimerEmission(emission.id, emission.rss)">Supprimer</b-link>
            <!-- <VueRssParser :feedUrl="feedUrl" :name="name" :limit="limit"/> -->
        </div>
    </div>
</template>
<script>
    let axios = require('axios');
    import VueRssParser from "vue-rss-parser";
    import { storage, emissionsBaseUrl, deleteEmissionUrl, storageBaseUrl } from '../firebase';
    import { ref, deleteObject, getDownloadURL } from 'firebase/storage';
    export default {
        setup() {
            
        },
        components: {
            VueRssParser
        },
        data() {
            return {
                emissionsData: '',
                feedUrl: "",
                name: "",
                limit: 5
            }
        },
        mounted() {
            this.getEmissions()
        },
        methods: {
            getEmissions() {
                axios.get(emissionsBaseUrl).then((response) => {
                    this.formatPostData(response.data)
                })
            },
            supprimerEmission(emmisionId, rss) {
                // Suppression de l'entrée en base de données
                axios.delete(deleteEmissionUrl + emmisionId + '.json').then((response) => {
                    
                })
                // Suppression du fichier associé sur le stockage cloud de firebase
                const desertRef = ref(storage, rss);
                deleteObject(desertRef).then(() => {
                    window.location.href = '/emissions';
                }).catch((error) => {
                    console.log(error)
                });
            },
            formatPostData(emissions) {
                this.emissionsData = []
                for(let key in emissions) {
                    console.log(emissions[key].rss);
                    this.emissionsData.push({...emissions[key], id: key})
                    getDownloadURL(ref(storage, emissions[key].rss)).then((downloadUrl) => {
                        this.feedUrl = downloadUrl
                    })
                    this.name = emissions[key].titre
                }
            }
        }
    }
</script>
<style scoped>
.projects_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vw;
}

.project {
    border-radius: 8px;
    border: 1px solid black;
    width: 90%;
    height: 14vw;
    margin-bottom: 5vw;
    overflow: hidden;
    display: flex;
    text-align: center;
    align-items: center;
}

.project div {
    padding: 1vw;
    margin: auto;
}

.project div p {
    height: 7vw;
    overflow: auto;
}

.project img {
    width: 20vw;
    object-fit: contain;
    margin-right: 1vw;
}

.project .button--blue {
    text-align: center;
    margin: auto;
    margin-right: 1vw;
}

h2 {
    margin-bottom: 2vw;
    font-size: 3vw;
}
</style>