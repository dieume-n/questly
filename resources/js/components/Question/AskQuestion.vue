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
          <input type="text" class="form-control" id="title" name="title" v-model="form.title" />
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
          ></textarea>
        </div>
        <div class="form-group">
          <label for="category">
            Category
            <span class="text-danger">*</span>
          </label>
          <select name="category" id="category" class="custom-select" v-model="form.category_id">
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="category.id"
            >{{ category.name }}</option>
          </select>
        </div>
        <button class="btn btn-primary" @click.prevent="handleSubmit">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        title: null,
        body: null,
        category_id: null
      }
    };
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
