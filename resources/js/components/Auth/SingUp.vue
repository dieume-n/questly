<template>
  <div class="row">
    <div class="col-md-6 col-sm-12 mx-auto mt-4">
      <h2 class="text-center">Sign Up</h2>
      <form @submit.prevent>
        <div class="row mt-4">
          <div class="col-md-12 form-group">
            <label for="email">Name</label>
            <input type="text" id="name" name="name" class="form-control" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control rounded border-0 shadow-sm px-4"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label for="email">Password</label>
            <input type="password" id="password" name="password" class="form-control" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label for="email">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12 form-group">
            <button type="submit" class="btn btn-block btn-primary">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  }
};
</script>