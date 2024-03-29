<template>
  <div class="text-center">
    <h1>{{ listing.title }}</h1>
    <img :src="listing.image" :alt="listing.title" class="img-fluid listing-image"/>
    <p>{{ listing.description }}</p>
    <p>Price : {{ listing.price }}&euro; per day</p>
    <p>Location : {{ listing.location }}</p>
    <p>Rooms : {{ listing.rooms }}</p>
  </div>
</template>

<script>
import axios from 'axios';

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
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}

h1 {
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

p {
  color: #666;
  font-size: 1.2em;
  margin-bottom: 10px;
}

 .listing-image {
   width: 40%;
   height: 500px;
   object-fit: cover;
 }
</style>