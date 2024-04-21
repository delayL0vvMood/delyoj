<template>
  <div id="BasicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <global-header-menu />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">底部</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#BasicLayout {
}

#BasicLayout .header {
  margin-bottom: 16px;
  box-shadow: #b4b2b2 1px 1px 5px;
}

#BasicLayout .content {
  background: linear-gradient(to bottom, #b4b2b2, #ffffff);
  margin-bottom: 16px;
}

#BasicLayout .footer {
  background: #605e5e;
  margin-top: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeaderMenu from "@/components/GlobalHeaderMenu.vue";
</script>
