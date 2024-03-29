import { createStore } from 'vuex'

export default createStore({
    state: {
        isLoggedIn: false,
        cart: [],
    },
    mutations: {
        setLoggedIn(state, value) {
            state.isLoggedIn = value
        },
        addToCart(state, item) {
            state.cart.push(item);
        },
        removeFromCart(state, item) {
            const index = state.cart.indexOf(item);
            if (index > -1) {
                state.cart.splice(index, 1);
            }
        },
    },
    actions: {
        addToCart({ commit }, item) {
            commit('addToCart', item);
        },
        removeFromCart({ commit }, item) {
            commit('removeFromCart', item);
        },
    },

})