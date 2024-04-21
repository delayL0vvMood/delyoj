<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>
<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore(); //获取用户
const router = useRouter();
router.beforeEach((to, from, next) => {
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      //如果meta权限是canAdmin时判断权限，若权限为admin则跳转,不是则跳转到报错页面
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
