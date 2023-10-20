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
.projects_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vw;
}

.project {
    border-radius: .5rem;
    border: .0625rem solid black;
    width: 90%;
    height: fit-content;
    margin-bottom: 5vw;
    overflow: hidden;
    display: flex;
    text-align: center;
    align-items: center;
}

.project div {
    padding: 1vw;
    margin: auto;
    width: 100%;
    height: 100%;
}

.project div p {
    height: auto;
    overflow: auto;
    margin-bottom: 0;
    word-break: break-word;
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