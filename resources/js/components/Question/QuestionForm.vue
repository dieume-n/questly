<template>
  <div class="pb-4">
    <div class="card card-body">
      <h3>Question</h3>
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
            @input="updateForm('title', $event.target.value)"
            :value="form.title"
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
          <vue-simplemde
            :value="form.body"
            @input="updateForm('body', $event)"
            ref="markdownEditor"
          />
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
            :value="form.category_id"
            @input="updateForm('category_id',parseInt($event.target.value))"
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
        <button type="button" class="btn btn-outline-info" @click.prevent="clearForm">Clear</button>
      </form>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import VueSimplemde from "vue-simplemde";
export default {
  props: {
    mainQuestion: Object
  },
  components: {
    VueSimplemde
  },
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
    updateForm(input, value) {
      this.form[input] = value;

      let storedForm = this.openStorage(); // extract stored form
      if (!storedForm) storedForm = {}; // if none exists, default to empty object

      storedForm[input] = value; // store new value
      this.saveStorage(storedForm); // save changes into localStorage
    },
    saveStorage(form) {
      localStorage.setItem("form", JSON.stringify(form));
    },
    openStorage() {
      return JSON.parse(localStorage.getItem("form"));
    },
    deleteStoredForm() {
      localStorage.removeItem("form");
    },
    saveStorage(form) {
      localStorage.setItem("form", JSON.stringify(form));
    },
    openStorage() {
      return JSON.parse(localStorage.getItem("form"));
    },
    deleteStoredForm() {
      localStorage.removeItem("form");
    },
    clearForm() {
      this.form.title = null;
      this.form.body = null;
      this.form.category_id = null;

      this.deleteStoredForm();
    },
    handleSubmit() {
      this.submitted = true;
      // Stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$emit("questionSubmit", this.form);
    }
  },
  created() {
    const question = this.mainQuestion || {};
    console.log(question);
    if (question) {
      this.form = {
        ...this.form,
        ...question
      };
    }
    const storedForm = this.openStorage();
    if (storedForm) {
      this.form = {
        ...this.form,
        ...storedForm
      };
    }
    this.fetchCategories();
  },
  destroyed() {
    this.clearForm();
  }
};
</script>