<template>
  <header class="header">
    <div class="header-wrapper">
      <nuxt-link class="header-link" to="/creation">作品空间</nuxt-link>
      <div>
        <nuxt-link class="header-link" to="/">首页</nuxt-link>
        <nuxt-link class="header-link" to="/resource">资源</nuxt-link>
        <nuxt-link class="header-link" to="/about">关于</nuxt-link>
        <nuxt-link class="header-link" to="/login">用户</nuxt-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
.header {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  &-wrapper {
    width: @contentWidth;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  &-link {
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #eee;
      text-decoration: underline;
    }
  }
}
</style>