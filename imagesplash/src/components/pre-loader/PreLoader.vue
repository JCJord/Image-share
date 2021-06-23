<template>
  <div v-if="show" class="text-center pre-loader">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    hideLoader() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },

  mounted() {
    this.hideLoader();
  },
};
</script>
<style scoped>
.pre-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;

  height: 100%;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: auto;
  z-index: 999999;
}
</style>
