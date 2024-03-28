<script setup>
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

const logout = () => {
  store.commit('setLoggedIn', false)
  window.location.reload()
}
</script>

<template>
  <nav>
    <RouterLink class="btn btn-primary" to="/">Home</RouterLink>
    <RouterLink class="btn btn-primary" v-if="!store.state.isLoggedIn" to="/login">Login</RouterLink>
    <button class="btn btn-primary" v-else @click="logout">Logoff</button>
    <RouterLink class="btn btn-primary" v-if="!store.state.isLoggedIn" to="/register">Register</RouterLink>
  </nav>
</template>



<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333; /* Couleur de fond de l'en-tête */
  color: #fff; /* Couleur du texte de l'en-tête */
  padding: 10px 0; /* Espacement interne de l'en-tête */
}

nav .btn {
  color: #fff; /* Couleur du texte des boutons */
  margin: 0 10px; /* Espacement entre les boutons */
}

nav .btn:hover {
  color: #ddd; /* Couleur du texte des boutons au survol */
  text-decoration: none; /* Supprime le soulignement au survol */
}
</style>