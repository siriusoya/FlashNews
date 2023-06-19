<template>
  
  <div class="bookmark-container">
      <div class="advertisement">
        <div id="ad-1">
          <div class="ad-content">
            <h5 class="ad-category">Education</h5>
            <h2>A Shocking University Scandal</h2>
            <p>joongki@flash.mail.com</p>
          </div>
        </div>
        <div id="ad-2">
          <div class="ad-content">
            <h5 class="ad-category">Politics</h5>
            <h2>Speech Left People Speechless</h2>
            <p>jasmine@flash.mail.com</p>
          </div>
        </div>
      </div>

      <br>
      <br>
      <br>

      <h1 style="font-weight: bolder;">My Bookmarks</h1>

      <hr>

      <div class="articles">
        <!--Cards -->
        <Card v-for="(article, index) in bookmarks" :article="article" :index="index" />
        <!--End Cards -->
      </div>
    </div>

</template>

<script>

import { mapState } from 'pinia'
import { useFlashStore } from '../stores/flashStore'
import { mapActions } from 'pinia'
import Card from '../components/Card.vue'

export default{
  components: {
    Card
  },
  computed: {
    
    ...mapState(useFlashStore, ['isLogin', 'bookmarks'])
    

  },
  methods: {
    ...mapActions(useFlashStore, ['fetchBookmarks']),
  },
  created(){
    this.fetchBookmarks()
  }
}

</script>
