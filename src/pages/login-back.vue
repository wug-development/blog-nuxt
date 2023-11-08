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
          <div class="login-body--title">量星球管理平台</div>
          <div class="login-body--desc">Welcome Back, Please login to your account</div>
          <div class="login-body--input-box" :class="{ valid: state.username }">
            <input v-model.trim="state.username" type="text" maxlength="32" placeholder="请输入用户名" />
            <div class="user-suffix">@quantgroup.cn</div>
          </div>
          <div class="login-body--input-box" :class="{ valid: state.password }">
            <input v-model.trim="state.password" type="password" maxlength="32" placeholder="请输入密码" />
          </div>
          <div class="login-body--input-box" :class="{ valid: state.imgCode }">
            <input v-model.trim="state.imgCode" type="text" maxlength="6" placeholder="请输入验证码" />
            <div class="user-img-code">
              <img src="https://opapi-yxm.liangkebang.net/user/captcha?v=1698201929119" alt="图片验证码" />
            </div>
          </div>
          <div class="login-body--btn" @click="onLogin">登录</div>
          <div class="login-body--copyright">量化派 © 2023</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useStarrySky } from '@/composables/useStarrySky';

const state = reactive({
  username: '',
  password: '',
  imgCode: ''
});

const onLogin = () => {
  console.log('state.username :>> ', state.username);
  console.log('state.password :>> ', state.password);
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
          flex: 1;
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
        }

        &:focus-within {
          border: 1px solid #000;
          border-left: 5px solid #000;

          .user-suffix {
            background-color: #222;
          }
        }

        .user-suffix {
          width: 140px;
          height: 44px;
          line-height: 44px;
          text-align: center;
          background-color: #666;
          color: #eee;
          font-size: 16px;
        }

        .user-img-code {
          cursor: pointer;
          user-select: none;
          width: 140px;
          height: 44px;
          line-height: 44px;
          text-align: center;
          background-color: #666;
          color: #eee;
          font-size: 16px;
          margin-left: 20px;
        }
      }

      // .valid {
      //   border: 1px solid #2D8CF0;
      //   border-left: 5px solid #2D8CF0;
      //   .user-suffix {
      //     background-color: #2D8CF0;
      //   }
      // }
      .valid {
        border: 1px solid #000;
        border-left: 5px solid #000;

        .user-suffix {
          background-color: #000;
        }
      }

      &--btn {
        height: 45px;
        margin-top: 40px;
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
        margin-top: 50px;
        text-align: center;
        color: #555;
      }
    }
  }
}
</style>
