<template>
  <div id="projet">
    <section>
      <h2 class="heading"><span>Mes </span>créations</h2>
      <div class="projects">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <h2>{{ project.name }}</h2>
          <img :src="project.image" class="project-image" alt="Image du projet" />
          <button @click="openModal(project)">Détails</button>
        </div>
      </div>

      <!-- Modal pour afficher les détails du projet -->
      <ModalCreations :isOpen="isModalOpen" @close="isModalOpen = false">
        <h2 class="title">{{ selectedProject?.name }}</h2>
        <p>{{ selectedProject?.date_creation }}</p>
        <p>{{ selectedProject?.technology }}</p>
        <img :src="selectedProject?.image" class="project-image" alt="Image du projet" />
        <a :href="selectedProject?.link" target="_blank" class="link">Voir</a>
        <a :href="selectedProject?.link_github" target="_blank" class="link">Lien Github</a>
      </ModalCreations>
      <br />
    </section>
  </div>
</template>

<script>
import ModalCreations from '@/components/ModalCreations.vue'

export default {
  components: {
    ModalCreations
  },
  data() {
    return {
      isModalOpen: false,
      selectedProject: null,
      projects: [
        {
          id: 1,
          name: 'Curriculum Vitae',
          date_creation: 'Date : 25/02/2024',
          image: '/images/CV_.jpg',
          technology: 'Technologie utilisée : HTML & CSS',
          link: '/projet-dev-D2/index.html',
          link_github: 'https://github.com/Deodatweb/projet-dev-D2'
        },
        {
          id: 2,
          name: 'Cahier des charges',
          date_creation: 'Date : 16/03/2024',
          image: '/images/cahier_des_charges_.jpg',
          technology: 'Technologie utilisé : PowerPoint & Word',
          link: '/CAHIER DES CHARGES LA SOCKETTERIE.pdf'
        },
        {
          id: 3,
          name: "Dynamisme d'un site communautaire",
          date_creation: 'Date : 15/04/2024',
          image: '/images/commentaires_.jpg',
          technology: 'Technologie utilisée : HTML & CSS & JAVASCRIPT',
          link: '/projet-dev-D4/index.html',
          link_github: 'https://github.com/Deodatweb/projet-dev-D4'
        },
        {
          id: 4,
          name: 'Site : CILS BY CHLOE (projet)',
          date_creation: 'Date : 19/08/2020',
          image: '/images/cils_by_chloe_.jpg',
          technology: 'Technologie utilisée : HTML & CSS & BOOTSTRAP',
          link: '/CilsbyChloe/index.html',
          link_github: 'https://github.com/Deodatweb/Cils_by_chloe/tree/main/CilsbyChloe'
        },
        {
          id: 5,
          name: 'Site : Brasserie des 200 brasses (projet)',
          date_creation: 'Date : 08/08/2021',
          image: '/images/200_brasses_.jpg',
          technology: 'Technologie utilisée : HTML & CSS & BOOTSTRAP',
          link: '/200_brasses/index.html',
          link_github: 'https://github.com/Deodatweb/Les_200_brasses'
        },
        {
          id: 6,
          name: 'Site : Vr Cils Studio (projet en cours)',
          date_creation: 'Date : 15/07/2024',
          image: '/images/vr_cils_studio_.jpg',
          technology: 'Technologie utilisée : HTML & CSS & BOOTSTRAP',
          link: '/VRCilsStudio/index.html',
          link_github: 'https://github.com/Deodatweb/Vr_cils_studio'
        }
      ]
    }
  },
  methods: {
    openModal(project) {
      this.selectedProject = project
      this.isModalOpen = true
    }
  }
}
</script>

<style scoped>
section {
  min-height: 100vh;
}

.heading {
  text-align: center;
  font-size: 40px;
  margin-bottom: 2rem;
  color: var(--text-color);
  padding-top: 120px;
}

span {
  color: var(--main-color);
  text-shadow:
    0 0 25px var(--main-color),
    0 0 50px var(--main-color);
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.project-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 450px;
}

.project-card:hover {
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.project-image {
  width: 100%;
  height: 335px;
  border-radius: 4px;
}

button,
.link {
  margin: 10px 0 0 10px;
  padding: 0.8rem 1.5rem;
  background: var(--main-color);
  border-radius: 4rem;
  box-shadow: 0 0 1rem var(--main-color);
  font-size: 1rem;
  color: var(--bg-color);
  letter-spacing: 0.1rem;
  transition: 0.5s ease;
  border: none;
}

button:hover {
  box-shadow: none;
}
</style>
