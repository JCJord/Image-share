<template>
  <div class="img-box container">
    <masonry
      :cols="{ default: 3, 975: 2, 750: 1 }"
      :gutter="{ default: '25px', 700: '10px' }"
    >
      <div v-for="(imgs, index) in img" :key="index" class="masonry">
        <div class="author-box d-flex">
          <b-avatar
            variant="primary"
            class="prof"
            :src="imgs.download_url"
          ></b-avatar>
          <p>{{ imgs.author }}</p>
        </div>
        <div class="casulo progressive">
          <img
            class="preview"
            v-progressive="imgs.download_url"
            v-lazy="imgs.download_url"
            :data-srcset="imgs.download_url"
            :src="imgs.download_url"
            alt=""
          />
          <div class="download-icon-img">
            <h4>Nature</h4>
            <a :href="imgs.url + downloadUrl">Download</a>
          </div>
        </div>
        <div class="download-box">
          <b-button
            variant="outline-secondary"
            :href="imgs.url + downloadUrl"
            class="btn-down"
            >Download</b-button
          >
        </div>
      </div>
      <div
        v-if="img.length"
        v-observe-visibility="handleScrolledToBottom"
      ></div>
    </masonry>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      downloadUrl: "/download?force=true",
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
          `https://picsum.photos/v2/list/?page=${this.page}&limit=10/200`
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
.download-icon-img {
  display: block;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 999;
}

.masonry:hover + .download-icon-img {
  display: block;
  cursor: pointer;
}

.preview:hover + .download-icon-img {
  display: block;
  color: green;
}
.author-box {
  display: none !important;
}
.download-box {
  display: none;
}

.progressive {
  margin-bottom: 20px;
}
.masonry img {
  width: 100%;

  padding: 0;
}

.img-box {
  max-width: 1300px;
  margin: 26px auto;

  padding: 0px;
}

.column img {
  max-width: 100%;
  height: auto;

  display: block;
}

@media only screen and (max-width: 750px) {
  .btn-down {
    float: right;
    border: rgb(184, 184, 184) 1px solid !important;
    font-size: 14px;
    margin-right: 10px;
    margin-top: 15px;
    color: rgb(80, 80, 80) !important;
    margin-bottom: 28px;
  }
  .btn-down:hover {
    color: cornsilk !important;
  }
  .download-box {
    display: inline;
  }
  .author-box {
    display: flex !important;
    height: auto;
    width: 100%;
    padding-bottom: 1px;
  }
  .prof {
    margin-top: 15px;
    margin-left: 10px;
    width: 32px;
    height: 32px;
  }
  .author-box p {
    font-size: 14px;
    margin-left: 10px;
    margin-top: 20px;
    color: #000;
    font-weight: bold;
  }
  .img-box {
    margin: 50px auto;
  }
  .progressive {
    margin-bottom: 0px;
  }
}
</style>
