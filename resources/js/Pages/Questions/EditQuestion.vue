<template>
  <div>
    <Header />
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 col-md-9">
          <div v-if="loading">
            <question-form :main-question="form" @questionSubmit="handleSubmit"></question-form>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <sidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../../components/Shared/Header";
import Sidebar from "../../components/Shared/Sidebar";
import QuestionForm from "../../components/Question/QuestionForm";
export default {
  components: {
    Header,
    Sidebar,
    QuestionForm
  },
  data() {
    return {
      loading: false,
      form: {
        title: null,
        body: null,
        category_id: null
      }
    };
  },
  computed: {
    ...mapGetters({
      question: "questions/getCurrentQuestion"
    })
  },
  methods: {
    ...mapActions({
      getQuestion: "questions/fetchQuestion"
    }),
    handleSubmit(putData) {
      axios
        .put(`/api/questions/${this.$route.params.slug}`, putData)
        .then(response => {
          this.$router.push("/");
          this.$toast.open({
            message: "Your question have been updated",
            type: "success"
          });
        })
        .catch(error => console.error(error));
    }
  },
  mounted() {
    this.getQuestion(this.$route.params.slug).then(() => {
      this.form.title = this.question.title;
      this.form.body = this.question.body;
      this.form.category_id = this.question.category.id;

      this.loading = true;
    });
  }
};
</script>