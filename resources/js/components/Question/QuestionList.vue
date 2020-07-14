<template>
  <div>
    <div>
      <div v-for="(question, index) in questions" :key="index">
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
    <question-pagination :url="url" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import QuestionListItem from "./QuestionListItem";
import QuestionPagination from "../Shared/QuestionPagination";
export default {
  props: ["url"],
  components: {
    QuestionListItem,
    QuestionPagination
  },
  computed: {
    ...mapGetters({
      questions: "questions/getQuestions",
      pagination: "questions/getPagination"
    })
  },
  methods: {
    ...mapActions({
      setPaginationUrl: "questions/setPaginationUrl",
      fetchQuestions: "questions/fetchQuestions",
      fetchPaginated: "questions/fetchPaginated"
    }),
    changePage(page) {
      this.fetchPaginated(this.url, page);
    }
  },
  mounted() {
    console.log(this.url);
    this.setPaginationUrl(this.url);
    this.fetchQuestions(this.url);
  },
  beforeRouteUpdate(to, from, next) {}
};
</script>