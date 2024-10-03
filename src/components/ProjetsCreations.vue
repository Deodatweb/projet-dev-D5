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
        <h2>{{ selectedProject?.name }}</h2>
        <p>{{ selectedProject?.date_creation }}</p>
        <p>{{ selectedProject?.technology }}</p>
        <img :src="selectedProject?.image" class="project-image" alt="Image du projet">
        <a :href="selectedProject?.link" target="_blank">Voir le projet</a>
      </ModalCreations>
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
          description: 'Description du projet 2',
          image: '/images/CV_.jpg',
          technology: 'Technologie utilisée : HTML & CSS',
          link: '#'
        },
        {
          id: 2,
          name: 'Cahier des charges',
          date_creation: '15/04/2024',
          description: 'Description du projet 2',
          image: '/images/clavier_blanc.jpg',
          technology: 'HTML & CSS',
          link: '#'
        },
        {
          id: 3,
          name: "Dynamisme d'un site communautaire",
          date_creation: '15/04/2024',
          description: 'Description du projet 3',
          image: '/images/clavier_blanc.jpg',
          technology: 'HTML & CSS',
          link: '#'
        },
        {
          id: 4,
          name: 'Projet 4',
          date_creation: '15/04/2024',
          description: 'Description du projet 4',
          image: '/images/clavier_blanc.jpg',
          technology: 'HTML & CSS',
          link: '#'
        },
        {
          id: 5,
          name: 'Projet 5',
          date_creation: '15/04/2024',
          description: 'Description du projet 5',
          image: '/images/clavier_blanc.jpg',
          technology: 'HTML & CSS',
          link: '#'
        },
        {
          id: 6,
          name: 'Projet 6',
          date_creation: '15/04/2024',
          description: 'Description du projet 6',
          image: '/images/clavier_blanc.jpg',
          technology: 'HTML & CSS',
          link: '#'
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
  height: auto;
  border-radius: 4px;
}

button {
  margin-top: 10px;
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
