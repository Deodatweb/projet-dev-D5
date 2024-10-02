<template>
  <header>
    <div class="logo">
      <a href="/">
        <img src="../icons/logo2.png" alt="Logo de Deodatweb agence de création de site web"
      /></a>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/projets">Projets</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderItem',
}
</script>

<style scoped>
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
