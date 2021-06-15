<template>
  <div>
    <div class="img-box">
      <masonry
        :cols="{ default: 3, 975: 2, 750: 1 }"
        :gutter="{ default: '25px', 700: '15px' }"
      >
        <div v-for="(imgs, index) in img" :key="index" class="masonry">
          <img :src="imgs.download_url" alt="" srcset="" />
        </div>
      </masonry>
      <div
        v-if="img.length"
        v-observe-visibility="handleScrolledToBottom"
      ></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      img: [],
      page: 1,
    };
  },

  methods: {
    async showData() {
      try {
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${this.page}&limit=5`
        );
        console.log(res);
        const data = res.data;

        this.img.push(...data);
        console.log(this.img);
      } catch (err) {
        console.log("could not get imgs : " + err);
      }
    },
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return;
      } else {
        console.log("abc");
        this.page++;
        this.showData();
      }
    },
  },
  mounted() {
    this.showData();
  },
};
</script>

<style scoped>
.masonry img {
  width: 100%;
  margin-top: 25px;
}

.img-box {
  max-width: 1500px;
  margin: 0 auto;
}

.column img {
  max-width: 100%;
  height: auto;

  display: block;
}
</style>
