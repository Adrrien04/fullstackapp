<template>
  <div class="app">
  <div class="login container">
    <div class="header">
      <img src="/src/assets/LogoApp.png" alt="Logo" class="logo">
      <h1 class="login-title">Login</h1>
    </div>
    <form @submit.prevent="login" class="mx-auto" style="max-width: 300px;">
      <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required class="form-control" placeholder="ex: JohnTheBest">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required class="form-control">
      </div>
      <button type="submit" class="btn button">Login</button>
    </form>
    <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">{{ message }}</div>
    <p> If you don't have an account yet please <RouterLink to="/register">Register</RouterLink>.</p>
  </div>
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
  .app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: #f9f9f9;
}

.login.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 5rem;
}
  .header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.login-title {
  font-size: 2em;
  margin-left: 1rem;
}

.logo {
  height: 3em;
}

.button {
  background-color: #A4D4A2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  width: 100%;
}

.login-form {
  width: 100%;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
}


</style>
