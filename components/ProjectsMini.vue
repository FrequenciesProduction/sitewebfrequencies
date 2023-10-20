<template>
    <div class="projects_box">
        
        <div class="project project-blue">
            <h3>Frequencies</h3>
            <p class="project-desc">
            Présentations et extraits des différents projets Frequencies.
            </p>
            <router-link class="button--blue" to="/extraits">J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span></router-link>
        </div>

        <div class="project project-black">
            <h3>Réminiscence</h3>
            <p class="project-desc">
                L’aventure d’un homme se mourant dans le désert, dont le passé lui revient en mémoire il va nous raconter son histoire.
                Installez-vous confortablement, et laissez-vous emporter dans ce récit intemporel.
                Ferez-vous partie de ceux qui écouteront son histoire ?
            </p>
            <router-link class="button--blue" to="/reminiscence">J'écoute<span aria-label="Réminiscence"></span></router-link>
        </div>

        <div class="project project-red">
            <h3>Les Chroniques Sombres</h3>
            <p class="project-desc">
                Dans un univers où les légendes urbaines ne sont plus réduites au rang de folklore, venez suivre l’aventure d’un archiviste en quête de réponse…
                Et n’oubliez pas peu importe que vous y croyez ou non, cela ne cessera pas d’exister pour autant…
            </p>
            <router-link style="position: relative;" class="button--blue" to="/chroniques" >J'écoute<span aria-label="Les Chroniques Sombres"></span></router-link>
        </div>

    </div>
</template>

<style scoped>
.projects_box {
  padding: 0;
  margin: 0;
  margin-top: 2vw;
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

h3 {
    margin-top: 2vw;
    margin-bottom: 3vw;
}

.project-blue {
    background-color: #166bba;
}

.project-black {
    background-color: black;
}

.project-red {
    background-color: #c23636;
}

.project-blue h3, .project-blue .project-desc {
    color: #fff;
}

.project-black h3, .project-black .project-desc {
    color: #fff;
}

.project-red h3, .project-red .project-desc {
    color: #fff;
}

.project-red .button--blue {
    background-color: #fff;
    color: #c23636;
}
/*button--blue */

@media (max-width: 37.5rem) {
    .project-desc {
      font-size: 0.8rem;
    }
}
</style>