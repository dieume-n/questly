<template>
  <div class="row">
    <div class="col-md-6 mx-auto mt-5">
      <h3 class="text-center">
        <strong>Sign In</strong>
      </h3>
      <div class="card card-body shadow p-4 mt-4">
        <alert :type="type" :message="message" v-if="error" />
        <form role="form" @submit.prevent="submit">
          <div class="form-group">
            <label for="email">
              Email address
              <span class="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              class="form-control"
              :class="{'is-invalid': $v.form.email.$error }"
            />
            <span
              v-if="submitted && !$v.form.email.required"
              class="invalid-feedback"
            >email address is required</span>
            <span
              v-if="submitted && !$v.form.email.email"
              class="invalid-feedback"
            >enter a valid email address</span>
          </div>
          <div class="form-group">
            <label for="password">
              Password
              <span class="text-danger">*</span>
            </label>
            <input
              type="password"
              name="password"
              v-model="form.password"
              class="form-control"
              :class="{'is-invalid': $v.form.password.$error }"
            />
            <span
              v-if="submitted && !$v.form.password.required"
              class="invalid-feedback"
            >enter your password</span>
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
import { mapActions, mapGetters } from "vuex";
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      submitted: false,
      error: null,
      type: null,
      message: null
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated"
    })
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn"
    }),
    submit() {
      this.submitted = true;
      this.error = null;

      // Stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.signIn(this.form)
        .then(() => this.$router.push("/"))
        .catch(err => {
          if (401 === err.response.status) {
            this.error = true;
            this.type = "danger";
            this.message = "invalid email or password";
          }
        });
    }
  }
};
</script>
