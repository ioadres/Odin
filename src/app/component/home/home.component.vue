<template>
<div>
<div class="block-light">
  <div class="container">
   <div class="row">    
    <div class="offset-1 col-4">    
        <div class="card-home bg-primary">
          <h2>Crear nuevo cliente</h2>
          <h6>Gestione la alta de un cliente con las aplicaciones de integración.</h6>
        </div>
    </div>
    <div class="offset-1 col-4">    
        <div class="card-home bg-danger">
          <h2>Supervisar Logs </h2>
          <h6>Gestione los logs de las aplicaciones de integración</h6>
        </div>
    </div>
    </div>
  </div>
</div>

<div class="block">
  <div class="container">
   <div class="row">    
    <div class="col-12">    
       <h1>Estado actual de las aplicaciones</h1>
    </div>
    </div>

    <div class="row">    
    <div class="col-12">    
      &nbsp;
    </div>
    </div>

    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>App</th>
            <th>Último error</th>
            <th>Total errores (24H)</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chronos</th>            
            <td class="blockquote-footer">Exception : Not implemented method</td>
            <td>25</td>
            <td><span class="badge badge-danger">Peligro</span></td>
          </tr>                     
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>


</template>
<script src="./home.component.js">

</script>

<style src="./home.component.scss" lang="scss" scoped>
</style>
