<template>
  <div>
    <HeaderItem />
    <router-view />
    <FooterItem />
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  components: {
    HeaderItem,
    FooterItem
  },
  setup() {
    const siteData = reactive({
      title: 'Portfolio | Freddy RICHE',
      description: 'Développeur Web junior, je crée des sites performants et ergonomiques. Découvrez mes projets et contactez-moi pour vos besoins en développement.'
    })
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: 'description',
          content: computed(() => siteData.description)
        }
      ]
    })
  }
}
</script>

<style scoped></style>
