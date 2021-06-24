<template>
  <div class="text-center pre-loader">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.pre-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  z-index: -1;
}
</style>
