<template>
  <div class="card p-0">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" :class="{'active': write}" @click.prevent="writePane">Write</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'active': preview}" @click.prevent="previewPane">Preview</a>
        </li>
      </ul>
    </div>
    <div class="card-body tab-content">
      <div class="tab-pane" id="write" :class="{'active': write}">
        <slot></slot>
      </div>
      <div class="tab-pane" id="preview" :class="{'active': preview}" v-html="showPreview"></div>
    </div>
  </div>
</template>
<script>
import marked from "marked";
import autosize from "autosize";
export default {
  props: ["body"],
  data() {
    return {
      preview: false,
      write: true
    };
  },
  computed: {
    showPreview() {
      return marked(this.body || "");
    }
  },
  updated() {
    autosize(this.$el.querySelector("textarea"));
  },
  methods: {
    previewPane() {
      this.preview = true;
      this.write = false;
    },
    writePane() {
      this.preview = false;
      this.write = true;
    }
  },
  mounted() {
    autosize(this.$el.querySelector("textarea"));
  }
};
</script>
<style scoped>
.nav-link.active {
  background-color: #fff;
}
</style>