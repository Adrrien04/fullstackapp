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
  <div class="container-fluid" style="margin-top: 70px;">
    <header class="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">
            <img src="/src/assets/LogoApp.png" alt="Logo" class="logo">
          </RouterLink>

          <RouterLink class="navbar-brand" to="/">Home</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/cart">Cart</RouterLink>
              </li>
              <li class="nav-item" v-if="store.state.isLoggedIn">
                <RouterLink class="nav-link" to="/addHousing">Add your house</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" v-if="!store.state.isLoggedIn" to="/register">Register</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" v-if="!store.state.isLoggedIn" to="/login">Login</RouterLink>
                <button class="btn button" v-else @click="logout">Logoff</button>
              </li>
            </ul>
            <form class="d-flex search-bar" role="search">
              <input class="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success search-button" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>



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
  background-color: #A4D4A2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}
.button{
  background-color: #A4D4A2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}
.header {
  position: fixed;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

nav .btn {
  color: #fff;
  margin: 0 10px;
}

nav .btn:hover {
  color: #ddd;
  text-decoration: none;
}
.logo {
  height: 70px;

  margin-right: 10px;
}
.logo:hover {
  transform: scale(1.1);
}

.logo:active {
  transform: scale(0.9);
}
.nav-link,.navbar-brand {

  margin: 0 10px;
  transition: transform 0.3s ease-in-out;

}

.nav-link:hover,.navbar-brand:hover {
  text-decoration: none;
  transform: scale(1.1);

}

.nav-link:active,.navbar-brand:active {
  transform: scale(0.9);
}
.button:hover {
  transform: scale(1.1);
}

.button:active {
  transform: scale(0.9);
}


</style>