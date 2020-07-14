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

  <!-- <div class="row py-5">
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
              OR &nbsp;
              <router-link :to="{ name:'signup' }" class="font-italic text-muted">
                <u>Create Account</u>
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>-->
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
