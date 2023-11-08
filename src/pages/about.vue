<template>
  <div class="about-box">
    <div class="typing">日子好好过，下次还要分享好文章</div>
  </div>
  <div class="wavy">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="content">
    <h2>Wavy Section</h2>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate',
    mode: 'out-in'
  }
});
</script>
<style lang="less" scoped>
.about-box {
  background-color: #fff;
  background-image: linear-gradient(to right, rgba(209, 226, 249, 0.3), #bfd8fa);
  min-height: 100vh;
}

.typing {
  font-size: 16px;
  /* 初始宽度为0 */
  width: 0;
  height: 24px;
  line-height: 24px;
  padding-right: 0px;
  border-right: 2px solid darkgray;
  animation:
    write 5s steps(20) forwards,
    blink 1s steps(1) infinite;
  overflow: hidden;
  color: #666;
}

@keyframes write {
  0% {
    width: 0;
  }

  100% {
    // width: max-content;
    width: 242px;
  }
}

@keyframes blink {
  50% {
    /* transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。 */
    border-color: transparent;
    /* #00000000 */
  }
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
