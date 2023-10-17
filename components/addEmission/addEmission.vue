import

<template>
    <div>
        <h2>Ajouter une emission</h2>
        <form @submit.prevent="onAddEmission">
            <b-form-group id="input-group-titre" label="Titre:" label-for="titre-emission">
                <b-form-input id="titre-emission" v-model="emission.titre" placeholder="Nom de l'émission" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-rss" label="Lien:" label-for="rss-emission">
                <b-form-input id="rss-emission" v-model="emission.rss" placeholder="Lien du fichier RSS" required></b-form-input>
            </b-form-group>
            <b-button onClick="window.location.href='/emissions'">Retour</b-button>
            <b-button type="submit" variant="success">Ajouter</b-button>
        </form>
    </div>
</template>
<script>
    let axios = require('axios');
    import {emissionsBaseUrl} from '../../firebase';

    export default {
        data() {
            return {
                emission: {
                    titre: '',
                    rss: ''
                }
            }
        },
        methods: {
            async onAddEmission() {
                // const fileName = this.$refs.rss.files[0].name;
                // this.emission.rss = 'uploads/' + fileName;
                // const storageRef = ref(storage, this.emission.rss);
                const trimmedTitle = this.emission.titre.trim()
                const titreMin = trimmedTitle.toLowerCase()
                const replaceTirets = titreMin.replaceAll(" ", "-")
                this.emission.titre = replaceTirets
                // console.log(this.emission)
                await axios.post(emissionsBaseUrl, this.emission).then(response => {
                    window.location.href = '/';
                })
                // uploadBytes(storageRef, this.$refs.rss.files[0]).then((snapshot) => {

                // })
            }
        }
    }
</script>

<style>
@import './addEmission.modules.scss';
</style>
