<template>
  <div class="card card-body m-0">
    <div class="d-flex">
      <div>
        <h5 class="mt-0">
          <router-link :to="{ name: 'question', params:{slug} }">{{ title }}</router-link>
        </h5>
        <p>
          Asked By {{user}}
          <small class="text-muted ml-3">
            <i class="far fa-clock"></i>
            {{ created_at|fromNow }}
          </small>
        </p>
        <p>{{ content|excerpt }}</p>
      </div>
      <div></div>
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
export default {
  props: {
    title: String,
    slug: String,
    user: String,
    created_at: String,
    reply_count: Number,
    content: String
  }
};
</script>