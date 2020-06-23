<template>
  <div>
    <div class="card-body py-3">
      <div class="row no-gutters align-items-center">
        <div class="col">
          <router-link :to="{ name: 'question', params:{slug} }">{{ title }}</router-link>
          <!-- <a href="#" class="text-big" data-abc="true">{{ title }}</a> -->
          <div class="text-muted mt-1">
            <p>{{ content|excerpt }}</p>
          </div>
        </div>
        <div class="d-none d-md-block col-4">
          <div class="row no-gutters align-items-center">
            <div class="col-4">{{ reply_count }}</div>
            <div class="media col-8 align-items-center">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                alt
                class="d-block ui-w-30 rounded-circle"
              />
              <div class="media-body flex-truncate ml-2">
                <div class="line-height-1 text-truncate">{{ created_at|fromNow }}</div>
                <a
                  href="javascript:void(0)"
                  class="text-muted small text-truncate"
                  data-abc="true"
                >Asked by {{ user }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0" />
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