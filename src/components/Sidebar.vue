<template>
  <div>
    <div class="sidebar">
      <router-link to="/">
        <div class="sidebar-icon">
            <img src=".././assets/logo-white-transparent.png">
        </div>
      </router-link>
      <router-link to="/contact">
        <div class="sidebar-icon">
            <PhoneIcon class="text-secondary"></PhoneIcon>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { HomeIcon, PhoneIcon } from '@heroicons/vue/solid';

export default {
  name: "Sidebar",
  components: { HomeIcon, PhoneIcon} 
};
</script>

<style>

</style>