import { createApp } from "vue";
import App from "./components/App.vue";
import Contact from "./components/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";
import './style.css';

const Home = { name: "Home", template: "<div><h1 class='h1'>Coming Soon.</h1></div>" };

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

let app = createApp(App);
app.use(router);
app.mount("#app");