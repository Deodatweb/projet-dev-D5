<template>
    <footer>
      <p>&copy; 2024 par Deodatweb | Tous droits réservés - <span>Dernière mise à jour : {{ lastModifiedDate }}</span></p>
      <div class="social-media">
        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://discord.com" target="_blank"><i class="fa-brands fa-discord"></i></a>
        <a href="https://github.com" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </footer>
  </template>
  
  <script>  
  export default {
      data() {
        return {
          lastModifiedDate: '',
        };
      },
      mounted() {
        this.updateLastModifiedDate();
      },
      methods: {
        updateLastModifiedDate() {
          const lastModified = document.lastModified;

          this.lastModifiedDate = new Date(lastModified).toLocaleDateString();
        },
      },
      name: "FooterItem",
  };
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    padding: 1rem 0;
    font-size: 1.5rem;
  }

  span {
    font-size: 1rem;
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
  