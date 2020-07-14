<template>
  <div class="row">
    <div class="col-md-8 col-lg-6 mx-auto mt-5">
      <h3 class="text-center">
        <strong>Sign Up</strong>
      </h3>
      <div class="card card-body shadow p-4 mt-4">
        <form>
          <div class="form-group">
            <label for="name">
              Name
              <span class="text-danger">*</span>
            </label>
            <input type="text" id="name" name="name" class="form-control" v-model="form.name" />
          </div>

          <div class="form-group">
            <label for="email">
              Email address
              <span class="text-danger">*</span>
            </label>
            <input type="email" id="email" name="email" class="form-control" v-model="form.email" />
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="password">
                  Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  v-model="form.password"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="confirmPassword">
                  Confirm Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="form-control"
                  v-model="form.confirmPassword"
                />
              </div>
            </div>
          </div>
          <button class="btn btn-block btn-primary mt-4" @click.prevent="submit">Sign Up</button>
          <span class="text-center d-block my-3">Or</span>
          <div class="text-center">
            <router-link :to="{ name: 'signin'}">Sign into your account</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    submit() {
      console.log("submitted");
    }
  }
};
</script>