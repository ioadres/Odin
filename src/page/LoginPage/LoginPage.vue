<template>

  <div class="container-fluid p-5">
    <div class="row">
      <div class="offset-1 col-3">
        <div class="hero">
        <h2>Odin</h2>
        <h5>Una app para dominarlas a todas</h5>          
        </div>
      </div>
    </div>
    <div class="row"><div class="col-12">&nbsp;</div></div>
    <div class="row">
      <div class="offset-1 col-3">
        <form v-on:submit="checkForm">
          <div class="form-group row">
            <label class="col-2 col-form-label col-form-label-lg">Usuario</label>
            <div class="col-12">
              <input type="text" class="form-control" v-model="username" required>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-2 col-form-label col-form-label-lg">Contraseña</label>
            <div class="col-12">
              <input type="password" class="form-control" v-model="password" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <input type="submit" class="btn btn-lg btn-custom-primary" value="Acceder"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./LoginPage.js">
</script>

<style src="./LoginPage.scss" lang="scss">
</style>

