<template>
  <div class="register container">
    <h1 class="text-center">R E G I S T E R</h1>
    <form @submit.prevent="register" class="mx-auto" style="max-width: 300px;">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="name" type="text" required class="form-control">
      </div>
      <div class="form-group">
        <label for="surname">Surname:</label>
        <input id="surname" v-model="surname" type="text" required class="form-control">
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" required class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">{{ message }}</div>
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
  height: 100vh;
  padding: 1rem;
}
form {
  border: 1px solid #000;
  padding: 20px;
  border-radius: 10px;
}
</style>