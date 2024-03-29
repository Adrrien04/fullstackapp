<template>
  <div>
    <h1>{{ listing.title }}</h1>
    <img :src="listing.image" :alt="listing.title"/>
    <p>{{ listing.description }}</p>
    <p>Prix : {{ listing.price }}€</p>
    <p>Localisation : {{ listing.location }}</p>
    <p>Nombre de pièces : {{ listing.rooms }}</p>
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