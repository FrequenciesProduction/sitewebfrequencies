<template>
    <main class="main_box" role="main">
        <div class="description">
            <img src="/qui_sommes_nous_2.png" alt="">

                <h2>Qui sommes-nous ?</h2>

                <p>
                    Une équipe française investie dans la création et la production de fictions sonores.<br>
                    Une association fondée par Aurélien Bernadas, qui s’entoure de nombreuses personnes bénévoles pour accompagner le projet et le faire grandir.
                </p>

                <h3>Qu’est-ce qui nous fait vibrer ?</h3>
                <p>
                    Créer une œuvre accessible à tous, peu importe ses difficultés, son handicap, ses ressources financières…<br>
                    Faire rêver, raconter des histoires, proposer un moment d’évasion.<br>
                    Avancer en unissant nos énergies, nos compétences, nos différences, travailler en équipe, et être sur
                    la même longueur d’onde
                </p>

                <h3>Pourquoi la fiction sonore ? </h3>
                <p>
                    Frequencies a choisi l’audio pour soutenir une idée forte: donner accès à tous aux fictions sonores
                    et notamment aux personnes atteintes de déficiences visuelles.
                </p>

                <h2>Une rencontre essentielle</h2>
                <p>
                    Aurélien a eu la chance d’entrer en contact avec Arthur, un jeune homme perdant la vue. Il lui dira pour
                    commencer qu’il n’utilise pas l’audiodescription, ça le sort de l’histoire… Ça manque de vie !<br>
                    Ils passeront deux ans à échanger sur comment faire une belle réalisation, proposer une histoire au plus
                    grand nombre et adaptée aux personnes malvoyantes.<br>
                    <br>
                    C’est l’origine du projet !
                </p>
        </div>
        
    </main>
</template>

<style scoped>

.description {
    margin-left: 4vw;
    margin-right: 4vw;
    text-align: justify;
}

.description img {
    float: left;
    padding-right: 2vw;
}

</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    head() {
        return {
            title: "Qui sommes-nous ?"
        };
    }
})
</script>
