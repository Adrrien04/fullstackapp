<template>
  <div class="add-housing container">
    <h1 class="text-center">Add a New Housing</h1>
    <form @submit.prevent="addHousing" class="mx-auto" style="max-width: 300px;">
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input id="image" v-model="image" type="text" required class="form-control">
      </div>
      <div class="form-group">
        <label for="title">Title:</label>
        <input id="title" v-model="title" type="text" required class="form-control">
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <input id="description" v-model="description" type="text" required class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input id="price" v-model="price" type="number" required class="form-control">
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input id="location" v-model="location" type="text" required class="form-control">
      </div>
      <div class="form-group">
        <label for="rooms">Rooms:</label>
        <input id="rooms" v-model="rooms" type="number" required class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Add Housing</button>
    </form>
    <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">{{ message }}</div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'


const image = ref('')
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
      image: image.value,
      title: title.value,
      description: description.value,
      price: price.value,
      location: location.value,
      rooms: rooms.value
    });
    isSuccess.value = true;
    message.value = 'Housing added successfully';
  } catch (err) {
    isSuccess.value = false;
    message.value = 'Error adding housing';
  }
}
</script>