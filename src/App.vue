<template>
  <div>
      <HeaderItem />
      <router-view />
      <FooterItem />
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue';
import FooterItem from './components/FooterItem.vue';

export default {
    components: {
        HeaderItem,
        FooterItem,
    },
};
</script>

<style scoped>

</style>