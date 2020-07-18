<template>
  <div class="mt-4">
    <div class="card card-body">
      <h3>Edit your question?</h3>
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
        <button type="button" class="btn btn-outline-info" @click.prevent="clearForm">Clear</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import VueSimplemde from "vue-simplemde";
import marked from "marked";
export default {
  components: {
    VueSimplemde
  },
  data() {
    return {
      questionSlug: this.$route.params.slug,
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
      question: "questions/getCurrentQuestion",
      categories: "categories/allCategories"
    })
  },
  methods: {
    ...mapActions({
      getQuestion: "questions/fetchQuestion",
      fetchCategories: "categories/fetchCategories"
    })
  },
  created() {
    this.getQuestion(this.$route.params.slug);
    this.fetchCategories();
  }
};
</script>