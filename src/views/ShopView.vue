<template>
  <div class="container text-center">
    <header class="header">

    </header>

    <div class="input-group mb-3">
      <input type="text" v-model="searchTerm" class="form-control" placeholder="Search for rooms" />
      <input type="number" v-model="searchPrice" class="form-control" placeholder="Search by price" />
      <input type="number" v-model="searchRooms" class="form-control" placeholder="Search by number of rooms" />
      <button class="btn button" @click="search">Search</button>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="listing in filteredListings" :key="listing._id">
        <div class="card h-100">
          <router-link :to="`/listing/${listing._id}`">
            <img :src="listing.images[0]" class="card-img-top img-fluid listing-image" :alt="listing.title" />
          </router-link>
          <div class="card-body">
            <h5 class="card-title">{{ listing.title }}</h5>
            <p class="card-text">{{ listing.description }}</p>
            <p class="card-text">{{ listing.price }}€ per night</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">For more information click on the picture.</small>
            <br>
            <button @click="addToCart(listing)" class="btn button">Add to cart</button>
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
      searchPrice: "",
      searchRooms: "",
      listings: [],
    };
  },
  async created() {
    const response = await axios.get('http://localhost:3000/houses');
    this.houses = response.data;
  },
  computed: {
    filteredListings() {
      return this.listings.filter((listing) => {
        let matchesSearchTerm = listing.title.toLowerCase().includes(this.searchTerm.toLowerCase());
        let matchesSearchPrice = this.searchPrice ? listing.price <= this.searchPrice : true;
        let matchesSearchRooms = this.searchRooms ? listing.rooms == this.searchRooms : true;
        return matchesSearchTerm && matchesSearchPrice && matchesSearchRooms;
      });
    },
  },
  methods: {
    addToCart(listing) {
      this.$store.dispatch('addToCart', listing);
      window.alert('Item added to cart!');
    },
    search() {
      this.fetchListings();
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
.button {
  background-color: #A4D4A2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>