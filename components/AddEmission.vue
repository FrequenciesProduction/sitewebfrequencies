<template>
    <div>
        <h2>Ajouter une emission</h2>
        <form @submit.prevent="onAddEmission">
            <b-form-group id="titre-group" label="Titre" label-for="titre">
                <b-form-input id="titre" v-model="emission.titre" placeholder="Nom"></b-form-input>
            </b-form-group>
            <b-form-group id="desc-group" label="Description" label-for="description">
                <b-form-textarea id="description" v-model="emission.description" placeholder="Description"></b-form-textarea>
            </b-form-group>
            <b-form-file v-model="emission.rss" :state="Boolean(emission.rss)" ref="rss" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
            <b-button onClick="window.location.href='/emissions'">Retour</b-button>
            <b-button type="submit" variant="success">Ajouter</b-button>
        </form>
    </div>
</template>
<script>
    let axios = require('axios');
    import { storage, emissionsBaseUrl } from '../firebase';
    import { ref, uploadBytes } from 'firebase/storage';
    export default {
        data() {
            return {
                emission: {
                    titre: '',
                    description: '',
                    rss: null
                }
            }
        },
        methods: {
            onAddEmission() {
                const fileName = this.$refs.rss.files[0].name;
                this.emission.rss = 'uploads/' + fileName;
                const storageRef = ref(storage, this.emission.rss);
                axios.post(emissionsBaseUrl, this.emission).then(response => {
                    
                })
                uploadBytes(storageRef, this.$refs.rss.files[0]).then((snapshot) => {
                    window.location.href = '/emissions';
                })
            }
        }
    }
</script>