<template>
    <ul class="instructions" aria-label="Instructions pour profiter au mieux des fictions sonores">
        <li class="instruction_line">
            <div class="pastille">1</div>
            <p>Vous êtes allongé</p>
        </li>

        <li class="instruction_line">
            <div class="pastille">2</div>
            <p>Votre casque est en place</p>
        </li>
        
        <li class="instruction_line">
            <div class="pastille">3</div>
            <p>Fermez les yeux</p>
        </li>
        
        <li class="instruction_line">
            <div class="pastille">4</div>
            <p>Lancez l’épisode</p>
        </li>
    </ul>
</template>

<style scoped>
.instructions {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 3vw;
    margin-bottom: 3vw;


    background-image: url("/instruction_wave.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
}

.instruction_line {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: stretch;
}

.pastille {
    background-image: url("/instruction_pastille.png");
    height: 5vw;
    min-width: 40px;
    width: 5vw;
    min-height: 40px;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 3vw;
}

</style>