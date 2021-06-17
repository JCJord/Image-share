<template>
  <div class="img-box container">
    <masonry
      :cols="{ default: 3, 975: 2, 750: 1 }"
      :gutter="{ default: '25px', 700: '10px' }"
    >
      <div
        v-for="(imgs, index) in img"
        :key="index"
        class="progressive masonry"
      >
        <img
          class="preview"
          v-progressive="imgs.download_url"
          :data-srcset="imgs.download_url"
          :src="imgs.download_url"
          alt=""
        />
      </div>
    </masonry>

    <div v-if="img.length" v-observe-visibility="handleScrolledToBottom"></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      img: [],
      page: 5,
      isLoaded: false,
      isLoading: false,
    };
  },

  methods: {
    async showData() {
      try {
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${this.page}&limit=10`
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
.progressive {
  margin-bottom: 20px;
}
.masonry img {
  width: 100%;

  padding: 0;
}

.img-box {
  max-width: 1500px;
  margin: 26px auto;

  padding: 0px;
}

.column img {
  max-width: 100%;
  height: auto;

  display: block;
}
.masonry {
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
