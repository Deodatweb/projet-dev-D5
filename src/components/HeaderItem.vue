<template>
  <header>
    <div class="logo">
      <a href="/">
        <img src="../icons/logo2.png" alt="Logo de Deodatweb agence de création de site web"
      /></a>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Présentation</router-link></li>
        <li><a href="#projet">Créations</a></li>
        <li><a href="#contact">Contact</a></li>
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
    position: fixed;
    width: 100%;
    padding: 20px;
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
  height: 60px;
}

nav ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav li {
  margin-right: 40px;
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
