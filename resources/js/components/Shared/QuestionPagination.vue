<template>
  <div v-if="pagination" class="d-flex justify-content-center mt-4">
    <pagination :data="pagination" @pagination-change-page="changePage" size="default" :limit="10">
      <span slot="prev-nav">&lt; Previous</span>
      <span slot="next-nav">Next &gt;</span>
    </pagination>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "laravel-vue-pagination";
export default {
  components: {
    Pagination
  },
  computed: {
    ...mapGetters({
      pagination: "questions/getPagination",
      paginationUrl: "questions/getPaginationUrl"
    })
  },
  methods: {
    ...mapActions({
      fetchPaginated: "questions/fetchPaginated"
    }),
    changePage(page) {
      this.fetchPaginated({ url: this.paginationUrl, page });
    }
  }
};
</script>