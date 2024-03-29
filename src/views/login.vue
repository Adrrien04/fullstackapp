<template>
  <div class="login container">
    <h1 class="text-center">Login</h1>
    <form @submit.prevent="login" class="mx-auto" style="max-width: 300px;">
      <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">{{ message }}</div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'

const store = useStore()
const username = ref('')
const password = ref('')
const message = ref('')
const isSuccess = ref(false)

const login = async () => {
  try {
    const response = await axios.post(' https://3334-209-206-8-34.ngrok-free.app/login', {
      username: username.value,
      password: password.value
    })
    if (response.data.message) {
      message.value = response.data.message
      isSuccess.value = response.data.message === 'Logged in successfully'
      store.commit('setLoggedIn', true)
    }
  } catch (err) {
    message.value = 'Invalid credentials'
    isSuccess.value = false
  }
}


</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.login.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
}

</style>