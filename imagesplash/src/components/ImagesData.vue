<template>
  <div class="img-box d-flex">
    <div v-for="imgs in img" :key="imgs.id" class="column">
      <img :src="imgs.download_url" alt="" srcset="" />
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      img: [],
    };
  },
  methods: {
    async showData() {
      try {
        const res = await axios.get(
          "https://picsum.photos/v2/list?page=3&limit=25"
        );
        console.log(res);
        const data = res.data;
        let resultArray = [];
        for (let key in data) {
          const info = data[key];
          info.id = key;
          resultArray.push(info);
        }
        this.img = resultArray;
        console.log(this.img);
      } catch (err) {
        console.log("could not get imgs : " + err);
      }
    },
  },
  created: function () {
    this.showData();
  },
};
</script>

<style scoped>
.column {
  padding: 15px;
}
.img-box {
  max-width: 1350px;
  margin: 0 auto;
  display: flex !important;
  padding-top: 15px;
  flex-wrap: wrap;
}
.img-box div {
  
  flex: 1 1 400px !important;
  
  border: dotted;
  
  
}
img {
  max-width: 100%;
  height: auto;
  
  display: block;
  
}

.row {
  border: dotted;
  padding: 0;
}

@media only screen and (max-width: 650px) {
  .imgs {
    flex-wrap: wrap;
  }
}
</style>
