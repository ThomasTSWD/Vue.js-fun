<template>

  <p>
    <slot name="clock">{{ clock }}</slot>
  </p>

</template>
<script>
import { ref, onMounted } from 'vue';



export default {
  setup() {
    const clock = ref("00:00:00");

    onMounted(async () => {
      const maintenant = new Date();
      const heures = maintenant.getHours().toString().padStart(2, "0");
      const minutes = maintenant.getMinutes().toString().padStart(2, "0");
      const secondes = maintenant.getSeconds().toString().padStart(2, "0");
      try {

        clock.value = heures + ":" + minutes + ":" + secondes;
      } catch (error) {
        console.error("Erreur: ", error);
      }
    });

    return {
      clock
    };
  }


};



</script>
<style scoped>
@media (min-width: 1024px) {}
</style>
