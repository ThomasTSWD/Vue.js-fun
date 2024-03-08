<template>

  <p>
    <slot name="joke">{{ joke }}</slot>
  </p>

</template>
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const joke = ref("Blague par défaut");

    onMounted(async () => {
      try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
        const data = await response.json();
        console.log(data)
        joke.value = data.joke;
      } catch (error) {
        console.error("Erreur lors de la récupération de la blague:", error);
      }
    });

    return {
      joke
    };
  }
};
</script>
<style scoped>
@media (min-width: 1024px) {}
</style>
