<template>
    <main class="main_box" role="main">
        <h1>Réminiscence</h1>

        <div class="instructions_box">
        <Instructions></Instructions>
        </div>

        <h2 class="black_outline">Le dernier épisode</h2>

        <iframe title="Lecteur intégré spotify pour écouter l'episode 7 de réminiscence" class="iframe-ecoute" src="https://open.spotify.com/embed/episode/7CFhpaPqfvPJwGv5DQ84A1?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div class="box--resume">
        <button @click="toggleText(0)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        <p v-show="w0" class="text--resume">
            Précédemment dans Réminiscence :<br>
            Thomas découvre cette ville d'une autre époque et fait la connaissance d'une femme qui n'est pas celle qu'elle paraît être.<br>
            Lance va alors raconter son bout d'histoire.
            <br><br>
            ----------------------------------------------------------------------
            <br><br>
            Acteur : Thomas Veyrier / Fred Mafra / Benoît Allemane / Boris Rehlinger<br>
            Sound désigner : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Mixage / Mastering : Clément Chevalier
            <br><br>
            ---
            <br><br>
            Send in a voice message: https://podcasters.spotify.com/pod/show/reminiscence/message<br>
        </p>
        </div>

        <h2 class="black_outline">Tous les épisodes</h2>

        <iframe title="Lecteur intégré spotify pour écouter l'episode 1 de réminiscence" style="border-radius:12px" src="https://open.spotify.com/embed/episode/2D6oWOKmrPuegJnrymksYC?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div class="box--resume">
        <button @click="toggleText(1)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        <p v-show="w1" class="text--resume">
            L'aventure commence. Thomas est blessé dans le désert.<br>
            Au bord de la mort des souvenirs lui reviennent en mémoire.<br>
          Il décide de se raconter son histoire afin de se souvenir de ce qu’il a manqué.
            <br><br>
            ----------------------------------------------------------------------
            <br><br>
            Acteur : Thomas Veyrier<br>
            Sound designer : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Mixage : Aurélien Montero
            <br><br>
            ---
            <br><br>
            Send in a voice message: https://podcasters.spotify.com/pod/show/reminiscence/message<br>
        </p>
        </div>

        <iframe title="Lecteur intégré spotify pour écouter l'episode 2 de réminiscence" style="border-radius:12px" src="https://open.spotify.com/embed/episode/6f7CkVWqGPHGLPudQdVHv1?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div class="box--resume">
        <button @click="toggleText(2)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        <p v-show="w2" class="text--resume">
            Précédemment dans Réminiscence :<br>
            Thomas plonge dans les méandres de sa mémoire et se rappelle  que tout a commencé dans sa chambre, face à sa caméra, avec la création d'une machine.
            <br><br>
            ----------------------------------------------------------------------
            <br><br>
            Acteur : Thomas Veyrier<br>
            Sound designer : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Mixage : Aurélien Montero / Nicolas Grout
            <br><br>
            ---
            <br><br>
            Send in a voice message: https://podcasters.spotify.com/pod/show/reminiscence/message<br>
        </p>
        </div>

        <iframe title="Lecteur intégré spotify pour écouter l'episode 3 de réminiscence" style="border-radius:12px" src="https://open.spotify.com/embed/episode/0cMBNKsFnbwRsScmQ3zcm3?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div class="box--resume">
        <button @click="toggleText(3)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        <p v-show="w3" class="text--resume">
            Précédemment dans Réminiscence :<br>
          Suite à l’explosion, Thomas se rend compte que le chemin est encore long, mais il n'abandonne pas et continue
          la conception de sa machine à voyager dans le temps.
            <br><br>
            ----------------------------------------------------------------------
          <br><br>
            Acteur : Thomas Veyrier / Fred Mafra / Pierre-Marie Assemat<br>
            Sound designer : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Mixage : Aurélien Montero / Nicolas Grout
            <br><br>
            ---
            <br><br>
            Send in a voice message: https://podcasters.spotify.com/pod/show/reminiscence/message<br>
        </p>
        </div>

      <iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" frameBorder="0" height="152" loading="lazy" src="https://open.spotify.com/embed/episode/7m3SXOSuXqH46lh1vY4OjS?utm_source=generator&theme=0" style="border-radius:12px" title="Lecteur intégré spotify pour écouter l'episode 4 de réminiscence" width="90%"></iframe>
        <div class="box--resume">
        <button @click="toggleText(4)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        <p v-show="w4" class="text--resume">
            Précédemment dans Réminiscence : <br>
          Thomas ouvre une faille et laisse échapper son chinchilla au travers. Surpris par plusieurs individus rentrés
          par effraction chez lui. Il s'enfuit et part se réfugier dans le seul endroit où il se sait en sécurité.
            <br><br>
            ----------------------------------------------------------------------
            <br><br>
            Acteur : Thomas Veyrier / Jean-Baptiste Plaetevoet<br>
            Sound designer / Mixage : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Consultant Mixage : Aurélien Montero
            <br><br>
            ---
            <br><br>
            Send in a voice message: https://podcasters.spotify.com/pod/show/reminiscence/message<br>
        </p>
        </div>

      <iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" frameBorder="0" height="152" loading="lazy" src="https://open.spotify.com/embed/episode/0N4SLlyvCr8qQp7rqEeOlG?utm_source=generator&theme=0" style="border-radius:12px" title="Lecteur intégré spotify pour écouter l'episode 5 de réminiscence" width="90%"></iframe>
        <div class="box--resume">
        <button @click="toggleText(5)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        <p v-show="w5" class="text--resume">
            Un nouveau voyage débute après un commencement pour pour le moins choquant.<br>
            Précédemment dans Réminiscence :<br>
          Thomas s’entretient avec son professeur de faculté au sujet de la création de son gant, avant d’être aspiré
          par la faille qu’il a ouvert.
            <br><br>
            ----------------------------------------------------------------------
            <br><br>
            Acteur : Thomas Veyrier / Fred Mafra / José Toutain<br>
            Sound designer / Mixage : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Consultant mixage : Aurélien Montero
            <br><br>
            ---
            <br><br>
            Send in a voice message: https://podcasters.spotify.com/pod/show/reminiscence/message<br>
        </p>
        </div>

      <iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" frameBorder="0" height="152" loading="lazy" src="https://open.spotify.com/embed/episode/476LeN0gjm9R1Wlp1yWaha?utm_source=generator&theme=0" style="border-radius:12px" title="Lecteur intégré spotify pour écouter l'episode 6 de réminiscence" width="90%"></iframe>
        <div class="box--resume">
        <button @click="toggleText(6)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        <p v-show="w6" class="text--resume">
            Précédemment dans Réminiscence :<br>
            Thomas est retenu prisonnier par deux inconnus et doit leur raconter comment il est arrivé ici.
            <br><br>
            ----------------------------------------------------------------------
            <br><br>
            Acteur : Thomas Veyrier / Fred Mafra / Marine Lemonnier / Boris Rehlinger<br>
            Sound désigner : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Mixage / Mastering : Adrien Halfon
            <br><br>
            ---
            <br><br>
            Send in a voice message: https://podcasters.spotify.com/pod/show/reminiscence/message<br>
        </p>
        </div>

        <iframe title="Lecteur intégré spotify pour écouter l'episode 7 de réminiscence" style="border-radius:12px" src="https://open.spotify.com/embed/episode/7CFhpaPqfvPJwGv5DQ84A1?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div class="box--resume">
        <button @click="toggleText(7)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        <p v-show="w7" class="text--resume">
            Précédemment dans Réminiscence :<br>
            Thomas découvre cette ville d'une autre époque et fait la connaissance d'une femme qui n'est pas celle qu'elle paraît être.<br>
            Lance va alors raconter son bout d'histoire.
            <br><br>
            ----------------------------------------------------------------------
            <br><br>
            Acteur : Thomas Veyrier / Fred Mafra / Benoît Allemane / Boris Rehlinger<br>
            Sound désigner : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Mixage / Mastering : Clément Chevalier
            <br><br>
            ---
            <br><br>
            Send in a voice message: https://podcasters.spotify.com/pod/show/reminiscence/message<br>
        </p>
        </div>

    </main>
</template>

<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
    data: () => ({
                    w0: true,
                    w1: false,
                    w2: false,
                    w3: false,
                    w4: false,
                    w5: false,
                    w6: false,
                    w7: false,
                }),
    methods: {
    toggleText(wich) {
        if (wich == 0)
            this.w0 = !this.w0;
        if (wich == 1)
            this.w1 = !this.w1;
        if (wich == 2)
            this.w2 = !this.w2;
        if (wich == 3)
            this.w3 = !this.w3;
        if (wich == 4)
            this.w4 = !this.w4;
        if (wich == 5)
            this.w5 = !this.w5;
        if (wich == 6)
            this.w6 = !this.w6;
        if (wich == 7)
            this.w7 = !this.w7;
    }
    },

  head() {
        return {
            title: "Réminiscence"
        };
    }
})
</script>

<style>
@import './reminiscence.modules.scss';
</style>
