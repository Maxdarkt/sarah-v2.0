<template>
  <!-- START LOADING -->
  <div 
    id="loading" 
    class="transition-all duration-1000"
    :class="hideLoader ? 'opacity-0 -z-50' : 'opacity-100 z-50'"
  >
    <div class="loading-balls animated-quick">
      <div class="small-first animated-quick">
        <div class="small ball smallball1"></div>
        <div class="small ball smallball2"></div>
        <div class="small ball smallball3"></div>
        <div class="small ball smallball4"></div>
      </div>

      <div class="small-second">
        <div class="small ball smallball5"></div>
        <div class="small ball smallball6"></div>
        <div class="small ball smallball7"></div>
        <div class="small ball smallball8"></div>
      </div>

      <div class="wide-ball">
        <div class="big ball"></div>
      </div>
    <!-- Text under the loading animation is in your main css file, style-static.css/scss, under the rule #loading .small-second:after -->
    </div>
  </div>
</template>

<script setup lang="ts">

let hideLoader = ref(false);

onMounted(() => {
  setTimeout(() => {
    console.log('home-part')
    hideLoader.value = true;
  }, 3000)
});

</script>

<style scoped>
@import url(~/assets/css/animate.css);

#loading {
    background: #20232d;
}
#loading .small-first {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 50vh;
    left: 50%;
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    -o-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: transparent;
}
#loading .small-second {
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: transparent;
    top: 50vh;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
#loading .small-second:after {
    /* Text under the circles */
    content: "";
    position: absolute;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    color: #4d515f;
    letter-spacing: 1px;
    top: 70px;
    width: 100vw;
    left: calc(-50vw + 20px);
    right: 0;
    height: 1px;
    text-align: center;
}
#loading .wide-ball {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 50vh;
    left: 50%;
    background-color: transparent;
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    -moz-transform: translate(-50%, -50%) rotate(-45deg);
    -ms-transform: translate(-50%, -50%) rotate(-45deg);
    -o-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
    -webkit-animation: wide-anim 2s infinite linear;
    -moz-animation: wide-anim 2s infinite linear;
    animation: wide-anim 2s infinite linear;
    -webkit-animation-delay: 0.25s;
    -moz-animation-delay: 0.25s;
    animation-delay: 0.25s;
}
#loading .wide-ball .big {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #00c8aa, 0px 0px 20px #00c8aa, 0px 0px 30px #00c8aa,
        0px 0px 50px #00c8aa, 0px 0px 60px #00c8aa;
    background-color: #00c8aa;
}
#loading .ball {
    border-radius: 50%;
    position: absolute;
}
#loading .small {
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    -webkit-animation: little-anim 2s infinite ease;
    -moz-animation: little-anim 2s infinite ease;
    animation: little-anim 2s infinite ease;
    -webkit-box-shadow: 0px 2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px rgba(0, 0, 0, 0.3);
}
#loading .small:nth-child(1) {
    top: 0%;
    left: 0%;
}
#loading .small:nth-child(2) {
    top: 0%;
    right: 0%;
}
#loading .small:nth-child(3) {
    right: 0%;
    bottom: 0%;
}
#loading .small:nth-child(4) {
    bottom: 0%;
    left: 0%;
}
#loading .smallball1 {
    -webkit-animation-delay: -1.75s;
    -moz-animation-delay: -1.75s;
    animation-delay: -1.75s;
}
#loading .smallball6 {
    -webkit-animation-delay: -1.5s;
    -moz-animation-delay: -1.5s;
    animation-delay: -1.5s;
}
#loading .smallball2 {
    -webkit-animation-delay: -1.25s;
    -moz-animation-delay: -1.25s;
    animation-delay: -1.25s;
}
#loading .smallball7 {
    -webkit-animation-delay: -1s;
    -moz-animation-delay: -1s;
    animation-delay: -1s;
}
#loading .smallball3 {
    -webkit-animation-delay: -0.75s;
    -moz-animation-delay: -0.75s;
    animation-delay: -0.75s;
}
#loading .smallball8 {
    -webkit-animation-delay: -0.5s;
    -moz-animation-delay: -0.5s;
    animation-delay: -0.5s;
}
#loading .smallball4 {
    -webkit-animation-delay: -0.25s;
    -moz-animation-delay: -0.25s;
    animation-delay: -0.25s;
}
#loading .smallball5 {
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    animation-delay: 0s;
}
@-webkit-keyframes wide-anim {
    0% {
        -webkit-transform-origin: center;
        -webkit-transform: translate(-50%, -50%) rotate(45deg);
    }
    100% {
        -webkit-transform-origin: center;
        -webkit-transform: translate(-50%, -50%) rotate(405deg);
    }
}
@-moz-keyframes wide-anim {
    0% {
        -moz-transform-origin: center;
        -moz-transform: translate(-50%, -50%) rotate(45deg);
    }
    100% {
        -moz-transform-origin: center;
        -moz-transform: translate(-50%, -50%) rotate(405deg);
    }
}
@keyframes wide-anim {
    0% {
        -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -ms-transform-origin: center;
        -o-transform-origin: center;
        transform-origin: center;
        -webkit-transform: translate(-50%, -50%) rotate(45deg);
        -moz-transform: translate(-50%, -50%) rotate(45deg);
        -ms-transform: translate(-50%, -50%) rotate(45deg);
        -o-transform: translate(-50%, -50%) rotate(45deg);
        transform: translate(-50%, -50%) rotate(45deg);
    }
    100% {
        -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -ms-transform-origin: center;
        -o-transform-origin: center;
        transform-origin: center;
        -webkit-transform: translate(-50%, -50%) rotate(405deg);
        -moz-transform: translate(-50%, -50%) rotate(405deg);
        -ms-transform: translate(-50%, -50%) rotate(405deg);
        -o-transform: translate(-50%, -50%) rotate(405deg);
        transform: translate(-50%, -50%) rotate(405deg);
    }
}
@-webkit-keyframes little-anim {
    0% {
        -webkit-transform: scale(1);
        background-color: #00c8aa;
    }
    10% {
        -webkit-transform: scale(1.3);
        box-shadow: 0px 0px 10px #00c8aa, 0px 0px 20px #00c8aa,
            0px 0px 30px #00c8aa, 0px 0px 50px #00c8aa, 0px 0px 60px #00c8aa;
    }
    15% {
        -webkit-transform: scale(1);
    }
    25% {
        -webkit-transform: scale(1);
        background-color: #00c8aa;
    }
    100% {
        -webkit-transform: scale(1);
        background-color: #00c8aa;
    }
}
@-moz-keyframes little-anim {
    0% {
        -moz-transform: scale(1);
        background-color: #00c8aa;
    }
    10% {
        -moz-transform: scale(1.3);
        box-shadow: 0px 0px 10px #00c8aa, 0px 0px 20px #00c8aa,
            0px 0px 30px #00c8aa, 0px 0px 50px #00c8aa, 0px 0px 60px #00c8aa;
    }
    15% {
        -moz-transform: scale(1);
    }
    25% {
        -moz-transform: scale(1);
        background-color: #00c8aa;
    }
    100% {
        -moz-transform: scale(1);
        background-color: #00c8aa;
    }
}
@keyframes little-anim {
    0% {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        background-color: #00c8aa;
    }
    10% {
        -webkit-transform: scale(1.3);
        -moz-transform: scale(1.3);
        -ms-transform: scale(1.3);
        -o-transform: scale(1.3);
        transform: scale(1.3);
        box-shadow: 0px 0px 10px #00c8aa, 0px 0px 20px #00c8aa,
            0px 0px 30px #00c8aa, 0px 0px 50px #00c8aa, 0px 0px 60px #00c8aa;
    }
    15% {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
    25% {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        background-color: #00c8aa;
    }
    100% {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        background-color: #00c8aa;
    }
}
</style>