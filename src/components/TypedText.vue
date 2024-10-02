<template>
  <div>
    <h3>et je suis <span ref="typedElement"></span></h3>
  </div>
</template>

<script>
import Typed from 'typed.js'
import { onMounted, ref, onBeforeUnmount } from 'vue'

export default {
  name: 'TypedText',
  setup() {
    const typedElement = ref(null)
    let typedInstance = null

    onMounted(() => {
      const options = {
        strings: ['Développeur web junior', 'Web Designer', 'Photographe'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
      }
      typedInstance = new Typed(typedElement.value, options)
    })

    onBeforeUnmount(() => {
      if (typedInstance) {
        typedInstance.destroy()
      }
    })

    return {
      typedElement
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 2rem;
  color: var(--text-color);
  margin: 0;
}

span {
  color: var(--main-color);
  text-shadow:
    0 0 25px var(--main-color),
    0 0 50px var(--main-color);
}
</style>
