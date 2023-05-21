<template>
  <section 
    id="home-part" 
    class="transition-all duration-1000 bg-black"
    :class="hideHome ? '-z-20' : 'z-10'"
  >
    <div class="w-screen h-screen slide bg-cover bg-center z-10"></div>
    <div class="fixed top-0 left-0 w-screen h-screen bg-black/40 z-10"></div>
    <div class="fixed top-0 left-0 w-screen h-screen flex flex-col items-center text-white space-y-2 z-20">
      <h1 class="text-4xl uppercase mt-48">
        Sarah Imbert-Bétemps
      </h1>
      <h2 class="text-5xl font-extrabold">
        CHROMOPUNCTURE
      </h2>
      <h3 class="text-2xl text-center font-normal px-32">
        Thérapeute Diplômée en Médecine Esogetics de l’Institut International Peter Mandel<br />
          <span class="text-center">AGR&Eacute;&Eacute;E ASCA</span>
      </h3>
      <a
          href="#"
          class="transition duration-500 btn-light mt-6"
          @click="scrollDown"
          >
          Plus d'informations
      </a>
      <!-- END MAIN TEXT / BUTTONS -->
      <scroll-indicator-white @event-scroll-down="scrollDown"/>
      <!-- END SCROLL ARROWS BOTTOM -->
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits(['eventScrollTo']);

let hideHome = ref(true);

onMounted(() => {
  setTimeout(() => {
    hideHome.value = false;
  }, 3000)
});

const scrollDown = () => {
  const mainContent = document.getElementById('main-content');

  console.log(mainContent?.offsetTop)

  emit('eventScrollTo', mainContent?.offsetTop)
}

</script>

<style scoped>
.slide {
  background-image: url('~/assets/images/accueil_Sarah_Imbert-Betemps.jpg');
}
</style>
