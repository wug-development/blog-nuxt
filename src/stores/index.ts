import { defineStore } from 'pinia';

const USER_INFO = {
  userName: 'John Doe',
  id: 1,
  sex: '男',
};

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = reactive(USER_INFO);

  return {
    userInfo,
  };
});

