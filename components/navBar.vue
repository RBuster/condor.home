<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <NuxtLink to="/">
          <img src="~/assets/images/logo_sm.png" alt="Condor Home">
        </NuxtLink>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/forSale">
            For Sale
          </b-nav-item>
          <b-nav-item to="/blog">
            Blog
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" />
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style lang="scss">
.navbar-nav{
  .nav-item a{
    color: $link-text;
    text-decoration: none;
  }
}

</style>
