<template>
  <div class="login-page">
      <div class="tagline">
        <div class="tagline-content">
          <h1>Welcome to FlashNews!</h1>
          <h5>Sign up to keep up with the latest news</h5>
        </div>
      </div>

      <div class="signup-form bg-warning">
        <h1 class="mb-3 add-margin">Sign Up</h1>
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
          <button @click.prevent="signupHandler({email: this.email, password: this.password})" type="submit" class="btn btn-dark mb-3">Sign Up</button>
        </div>
      </div>
    </div>
</template>

<script>

import { mapActions } from 'pinia'
import { useFlashStore } from '../stores/flashStore'

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
    ...mapActions(useFlashStore, ['signupHandler']),
  }
}

</script>
