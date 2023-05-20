<template>
  <!-- START SCROLL ARROWS BOTTOM -->
  <div class="scroll-indicator hover:opacity-100 cursor-pointer">
      <a href="#" @click="scrollDown">
          <span class="m_scroll_arrows unu"></span>
          <span class="m_scroll_arrows doi"></span>
          <span class="m_scroll_arrows trei"></span>
      </a>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['eventScrollDown'])

const scrollDown = () => {

  emit('eventScrollDown')
}

</script>

<style scoped>
.scroll-indicator {
    position: absolute;
    left: 50%;
    -webkit-transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    -moz-transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    -ms-transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 35px;
    width: 50px;
    height: 50px;
    text-align: center;
    opacity: 0.6;
}
.scroll-indicator:hover {
    opacity: 1;
}
.scroll-indicator:hover .m_scroll_arrows.doi {
    margin-top: -3px;
}
.scroll-indicator:hover .m_scroll_arrows.trei {
    margin-top: -1px;
}
.scroll-indicator .m_scroll_arrows {
    display: block;
    -webkit-transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    -moz-transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    -ms-transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    margin: 0 auto;
    width: 16px;
    height: 16px;
}
.scroll-indicator .m_scroll_arrows.unu,
.scroll-indicator .m_scroll_arrows.doi,
.scroll-indicator .m_scroll_arrows.trei {
    -webkit-animation: arrow-scroll 1s infinite;
    -moz-animation: arrow-scroll 1s infinite;
    animation: arrow-scroll 1s infinite;
    -webkit-animation-direction: alternate;
    -moz-animation-direction: alternate;
    animation-direction: alternate;
}
.scroll-indicator .m_scroll_arrows.unu {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    animation-delay: 0.1s;
    margin-top: 1px;
}
.scroll-indicator .m_scroll_arrows.doi {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    animation-delay: 0.2s;
    margin-top: -6px;
}
.scroll-indicator .m_scroll_arrows.trei {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    animation-delay: 0.3s;
    margin-top: -6px;
}

@-webkit-keyframes arrow-scroll {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
@-moz-keyframes arrow-scroll {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
@keyframes arrow-scroll {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
</style>