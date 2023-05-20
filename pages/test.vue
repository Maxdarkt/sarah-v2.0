<template>
  <!-- Implement the carousel -->
  <div class="relative w-full h-screen overflow-hidden bg-white">
    <!-- The dots -->
    <div class="absolute right-0 bottom-0 left-0 flex justify-center p-0 space-x-5 z-10 w-full px-5 py-3 bg-black/90">
      <!-- dot 1 -->
      <div class="dot-caroussel w-3 h-3 rounded-full cursor-pointer"></div>
      <!-- dot 2 -->
      <div class="dot-caroussel w-3 h-3 rounded-full cursor-pointer"></div>
      <!-- dot 3 -->
      <div class="dot-caroussel w-3 h-3 rounded-full cursor-pointer"></div>
      <!-- dot 4 -->
      <div class="dot-caroussel w-3 h-3 rounded-full cursor-pointer"></div>
    </div>
    <!-- The pictures -->
    <div id="caroussel-first-slide" class="slide-caroussel absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out hidden">
      <caroussel-slide-1 />
    </div>
    <div id="caroussel-second-slide" class="slide-caroussel absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out hidden">
      <caroussel-slide-2 />
    </div>
    <div id="caroussel-third-slide" class="slide-caroussel absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out hidden">
      <caroussel-slide-3 />
    </div>
    <div id="caroussel-fourth-slide" class="slide-caroussel absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out">
      <caroussel-slide-4 />
    </div>
    <!-- The previous button -->
    <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/50 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer">❮</a>
    <!-- The next button -->
    <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/50 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer">❯</a>
  </div>
</template>