<template>
  <div>
      <HeaderNav />
      <router-view />
      <Foot />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import Foot from './components/Foot.vue';

export default {
    components: {
        HeaderNav,
        Foot,
    },
};
</script>

<style scoped>

</style>