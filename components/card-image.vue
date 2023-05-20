<template>
  <div
  class="group relative w-full h-full overflow-hidden bg-black cursor-pointer"
  >
    <div 
      class="w-full h-full bg-cover bg-center opacity-80 transition duration-500 scale-110 group-hover:scale-100 group-hover:opacity-100"
      :style="'background-image: url('+ props.imageSrc +')'"
    >
    </div>
    <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20 text-white bg-transparent">
      <h4 class="text-xl font-bold">
        {{  props.title }}
      </h4>
      <h4 v-if="props.descriptionIsTitle" class="text-xl font-bold">
        {{  props.description }}
      </h4>
      <p v-else class="font-light">
        {{  props.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: "TITRE"
  },
  description: {
    type: String,
    default: "Description"
  },
  imageSrc: {
    type: String,
    default: null
  },
  descriptionIsTitle: {
    type: Boolean,
    default: false
  }
})

</script>