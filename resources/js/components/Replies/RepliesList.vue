<template>
  <div>
    <div v-if="rexpliesExists">
      <div class="card">
        <div class="card-header bg-white">Replies</div>
        <div class="card-body pb-0" v-for="(reply, index) in replies" :key="index">
          <replies-list-item
            :id="reply.id"
            :body="reply.body"
            :author="reply.author"
            :created_at="reply.created_at"
            :like_count="reply.like_count"
          ></replies-list-item>
          <hr class="m-0" v-if="index  != (replies.length -1)" />
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
