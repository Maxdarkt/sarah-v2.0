<script setup lang="ts">

import { GoogleMap, Marker } from 'vue3-google-map';

const center = { lat: 46.1976627, lng: 6.1422661 }

const config = useRuntimeConfig();

</script>

<template>
  <div class="flex flex-col md:flex-row bg-white">
    <div class="w-full md:w-[65%] h-full">
      <!-- MAPS -->
      <GoogleMap
        :api-key="config.public.googleMapsAPIKey"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="14"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
    <div class="w-full md:w-[35%] h-full p-4">
      <div class="w-full flex flex-col xs:flex-row md:flex-col p-4 md:px-8">
        <h1 class="text-3xl text-center font-bold py-4">
          Contact
        </h1>
        <div class="w-fit xs:w-[50%] md:w-fit mx-auto mt-4">
          <p class="text-gray-800 text-sm mymd:text-base">
            <a href="http://centreparamedicalgenevois.ch/" target="blank">
              Centre paramédical Genevois
            </a><br/>
              Av. Henri-Dunant 2 - 1er étage<br />
              CH 1205 Genève
          </p>
          <p class="text-gray-800 text-sm mymd:text-base mt-4 transition duration-500 hover:text-accent">
            <a  
              href="mailto:sarah.ib@chromopuncture-suisse.ch"
              type="mailto"
              target="blank"
            >
              sarah.ib@chromopuncture-suisse.ch
            </a>
          </p>
          <p class="text-gray-800 text-sm mymd:text-base mt-2">
            www.chromopuncture-suisse.ch
          </p>
          <p class="text-gray-800 text-sm mymd:text-base mt-2">
            <a href="tel:+41782197700">+41 78 219 77 00 </a>
          </p>
          <p class="follow-me">
            Suivez-moi
            <a href="https://www.facebook.com/profile.php?id=100073115154702" onclick="window.open(this.href);return false">
                <img src="~/assets/images/facebook.png" alt="lien facebook Sarah Imbert-Bétemps Thérapeute Chromopuncture Suisse Genève">
            </a>
            <a href="https://www.instagram.com/chromopuncture/" onclick="window.open(this.href);return false">
              <img src="~/assets/images/icone_instagram.png" alt="lien instagram Sarah Imbert-Bétemps Thérapeute Chromopuncture Suisse Genève">
            </a>
          </p>
          <div class="btn-brochure">
              <a href="/files/brochure_SI_11.05.2023.pdf" onclick="window.open(this.href);return false" download class="dark-btn">Télécharger la brochure</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.follow-me{
    font-family: stalemate;
    font-size: 42px;
    margin-top: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.follow-me img{
    height: 2rem;
}

.dark-btn{
    background: transparent;
    font-weight: 600;
    padding: 0.7em 2em;
    font-size: 14px;
    color: #000000;
    display: inline-block;
    margin-right: 10px;
    border-radius: 3px;
    border: 2px solid rgba(83, 83, 83, 0.9);
    transition: all 400ms ease-in-out;
}

.dark-btn:hover{
    color: #00af94;
    border: 2px solid rgba(83, 83, 83, 0.4);
    text-decoration: none !important;
    outline: none !important;
}
</style>