<template>
  <div class="card">
    <div class="card-header">Top Categories</div>
    <div class="card-body">
      <div v-for="(category, index) in allCategories" :key="index">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" :id="'defaultCheck1_'+index" />
          <label class="form-check-label" :for="'defaultCheck1_'+index">{{ category.name }}</label>
        </div>
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