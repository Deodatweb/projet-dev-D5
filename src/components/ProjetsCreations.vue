<template>
  <div id="projet">
      <h1>Mes projets</h1>
      <div class="projects">
          <div v-for="project in projects" :key="project.id" class="project-card">
              <h2>{{ project.name }}</h2>
              <p>{{ project.description }}</p>
              <button @click="openModal(project)">Détails</button>
          </div>
      </div>

      <!-- Modal pour afficher les détails du projet -->
      <ModalCreations :isOpen="isModalOpen" @close="isModalOpen = false">
          <h2>{{ selectedProject?.name }}</h2>
          <p>{{ selectedProject?.description }}</p>
          <a :href="selectedProject?.link" target="_blank">Voir le projet</a>
      </ModalCreations>
  </div>
</template>

<script>
import ModalCreations from '@/components/ModalCreations.vue';

  export default {
      components: {
          ModalCreations,
      },
      data() {
          return {
              isModalOpen: false,
              selectedProject: null,
              projects: [
                  { id: 1, name: "Projet 1", description: "Description du projet 1", link: "#"},
                  { id: 2, name: "Projet 2", description: "Description du projet 2", link: "#"},
                  { id: 3, name: "Projet 3", description: "Description du projet 3", link: "#"},
                  { id: 4, name: "Projet 4", description: "Description du projet 4", link: "#"},
                  { id: 4, name: "Projet 5", description: "Description du projet 5", link: "#"},
                  { id: 4, name: "Projet 6", description: "Description du projet 6", link: "#"}
              ],
          };    
      },
      methods: {
          openModal(project) {
              this.selectedProject = project;
              this.isModalOpen = true;
          }
      }
  };
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.project-card {
  background: #fff;
  padding: 20px;
  margin: 0 50px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  width: 300px;
  height: 300px;
}
</style>