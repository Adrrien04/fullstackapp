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

    <div class="featured-listings">
      <div
          class="listing-card"
          v-for="listing in filteredListings"
          :key="listing.id"
      >
        <img :src="listing.image" :alt="listing.title"/>
        <h2>{{ listing.title }}</h2>
        <p>{{ listing.description }}</p>
      </div>
    </div>
    <!-- Ajoutez plus de sections (témoignages, destinations populaires, etc.) -->
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      searchTerm: "",
      listings: [
        {
          id: 1,
          title: "Logement 1",
          description: "Description du logement 1",
          image:
              "https://i.pinimg.com/564x/cf/06/d1/cf06d1819cf8c76930dd94ee94d06d29.jpg",
        },
        {
          id: 2,
          title: "Logement 2",
          description: "Description du logement 2",
          image: "https://i.pinimg.com/736x/00/8f/fb/008ffb6879c85f90274158b2c5f71373.jpg",
        },
        {
          id: 3,
          title: "Logement 3",
          description: "Description du logement 3",
          image: "https://i.pinimg.com/564x/ba/51/af/ba51affdb2b1a2fc48381602cc93aa9b.jpg",
        },
        // Ajoutez plus de logements ici
      ],
    };
  },
  computed: {
    filteredListings() {
      return this.listings.filter((listing) =>
          listing.title.includes(this.searchTerm)
      );
    },
  },
};
</script>

<style scoped>
/* Styles pour la mise en page */
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