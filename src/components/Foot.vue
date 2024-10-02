<template>
    <footer>
      <p>&copy; 2024 par Deodatweb | Tous droits réservés - Dernière mise à jour : {{ lastUpdated }}</p>
      <div class="social-media">
        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://discord.com" target="_blank"><i class="fa-brands fa-discord"></i></a>
        <a href="https://github.com" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </footer>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
      data() {
          return {
              lastUpdated: new Date(document.lastModified).toLocaleDateString()
          };
      },
      name: "Footer",
  };
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    padding: 1rem 0;
    font-size: 1.5rem;
  }
  
  .social-media a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: 0.2rem solid var(--main-color);
    border-radius: 50%;
    font-size: 1.4rem;
    color: var(--main-color);
    margin: 0.5rem 1.5rem 0.5rem 0;
    transition: 0.5s ease;
    text-decoration: none;
  }
  
  .social-media a:hover {
    background: var(--main-color);
    color: var(--snd-bg-color);
    box-shadow: 0 0 1rem var(--main-color);
  }
  </style>
  