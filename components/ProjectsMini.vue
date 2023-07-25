<template>
    <div class="projects_box">
        
        <div class="project">
            <img src="/onde_deco.png">
            <h3>Frequencies</h3>
            <p>
            Présentations et extraits des différents projets frequencies.
            </p>
            <NuxtLink class="button--blue" to="/extraits">J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span></NuxtLink>
        </div>

        <div class="project">
            <img src="/onde_deco.png">
            <h3>Réminiscence</h3>
            <p>
                L’aventure d’un homme se mourant dans le désert, dont le passé lui revient en mémoire il va nous raconter son histoire.
                Installez-vous confortablement, et laissez-vous emporter dans ce récit intemporel.
                Ferez-vous partie de ceux qui écouteront son histoire ?
            </p>
            <NuxtLink class="button--blue" to="/reminiscence">J'écoute<span aria-label="Réminiscence"></span></NuxtLink>
        </div>

        <div class="project">
            <img src="/onde_deco.png">
            <h3>Les Chroniques Sombres</h3>
            <p>
                Dans un univers où les légendes urbaines ne sont plus réduites au rang de folklore, venez suivre l’aventure d’un archiviste en quête de réponse…
                Et n’oubliez pas peu importe que vous y croyez ou non, cela ne cessera pas d’exister pour autant…
            </p>
            <NuxtLink style="position: relative;" class="button--blue" to="/chroniques" >J'écoute<span aria-label="Les Chroniques Sombres"></span></NuxtLink>
        </div>

    </div>
</template>

<style scoped>
.projects_box {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.project {
    border-radius: 8px;
    border: 1px solid black;
    width: 28%;
    margin-bottom: 5vw;
    overflow: hidden;
    display: flex;
    text-align: center;
    flex-direction: column;
}

.project p {
    padding-left: 1vw;
    padding-right: 1vw;
}

.project .button--blue {
    text-align: center;
    align-self: center;
    margin: auto;
    margin-bottom: 1vw;
}
.project img {
    width: 100%;
    margin-top: 1vw;
    margin-bottom: 1vw;
    object-fit: contain;
}
</style>