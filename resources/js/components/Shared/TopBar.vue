<template>
  <div class="row mt-4">
    <div class="col-12 col-md-9">
      <div class="card card-body p-10">
        <div class="d-flex flex-wrap justify-content-between">
          <div>
            <div class="d-flex flex-wrap justify-content-between">
              <router-link
                :to="{ name: 'home' }"
                class="badge badge-primary px-2 py-2 mx-2 my-1"
              ># All questions</router-link>
              <a href="#" class="badge badge-light px-2 py-2 mx-2 my-1"># Solved</a>
              <a href="#" class="badge badge-light px-2 py-2 mx-2 my-1"># Unsolved</a>
            </div>
          </div>
          <div>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-3">
      <router-link
        :to="{ name: 'login'}"
        class="btn btn-primary d-none d-sm-block mt-sm-3 mt-md-0 d-md-block py-3"
        v-if="!authenticated"
      >
        <span>
          <i class="fas fa-lock"></i>
        </span>
        <h5 class="d-inline ml-2">Login to ask a question</h5>
      </router-link>
      <router-link
        :to="{ name: 'ask question'}"
        class="btn btn-primary d-none d-sm-block mt-sm-3 mt-md-0 d-md-block py-3"
        v-else
      >
        <span>
          <i class="fas fa-unlock"></i>
        </span>
        <h5 class="d-inline ml-2">ask a question</h5>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated"
    })
  }
};
</script>