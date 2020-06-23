<template>
  <div>
    <div class="card mb-3">
      <div class="card-header pl-0 pr-0">
        <div class="row no-gutters w-100 align-items-center">
          <div class="col ml-3">Topics</div>
          <div class="col-4 text-muted">
            <div class="row no-gutters align-items-center">
              <div class="col-4">Replies</div>
              <div class="col-8">Last update</div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="(question, index) in allQuestions" :key="index">
        <question-list-item
          :title="question.title"
          :slug="question.slug"
          :user="question.author.name"
          :reply_count="question.reply_count"
          :created_at="question.created_at"
          :content="question.body"
        ></question-list-item>
      </div>
    </div>
    <div v-if="pagination" class="d-flex align-self-center">
      <pagination
        :data="pagination"
        @pagination-change-page="changePage"
        size="default"
        :limit="10"
      >
        <span slot="prev-nav">&lt; Previous</span>
        <span slot="next-nav">Next &gt;</span>
      </pagination>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import QuestionListItem from "./QuestionListItem";
import Pagination from "laravel-vue-pagination";
export default {
  components: {
    QuestionListItem,
    Pagination
  },
  computed: {
    ...mapGetters({
      allQuestions: "questions/allQuestions",
      pagination: "questions/getPagination"
    })
  },
  methods: {
    ...mapActions({
      fetchAllQuestions: "questions/fetchAllQuestions",
      fetchPaginated: "questions/fetchPaginated"
    }),
    changePage(page) {
      this.fetchPaginated(page);
    }
  },
  created() {
    this.fetchAllQuestions();
  }
};
</script>