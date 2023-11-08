<template>
  <div class="login-box">
    <div class="containerBg">
      <div class="bgBlue"></div>
      <div id="blurStar"></div>
    </div>
    <div id="meteor" class="meteor" />
    <div class="login-box-wrapper">
      <div class="login-body">
        <div class="login-body--wrapper">
          <div class="login-body--title">Login Blog</div>
          <div class="login-body--desc">Welcome Back, Please login to your account</div>
          <div class="login-body--input-box" :class="{ valid: state.username }">
            <input v-model.trim="state.username" type="text" maxlength="32" placeholder="请输入用户名" />
          </div>
          <div class="login-body--input-box" :class="{ valid: state.password }">
            <input
              v-model.trim="state.password"
              type="password"
              maxlength="32"
              placeholder="请输入密码"
              @keyup.enter="onLogin"
            />
          </div>
          <div class="login-body--input-box" :class="{ valid: state.imgCode }">
            <input
              v-model.trim="state.imgCode"
              type="text"
              maxlength="6"
              placeholder="请输入图形验证码"
              @keyup.enter="onLogin"
            />
            <div class="user-img-code">
              <ImageCode :change="state.change_img_code" @click="changeImageCode" @get-code="backImageCode" />
            </div>
          </div>
          <div class="login-body--btn" @click="onLogin">登录</div>
          <div class="login-body--copyright">guang.wu © {{ state.year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { message } from 'ant-design-vue';
import md5 from 'es6-md5';
import { useStarrySky } from '@/composables/useStarrySky';

const state = reactive({
  username: '',
  password: '',
  imgCode: '',
  year: new Date().getFullYear(),
  change_img_code: false, // 刷新验证码
  img_code: '' // 加密后的验证码值
});

const onLogin = () => {
  if (!state.username) {
    message.error('请输入用户名');
    return;
  }
  if (!state.password) {
    message.error('请输入密码');
    return;
  }
  if (md5(state.imgCode.toLocaleLowerCase()) !== state.img_code) {
    message.error('验证码错误');
    return;
  }
  window.location.replace('/');
};

const changeImageCode = () => {
  state.change_img_code = !state.change_img_code;
};

// 接收组件返回加密后的验证码值
const backImageCode = (code: string) => {
  state.img_code = code;
  console.log('data', state.img_code);
};

onMounted(() => {
  useStarrySky();
});
</script>
<style lang="less">
@import url('~/assets/styles/starrySky.less');

.login-box {
  height: 100vh;
  background-color: #b5e2fd;
  position: relative;

  &-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 1000px;
    height: 700px;
    background: url('~/assets/images/login-bg.jpg') no-repeat left center;
    background-size: 50% 100%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

    .login-body {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);

      &--wrapper {
        padding: 0 50px;
      }

      &--title {
        font-size: 40px;
        text-align: left;
        margin-top: 100px;
        letter-spacing: 2px;
      }

      &--desc {
        font-size: 16px;
        margin-top: 20px;
        color: #666;
        width: 220px;
      }

      &--input-box {
        margin-top: 30px;
        border: 1px solid #666;
        border-left: 5px solid #666;
        border-radius: 3px;
        overflow: hidden;
        display: flex;

        input {
          width: 100%;
          height: 42px;
          border: none;
          outline: none;
          font-size: 16px;
          color: #333;
          background-color: transparent;
          text-indent: 0.5rem;

          &::placeholder {
            color: #999;
          }

          &:-internal-autofill-previewed,
          &:-internal-autofill-selected {
            -webkit-text-fill-color: #666666 !important;
            font-size: 16px !important;
            transition: background-color 1000s ease-out 0.5s;
            outline: none;
            border: none !important;
          }
        }

        &:focus-within {
          border: 1px solid #000;
          border-left: 5px solid #000;
        }

        .user-img-code {
          cursor: pointer;
          user-select: none;
          width: 140px;
          height: 44px;
          line-height: 44px;
          text-align: center;
          color: #eee;
          font-size: 16px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .valid {
        border: 1px solid #000;
        border-left: 5px solid #000;
      }

      // .valid {
      //   border: 1px solid #57B846;
      //   border-left: 5px solid #57B846;
      // }
      &--btn {
        height: 45px;
        margin-top: 30px;
        line-height: 45px;
        text-align: center;
        background-color: #222;
        border-radius: 3px;
        color: #fff;
        box-shadow: 0 0 5px #222;
        user-select: none;
        cursor: pointer;
        letter-spacing: 2px;
        position: relative;
        overflow: hidden;

        &:active {
          background-color: #000;
        }

        &::after {
          content: '';
          position: absolute;
          left: -40px;
          top: -5px;
          width: 30px;
          height: 50px;
          transform: rotate(15deg);
          background-image: linear-gradient(to right bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
        }

        &:hover::after {
          left: 103%;
          transition: all 0.5s ease-in-out;
        }
      }

      &--copyright {
        margin-top: 60px;
        text-align: center;
        color: #666;
        font-size: 16px;
      }
    }
  }

  // &::before {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 30%;
  //   height: 100%;
  //   background-image: linear-gradient(to right, rgba(116, 224, 255, 0.3), #B5E2FD);
  // }
  // &::after {
  //   content: "";
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  //   width: 30%;
  //   height: 100%;
  //   background-image: linear-gradient(to left, rgba(116, 224, 255, 0.3), #b5e2fd);
  // }
}
</style>
