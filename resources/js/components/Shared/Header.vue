<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <router-link :to="{name: 'home' }" class="navbar-brand">Questly</router-link>
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
              <router-link :to="{ name: 'signup'}" class="nav-link">SignUp</router-link>
            </li>
            <b-nav-item-dropdown right class="active" v-if="user">
              <template v-slot:button-content>{{ user.name }}</template>
              <b-dropdown-item @click.prevent="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <top-bar v-if="!['signin', 'signup', 'ask question'].includes(this.$route.name)" />
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
  // data() {
  //   return {
  //     route: this.$route.fullPath
  //   };
  // },
  computed: {
    ...mapGetters({
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      signOut: "auth/signOut"
    }),
    logout() {
      this.signOut()
        .then(response => this.$router.push("/"))
        .catch(error => console.log(error));
    }
  }
};
</script>