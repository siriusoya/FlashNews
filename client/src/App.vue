<template>
<Navbar />
<RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { mapState } from 'pinia'
import { mapWritableState } from 'pinia'
import { useFlashStore } from './stores/flashStore'

export default {
  components: {
    Navbar
  }, 
  computed: {
    ...mapWritableState(useFlashStore, ['isLogin'])
  },
  created() {
    if(localStorage.access_token){
      this.isLogin = true;
    }
  }
}
</script>

<style scoped></style>
