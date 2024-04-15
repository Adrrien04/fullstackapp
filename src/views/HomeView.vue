<script setup>
import {RouterLink} from 'vue-router'
import {useStore} from 'vuex'
</script>
<template>
  <div class="background-image">
    <div class="centered-div">
      <router-link to="/shop">
        <button type="button" class="centered-button btn btn-light">Book Now</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.background-image {
  background-image: url('/src/assets/Green.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  position: fixed;
}

.centered-button {
  position: fixed;

  top: 80%;

  left: 20%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  font-size: 20px;

}


</style>