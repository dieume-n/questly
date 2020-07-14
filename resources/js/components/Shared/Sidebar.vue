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
        <a class="nav-link" href="javascript:void(0)" @click.prevent>
          <span class="mr-2">></span>
          <span>{{ category.name }}</span>
          <span class="float-right">{{ category.questions_count }}</span>
        </a>
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
      fetchCategories: "categories/fetchCategories"
    })
  },
  created() {
    this.fetchCategories();
  }
};
</script>