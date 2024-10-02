<template>
    <div>
        <h1>404</h1>
        <img src="../icons/clavier_gris.jpg" alt="Image d'un clavier d'ordinateur gris figurant sur la page 404 d'erreur">
        <p>Oups ! Page non trouvée</p>
        <router-link to="/"><span>Retour à la page d'accueil</span></router-link>
    </div>
</template>

<script>
    export default {
        name: "NotFoundView",
    };
</script>

<style scoped>
div {
    padding-top: 100px;
}
h1, p {
    display: flex;
    justify-content: center;
    font-size: 3rem;
}

img {
    display: flex;
    margin: auto;
    width: 350px;
    height: 350px;
    border-radius: 50%;
}

span {
    display: flex;
    justify-content: center;
    font-size: 2rem;
}

</style>