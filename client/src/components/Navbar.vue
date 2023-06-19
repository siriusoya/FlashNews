<script>

import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useFlashStore } from '../stores/flashStore'


export default {
  components: {
    
  },
  computed: {
    
    ...mapState(useFlashStore, ['isLogin'])
    

  },
  methods: {
    ...mapActions(useFlashStore, ['logout']),
  }
}

</script>

<template>

<nav class="navbar bg-dark" data-bs-theme="dark" style="">
      <div class="container-fluid display-flex">
        <div>
          <img
            class="m-auto d-inline-block align-text-top"
            src="https://clipartix.com/wp-content/uploads/2016/05/Bolt-clipart-8-lightning-bolt-clip-art-clipart-free-clip-image.gif"
            alt="Logo"
            width="30"
            height="24"
          />

          <RouterLink to="/" class="navbar-brand text-warning" href="#">FlashNews</RouterLink>

          <span class="navbar-text text-warning"
          v-if="isLogin == false"
            >|&nbsp;&nbsp;&nbsp;Your trusted source of news</span
          >
          <RouterLink to="/" class="text-light add-margin-2" v-if="isLogin == true"> Home</RouterLink>
          <RouterLink to="/bookmark" class="text-light add-margin-2" v-if="isLogin == true"> Bookmark</RouterLink>
        </div>
        <div class="right-button">
          <RouterLink to="/login" class="float-right">
            <button class="btn btn-outline-warning" v-if="isLogin == false">Log In</button>
          </RouterLink>
          <RouterLink to="/signup" class="float-right">
            <button class="btn btn-outline-warning" v-if="isLogin == false">Sign Up</button>
          </RouterLink>
          <RouterLink to="/signup" class="float-right">
            <button class="btn btn-outline-warning" v-if="isLogin == true" @click="logout()">Log Out</button>
          </RouterLink>
        </div>
      </div>
    </nav>
  
</template>

<style scoped>

</style>
