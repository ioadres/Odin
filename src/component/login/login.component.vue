<template>
<div class="wrap">
    <div class="container-fluid p-5">
      <div class="row">
        <div class="offset-1 col-2">
          <img src="../../asset/logo_white.svg" width="120">
        </div>
      </div>

      <div class="row">
        <div class="offset-1 col-2">
          &nbsp;
        </div>
      </div>

      <div class="row">
        <div class="offset-1 col-4">
          <h2>Gestión de integración (Odin)</h2>
          <h5>Una app para dominarlas a todas</h5>  
        </div>
      </div>
      <div class="row"><div class="col-12">&nbsp;</div></div>
      <div class="row"><div class="col-12">&nbsp;</div></div>

      <div class="row"><div class="offset-1 col-3"><h3>Iniciar sesión</h3></div></div>
      
      <div class="row"><div class="col-12">&nbsp;</div></div>      

      <div class="row">
        <div class="offset-1 col-3">
          
          <form v-on:submit="checkForm">
            <div class="form-group row">
              <div class="col-12">
                <input type="text" class="form-control form-control-lg" placeholder="Usuario" v-model="username" required>
              </div>
            </div>
           
            <div class="form-group row">
              <div class="col-12">
                <input type="password" class="form-control form-control-lg" placeholder="Contraseña" v-model="password" required>
              </div>
            </div>
            
            
            <div class="col-12 text-center"><h5>¿Olvidastes tu contraseña?</h5></div>

            <div class="col-12">&nbsp;</div>            
            <div class="col-12">&nbsp;</div>

            <div class="form-group row justify-content-center">
              <div class="col-5">
                <input type="submit" class="btn btn-lg btn-custom-primary" value="Login"/>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.component.js">
</script>

<style src="./login.component.scss" lang="scss" scoped>
</style>

