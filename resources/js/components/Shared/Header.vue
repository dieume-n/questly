<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <router-link :to="{name: 'home' }" class="navbar-brand">
          <strong>Questly</strong>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-if="user"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <div></div> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active" v-if="!user">
              <router-link :to="{ name: 'register'}" class="nav-link">Register</router-link>
            </li>
            <b-nav-item-dropdown right class="active" v-if="user">
              <template v-slot:button-content>{{ user.name }}</template>
              <b-dropdown-item @click.prevent="handleLogout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <top-bar v-if="!['login', 'register', 'ask question'].includes(this.$route.name)" />
    </div>
  </div>
</template>
<script>
import TopBar from "./TopBar";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    TopBar
  },
  computed: {
    ...mapGetters({
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      logout: "auth/logout"
    }),
    handleLogout() {
      this.logout()
        .then(response => this.$router.push("/"))
        .catch(error => console.log(error));
    }
  }
};
</script>