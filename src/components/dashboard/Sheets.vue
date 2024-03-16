<template>

  <p>
    <!-- v-html au lieu de slot -->
  <div v-html="sheets"></div>
  </p>

</template>
<script>
import { ref, onMounted } from 'vue';
const id = '1eUCHzkMS0J9k7f9gaqS7eWlJJQgsB2tWS3qKM90x0u4';
const gid = '0';
const url = 'https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?tqx=out:json&tq&gid=' + gid;





export default {
  setup() {
    const sheets = ref("tableau vide");

    onMounted(async () => {
      try {
        const response = await fetch(url)

          .then(response => response.text())
          .then(data => {


            const dataClean = data.slice(47, -2)
            // SLICE POUR ENLEVER TEXTE GOOGLE DEVANT
            const json = JSON.parse(dataClean);
            console.log(json)
            const tiTle = json.table.rows[0].c[1].v;
            console.log("🚀 ~ onMounted ~ tiTle :", tiTle)
            const p1 = json.table.rows[1].c[1].v;
            const p2 = json.table.rows[2].c[1].v;
            const Img = json.table.rows[3].c[1].v;
            //sheets.value = `<h2>${tiTle}</h2><p>${p1}</p><p>${p2}</p><img src="${Img}">`;
            sheets.value = `<h2>${tiTle}</h2><p>${p1}</p><a target="_blank" href="${p2}">Sheet</a>`;

          })


      } catch (error) {
        console.error("Erreur lors de la récupération", error);
      }
    });

    return {
      sheets
    };
  }
};
</script>
<style scoped>
@media (min-width: 1024px) {}
</style>
