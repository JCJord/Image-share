<template>
  <div class="wrapper">
    <b-navbar toggleable type="light" variant="light" class="the-nav"
      ><div class="form-gather d-flex">
        <div class="brand-box">
          <b-navbar-brand href="#" class="text-black font-weight-bold brand"
            >ImageSplash
          </b-navbar-brand>
          <b-navbar-brand href="#" class="text-black font-weight-bold brand-cut"
            >ImgS
          </b-navbar-brand>
        </div>
        <b-input-group class="inp-group">
          <b-input-group-prepend class="search-box">
            <b-button class="btn-search"
              ><i class="fas fa-search"></i
            ></b-button>
          </b-input-group-prepend>

          <b-form-input type="text" class="inp"></b-form-input>
        </b-input-group>
        <div class="link-group">
          <a href="" class="link">Brands</a>
          <a href="" class="link">Explore</a>
          <a href="" class="link">Hiring</a>
        </div>
      </div>

      <span class="burger" @click="toggleNav">
        <div></div>
        <div></div>
        <div></div>
      </span>

      <div class="button-group">
        <button class="btn btn-login">Login</button>
        <button class="btn btn-success">Join Free</button>
      </div>
    </b-navbar>
    <div id="mySidenav" :class="styleOnClick" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="toggleNav"
        >&times;</a
      >
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { isActive: false };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    styleOnClick() {
      return {
        open: this.isActive,
      };
    },
  },
};
</script>
<style scoped>
.closed {
  border: none !important;
}
.open {
  width: 250px !important;
}
.btn-login {
  border: 1px solid rgb(146, 146, 146);
  margin-right: 20px;
}

.button-group .btn {
  font-size: 14px;
}
.form-gather {
  width: 78%;
}
.link-group {
  margin-top: 6px;
}
.link {
  font-size: 14px;
  color: #767676;
  text-decoration: none;
  transition: 0.5s ease;
  margin-left: 40px;
}
.link:hover {
  color: #000;
}
.btn-search {
  height: 38px;
  background: #fff;
  color: #000;
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
  border-right: none;
  border-color: rgb(218, 218, 218);
  background-color: #fff;
}
.btn-search:hover {
  background: #eee;
  color: rgb(138, 138, 138);
  border-color: #fff;
}
.inp {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;

  border-color: rgb(218, 218, 218);
}

.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: rgb(204, 204, 204);
  border-left: none;
}

.burger {
  cursor: pointer;
}
.burger div {
  display: none;
  width: 20px;
  height: 2px;
  background-color: black;
  margin: 3px 0;
  border-radius: 20px;
  cursor: pointer;
}
.the-nav {
  min-width: 200px;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  box-shadow: 5px 10px #888888;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #000000;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #969696;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
@media only screen and (max-width: 269px) {
  .inp-group {
    display: none !important;
  }
  .form-gather {
    width: auto !important;
  }
}
@media only screen and (max-width: 450px) {
  .brand {
    display: none;
  }
}
@media only screen and (min-width: 450px) {
  .brand-cut {
    display: none;
  }
}
@media only screen and (max-width: 875px) {
  .burger div {
    display: block;
  }
  .link {
    display: none;
  }
  .button-group {
    display: none;
  }
  .form-gather {
    width: 91%;
  }
  .inp {
    margin-right: 10px;
  }
}
</style>
