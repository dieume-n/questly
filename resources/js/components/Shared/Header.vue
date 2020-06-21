<template>
  <div>
    <nav class="navbar bg-white navbar-expand-lg border-bottom navbar-light">
      <div class="container">
        <router-link :to="{name: 'home'}" class="navbar-brand">QA</router-link>

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
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{name: 'login'}" class="btn nav-button text-uppercase">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'signup'}" class="btn nav-button text-uppercase">Register</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>