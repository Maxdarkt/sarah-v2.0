<template>
  <!-- Implement the carousel -->
  <div id="caroussel" class="relative overflow-hidden bg-white">
    <!-- The dots -->
    <div class="absolute right-0 bottom-0 left-0 flex justify-center p-0 space-x-5 z-10 w-full px-5 py-3 bg-black/90">
      <!-- dot 1 -->
      <div class="dot-caroussel w-3 h-3 rounded-full cursor-pointer" @click="currentSlide(1)"></div>
      <!-- dot 2 -->
      <div class="dot-caroussel w-3 h-3 rounded-full cursor-pointer" @click="currentSlide(2)"></div>
      <!-- dot 3 -->
      <div class="dot-caroussel w-3 h-3 rounded-full cursor-pointer" @click="currentSlide(3)"></div>
      <!-- dot 4 -->
      <div class="dot-caroussel w-3 h-3 rounded-full cursor-pointer" @click="currentSlide(4)"></div>
    </div>
    <!-- The pictures -->
    <div id="caroussel-first-slide" class="slide-caroussel absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out opacity-0">
      <caroussel-slide-1 />
    </div>
    <div id="caroussel-second-slide" class="slide-caroussel absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out opacity-0">
      <caroussel-slide-2 />
    </div>
    <div id="caroussel-third-slide" class="slide-caroussel absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out opacity-0">
      <caroussel-slide-3 />
    </div>
    <div id="caroussel-fourth-slide" class="slide-caroussel absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out opacity-0">
      <caroussel-slide-4 />
    </div>
    <!-- The previous button -->
    <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/50 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer" @click="moveSlide(-1)">❮</a>
    <!-- The next button -->
    <a class="absolute right-2 top-1/2 p-4 -translate-y-1/2 bg-black/50 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer" @click="moveSlide(1)">❯</a>
  </div>
</template>

<script setup lang="ts">

let slideIndex = ref(1);
let nbSlides = ref(4);
let interval = ref(5000);
let timer!: any;

onMounted(() => {
  showSlide(slideIndex.value);
  launchTimer();
})

onUnmounted(() => {
  clearInterval(timer.value);
})
// launchTimer
const launchTimer = () => {
  timer = setInterval(() => {
    slideIndex.value++;
    if (slideIndex.value > nbSlides.value) {
      slideIndex.value = 1;
    }
    showSlide(slideIndex.value);
  }, interval.value);
}
// change slide with the prev/next button
const moveSlide = (moveStep: number) => {
  showSlide(slideIndex.value += moveStep);
  clearInterval(timer);
  launchTimer();
}
// change slide with the dots
const currentSlide = (n: number) => {
  slideIndex.value = n;
  showSlide(slideIndex.value);
}
const showSlide = (n: number) => {
  const slides = document.getElementsByClassName('slide-caroussel');
  const dots = document.getElementsByClassName('dot-caroussel');
  
  if (n > slides.length) {
    slideIndex.value = 1 
  }
  if (n < 1) {
    slideIndex.value = slides.length
  }

  // hide others slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('opacity-100');
    slides[i].classList.add('opacity-0');
  }
  // remove active status from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('bg-gray-100');
    dots[i].classList.add('bg-gray-400/90');
  }
  // show the active slide
  slides[slideIndex.value - 1].classList.add('opacity-100');
  slides[slideIndex.value - 1].classList.remove('opacity-0');

  // highlight the active dot
  dots[slideIndex.value - 1].classList.remove('bg-gray-400/90');
  dots[slideIndex.value - 1].classList.add('bg-gray-100');
}
</script>