<template>
  <!-- Loader -->
  <start-loading class="fixed top-0 left-0 w-screen h-screen" />
  <!-- SARAH IMBERT-BETEMPS -->
  <home-part class="fixed top-0 left-0 w-screen h-screen" @event-scroll-to="scrollTo" />
  <div class="relative w-screen h-screen -z-10"></div>
  <!-- MAIN CONTENT -->
  <main-content class="relative w-screen h-screen z-10" @event-scroll-to="scrollTo"/>
  <!-- SLIDE CONTENT -->
  <caroussel-slide class="relative w-screen h-screen z-10" />
  <!-- GALLERY -->
  <gallery-image class="relative z-10" />
  <!-- CONTACT -->
  <contact-map class="relative z-10" />
  <!-- FOOTER -->
  <the-footer class="relative z-10" @event-scroll-to="scrollTo" />
</template>

<script setup lang="ts">
import * as $ from 'jquery';

let loaded = ref(false);
let animation = ref(true);

const scrollTo = (height: number) => {
  console.log(height);
  // window.scrollTo({ 
  //   top: height,
  //   behavior: 'smooth'
    
  // })
  $("html, body").animate({ scrollTop: height }, 350);
}
</script>