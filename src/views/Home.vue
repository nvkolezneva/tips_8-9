<template>
<div class="home">
  <!-- <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to the Animal Rescue League          
        </h1>
        <h2 class="subtitle">
          Make sure you check out our upcoming events below
        </h2>
        <div class="button-block">
          <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Sign Up to Browse Events</button>
          <h3 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.name }}!</h3>
        </div>
      </div>
    </div>
  </section> -->
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">ДОБРО ПОЖАЛОВАТЬ!</h1>
      <p class="lead fw-normal">Lorem lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem loremLorem lorem lorem lorem lorem lorem lorem</p>
       <button v-if="!$auth.isAuthenticated" @click="login" class="btn btn-outline-warning">Войдите в систему</button>
      <h3 v-if="$auth.isAuthenticated" class="btn-outline-warning">С возвращением, {{ $auth.user.name }}!</h3>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'home',
  components: {
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    }
  }
}
</script>
<style lang="scss" scoped>
  .hero {    
    text-align: center;
    background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>