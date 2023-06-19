<template>
  <div class="login-page">
      <div class="tagline">
        <div class="tagline-content">
          <h1>Welcome to FlashNews!</h1>
          <h5>Please log in to continue</h5>
        </div>
      </div>

      <div class="login-form bg-warning">
        <h1 class="mb-3 add-margin">Log In</h1>
        <div class="mb-3 add-margin">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your email address"
            v-model="email"
          />
        </div>
        <div class="mb-3 add-margin">
          <label for="inputPassword5" class="form-label">Password</label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control"
            placeholder="Enter your password"
            v-model="password"
          />
        </div>
        <div class="mt-2 text-center d-grid gap-2 add-margin">
          <button @click.prevent="loginHandler({email: this.email, password: this.password})" type="submit" class="btn btn-dark mb-3">Log In</button>
          <GoogleLogin  :callback="handleCredentialResponse"/>
          <br>
        </div>
      </div>
    </div>
</template>

<script>

import { mapState } from 'pinia'
import { useFlashStore } from '../stores/flashStore'
import { mapActions } from 'pinia'
import { GoogleLogin } from 'vue3-google-login';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    
  },
  computed: {
    
    
    

  },
  methods: {
    ...mapActions(useFlashStore, ['loginHandler', 'handleCredentialResponse']),
  }
  
}

</script>
