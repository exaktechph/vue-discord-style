<template>
  <div>
    <img :src="backgroundImage" class="backgroundImage" />
    <div class="overlay"></div>
    <Sidebar></Sidebar>
    <div class="view">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import { onMounted } from "vue";
import BackgroundImage from "../assets/cyber-g4f2b8fe35_1280.png";

export default {
  name: "App",
  data() {
    return {
      backgroundImage: BackgroundImage
    }
  },
  components: { Sidebar },
  setup() {
    onMounted(() => {

    })
  }
};
</script>

<style>

</style>