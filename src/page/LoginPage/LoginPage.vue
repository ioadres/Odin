<template lang="html">
    <section class="hero is-fullheight">
        <div class="container is-fluid">
          <div class="column is-12">
             <figure class="avatar">
                <img src="https://placehold.it/128x128">
              </figure>
              <p class="subtitle has-text-grey">Please login to proceed.</p>
          </div>
          <div class="column is-3">       
              <form>
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="password" placeholder="Your Password">
                  </div>
                </div>
                <div class="field">
                  <label class="checkbox">
                    <input type="checkbox">
                    Remember me
                  </label>
                </div>
                <button class="button is-block is-info is-large is-fullwidth">Login</button>
              </form>
            </div>
      </div>
    </section>
</template>

<script src="./LoginPage.js">
</script>

<style src="./LoginPage.scss" module lang="scss">

</style>

