<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto mt-5">
          <h3 class="text-center">
            <strong>Sign Up</strong>
          </h3>
          <div class="card card-body shadow p-4 mt-4">
            <form role="form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">
                  Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  v-model="form.name"
                  :class="{'is-invalid': $v.form.name.$error }"
                />
                <span
                  v-if="submitted && !$v.form.name.required"
                  class="invalid-feedback"
                >Name is required</span>
              </div>

              <div class="form-group">
                <label for="email">
                  Email address
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  v-model.lazy="form.email"
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
                <span
                  v-if="submitted && !$v.form.email.unique"
                  class="invalid-feedback"
                >email address already taken</span>
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
                      :class="{'is-invalid': $v.form.password.$error }"
                    />
                    <span
                      v-if="submitted && !$v.form.password.required"
                      class="invalid-feedback"
                    >password is required</span>
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
                      :class="{'is-invalid': $v.form.confirmPassword.$error }"
                    />
                    <span
                      v-if="submitted && !$v.form.confirmPassword.required"
                      class="invalid-feedback"
                    >confirm your password</span>
                    <span
                      v-if="submitted && !$v.form.confirmPassword.sameAs"
                      class="invalid-feedback"
                    >password do not match</span>
                  </div>
                </div>
              </div>
              <button class="btn btn-block btn-primary mt-4" @click.prevent="handleSubmit">Sign Up</button>
              <span class="text-center d-block my-3">Or</span>
              <div class="text-center">
                <router-link :to="{ name: 'login'}">Sign into your account</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Shared/Header";
import { required, email, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

function checkEmail(email) {
  return new Promise((resolve, reject) => {
    return axios
      .post("/api/auth/check", { email })
      .then(response => {
        if (200 === response.status) {
          resolve(true);
        }
      })
      .catch(error => {
        resolve(false);
      });
  });
}
export default {
  components: {
    Header
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      submitted: false
    };
  },
  validations: {
    form: {
      name: { required },
      email: {
        required,
        email,
        unique: value => {
          if (value === "") return true;
          return checkEmail(value);
        }
      },
      password: { required },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn"
    }),
    handleSubmit() {
      this.submitted = true;
      // Stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.register();
    },
    register() {
      axios.post("/api/auth/signup", this.form).then(response => {
        this.signIn(this.form)
          .then(response => this.$router.push("/"))
          .catch(error => console.error(error));
      });
    }
  }
};
</script>