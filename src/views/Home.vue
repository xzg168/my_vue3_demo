<template>
  <div class="home">
    <el-carousel>
      <el-carousel-item key="1">
        <img src="@/assets/images/1.jpg" alt="" />
        <!-- <h3>优秀</h3> -->
      </el-carousel-item>
      <el-carousel-item key="2">
        <img src="@/assets/images/2.jpg" alt="" />
        <!-- <h3>完美</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
/* 就是这么坑的么 */
export default {
  name: "Home",
  components: {}
};
</script>
<style>
.home {
  height: 1500px;
}
</style>
