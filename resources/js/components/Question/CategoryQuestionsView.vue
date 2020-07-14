<template>
  <div>
    <div class="row mt-4">
      <div class="col-12 col-md-9 col-lg-9">
        <question-list :url="url" />
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import QuestionList from "./QuestionList";
import Sidebar from "../Shared/Sidebar";
export default {
  components: {
    QuestionList,
    Sidebar
  },
  data() {
    return {
      url: `/api/categories/${this.$route.params.slug}/questions`
    };
  },
  mounted() {
    console.log("mounted");
  }
};
</script>