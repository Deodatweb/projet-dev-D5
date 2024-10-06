<template>
    <!-- CONTACT SECTION DESIGN -->
     <br>
    <section class="contact" id="contact">
      <br><br>
      <h2 class="heading">Me <span>contacter</span></h2>
      <form @submit.prevent="submitForm">
        <div class="input-box">
          <input type="text" v-model="firstname" id="firstname" placeholder="Prénom" required>
          <input type="text" v-model="name" id="name" placeholder="Nom" required>
        </div>
        <input type="text" v-model="objet" id="objet" placeholder="Objet" required>
        <textarea v-model="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
        <button class="btn" type="submit">Envoyer</button>
      </form>
      <p v-if="succesMessge">{{ succesMessage }}</p>
      <p v-if="errorMessge">{{ errorMessage }}</p>
    </section>
  </template>

  <script>
  import emailjs from 'emailjs-com';

  export default {
    data() {
      return {
        firstName: '',
        name:'',
        objet: '',
        message: '',
        succesMessage: '',
        errorMessage: '',
      };
    },
    methods: {
      submitForm() {
        const templateParams = {
          from_firstname: this.firstname,
          from_name: this.name,
          object: this.objet,
          message: this.message,
        };

        emailjs.send('service_m9hfnj', 'template_juuzwr8', templateParams, 'b8OXVnjd9X0N2C4oh')
        .then((response) => {
          console.log('SUCCES !', response.status, response.text);
          this.succesMessage = 'Votre message a été envoyé avec succès !';
          this.errorMessage = '';
          this.resetForm();
        })
        .catch((error) => {
          console.error('FAILED...', error);
          this.errorMessage = 'Erreur lors de l\'envoi du message.';
          this.succesMessage = '';
        });
      },
      resetForm() {
        this.firstname ='';
        this.name = '';
        this.objet = '';
        this.message = '';
      },
    },
    name: 'ContactView'
  }
  </script>
  
  <style scoped>
  .heading {
    text-align: center;
    font-size: 40px;
    padding-top: 120px;
  }
  
  span {
    color: var(--main-color);
    text-shadow:
      0 0 25px var(--main-color),
      0 0 50px var(--main-color);
  }
  
  .contact {
    background: url(../icons/clavier_blanc.jpg) no-repeat;
    height: 100vh;
  }
  
  form {
    background: transparent;
    border-radius: 10px;
    padding: 30px;
    border: 1px solid var(--text-color);
  }
  
  .contact h2 {
    margin-bottom: 2rem;
    color: var(--text-color);
  }
  
  .contact form {
    max-width: 50%;
    margin: 60px auto;
    text-align: center;
    /* margin-bottom: 30px; */
  }
  
  .contact form .input-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .contact form .input-box input,
  .contact form input,
  .contact form textarea {
    width: 100%;
    padding: 1rem 0;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.2);
    color: var(--text-color);
    border-radius: 8px;
    margin: 0.7rem 0;
    border: none;
  }
  
  .contact form .input-box input {
    width: 40%;
  }
  
  .contact form textarea {
    padding: 0;
  }
  
  .contact form .btn {
    margin-top: 2rem;
    cursor: pointer;
  }
  
  ::placeholder  {
    color: rgba(255, 255, 255, 0.5);
  }
  
  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--main-color);
    border-radius: 4rem;
    box-shadow: 0 0 1rem var(--main-color);
    font-size: 1.2rem;
    color: var(--bg-color);
    letter-spacing: 0.1rem;
    transition: 0.5s ease;
    border: none;
  }
  
  .btn:hover {
    box-shadow: none;
  }
  </style>
  