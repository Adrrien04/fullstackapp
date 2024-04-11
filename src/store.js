import { createStore } from 'vuex'
import axios from 'axios';
import router from './router'

export default createStore({
    state: {
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' ? true : false,
        cart: [],
        userName: '',
    },
    mutations: {
        setLoggedIn(state, value) {
            state.isLoggedIn = value;
            localStorage.setItem('isLoggedIn', value);
        },
        setAuthentication(state, value) {
            state.isLoggedIn = value;
            localStorage.setItem('isLoggedIn', value);
        },
        setUser(state, user) {
            state.userName = user;
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
        setError(state, error) {
            state.error = error;
        },
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
    },
    actions: {
        loginUserWithGoogle({ commit }, userName) {
            commit('setUser', userName);
            commit('setAuthentication', true);
        },
        loginUser({ commit, state }, userData) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await axios.post('http://localhost:3000/login', userData);
                    commit('setUser', response.data.user); // commit the user to the state
                    console.log('loginUser action is being dispatched', response.data.user);
                    commit('setLoggedIn', true);
                    localStorage.setItem('isLoggedIn', true);
                    resolve();
                } catch (error) {
                    console.log('Login request failed', error);
                    commit('setError', error.response.data.message);
                    console.error(error);
                    reject(error);
                }
            });
        },
        logoutUser({ commit }) {
            localStorage.removeItem('isLoggedIn');
            commit('setLoggedIn', false);
            router.push({ name: 'login' });
        },
        addToCart({ commit }, item) {
            commit('addToCart', item);
        },
        removeFromCart({ commit }, item) {
            commit('removeFromCart', item);
        },
    },
})