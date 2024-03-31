

<template>
  <div class="app">
    <div class="add-housing container">
      <div class="header">
        <img src="/src/assets/LogoApp.png" alt="Logo" class="logo">
        <h1 class="housing-title">ADD YOUR HOUSING 🏠🏢</h1>
      </div>
      <div class="form-container">
        <form @submit.prevent="addHousing" class="mx-auto" style="max-width: 300px;">
          <div class="form-group">
            <label for="image">Image URL:</label>
            <input id="image" v-model="image" type="text" required class="form-control" placeholder="We need a picture">
          </div>
          <div class="form-group">
            <label for="image1">Image URL 1:</label>
            <input id="image1" v-model="image1" type="text" required class="form-control" placeholder="We need a second picture">
          </div>
          <div class="form-group">
            <label for="image2">Image URL 2:</label>
            <input id="image2" v-model="image2" type="text" class="form-control" placeholder="We need a thirs picture">
          </div>
          <div class="form-group">
            <label for="image3">Image URL 3:</label>
            <input id="image3" v-model="image3" type="text" class="form-control" placeholder="We need a fourth picture">
          </div>
          <div class="form-group">
            <label for="title">Title:</label>
            <input id="title" v-model="title" type="text" required class="form-control" placeholder="Is it a loft, a villa ...">
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <input id="description" v-model="description" type="text" required class="form-control" placeholder="Make an incredible description !">
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input id="price" v-model="price" type="number" required class="form-control" placeholder="Wanna be rich ?">
          </div>
          <div class="form-group">
            <label for="location">Location:</label>
            <input id="location" v-model="location" type="text" required class="form-control" placeholder="Where is this beautiful place ?">
          </div>
          <div class="form-group">
            <label for="rooms">Rooms:</label>
            <input id="rooms" v-model="rooms" type="number" required class="form-control" placeholder="How Many rooms are there ?">
          </div>
          <button type="submit" class="btn btn-primary">Add Housing</button>
        </form>
      </div>
      <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">{{ message }}</div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.add-housing {
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: #f9f9f9;
}

.add-housing .form-container {
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

.housing-title {
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


.form-group {
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

<script setup>
import {ref} from 'vue'
import axios from 'axios'
const image = ref('')
const image1 = ref('')
const image2 = ref('')
const image3 = ref('')
const title = ref('')
const description = ref('')
const price = ref('')
const location = ref('')
const rooms = ref('')
const message = ref('')
const isSuccess = ref(false)
const addHousing = async () => {
  try {
    const response = await axios.post('http://localhost:3000/houses', {
      images: [image.value, image1.value, image2.value, image3.value],
      title: title.value,
      description: description.value,
      price: price.value,
      location: location.value,
      rooms: rooms.value,
    });
    isSuccess.value = true;
    message.value = 'Housing added successfully';
  } catch (err) {
    isSuccess.value = false;
    message.value = 'Error adding housing';
  }
}
</script>