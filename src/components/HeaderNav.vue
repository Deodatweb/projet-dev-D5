<template>
    <header>
      <a href="/">
        <img
          src="../icons/logo2.png"
          alt="Logo de Deodatweb agence de création de site web"
          class="logo"
      /></a>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/project">Créations</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <!-- <header class="header">
          <a href="/" class="logo">    
                    <img
          src="../icons/logo2.png"
          alt="Logo de Deodatweb agence de création de site web"/></a>
  
          <nav class="navbar">
              <a href="#home" class="active">Accueil</a>
              <a href="#about">A propos</a>
              <a href="#services">Services</a> -->
              <!-- <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
          </nav>
      </header> -->
  </template>
  
  <script>
  export default {
    name: 'HeaderNav'
  }
  </script>
  
  <style scoped>
  /* header { */
    /* position: fixed; */
    /* top: 0;
    left: 0; */
    /* width: 100%; */
    /* padding: 2rem 9%;  */
    /* background: var(--bg-color);
    display: flex;
    justify-content: flex-end;
    align-items: center; */
    /* z-index: 100; */
  /* } */
  
  /* .logo {
      display: flex;
      justify-content: left;
    width: 40%;
    padding: 1.2rem;
    cursor: pointer;
  }
  
  nav ul {
    display: flex;
    justify-content: end;
    list-style-type: none;
  }
  
  nav ul li {
    font-size: 2rem;
  }
  
  nav ul li a {
    color: var(--text-color);
    text-decoration: none;
  } */
  
  /* HOME */
  .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 2rem 9%;
      background: var(--bg-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
  }
  
  .logo {
      font-size: 2.5rem;
      color: var(--main-color);
      font-weight: 700;
      cursor: default;
  }
  
  nav a {
      font-size: 1.8rem;
      color: var(--text-color);
      margin-left: 4rem;
      font-weight: 700;
  }
  
  nav a:hover,
  nav a.active {
      color: var(--text-color);
  }
  </style>
  