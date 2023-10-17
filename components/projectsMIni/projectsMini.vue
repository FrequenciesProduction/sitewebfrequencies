<template>
    <div class="projects_box">

        <div class="project project-blue">
            <h3>Frequencies</h3>
            <p class="project-desc">
            Présentations et extraits des différents projets Frequencies.
            </p>
            <NuxtLink class="button--blue" to="/extraits">J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span></NuxtLink>
        </div>

        <div class="project project-black">
            <h3>Réminiscence</h3>
            <p class="project-desc">
                L’aventure d’un homme se mourant dans le désert, dont le passé lui revient en mémoire il va nous raconter son histoire.
                Installez-vous confortablement, et laissez-vous emporter dans ce récit intemporel.
                Ferez-vous partie de ceux qui écouteront son histoire ?
            </p>
            <NuxtLink class="button--blue" to="/reminiscence">J'écoute<span aria-label="Réminiscence"></span></NuxtLink>
        </div>

        <div class="project project-red">
            <h3>Les Chroniques Sombres</h3>
            <p class="project-desc">
                Dans un univers où les légendes urbaines ne sont plus réduites au rang de folklore, venez suivre l’aventure d’un archiviste en quête de réponse…
                Et n’oubliez pas peu importe que vous y croyez ou non, cela ne cessera pas d’exister pour autant…
            </p>
            <NuxtLink style="position: relative;" class="button--blue" to="/chroniques" >J'écoute<span aria-label="Les Chroniques Sombres"></span></NuxtLink>
        </div>

    </div>
</template>

<style scoped>
@import './projectsMini.modules.scss';
</style>
