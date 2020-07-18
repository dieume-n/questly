<template>
  <div>
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
          <replies-list :question-slug="questionSlug"></replies-list>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <sidebar />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import RepliesList from "../Replies/RepliesList";
import Sidebar from "../Shared/Sidebar";
import marked from "marked";
export default {
  components: {
    RepliesList,
    Sidebar
  },
  data() {
    return {
      questionSlug: this.$route.params.slug
    };
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