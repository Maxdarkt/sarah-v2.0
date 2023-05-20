<template>
  <div class="h-[400px] lg:h-[300px] bg-white">
    <div class="h-full grid md:grid-cols-2 lg:grid-cols-4">
      <card-image 
        v-for="image of images"
        :key="image.id"
        :imageSrc="image.imageSrc"
        :title="image.title"
        :description="image.description"
        :descriptionIsTitle="image.descriptionIsTitle"
        class="h-1/2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

const images = [
  {
    id: 1,
    title: "SO / CHECK",
    description: "Rapport complet",
    descriptionIsTitle: false,
    imageSrc: "/images/diagnostic_SO_CHECK.jpg"
  },
  {
    id: 2,
    title: "PHYSIOSCAN",
    description: "Bilan énergétique",
    descriptionIsTitle: false,
    imageSrc: "/images/physioscan.jpg"
  },
  {
    id: 3,
    title: "MILTA",
    description: "Traitement de la douleur",
    descriptionIsTitle: false,
    imageSrc: "/images/milta.jpg"
  },
  {
    id: 4,
    title: "KASINA",
    description: "ACCES BARS",
    descriptionIsTitle: true,
    imageSrc: "/images/kasina_access_bars.jpg"
  }
]
</script>