<script setup>
import Header from './components/header.vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

const logout = () => {
  store.commit('setLoggedIn', false)
  window.location.reload()
}
</script>

<template>
  <Header />

  <RouterView />
</template>

