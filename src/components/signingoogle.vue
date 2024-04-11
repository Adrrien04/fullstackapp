<template>
  <nav class="buttons">
    <div>
      <GoogleLogin :callback="signIn" @handleError="loginError" prompt auto-login/>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { GoogleLogin, decodeCredential } from "vue3-google-login";
import store from "./../store.js";

export default {
  name: "signingoogle",
  components: { GoogleLogin },
  setup() {
    const user = ref({ userName: null });

    const signIn = async (response) => {
      console.log('signIn', response);
      user.value.userName = decodeCredential(response.credential)?.name; // Use optional chaining
      console.log("User signed in with Google:", user.value.userName);

      store.commit("setUser", user.value.userName);
      store.commit("setAuthentication", true);
    };

    return {
      user,
      signIn,
    };
  },
};
</script>

<style>

</style>
