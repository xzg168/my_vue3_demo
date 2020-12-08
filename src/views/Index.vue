<!--  -->
<template>
  <el-container>
    <el-header class="headerContainer">
      <h1>
        <img src="../assets/logo.png" alt="" style="height:60px;" />
      </h1>
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
      <div class="infoSetting">
        <el-button type="text" @click="goToDashboard">跳不跳</el-button>
      </div>
    </el-header>
    <el-main class="mainContainer">
      <transition name="el-zoom-in-top">
        <router-view />
      </transition>
    </el-main>
    <el-footer>Footer</el-footer>
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
.el-menu-demo {
  padding-left: 200px;
}
.headerContainer {
  background-color: #545c64;
}
.headerContainer h1 {
  position: absolute;
  z-index: 100;
  height: 60px;
  line-height: 60px;
  margin: 0;
  padding-left: 80px;
  color: #fff;
}
.infoSetting {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
