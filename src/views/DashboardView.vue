<script setup>
import JokeItem from '../components/dashboard/RandomJoke.vue';
import Cutie from '../components/dashboard/Cutie.vue';
import Emoji from '../components/dashboard/Emoji.vue';
import Ip from '../components/dashboard/Ip.vue';
import Sheets from '../components/dashboard/Sheets.vue';


</script>
<template>
  <main ref="dashboard">
    <section>
      <div id="intro-card" class="card white-card">
        <Cutie />

        <Sheets />

      </div>

      <div id="music-card" class="card blur-card">
        <i class="icon">🎸</i>
        <!-- <span>Tired from ads?</span> -->
        <audio controls="" style="margin: .7em 2em 1em;" src="https://stream2.jupinfo.fr:8443/play"></audio>
      </div>

      <div id="joke-card" class="card blur-card">
        <i id="emoji-icon" class="icon">
          <Emoji />
        </i>
        <div id="joke">
          <JokeItem />
        </div>
      </div>
      <div id="tswd-card" class="card blur-card mini-card">
        <span>What does TSWD stand for?</span>
        <abbr title="TSWD"><a href="https://webdesign.tswd.fr" target="_blank"><strong>T</strong>homas
            <strong>S</strong>erment <strong>W</strong>eb <strong>D</strong>esign</a></abbr>
      </div>
      <div id="lorem-card" class="card white-card mini-card">
        <!-- <i class="icon">🐼</i> -->
        <h1>I ❤️ <strong>
            <Ip />
          </strong></h1>

      </div>
    </section>
  </main>
</template>

<script>
//import { gsap } from 'gsap';

export default {
  mounted() {

    this.$refs.dashboard.classList.add("loaded");



    // this.$refs.section.style.transform ="none";
    //  this.$refs.card.style.transform ="none";

  }
};
</script>

<style scoped>
#clock {
  font-family: montserrat;
  font-weight: 100;
  font-size: 0.8em;
}

section {
  font-family: "montserrat";
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em 2em;
  width: 80%;
  height: 65%;
  max-width: 1200px;
  z-index: 9;
  transform: rotateX(30deg) rotateY(-60deg) scale(0.18);

  perspective: 2000px;
  perspective-origin: bottom right;
  transition-timing-function: ease-in-out;
  transition-duration: 888ms;
  width: 100%;
}



.card {
  border-radius: 12px;
  padding: 6%;
  display: flex;
  flex-direction: column;
  transition-timing-function: ease-in-out;
  transition-duration: 888ms;
}

.card:hover {
  transform: translateZ(1em);
}

.white-card {
  color: #1e1f21;
  backdrop-filter: blur(6px);
  background: rgb(255 255 255 / 70%);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgb(255 255 255 / 89%);
}

.white-card a {
  color: black;
}

.blur-card {
  background: rgba(0, 0, 0, 0.2);

  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
}

.card:nth-child(1) {
  grid-column: span 2;
  /* Cette carte occupe 2 colonnes */
  grid-row: span 5;
  /* Cette carte occupe toute la hauteur */
  transform: translateZ(50em);
  transition-delay: 0ms;
}

.card:nth-child(2) {
  grid-column: 3 / span 2;
  grid-row: span 2;
  transform: translateZ(-110em);
  transition-delay: 100ms;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.card:nth-child(3) {
  grid-column: 3 / span 2;
  grid-row: span 2;
  transform: translateX(28em);
  transition-delay: 200ms;
}

.card:nth-child(4) {
  grid-column: 3 / span 1;
  grid-row: span 1;
  transform: translateY(19em);
  transition-delay: 300ms;
}

.card:nth-child(5) {
  grid-column: 4 / span 1;
  grid-row: span 1;
  transform: translateZ(-183em);
  transition-delay: 400ms;
}

.card .icon {
  font-style: initial;
  font-size: 2.5em;
  margin-bottom: 0.3em;
}

.card span {
  font-weight: 800;
  font-size: 1.5em;
  padding-bottom: 0.3em;
}

main.loaded section,
main.loaded .card {
  transform: none;
}

abbr,
abbr a {
  text-decoration: none;
  color: white;
}

a {
  transition-duration: 666ms;
}

a:hover {
  opacity: 0.6;
}

audio {
  audio::-webkit-media-controls-panel {
    background-color: #616161;
  }
}

#ascii-anim {
  font-weight: 900;
  font-size: 4em;
  text-align: center;
  padding: 3% 0;
}

#ascii-anim pre {
  padding: 0;
  margin: 0;
}

#joke {
  min-height: 6em;
  display: inline-block;
}

@media screen and (max-width: 980px) {
  section {
    grid-template-columns: 1fr;
    height: unset;

  }

  .card:nth-child(1),
  .card:nth-child(2),
  .card:nth-child(3),
  .card:nth-child(4),
  .card:nth-child(5) {
    grid-column: 1;
  }
}

@media screen and (minwidth: 1990px) {
  body {
    font-size: 18px;
  }
}
</style>../components/dashboard/RandomJoke.vue
