<template>
  <div>
    <Header />
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 col-md-9">
          <question-list :url="url" />
        </div>
        <div class="col-12 col-md-3">
          <sidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Shared/Header";
import Sidebar from "../../components/Shared/Sidebar";
import QuestionList from "../../components/Question/QuestionList";
export default {
  components: {
    Header,
    Sidebar,
    QuestionList
  },
  data() {
    return {
      url: `/api/categories/${this.$route.params.slug}/questions`
    };
  }
};
</script>