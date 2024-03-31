<template>
  <div class="app">
    <div class="register container">
      <div class="header">
        <img src="/src/assets/LogoApp.png" alt="Logo" class="logo">
        <h1 class="register-title">Register</h1>
      </div>
    <form @submit.prevent="register" class="mx-auto" style="max-width: 300px;">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="name" type="text" required class="form-control" placeholder="John">
      </div>
      <div class="form-group">
        <label for="surname">Surname:</label>
        <input id="surname" v-model="surname" type="text" required class="form-control" placeholder="Doe">
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required class="form-control" placeholder="JohnTheBest">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" required class="form-control" placeholder="john.doe@example.com">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required class="form-control">
      </div>
      <button type="submit" class="btn button">Register</button>
    </form>
    <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">{{ message }}</div>
  </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import '../assets/main.css';

const username = ref('')
const password = ref('')
const message = ref('')
const name = ref('')
const surname = ref('')
const email = ref('')
const isSuccess = ref(false)

const register = async () => {
  try {
    const response = await axios.post(' https://3334-209-206-8-34.ngrok-free.app/register', {
      username: username.value,
      password: password.value,
      name: name.value,
      surname: surname.value,
      email: email.value
    })
    if (response.data.message === 'User registered successfully') {
      message.value = response.data.message
      isSuccess.value = true
    } else {
      message.value = response.data.message
      isSuccess.value = false
    }
  } catch (err) {
    console.error(err)
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
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}
.register.container {
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

.register-title {
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

.register-form {
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
