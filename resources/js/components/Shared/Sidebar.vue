<template>
  <div class="card">
    <div class="card-header bg-white">Categories</div>
    <div class="card-body">
      <div
        class="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
        v-for="(category, index) in allCategories"
        :key="index"
      >
        <router-link
          :to="{ name: 'category questions', params:{
            slug: category.slug
          } }"
        >
          <span>{{ category.name }}</span>
          <span class="float-right">{{ category.questions_count }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      allCategories: "categories/allCategories"
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: "categories/fetchCategories",
      fetchQuestions: "categories/fetchCategoryQuestions"
    }),
    onSubmit(category) {
      this.fetchQuestions(category);
    }
  },
  created() {
    this.fetchCategories();
  }
};
</script>