<template>
   <!-- HOME SECTION DESIGN -->
   <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, je m'appelle</h3>
            <h1>Frédéric D.</h1>
            <TypedText />
            <p>Passionné d'informatique et notamment par la création de sites web, je me suis inscrit au CEF pour obtenir une certification de développeur web.</p>
        </div>
        <div class="home-img">
            <img src="../icons/clavier_gris.jpg" alt="Photo d'un clavier d'ordinateur gris">
        </div>
    </section>

    <!-- PORTFOLIO SECTION DESIGN -->
    <section class="projet" id="projet">
        <h2 class="heading">Mes derniers <span>projets</span></h2>
        <div class="portfolio-container">
            <div class="portfolio-box">
                <img src="../icons/clavier_gris.jpg" alt="">
                <div class="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <i class="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="../icons/clavier_gris.jpg" alt="">
                <div class="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <i class="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="../icons/clavier_gris.jpg" alt="">
                <div class="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <i class="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="../icons/clavier_gris.jpg" alt="">
                <div class="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <i class="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="../icons/clavier_gris.jpg" alt="">
                <div class="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <i class="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="../icons/clavier_gris.jpg" alt="">
                <div class="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <i class="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>
        </div>
    </section>

      <ContactForm />

</template>

<script>
import TypedText from '@/components/TypedText.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'HomeView',

  components: {
    TypedText,
    ContactForm,
  }
}
</script>

<style scoped>
section {
    min-height: 100vh;
    padding: 2rem 9%;
}

.home {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.home-content h3 {
    font-size: 2rem;
    color: var(--text-color);
    margin: 0;
}

span {
    color: var(--main-color);
    box-shadow: 0 0 25px var(--main-color),
                0 0 50px var(--main-color),
                0 0 100px var(--main-color);
}

.home-content h1 {
    font-size: 5.6rem;
    line-height: 1.3;
    color: var(--text-color);
    margin: 0;
}

.home-img img {
    width: 490px;
    height: 490px;
    animation: floatImage 4s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: 5px 10px 13px -7px #000000, -6px -4px 15px -13px rgba(0,0,0,0);
}

@keyframes floatImage {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-2.4rem);
    }
    100% {
        transform: translateY(0)    ;
    }
}

.home-content p {
    font-size: 1.6rem;
    margin-right: 80px;
    text-align: justify;
}
</style>
