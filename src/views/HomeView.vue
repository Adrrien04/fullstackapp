<template>
  <div class="container text-center">
    <header class="header">

    </header>
    <div class="input-group mb-3">
      <input
          type="text"
          v-model="searchTerm"
          class="form-control"
          placeholder="Search for rooms"
      />
      <button class="btn btn-primary">Search</button>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="listing in filteredListings" :key="listing._id">
        <div class="card h-100">
          <router-link :to="`/listing/${listing._id}`">
            <img :src="listing.image" class="card-img-top img-fluid listing-image" :alt="listing.title"/>
          </router-link>
          <div class="card-body">
            <h5 class="card-title">{{ listing.title }}</h5>
            <p class="card-text">{{ listing.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated : 3 minutes ago</small>
            <button @click="addToCart(listing)" class="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';


export default {
  name: "HomeView",
  data() {
    return {
      searchTerm: "",
      listings: [],
    };
  },
  computed: {
    filteredListings() {
      return this.listings.filter((listing) =>
          listing.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    addToCart(listing) {
      this.$store.dispatch('addToCart', listing);
    },
    async fetchListings() {
      try {
        const response = await axios.get('http://localhost:3000/houses');
        this.listings = Array.isArray(response.data)
            ? response.data.filter(listing => listing._id)
            : [];
      } catch (error) {
        console.error(error);
        this.listings = [];
      }
    }
  },
  created() {
    this.fetchListings();
  },
};
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}


.header {
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


 .listing-image {
   width: 100%;
   height: 200px;
   object-fit: cover;
 }

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
}

.search-button {
  background-color: #0070f3;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>