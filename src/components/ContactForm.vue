<template>
    <!-- CONTACT SECTION DESIGN -->
     <br><br>
    <section class="contact" id="contact">
      <br><br>
      <h2 class="heading">Me <span>contacter</span></h2>
      <form action="mailto: deodatweb@gmail.com">
        <div class="input-box">
          <input type="text" placeholder="Nom">
          <input type="text" placeholder="Prénom">
        </div>
        <input type="text" class="objet" placeholder="Objet">
        <textarea name="" id="" cols="30" rows="10" placeholder="Votre message"></textarea>
        <button class="btn">Envoyer votre message</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
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
  