<template>
  <div class="row py-5">
    <div class="col-12 row">
      <div class="col-md-5 mx-auto">
        <h3 class="display-4 text-center">LOGIN!!</h3>
        <br />
        <form>
          <div class="form-group mb-3">
            <label for="inputEmail" class="custom-label">Email address</label>
            <input
              id="inputEmail"
              type="email"
              class="form-control rounded border-0 shadow-sm px-4"
            />
          </div>
          <div class="form-group mb-3">
            <label for="inputPassword" class="custom-label">Password</label>
            <input
              id="inputPassword"
              type="password"
              class="form-control rounded border-0 shadow-sm px-4"
            />
            <br />
          </div>
          <div class="custom-control custom-checkbox mb-3">
            <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
            <label for="customCheck1" class="custom-control-label">Remember password</label>
          </div>
          <button
            type="submit"
            class="btn btn-danger btn-block text-uppercase mb-2 rounded shadow-sm"
          >Sign in</button>
          <div class="text-center d-flex justify-content-between mt-4">
            <p>
              OR &nbsp
              <router-link :to="{ name:'signup' }" class="font-italic text-muted">
                <u>Create Account</u>
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
    <!-- <div class="col-md-6 col-sm-12 mx-auto mt-4">
      <h2 class="text-center">Sign In</h2>
      <form @submit.prevent="submit">
        <div class="row mt-4">
          <div class="col-md-12 form-group">
            <label for="email">Email address</label>
            <input type="email" id="email" v-model="form.email" name="email" class="form-control" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label for="email">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              v-model="form.password"
              class="form-control"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12 form-group">
            <button type="submit" class="btn btn-block btn-primary">Sign In</button>
          </div>
        </div>
      </form>
    </div>-->
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn"
    }),
    submit() {
      this.signIn(this.form);
    }
  }
};
</script>

<style scoped>
.input:focus {
  border: 2px solid #ccc;
}
</style>