<template>
  <div>
    <div class="container text-center">
      <header class="header">
        <h2> Your Cart 🛒</h2>
      </header>
      <div v-if="!isLoggedIn" class="d-flex justify-content-center align-items-center">
        <div class="alert alert-danger" role="alert">
          Please log in to add your rent in the cart
          <br>
          <RouterLink class="btn button" to="/login">Login</RouterLink>
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
            <router-link :to="`/listing/${item._id}`">
              <button class="btn button">Reserve</button>
            </router-link>
            <button @click="removeFromCart(item)" class="btn btn-primary">Supprimer</button>
          </div>
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
.container {
  margin-top: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
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
.button{
  background-color: #A4D4A2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}
.button:hover {
  transform: scale(1.1);
}

.button:active {
  transform: scale(0.9);
}
.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

</style>