<!--  -->
<template>
  <div class="luckContainer">
    <LuckyWheel
      ref="LuckyWheel"
      width="500px"
      height="500px"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
      @start="startCallBack"
      @end="endCallBack"
    />
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "",
  setup() {
    console.log("1-开始创建组件-setup");
    const data = reactive({});
    data.blocks = [
      { padding: "10px", background: "#ffc27a" },
      { padding: "10px", background: "#ff4a4c" },
      {
        padding: "0px",
        background: "#fff"
      }
    ];
    data.prizes = [
      { fonts: [{ text: "0" }], background: "#f8d384", title: "一等奖" },
      {
        fonts: [{ text: "1", top: "20px" }],
        background: "#f9e3bb",
        title: "二等奖"
      },
      {
        fonts: [{ text: "2", top: "20%" }],
        background: "#fff",
        title: "三等奖"
      }
    ];
    data.buttons = [
      { radius: "40px", background: "#d64737" },
      { radius: "35px", background: "#f6c66f", pointer: true },
      {
        radius: "30px",
        background: "#fff",
        fonts: [{ text: "开始", top: "-13px" }]
      }
    ];
    const refData = toRefs(data);
    return {
      ...refData
    };
  },
  methods: {
    startCallBack() {
      this.$refs.LuckyWheel.play();
      setTimeout(() => {
        this.$refs.LuckyWheel.stop((Math.random() * 10) >> 0);
      }, 3000);
    },
    endCallBack(prize) {
      console.log("pris", prize);
      alert(`恭喜你获得${prize.title}`);
    }
  }
};
</script>

<style scoped>
.luckContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* height: 600px; */
}
</style>
