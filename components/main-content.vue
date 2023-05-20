<template>
  <div id="main-content" class="grid md:grid-cols-2 bg-white">
    <div class="text-secondary space-y-8 p-16">
      <h2 class="text-3xl font-bold mt-8">
          A propos
      </h2>
      <h3 class="text-2xl">
          Parler le langage de la cellule pour guérir le
          corps & l’esprit
      </h3>
      <p class="text-lg font-light text-justify">
          Mon objectif est de vous guider dans votre
          évolution grâce à un panel de techniques qui
          vous permettront de retrouver forme, sérénité,
          bien-être, équilibre et santé... En tant que
          thérapeute, j'ai l'intime conviction que nos
          problématiques physiques récurrentes trouvent
          souvent leurs origines dans des émotions non
          intégrées du passé. 
      </p>
      <p class="text-lg font-light text-justify">
        C'est pourquoi, ma démarche
        s'inscrit dans une approche intégrative globale,
        qui associe les différents niveaux énergétiques.
        Je vous invite à découvrir les différentes
        méthodes et la philosophie dans laquelle
        s'inscrit mon approche.
      </p>
      <p class="text-right">
          Sarah Imbert-Bétemps  
      </p>
    </div>
    <div class="w-full h-full bg-image bg-cover bg-[-16rem] bg-no-repeat grayscale">
    </div>
    <scroll-indicator-accent @event-scroll-down="scrollDown" />
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['eventScrollTo']);

const scrollDown = () => {
  const mainContent = document.getElementById('caroussel');

  console.log(mainContent?.offsetTop)

  emit('eventScrollTo', mainContent?.offsetTop)
}

</script>

<style scoped>
.bg-image {
  background-image: url('~/assets/images/Sarah_Imbert_Betemps_chromopuncture_therapeute.jpg');
}
</style>