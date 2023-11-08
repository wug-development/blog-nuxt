<template>
  <div>
    well come to my page
    <NuxtLink to="/list">进入列表页</NuxtLink>
    <NuxtLink to="/111">进入文章页</NuxtLink>
    <div>{{ foo }}</div>
    <div>pos: {{ x }}, {{ y }}</div>
    <div class="user-info">
      <strong> 姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }} </strong>
    </div>
    <div ref="el" :style="style" style="position: fixed">Drag me! I am at {{ x }}, {{ y }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useDraggable } from '@vueuse/core';
import { useUserStore } from '@/stores';

const el = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { style } = useDraggable(el, {
  initialValue: { x: 1000, y: 40 }
});
const userInfo = useUserStore().userInfo;

const { x, y } = useMouse();

const foo = useFoo();
const appConfig = useAppConfig();
console.log('appConfig :>> ', appConfig);

// const loadData = async () => {
//   const { data, pending, error, refresh } = await useAsyncData(
//     'mountains',
//     () => $fetch('https://api.nuxtjs.dev/mountains')
//   )
//   console.log('useAsyncData :>> ', data);
// };
// loadData();

// const fetchData = async () => {
//   const param1 = ref('value1')
//   const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains',{
//       query: { param1, param2: 'value2' }
//   })
//   console.log('fetchData :>> ', data);
// };
// fetchData();

const counter = useCookie('counter');
console.log('counter :>> ', counter);
if (counter) {
  counter.value = counter.value || Math.round(Math.random() * 1000).toString();
}
</script>
<style lang="less">
.user-info {
  color: @theme;
}
</style>
