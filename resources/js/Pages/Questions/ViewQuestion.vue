<template>
  <div>
    <Header />
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 col-md-9">
          <div class="card card-body" v-if="question">
            <h4 class="card-title">{{ question.title }}</h4>
            <p>
              <span class="text-primary">{{ question.author.name }}</span>
              asked {{ question.created_at|fromNow }}
            </p>
            <p v-html="content"></p>
          </div>
          <div class="mt-4">
            <replies-list :question-slug="this.$route.params.slug"></replies-list>
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
import marked from "marked";
import { mapGetters, mapActions } from "vuex";
import Header from "../../components/Shared/Header";
import Sidebar from "../../components/Shared/Sidebar";
import RepliesList from "../../components/Replies/RepliesList";

export default {
  components: {
    Header,
    Sidebar,
    RepliesList
  },
  computed: {
    ...mapGetters({
      question: "questions/getCurrentQuestion"
    }),
    content: function() {
      return marked(this.question.body);
    }
  },
  methods: {
    ...mapActions({
      getQuestion: "questions/fetchQuestion"
    })
  },
  created() {
    this.getQuestion(this.$route.params.slug);
  }
};
</script>