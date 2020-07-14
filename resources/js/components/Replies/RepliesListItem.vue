<template>
  <div>
    <div class="d-flex justify-content-between">
      <div>
        <p>{{ author.name }}</p>
        <p>answered {{ created_at|fromNow }}</p>
      </div>
      <div class="badge badge-white bg-light py-2 px-2 align-self-start">
        <div class="d-flex flex-wrap justify-content-between">
          <i class="far fa-thumbs-up fa-2x m-2"></i>
          <i class="far fa-thumbs-down fa-2x m-2"></i>
        </div>
      </div>
    </div>
    <p>{{ body }}</p>
  </div>
</template>
<script>
export default {
  props: {
    id: Number,
    body: String,
    author: Object,
    created_at: String,
    like_count: Number
  }
};
</script>