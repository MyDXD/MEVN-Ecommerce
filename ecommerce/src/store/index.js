/* eslint-disable */

// store/index.js
import Vue from "vue";
import Vuex from "vuex";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    role: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      const decoded = jwtDecode(token);
      state.role = decoded.role; // ดึง role จาก token
    },
    clearAuthData(state) {
      state.token = null;
      state.role = null;
    },
  },
  actions: {
    async login({ commit }, authData) {
      console.log("authData", authData);
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email: authData.email,
          password: authData.password,
        });

        const token = response.data.token;
        console.log("token", token);


        localStorage.setItem("token", token);
        commit("setToken", token);
      } catch (error) {
        throw error; // สามารถจัดการ error ใน component
      }
    },
    async logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("token");
    },
    async tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (token) {
        commit("setToken", token);
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null;
    },
    role(state) {
      return state.role;
    },
  },
});
