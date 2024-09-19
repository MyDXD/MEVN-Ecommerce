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
        const refreshToken = response.data.refreshToken;
        localStorage.setItem("token", token);
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;
        if (decoded.exp < now) {
          console.log("หมดอายุ");
          const response = await axios.post(
            "http://localhost:5000/token",
            refreshToken
          );
          console.log(response);
        } else {
          console.log("ยังไม่หมดอายุ");
        }
        localStorage.setItem("username", decoded.name);
        localStorage.setItem("id", decoded.id);
        localStorage.setItem("refreshtoken", refreshToken);

        commit("setToken", token);
      } catch (error) {
        throw error; // สามารถจัดการ error ใน component
      }
    },
    async getAccessToken() {
      const token = localStorage.getItem("accessToken"); // เก็บ Access Token ใน local storage

      if (!token || isTokenExpired(token)) {
        const newToken = await getNewAccessToken(
          localStorage.getItem("refreshToken")
        );
        localStorage.setItem("accessToken", newToken); // เก็บ Access Token ใหม่
        return newToken;
      }

      return token;
    },

    async logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("id");
      localStorage.removeItem("refreshtoken");
    },
    // async tryAutoLogin({ commit }) {
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     commit("setToken", token);
    //     commit("setRefreshToken", token);
    //   }
    // },
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
