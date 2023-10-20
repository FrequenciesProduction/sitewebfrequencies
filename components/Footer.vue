<template>
    <footer role="contentinfo">
        <div class="footer_box">
            <p>
                Association Frequencies<br>
                3 Pl. Guy Hersant, 31400 Toulouse<br>
                frequencies.production@gmail.com
            </p>
            <ul>
                <li>
                    <a href="https://www.instagram.com/frequencies.production/" target="blank">
                        <img src="img/instagram.png" alt="instagram"/>
                        <span aria-label="ouvre un nouvel onglet"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/frequencies.production" target="blank">
                        <img src="img/facebook.png" alt="facebook"/>
                        <span aria-label="ouvre un nouvel onglet"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCgxfEuByVQ8X2k5Tk5yVwhg" target="blank">
                        <img src="img/youtube.png" alt="youtube"/>
                        <span aria-label="ouvre un nouvel onglet"></span>
                    </a>
                </li>
                <li>
                    <a href="mailto:Frequencies.production@gmail.com" target="blank">
                        <img src="img/email.png" alt="email"/>
                        <span aria-label="ouvre un nouvel onglet"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/frequencies" target="blank">
                        <img src="img/linkedin.png" alt="linkedin"/>
                        <span aria-label="ouvre un nouvel onglet"></span>
                    </a>
                </li>
            </ul>
            
        </div>
    </footer>
</template>

<style scoped>
.footer_box {
    font-size: small;
    color: #fff;

    width: 100%;
    padding-top: 2vw;

    background-image: linear-gradient(to top,rgba(20,20,20,1) 90%, rgba(20,20,20,0));
    background-position: start start;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

img {
    border-radius: 8px;
    border: 1px solid #c23636;
    overflow: hidden;
    width: clamp(34px, 4vw, 300px);
    height: clamp(34px, 4vw, 300px);
    margin: 1vw;
    background-color: #fff;
    padding: 0.5vw;
}

p {
    margin-left: 1vw;
}
</style>