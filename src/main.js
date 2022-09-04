import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { createApp } from "vue"
import App from "./App.vue"
import "./plugins/fontawsome"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import "./style/reset.css"

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
