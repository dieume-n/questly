<template>
  <div class="mb-5">
    <div v-if="rexpliesExists">
      <div class="card pb-3">
        <div class="card-header bg-white">
          <h4>{{ replies.length }} Replies</h4>
        </div>
        <div class="card-body" v-for="(reply, index) in replies" :key="index">
          <replies-list-item
            :id="reply.id"
            :body="reply.body"
            :author="reply.author"
            :created_at="reply.created_at"
            :like_count="reply.like_count"
          ></replies-list-item>
          <!-- <hr class="m-0" v-if="index  != (replies.length -1)" /> -->
          <hr class="m-0" />
        </div>
        <div class="mt-3">
          <div class="form-group px-3">
            <textarea name="reply" rows="5" class="form-control"></textarea>
            <button class="btn btn-primary float-right mt-2">Reply</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>No answers</h3>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import RepliesListItem from "./RepliesListItem";
export default {
  props: ["questionSlug"],
  components: {
    RepliesListItem
  },
  computed: {
    ...mapGetters({
      replies: "replies/allReplies"
    }),
    rexpliesExists() {
      return this.replies.length > 0;
    }
  },
  methods: {
    ...mapActions({
      getReplies: "replies/fetchAllReplies"
    })
  },
  mounted() {
    this.getReplies(this.questionSlug);
  }
};
</script>
