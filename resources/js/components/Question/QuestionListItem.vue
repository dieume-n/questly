<template>
  <div class="card card-body m-0">
    <div class="mt-0 d-flex justify-content-between w-100">
      <div class="flex-grow-1">
        <h5 class="mt-0">
          <router-link :to="{ name: 'viewQuestion', params:{slug} }">{{ title }}</router-link>
        </h5>
      </div>
      <div class="ml-auto" v-if="author">
        <router-link
          :to="{name: 'editQuestion', params:{slug} }"
          class="btn btn-outline-info btn-sm"
        >Edit</router-link>
        <button class="btn btn-danger btn-sm" @click.prevent="handleDelete">Delete</button>
      </div>
    </div>
    <div class="d-flex">
      <div>
        <p>
          Asked By {{user.name}}
          <small class="text-muted ml-3">
            <i class="far fa-clock"></i>
            {{ created_at|fromNow }}
          </small>
        </p>
        <p v-html="showContent"></p>
      </div>
      <div class="ml-auto my-4 pl-4">
        <div class="badge badge-white bg-light p-2">
          <p class="text-center">{{ reply_count }}</p>
          <p class="mt-n1">replies</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from "marked";
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    title: String,
    slug: String,
    user: Object,
    created_at: String,
    reply_count: Number,
    content: String
  },
  computed: {
    ...mapGetters({
      creator: "auth/user"
    }),
    showContent: function() {
      return marked(this.content);
    },
    author: function() {
      if (!this.creator) {
        return false;
      }
      return this.creator.id === this.user.id;
    }
  },
  methods: {
    ...mapActions({
      deleteQuestion: "questions/deleteQuestion"
    }),
    handleDelete() {
      this.deleteQuestion(this.slug)
        .then(() => {
          this.$toast.open({
            message: "Your question have been deleted",
            type: "success"
          });
        })
        .catch(error => console.error(error));
    }
  }
};
</script>