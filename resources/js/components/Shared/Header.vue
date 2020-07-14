<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <router-link :to="{name: 'home' }" class="navbar-brand">Questly</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
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
          <a
            href="/login"
            class="btn btn-primary d-none d-sm-block mt-sm-3 mt-md-0 d-md-block py-3"
          >
            <span>
              <i class="fas fa-lock"></i>
            </span>
            <h5 class="d-inline ml-2">Login to ask a question</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>