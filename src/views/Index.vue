<!--  -->
<template>
  <el-container>
    <el-header class="headerContainer">
      <el-row>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="3">
          <h1>
            <img
              src="../assets/logo.png"
              alt=""
              style="height:60px; vertical-align: middle;"
            />
            <a href>管理系统</a>
          </h1>
        </el-col>

        <div>
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="17">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">主页</el-menu-item>
              <el-submenu index="2">
                <template v-slot:title>我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template v-slot:title>选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3">关于我们</el-menu-item>
              <el-menu-item index="4"
                ><a
                  href="https://element-plus.gitee.io/#/zh-CN"
                  target="_blank"
                  style="padding: 20px 0;"
                  >element-plus</a
                ></el-menu-item
              >
            </el-menu>
          </el-col>
          <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
            <el-button type="text" @click="goToDashboard">跳不跳</el-button>
          </el-col>
        </div>
      </el-row>
    </el-header>
    <el-main class="mainContainer">
      <!-- <transition name="el-zoom-in-top">
        <router-view />
      </transition> -->
      <router-view v-slot="{ Component }">
        <transition name="el-zoom-in-top">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>
    <el-footer style="padding:0">
      <el-row>
        <el-col :span="24">
          <div style="background-color:#545C64;padding:20px;">
            <a href="" style="color:#fff">版权所有@XZG</a>
          </div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { reactive, toRefs, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup(props) {
    const route = useRoute();
    console.log("route", route.path);
    const router = useRouter();
    /* setup 里面不存在this,使用路由必修uerRouter声明一下 */
    console.log("router", router);
    const store = useStore();
    console.log("store", store.getters.getActivePath);

    // let activeIndex = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
      // activeIndex = key;
      store.commit("changeActivePath", key);
      // store.dispatch("changeActivePathAsync", {
      //   path: key
      // });
      console.log("store", store.getters.getActivePath);
      if (key === "1") {
        router.push({ path: "/home" });
      } else if (key === "3") {
        router.push({ path: "/about" });
      } else {
      }
    };
    const goToDashboard = () => {
      router.push({ path: "/home" });
      store.commit("changeActivePath", "1");
    };
    return {
      // activeIndex,
      handleSelect,
      goToDashboard,
      activeIndex: computed(() => store.getters.getActivePath)
    };
  }
};
</script>
<style lang="css" scoped>
/* @import url(); 引入公共css类*/
.headerContainer {
  background-color: #545c64;
  line-height: 60px;
}
.headerContainer h1 {
  margin: 0;
}
.el-menu-demo {
  z-index: 1000;
  border-bottom: 0;
}
</style>
