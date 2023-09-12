import { createApp } from "vue";
// Import axios
import axios from "axios";
// Import our custom CSS
import "./style/general.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import App from "./App.vue";

const app = createApp(App);
app.bootstrap = bootstrap;
app.axios = axios;
app.mount("#app");
