<template>
  <div>
    <div class="row mt-4">
      <div class="col-12 col-md-9">
        <div class="card card-body p-10">
          <div class="d-flex flex-wrap justify-content-between">
            <div>
              <div class="d-flex flex-wrap justify-content-between">
                <a href="#" class="badge badge-primary px-2 py-2 mx-2 my-1"># All questions</a>
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
        <a href="/login" class="btn btn-primary d-none d-sm-block mt-sm-3 mt-md-0 d-md-block py-3">
          <span>
            <i class="fas fa-lock"></i>
          </span>
          <h5 class="d-inline ml-2">Login to ask a question</h5>
        </a>
      </div>
    </div>
    <!--  -->

    <div>
      <div class="row mt-4">
        <div class="col-12 col-md-9 col-lg-9">
          <question-list />
        </div>
        <div class="col-12 col-md-3 col-lg-3">
          <sidebar />
        </div>
      </div>
    </div>
    <!-- <div class="row mt-4">
      <div class="col-md-2">
        <sidebar />
      </div>
      <div class="col-md-10">
        <div class="container-fluid">
          <div class="d-flex flex-wrap justify-content-between">
            <div>
              <button type="button" class="btn btn-shadow btn-wide btn-primary">
                <span class="btn-icon-wrapper pr-2 opacity-7">
                  <i class="fa fa-plus fa-w-20"></i>
                </span> Ask Question
              </button>
            </div>
            <div class="col-12 col-md-3 p-0 mb-3">
              <input type="text" class="form-control" placeholder="Search..." />
            </div>
          </div>
          <question-list />
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
import Sidebar from "../components/Shared/Sidebar";
import QuestionList from "../components/Question/QuestionList";
export default {
  components: {
    Sidebar,
    QuestionList
  }
};
</script>