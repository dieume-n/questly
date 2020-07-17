<template>
  <div class="mt-4">
    <div class="card card-body">
      <h3>What is your question?</h3>
      <form class="mt-2" role="form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">
            Title
            <span class="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            v-model="form.title"
            :class="{'is-invalid': $v.form.title.$error }"
          />
          <span
            v-if="submitted && !$v.form.title.required"
            class="invalid-feedback"
          >Title is required</span>
        </div>
        <div class="form-group">
          <label for="body">
            Body
            <span class="text-danger">*</span>
          </label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            class="form-control"
            v-model="form.body"
            :class="{'is-invalid': $v.form.body.$error }"
          ></textarea>
          <span
            v-if="submitted && !$v.form.body.required"
            class="invalid-feedback"
          >the body of your question is required</span>
        </div>
        <div class="form-group">
          <label for="category">
            Category
            <span class="text-danger">*</span>
          </label>
          <select
            name="category"
            id="category"
            class="custom-select"
            v-model="form.category_id"
            :class="{'is-invalid': $v.form.category_id.$error }"
          >
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="category.id"
            >{{ category.name }}</option>
          </select>
          <span
            v-if="submitted && !$v.form.category_id.required"
            class="invalid-feedback"
          >please select the category to which the question belongs</span>
        </div>
        <button class="btn btn-primary" @click.prevent="handleSubmit">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        title: null,
        body: null,
        category_id: null
      },
      submitted: false
    };
  },
  validations: {
    form: {
      title: { required },
      body: { required },
      category_id: { required }
    }
  },
  computed: {
    ...mapGetters({
      categories: "categories/allCategories"
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: "categories/fetchCategories"
    }),
    handleSubmit() {
      this.submitted = true;
      // Stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      axios
        .post(`/api/questions`, this.form)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => console.error(error));
    }
  },
  created() {
    this.fetchCategories();
  }
};
</script>
