import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vFocus from "./directives/vFocus";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.directive("focus", vFocus);

app.mount("#app");
