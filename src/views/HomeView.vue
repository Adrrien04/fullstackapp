<template>
  <div class="container">
    <header class="header">
      <!-- Logo, navigation, etc. -->
    </header>

    <div class="search-bar">
      <input
          type="text"
          v-model="searchTerm"
          class="search-input"
          placeholder="Rechercher des logements"
      />
      <button class="search-button">Rechercher</button>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="listing in filteredListings" :key="listing.id">
        <div class="card h-100">
          <img :src="listing.image" class="card-img-top" :alt="listing.title"/>
          <div class="card-body">
            <h5 class="card-title">{{ listing.title }}</h5>
            <p class="card-text">{{ listing.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Dernière mise à jour il y a 3 minutes</small>
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
    async fetchListings() {
      try {
        const response = await axios.get('https://3334-209-206-8-34.ngrok-free.app/houses');
        this.listings = Array.isArray(response.data) ? response.data : [];
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

/* Styles pour les éléments spécifiques */
.header {
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-box {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.featured-listings {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.listing-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(33.33% - 20px);
}

/* Ajoutez plus de styles pour les autres éléments (annonces, filtres, etc.) */
</style>
<style scoped>
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