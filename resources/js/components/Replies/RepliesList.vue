<template>
  <div>
    <div v-if="rexpliesExists">
      <div class="card mb-3">
        <div class="card-header pl-0 pr-0">
          <div class="row no-gutters w-100 align-items-center">
            <div class="col-4 text-muted ml-3">
              <div class="row no-gutters align-items-center">
                <div class="col-2">Reply By</div>
              </div>
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>
        <div v-for="(reply, index) in replies" :key="index">
          <replies-list-item
            :id="reply.id"
            :body="reply.body"
            :author="reply.author"
            :created_at="reply.created_at"
            :like_count="reply.like_count"
          ></replies-list-item>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>No answers</h3>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import RepliesListItem from "./RepliesListItem";
export default {
  components: {
    RepliesListItem
  },
  computed: {
    ...mapGetters({
      replies: "replies/allReplies"
    }),
    rexpliesExists() {
      return this.replies.length != 0;
    }
  }
};
</script>
