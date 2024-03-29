<template>
  <div class="container">
    <div class="card mb-3">
      <div id="carouselExample" class="carousel slide card-img-top" style="max-width: 600px; margin: 0 auto;">
        <div class="carousel-inner">
          <div v-for="(image, index) in listing.images" :key="index" class="carousel-item"
               :class="{ 'active': index === 0 }">
            <img :src="image" class="d-block w-100" :alt="`Image ${index + 1}`">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ listing.title }}</h5>
        <p class="card-text">{{ listing.description }}</p>
        <p class="card-text">Price : {{ listing.price }}&euro; per day</p>
        <p class="card-text">Location : {{ listing.location }}</p>
        <p class="card-text">Rooms : {{ listing.rooms }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import $ from 'jquery';
import 'bootstrap';
export default {
  name: 'ListingDetails',
  data() {
    return {
      listing: {}
    }
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/houses/${this.$route.params.id}`);
      this.listing = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
    this.$nextTick(function () {
      $('#carouselExample').carousel();
    })
  }
}
</script>
<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
}

.card-title {
  font-size: 1.5em;
}
</style>