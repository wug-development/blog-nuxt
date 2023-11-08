<template>
  <Header />
  <div class="index-banner">
    <div class="index-banner--content">
      <div class="index-banner--content__title">Blog</div>
      <div class="index-banner--content__desc">This is the description of your blog</div>
    </div>
  </div>
  <div class="index-body">
    <div class="index-body--content">
      <div class="index-body__title">
        <div>Man must explore, and this is exploration at its greatest</div>
      </div>
      <div class="index-body__text">Ploblems look mighty small form 150 miles up</div>
      <div class="index-body__date">
        <span class="index-body__date--month">十一月</span>
        <span>20, 2023</span>
      </div>
    </div>
  </div>
  <div class="index-link">
    <div class="index-link--icon index-link--wechat" />
    <div class="index-link--icon index-link--email" />
    <div class="index-link--icon index-link--github" />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: '首页',
  meta: [
    {
      name: 'keywords',
      content: 'blog, nuxt, vue, typescript, less, nodejs, mongodb, koa'
    },
    {
      name: 'description',
      content: 'This is the description of your blog'
    }
  ]
});
</script>
<style lang="less">
.index-banner {
  height: 800px;
  background: url('~/assets/images/banner.jpg') no-repeat center;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &--content {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-100%);
    text-align: center;
    color: #fff;
    user-select: none;

    &__title {
      font-size: 80px;
      text-align: center;
    }

    &__desc {
      font-size: 16px;
      text-align: center;
    }
  }
}

.index-body {
  background-color: #fff;
  padding: 150px 0;
  text-align: center;
  border-bottom: 1px solid #eee;

  &--content {
    width: 460px;
    margin: 0 auto;
    text-align: left;
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
    line-height: 32px;
  }

  &__text {
    margin-top: 5px;
    color: #666;
    line-height: 24px;
    font-size: 16px;
  }

  &__date {
    margin-top: 5px;
    font-size: 12px;
    color: #999;

    &--month {
      font-size: 16px;
      color: #333;
      margin-right: 10px;
      font-style: italic;
    }
  }
}

.index-link {
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &--icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 5px;
    cursor: pointer;
  }

  &--wechat {
    background: url('~/assets/images/icon-wechat.png') no-repeat center;
    background-size: cover;
    background-position: center;
  }

  &--email {
    background: url('~/assets/images/icon-email.png') no-repeat center;
    background-size: cover;
    background-position: center;
  }

  &--github {
    background: url('~/assets/images/icon-github.png') no-repeat center;
    background-size: 90%;
    background-position: center;
  }
}
</style>
