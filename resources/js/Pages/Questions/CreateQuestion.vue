<template>
  <div>
    <Header />
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 col-md-9">
          <question-form @questionSubmit="handleSubmit"></question-form>
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
import QuestionForm from "../../components/Question/QuestionForm";
export default {
  components: {
    Header,
    Sidebar,
    QuestionForm
  },

  methods: {
    handleSubmit(postData) {
      axios
        .post(`/api/questions`, postData)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => console.error(error));
    }
  }
};
</script>