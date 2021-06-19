<template>
  <div class="wrapper">
    <the-header></the-header>
    <div class="container mainc">
      <h1>{{ data }}</h1>
      <images-data :filteredArr="filteredArr" :arr="arr"></images-data>
    </div>
  </div>
</template>
<script>
import TheHeader from "../components/header/TheHeader.vue";
import ImagesData from "../components/service/ImagesData.vue";
import axios from "axios";

export default {
  components: {
    TheHeader,
    ImagesData,
  },
  props: {
    data: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`https://picsum.photos/v2/list/`);

        const data = res.data;

        this.arr.push(...data);
      } catch (err) {
        console.log("could not get imgs" + err);
      }
    },
  },
  computed: {
    filteredArr() {
      return this.arr.filter((arr) => {
        return arr.author.toLowerCase().match(this.data.toLowerCase());
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.mainc {
  position: absolute;
  top: 10%;
}
.container h1 {
}
.container-2 {
  position: relative;

  max-width: 900px;
  margin: 0 auto;
}
.container-2 img {
  width: 100%;
}
</style>
