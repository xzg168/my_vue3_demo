import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/main.css";
createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale })
  .mount("#app");
