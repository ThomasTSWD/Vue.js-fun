<template>
  <p id="emoji-icon" @click="alternateEmojis">{{ emoji }}</p>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const emoji = ref("😂");
    let intervalId = null;

    function alternateEmojis() {
      emoji.value = emoji.value === "😂" ? "💩" : "😂";
    }

    onMounted(() => {
      intervalId = setInterval(alternateEmojis, 3000);
    });

    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });

    return {
      emoji,
      alternateEmojis
    };
  }
};
</script>

<style scoped>
@media (min-width: 1024px) {}
</style>