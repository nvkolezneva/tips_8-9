<template>
<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <h2 class="text-white"> <span class="text-warning">DOC</span>тавка </h2>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 px-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 text-white">Главная</router-link></li>
          <li v-if="$auth.user.name === 'courier@gmail.com'"><router-link to="/courier-orders" class="nav-link px-2 text-white">Заказы</router-link></li>
          <li v-else><router-link to="/about" class="nav-link px-2 text-white">О нас</router-link></li>
          <li v-if="$auth.user.name === 'courier@gmail.com'"><router-link to="/account-courier" class="nav-link px-2 text-white">Личный кабинет</router-link></li>
          <li v-if="$auth.user.name === 'nvkolezneva@gmail.com'"><router-link to="/client-orders" class="nav-link px-2 text-white">Заказы</router-link></li>
          <li v-if="$auth.user.name === 'nvkolezneva@gmail.com'"><router-link to="/account" class="nav-link px-2 text-white">Личный кабинет</router-link></li>
           <li v-if="$auth.user.name === 'admin@gmail.com'"><router-link to="/employees" class="nav-link px-2 text-white">Работники</router-link></li>
          <li v-if="$auth.user.name === 'admin@gmail.com'"><router-link to="/admin-account" class="nav-link px-2 text-white">Личный кабинет</router-link></li>
        </ul>
        <div class="text-end" v-if="!$auth.loading">
    
            <!-- show login when not authenticated -->
            <a v-if="!$auth.isAuthenticated" @click="login" class="btn btn-warning"><strong>Войти</strong></a>
            <!-- show logout when authenticated -->
            <a v-if="$auth.isAuthenticated" @click="logout" class="btn btn-warning"><strong>Выйти</strong></a>

        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Nav',
  methods: {
  // Log the user in
  login() {
    this.$auth.loginWithRedirect();
  },
  // Log the user out
  logout() {
    this.$auth.logout({
      returnTo: window.location.origin
    });
  }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }  
  } 
</style>