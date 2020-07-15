<template>
  <div class="row">
    <div class="col-md-6 mx-auto mt-5">
      <h3 class="text-center">
        <strong>Sign In</strong>
      </h3>
      <div class="card card-body shadow p-4 mt-4">
        <form role="form">
          <div class="form-group">
            <label for="email">
              Email address
              <span class="text-danger">*</span>
            </label>
            <input type="email" id="email" name="email" v-model="form.email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">
              Password
              <span class="text-danger">*</span>
            </label>
            <input type="password" name="password" v-model="form.password" class="form-control" />
          </div>
          <button class="btn btn-primary btn-block mt-4" @click.prevent="submit">Sign In</button>
          <span class="text-center d-block my-3">Or</span>
          <div class="text-center">
            <router-link :to="{ name: 'signup'}">Create an account?</router-link>
          </div>
        </form>
      </div>
    </div>
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
