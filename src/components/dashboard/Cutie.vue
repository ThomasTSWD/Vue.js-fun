<template>

  <p ref="ascii">

  </p>

</template>
<script>


export default {

  mounted() {



    // Déclare une variable pour stocker l'instance d'animation
    var currentAnimation;

    function ASCIIAnimation(animArray, speed, DOMtarget) {
      var currentFrame = 0;
      for (var i = 0; i < animArray.length; i++) {
        animArray[i] = animArray[i].replace(/ /g, "&nbsp;");
        animArray[i] = "<pre>" + animArray[i] + "</pre>";
      }
      DOMtarget.innerHTML = animArray[0];
      currentFrame++;
      this.animation = setInterval(function () {
        DOMtarget.innerHTML = animArray[currentFrame];
        currentFrame++;
        if (currentFrame >= animArray.length) currentFrame = 0;
      }, speed);
      this.getCurrentFrame = function () {
        return currentFrame;
      };
    }

    ASCIIAnimation.prototype.stopAnimation = function () {
      clearInterval(this.animation);
    };

    function startNewAnimation(animArray, speed, DOMtarget) {
      // Arrête l'animation en cours s'il y en a une
      if (currentAnimation) {
        currentAnimation.stopAnimation();
        clearInterval(currentAnimation.animation);
      }

      // Crée une nouvelle instance d'animation
      currentAnimation = new ASCIIAnimation(animArray, speed, DOMtarget);
    }

    var targetDiv = this.$refs.ascii; // Obtient la div existante avec l'id "ascii-anim"
    var animArray1 = [
      ".(^o^)'",
      "-(^.^)-",
      "'(^o^).",
      "-(^.^)-",
      ".(^o^)'",
      "-(^.^)-",
      "'(^o^).",
      "-(^.^)-",
    ];

    var animArray0 = [
      ".(^-^)'",
      "-(^-^)-",
      "'(^-^).",
      "-(^.^)-",
      ".(^-^)'",
      "-(^-^)-",
      "'(^-^).",
      "-(^-^)-",
    ];

    startNewAnimation(animArray0, 500, targetDiv);

    const audio = document.querySelector("audio");

    audio.addEventListener("play", () => {
      console.log("Lecture en cours");
      startNewAnimation(animArray1, 500, targetDiv);
    });

    audio.addEventListener("pause", () => {
      console.log("Lecture en pause");
      startNewAnimation(animArray0, 500, targetDiv);
    });
  }
};

</script>
<style scoped>
p {
  font-size: 4em;
  text-align: center;
}

@media (min-width: 1024px) {}
</style>
