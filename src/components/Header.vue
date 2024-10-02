<template>
  <header>
    <div class="logo">
      <a href="/">
      <img
        src="../icons/logo2.png"
        alt="Logo de Deodatweb agence de création de site web"
    /></a>
    </div>

    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/project">Projets</router-link></li>
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
  name: 'Header'
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
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.logo img {
  height: 50px;
}

nav ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav li {
  margin-left: 24px;
}

nav a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.5rem;
}

nav a:hover {
  text-decoration: underline;
}
</style>
