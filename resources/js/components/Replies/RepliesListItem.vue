<template>
  <div>
    <div class="card-body py-3">
      <div class="row no-gutters align-items-center">
        <div class="d-none d-md-block col-3">
          <div class="row no-gutters align-items-center">
            <!-- <div class="col-4">12</div> -->
            <div class="media col-8 align-items-center">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                alt
                class="d-block ui-w-30 rounded-circle"
              />
              <div class="media-body flex-truncate ml-2">
                <div class="line-height-1 text-truncate">{{ created_at|fromNow }}</div>

                <div class="d-flex flex-column">
                  <a
                    href="javascript:void(0)"
                    class="text-muted text-truncate"
                    data-abc="true"
                  >by {{ author.name }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <p>{{ body }}</p>
        </div>
        <div class="col-1">
          <div class="px-4 pt-3">
            <a
              href="javascript:void(0)"
              class="text-muted d-inline-flex align-items-center align-middle"
              data-abc="true"
            >
              <i class="fa fa-heart" :class="{'text-danger': like_count }"></i>&nbsp;
              <span class="align-middle">{{ like_count }}</span>
            </a>
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
    id: Number,
    body: String,
    author: Object,
    created_at: String,
    like_count: Number
  }
};
</script>