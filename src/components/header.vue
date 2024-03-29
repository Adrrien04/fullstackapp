<script setup>
import {RouterLink} from 'vue-router'
import {useStore} from 'vuex'

const store = useStore()

const logout = () => {
  store.commit('setLoggedIn', false)
  window.location.reload()
}
</script>
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register"
              >Register
              </router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
              <router-link class="nav-link" to="/shopping"
              >Shopping
              </router-link
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
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
  color: #fff;
  margin: 0 10px;
}

nav .btn:hover {
  color: #ddd;
  text-decoration: none;
}
</style>