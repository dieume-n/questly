<template>
  <div class="row mt-4">
    <div class="col-md-2">
      <sidebar />
    </div>
    <div class="col-md-10">
      <div class="container-fluid mt-100">
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