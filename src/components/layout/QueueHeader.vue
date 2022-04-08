<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">QueuePlay</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav><div>
        <b-nav-item to="/lobby">Lobby</b-nav-item>
        </div>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#" v-if="isLogin">{{name}}</b-dropdown-item>
          <b-dropdown-item href="/signin">Sign Out</b-dropdown-item>
          <b-dropdown-item @click="$router.push('/signin')">Sign in</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name :"QueueHeader",
    props:['isLogin','name'],
    data() {
      return {
      }
    },

    
};
</script>

<style>

.navbar{
    z-index: -1;
    width: 100%;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
}

</style>