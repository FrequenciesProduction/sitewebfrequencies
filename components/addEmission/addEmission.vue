<template>
    <div>
        <h2>Ajouter une emission</h2>
        <form @submit.prevent="onAddEmission">
            <div class="mb-3">
                <label for="titre-emission" class="form-label">Titre:</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="titre-emission" v-model="emission.titre" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="rss-emission" class="form-label">Lien:</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="rss-emission" v-model="emission.rss" required>
                </div>
            </div>
            <div class="col-12 btn-group-form">
                <button class="btn btn-md btn-primary" onClick="window.location.href='/emissions'">Retour</button>
                <button type="submit" class="btn btn-md btn-success">Ajouter</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'
    import {emissionsBaseUrl} from '../../firebase'

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
