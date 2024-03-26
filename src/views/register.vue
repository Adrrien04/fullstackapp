<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')

const register = async () => {
  try {
    const response = await axios.post('http://localhost:3000/register', {
      username: username.value,
      password: password.value
    })
    console.log(response.data.message)
  } catch (err) {
    console.error(err)
  }
}
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}
</style>