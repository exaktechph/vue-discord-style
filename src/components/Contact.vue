<template>
  <div>
     <h1 class="h1 mb-5">Contact Us.</h1>
     <div class="flex justify-center place-items-center gap-5">
       <div class="inline-group">
         <a href="https://www.linkedin.com/company/exaktechph">
         <font-awesome-icon :icon="['fab', 'linkedin']" class="Icon"/>
          <span>LinkedIn</span>
         </a>
       </div>
       <div class="inline-group">
         <a href="https://www.facebook.com/exak.tech">
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" class="Icon"/>
          <span>Facebook</span>
         </a>
       </div>
     </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookMessenger, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add({faLinkedin, faFacebookMessenger});

export default {
  components: {
    'font-awesome-icon' : FontAwesomeIcon
  }
};
</script>

<style>
</style>