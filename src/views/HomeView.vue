<template>
   <!-- HOME SECTION DESIGN -->
   <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, je m'appelle</h3>
            <h1>Freddy RICHE</h1>
            <TypedText />
            <p>Passionné d'informatique et notamment par la création de sites internet, je travaille tous les week-end afin d'obtenir une certification de développeur web par le biais du CEF.</p>
        </div>
        <div class="home-img">
            <img src="../icons/clavier_gris.jpg" alt="Photo d'un clavier d'ordinateur gris">
        </div>
    </section>

    <ProjetsCreations />
    <ContactForm />

</template>

<script>
import TypedText from '@/components/TypedText.vue';
import ContactForm from '@/components/ContactForm.vue';
import ProjetsCreations from '@/components/ProjetsCreations.vue';

export default {
  name: 'HomeView',

  components: {
    TypedText,
    ContactForm,
    ProjetsCreations,
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
