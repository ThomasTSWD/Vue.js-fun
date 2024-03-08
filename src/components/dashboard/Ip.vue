<template>

  <p>
    <slot name="ip">{{ ip }}</slot>
  </p>

</template>
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const ip = ref("");

    onMounted(async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json")
          .then((response) => response.json())
          .then((data) => {

            // Utiliser un service tiers pour récupérer la ville depuis l'IP
            fetch("https://ipapi.co/" + data.ip + "/json/")
              .then((response) => response.json())
              .then((data) => {
                console.log("Ville : ", data.city);
                ip.value = data.city;
              })
              .catch((error) => console.error("Erreur : ", error));
          })
          .catch((error) => console.error("Erreur : ", error));
      } catch (error) {
        console.error("Erreur lors de la récupération de la blague:", error);
      }
    });

    return {
      ip
    };
  }
};









</script>
<style scoped>
@media (min-width: 1024px) {}
</style>
