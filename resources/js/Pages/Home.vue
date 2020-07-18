<template>
  <div>
    <Header />
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 col-md-9 col-lg-9">
          <question-list :url="url" />
        </div>
        <div class="col-12 col-md-3 col-lg-3">
          <sidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Shared/Header";
import Sidebar from "../components/Shared/Sidebar";
import QuestionList from "../components/Question/QuestionList";
export default {
  components: {
    Header,
    QuestionList,
    Sidebar
  },
  data() {
    return {
      url: "/api/questions"
    };
  }
};
</script>