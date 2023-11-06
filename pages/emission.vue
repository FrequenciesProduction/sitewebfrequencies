<template>
    <main class="main_box" role="main">
        <div class="projects_page">
            <h1>{{ title }}</h1>
            <Emission/>
            <!-- <router-link class="button--white" to="/emission/ajout">Ajouter une émission</router-link>
            <emissions></emissions> -->
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import Parser from 'rss-parser'
import {emissionsBaseUrl} from '../firebase';

let parser = new Parser()

export default {
        // data() {
        //     return {
        //         name: '',
        //         fichier: '',
        //         title: ''
        //     }
        // },
        setup() {
            useHead({
                title: 'Nos Emissions'
            })
            const route = useRoute()
            const name = route.query.emissionTitle
            const tabTitle = route.query.tabTitle

            return {
                name,
                tabTitle,
                fichier: '',
                title: ''
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            async getData() {
                await axios.get(emissionsBaseUrl + '?orderBy="titre"&equalTo="'+this.name+'"').then((response) => {
                    let obj = response.data
                    let objKey = Object.keys(obj)[0]
                    let sourceValue = obj[objKey].rss
                    this.fichier = sourceValue
                    
                })  
                axios.get(this.fichier).then((res) => {
                    let feedResults = parser.parseString(res.data)
                    feedResults.then(feedData => {
                        this.title = feedData.title
                    })
                })
            },
        }
    }
</script>

<style scoped>
  @import '/assets/styles/emission.modules.scss';
</style>