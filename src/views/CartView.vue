<template>
  <div>
    <h2>Panier</h2>
    <div v-if="cart.length === 0" class="cart-message"> <!-- Add the 'cart-message' class here -->
      Votre panier est vide
      <img src="https://i.postimg.cc/JnSsZxtF/pngwing-com.png" alt="Empty Cart">
    </div>
    <div v-else v-for="item in cart" :key="item.id" class="card home-card">
      <img :src="item.image" class="card-img-top" alt="Image de l'article">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.description }}</p>
        <p class="card-text">{{ item.price }} €</p>
        <button @click="removeFromCart(item)" class="btn btn-primary">Supprimer</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['cart']),
  methods: {
    removeFromCart(item) {
      this.$store.dispatch('removeFromCart', item);
    },
  },
  watch: {
    cart(newVal) {
      console.log(newVal.length);
    },
  },
};
</script>

<style scoped>
.home-card {
  max-width: 33.33%;
}
.cart-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Utilisez 100vh pour faire en sorte que l'élément prenne toute la hauteur de la fenêtre de visualisation */
}
</style>