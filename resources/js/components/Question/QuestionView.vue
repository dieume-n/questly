<template>
  <div>
    <div class="container-fluid mt-100">
      <div class="row" v-if="question">
        <div class="col-md-12">
          <div class="card mb-4">
            <div class="card-header">
              <div class="media flex-wrap w-100 align-items-center">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                  class="d-block ui-w-40 rounded-circle"
                  alt
                />
                <div class="media-body ml-3">
                  <a href="javascript:void(0)" data-abc="true">{{ question.author.name }}</a>
                  <div class="text-muted">{{ question.created_at|fromNow }}</div>
                </div>
                <div class="text-muted ml-3">
                  <div>
                    Member since
                    <strong>{{ question.author.member_since|calendar }}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h3>{{ question.title }}</h3>
              <p>{{ question.body }}</p>
            </div>
            <div
              class="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3"
            >
              <div class="px-4 pt-3">
                <a
                  href="javascript:void(0)"
                  class="d-inline-flex align-items-center align-middle"
                  data-abc="true"
                >
                  <i class="fa fa-tags text-muted"></i>&nbsp;
                  <span class="align-middle">{{question.category.name}}</span>
                </a>
                <span class="text-muted d-inline-flex align-items-center align-middle ml-4">
                  <i class="fas fa-reply text-muted fsize-3"></i>&nbsp;
                  <span class="align-middle">{{ question.reply_count }}</span>
                </span>
              </div>
              <div class="px-4 pt-3">
                <button type="button" class="btn btn-primary">
                  <i class="ion ion-md-create"></i>&nbsp; Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h3 class="leading">Replies</h3>
          <replies-list></replies-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import RepliesList from "../Replies/RepliesList";
export default {
  components: {
    RepliesList
  },
  computed: {
    ...mapGetters({
      question: "questions/getCurrentQuestion",
      replies: "replies/allReplies"
    })
  },
  methods: {
    ...mapActions({
      getQuestion: "questions/fetchQuestion"
      // getReplies: "replies/fetchAllReplies"
    })
  },
  created() {
    this.getQuestion(this.$route.params.slug);
    // console.log(this.$route.params.slug);
  }
};
</script>