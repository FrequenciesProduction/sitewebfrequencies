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

<script setup>
    useHead({
        title: 'Les Chroniques Sombres'
    })
    const route = useRoute()
    console.log(route)
</script>

<script>
    import axios from 'axios'
    import Parser from 'rss-parser'
    let parser = new Parser()
    import { storage, emissionsBaseUrl, deleteEmissionUrl } from '../../firebase';
    import { defineComponent } from '@vue/composition-api'

    export default defineComponent({
        created() {
            const params = this.$route.params
            this.name = params.emissionTitle
        },
        data() {
            return {
                name: '',
                fichier: '',
                title: ''
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            async getData() {
                console.log(this.name)
                await axios.get(emissionsBaseUrl + '?orderBy="titre"&equalTo="'+this.name+'"').then((response) => {
                    let obj = response.data
                    console.log(obj)
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
    })
</script>

<style scoped>
  @import '/assets/styles/emission.modules.scss';
</style>