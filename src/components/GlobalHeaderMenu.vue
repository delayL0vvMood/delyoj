<template>
  <a-row class="global-header-menu" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <div>
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMeunClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <div class="menu-item">delyOJ</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in routes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();

const selectedKeys = ref(["/"]);

//路由跳转时更新菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

//通过路由，让菜单项实现跳转
const doMeunClick = (key: string) => {
  router.push({
    path: key,
  });
};

const store = useStore();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.menu-item {
  color: #2b7be2;
}
</style>
