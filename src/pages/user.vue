<template>
  <div>用户</div>
</template>
<script setup lang="ts">
if (process.browser && window.localStorage) {
  const user = window.localStorage.getItem('user');
  if (!user) {
    window.location.replace('/login');
  }
}
</script>
<style lang=""></style>
