

<template>
  <div class="add-housing container">
    <h1 class="text-center">A D D &nbsp Y O U R &nbsp H O U S I N G</h1>
    <div class="form-container">
      <form @submit.prevent="addHousing" class="mx-auto" style="max-width: 300px;">
        <div class="form-group">
          <label for="image">Image URL:</label>
          <input id="image" v-model="image" type="text" required class="form-control" placeholder="We need a picture">
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
</template>

<style scoped>
.add-housing {
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.add-housing .form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

}

.add-housing form {
  margin: auto;
  width: 500px;
}

form {
  border: 1px solid #000;
  padding: 20px;
  border-radius: 10px;
}
</style>

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