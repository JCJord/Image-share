<template>
  <div class="img-box container">
    <masonry
      :cols="{ default: 3, 975: 2, 750: 1 }"
      :gutter="{ default: '25px', 700: '10px' }"
      class="mass"
      v-if="this.$route.path === '/'"
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
          <pre-loader></pre-loader>
          <img
            class="preview"
            v-progressive="imgs.download_url"
            v-lazy="imgs.download_url"
            :data-srcset="imgs.download_url"
            :src="imgs.download_url"
            alt=""
          />

          <a :href="imgs.url + downloadUrl" class="download-icon-img">
            <i class="fas fa-arrow-down"></i>
          </a>
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
    <masonry
      v-else
      :cols="{ default: 3, 975: 2, 750: 1 }"
      :gutter="{ default: '25px', 700: '10px' }"
      class="mass"
    >
      <div v-for="items in filteredArr" :key="items.id" class="masonry">
        <li>{{ items.author }}</li>
        <div class="author-box d-flex">
          <b-avatar
            variant="primary"
            class="prof"
            :src="items.download_url"
          ></b-avatar>
          <p>{{ items.author }}</p>
        </div>
        <div class="casulo progressive">
          <pre-loader></pre-loader>

          <img
            class="preview"
            :src="items.download_url"
            :data-srcset="items.download_url"
            v-lazy="items.download_url"
            v-progressive="items.download_url"
            alt=""
          />
          <a :href="items.url + downloadUrl" class="download-icon-img">
            <i class="fas fa-arrow-down"></i>
          </a>
        </div>
        <div class="download-box">
          <b-button
            variant="outline-secondary"
            :href="items.url + downloadUrl"
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
import PreLoader from "../pre-loader/PreLoader.vue";
export default {
  components: { PreLoader },
  props: ["filteredArr", "arr"],
  data() {
    return {
      downloadUrl: "/download?force=true",
      img: [],
      page: 2,
    };
  },

  methods: {
    async showData() {
      try {
        const res = await axios.get(
          `https://picsum.photos/v2/list/?page=${this.page}&limit=10/200`
        );

        const data = res.data;

        this.img.push(...data);
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
    searchContent() {
      this.$emit("searchContent", this.img);
    },
  },

  mounted() {
    this.showData();
  },
};
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
.fa-arrow-down {
  color: rgb(78, 78, 78);
  position: absolute;
  left: 31%;
  right: 0;
  top: 23%;
  bottom: 0;
}

.download-icon-img:hover .fa-arrow-down {
  color: black;
  transition: 0.5s ease;
}

.download-icon-img {
  visibility: hidden;
  position: absolute;
  bottom: 20px;
  width: 20px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  right: 20px;
  padding: 2px;
  background-color: #eee;
  color: white;
  padding-left: 20px;
  padding-right: 20px;

  z-index: 1;
}

.masonry:hover .download-icon-img {
  cursor: pointer;
  visibility: visible;
  color: #000;
}
.masonry:hover {
  cursor: pointer;
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
  cursor: pointer;
  padding: 0;
}

.img-box {
  max-width: 1300px;
  margin: 26px auto;

  padding: 0px;
}

@media only screen and (max-width: 750px) {
  li {
    visibility: hidden;
  }
  .download-icon-img {
    visibility: hidden !important;
  }
  .masonry {
    cursor: initial !important;
  }
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
