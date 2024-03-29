<template>
  <div>
    <h2>C A R T</h2>
    <div v-if="!isLoggedIn" class="d-flex justify-content-center align-items-center">
      <div class="alert alert-danger" role="alert">
        Please log in to add your rent in the cart
      </div>
    </div>
    <div v-else>
      <div v-if="cart.length === 0" class="cart-message">
        Your cart is empty ! :(
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
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cart', 'isLoggedIn']),
  },
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

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.home-card {
  max-width: 33.33%;
}
.cart-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

 .cart-container {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }

.home-card {
  max-width: 33.33%;
}

.cart-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>