<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">   
    
    <div class="collapse navbar-collapse justify-content-center">
      <a class="navbar-brand" href="#">
        <img src="../../../../assets/images/logo_white.svg" width="110" class="d-inline-block align-top" alt="">
      </a>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="home" class="h6 nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="h6 nav-link" href="#">Freya</a>
        </li>
        <li class="nav-item">
          <a class="h6 nav-link" href="#">Ullr</a>
        </li>
        <li class="nav-item">
          <router-link to="chronos" class="h6 nav-link">Chronos</router-link>
        </li>
        <li class="nav-item">
          <a class="h6 nav-link" href="#">Click</a>
        </li>
      </ul>
    </div>

    <div class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="h6 nav-link text-light" href="#">Usuario (Rol)</a>
        </li>
        <li class="nav-item">
          <router-link to="login" class="h6 nav-link">Logout</router-link>
        </li>       
      </ul>
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'HomeComonent',
    tag: 'OdinHeader'
  }
</script>

<style lang="scss" scoped>

</style>
