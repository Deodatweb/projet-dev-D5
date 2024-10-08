<template>
  <header>
    <div class="logo">
      <a href="/">
        <img src="../icons/logo2.png" alt="Logo de Deodatweb agence de création de site web"
      /></a>
    </div>
    <nav>
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{ active: activeItem === item.name }"
        >
          <a :href="'#' + item.id" @click="setActive(item.name)">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Présentation', id: 'home' },
        { name: 'Créations', id: 'projet' },
        { name: 'Contact', id: 'contact' }
      ],
      activeItem: 'Présentation'
    }
  },
  methods: {
    setActive(itemName) {
      this.activeItem = itemName
    }
  },
  name: 'HeaderItem'
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
  z-index: 100;
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
  cursor: pointer;
  font-size: 24px;
  color: var(--text-color);
}

nav a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 28px;
}

.active {
  text-decoration: underline;
}
</style>
