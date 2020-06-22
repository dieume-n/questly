<template>
  <div class="row">
    <div class="col-md-6 col-sm-12 mx-auto mt-4">
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