<template>
  <div>
    <the-header></the-header>
    <div class="wrapper">
      <div class="container banner-wrapper">
        <div class="banner-content">
          <div class="title">
            <h1 class="mb-3">ImageSplash</h1>
            The internet’s source of <a href="">freely-usable images.</a>
            <p>Powered by creators everywhere..</p>
            <b-input-group class="inp-group">
              <b-input-group-prepend class="search-box">
                <b-button class="btn-search" @click="submitSearch"
                  ><i class="fas fa-search"></i
                ></b-button>
              </b-input-group-prepend>

              <b-form-input
                type="text"
                placeholder="Search free high-resolution photos by author"
                @keyup.enter="submitSearch"
                class="inp"
                v-model="search"
                required
              ></b-form-input>
            </b-input-group>
            <div class="trending">
              <div class="trending-links">
                Trending:
                <router-link to="/search/Alejandro Escamilla"
                  >Alejandro Escamilla</router-link
                >
                ,
                <router-link to="/search/Paul Jarvis">Paul Jarvis </router-link
                >,
                <router-link to="/search/Danielle MacInnes"
                  >Danielle MacInnes</router-link
                >,
                <router-link to="/search/Greg Rakozy">Greg Rakozy</router-link>,
                <router-link to="/search/Samantha Sophia"
                  >Samantha Sophia</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="photo-mark d-flex">
        <p class="dev-left d-none">Developed by JcJord</p>
        <p class="text-left author">Picture by author</p>
        <div class="container license-container">
          <div class="license text-center">
            Read more about the <a href="">Unsplash License</a>
          </div>
        </div>
        <p class="dev">Developed by JcJord</p>
      </div>
    </div>

    <images-data> </images-data>
  </div>
</template>

<script>
import ImagesData from "../components/service/ImagesData.vue";
// @ is an alias to /src
import TheHeader from "../components/header/TheHeader.vue";
import router from "../router/index.js";
export default {
  components: { TheHeader, ImagesData },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    submitSearch() {
      router.push({ path: `search/${this.search}` });
    },
  },
};
</script>

<style scoped>
.teste {
  border: dotted;
}
.author {
  margin-left: 10px;
}
.dev {
  margin-right: 15px;
}
.license-container {
  max-width: 875px;
}

.license {
  margin: 0 auto;

  text-align: center;
}
.license a {
  text-decoration: none;
  color: rgb(179, 179, 179);
}
.photo-mark {
  padding-bottom: 0px;
  padding-left: 5px;
  color: #fff;
  font-size: 12px;
}
.trending-links a {
  color: rgb(196, 196, 196);
  text-decoration: none;
}
a:hover {
  color: #fff;
  transition: 0.5s ease-in-out;
}
.trending {
  margin-top: 15px;
  font-size: 15px;
}
.btn-search {
  width: 45px;
  background-color: white;
  border-right: none;
  color: rgb(61, 59, 59);
  outline: none;
  border: none;
}
.btn-search i {
  font-size: 17px;
  margin-top: 5px;
}
.inp {
  padding: 10px !important;
  height: 50px;
}
.wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/maxim-tolchinskiy-S2IRzIk88Nw-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover; /* <------ */
  background-position: center center;
  height: auto;
}
.banner-wrapper {
  height: 65vh;
}
.banner-content {
  width: 100%;
  position: relative;
  top: 32%;
  max-width: 875px;
  margin: 0 auto;
}
.title h1 {
  font-weight: bold;
  color: #fff;
}
.title a {
  color: rgb(231, 231, 231);
  text-decoration: underline;
}
.title {
  color: #fff;
}
.inp-group {
  position: relative;
  z-index: 1;
}
@media only screen and (max-width: 690px) {
  .title h1 {
    font-size: 24px;
    padding-top: 45px;
  }
  .title p {
    margin-bottom: 25px;
  }
  .title {
    font-size: 14px;
  }
  .inp-group {
    display: none;
  }
  .trending {
    display: none;
  }
  .author {
    display: none;
  }
  .dev-left {
    display: inline !important;
    margin-left: 10px;
  }
  .dev {
    display: none;
  }
  .banner-wrapper {
    padding-top: 75px;
    height: 100%;
  }
}
@media only screen and (max-width: 875px) {
  .license {
    display: none;
  }
}
</style>
