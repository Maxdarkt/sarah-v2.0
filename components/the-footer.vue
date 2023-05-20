<template>
  <footer>
    <div class="text-xs">
      <div class="text-[#757a86]">
        <p>
          <strong>
              © {{ new Date().getFullYear() }} Sarah Imbert-Bétemps - CHROMOPUNCTURE
          </strong>
        </p>
        <p class="footer-last">
            Important : la Chromopuncture n'est pas conçue pour remplacer mais pour accompagner les diagnostics et traitements proposés par un docteur en médecine.
        </p>
      </div>
    </div>
    <!-- START GO TO TOP -->
    <a class="scroll-button cursor-pointer group" href="#" @click="scrollTop">
      <svg fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="transition-all duration-500 scale-[60%] group-hover:-translate-y-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
      </svg>
    </a>
  </footer>
</template>

<script setup lang="ts">
const emit = defineEmits(['eventScrollTo']);

const scrollTop = () => {
  const homePart = document.getElementById('home-part');

  console.log(homePart?.offsetTop)

  emit('eventScrollTo', homePart?.offsetTop)
}
</script>

<style scoped>
footer {
    position: relative;
    padding: 15px 45px;
    background: #20232d;
    overflow: hidden;
}
footer .copyright {
    padding: 0;
    text-align: left;
}
footer .copyright p {
    font-size: 12px;
    line-height: 24px;
    font-weight: 600;
    color: #757a86;
}
footer .social ul {
    float: right;
}
footer .social ul li {
    float: left;
}
footer .social ul li a {
    color: #757a86;
    padding: 0 10px;
}
footer .social ul li a:hover {
    color: #00c8aa;
}
footer .scroll-button {
    width: 50px;
    height: 50px;
    display: table;
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    cursor: pointer;
    background: #262a36;
}
footer .scroll-button i {
    -webkit-transition: all 0.3s cubic-bezier(0, 0, 0.58, 1);
    -moz-transition: all 0.3s cubic-bezier(0, 0, 0.58, 1);
    -ms-transition: all 0.3s cubic-bezier(0, 0, 0.58, 1);
    -o-transition: all 0.3s cubic-bezier(0, 0, 0.58, 1);
    transition: all 0.3s cubic-bezier(0, 0, 0.58, 1);
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 40px;
    display: table-cell;
    vertical-align: middle;
}
footer .scroll-button:hover i {
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
    transform: translateY(-5px);
}
.footer-last {
    font-style: italic;
    margin-bottom: 35px;
}
</style>