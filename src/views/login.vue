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
    <p>{{ message }}</p>
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

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      username: username.value,
      password: password.value
    })
    if (response.data.message) {
      message.value = response.data.message
      store.commit('setLoggedIn', true)
    }
  } catch (err) {
    message.value = 'Invalid credentials'
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
</style>