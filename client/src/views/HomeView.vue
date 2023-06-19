<template>
  <div class="home-container">
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

    <div class="main-content">
      <div class="side-view">
        <div class="search-container">
          <hr />
          <h2>Search Article</h2>
          
          <div class="input-group mb-3 search">
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              v-model="searchInput"
            />
            <button type="button" class="btn btn-warning" @click="fetchArticles()">Search</button>
          </div>
        </div>
        <br />
        <br />
        <div class="categories-container">
          <hr />
          <h2>Categories</h2>
          <div class="some-space">
          <h5 class="ad-category">Entertainment</h5>
          <h5 class="ad-category">Politics</h5>
          <h5 class="ad-category">Health</h5>
          <h5 class="ad-category">Economy</h5>
          <h5 class="ad-category">Sport</h5>
          <h5 class="ad-category">Education</h5>
        </div>
        </div>
      </div>
      <div class="articles-container">
        <div class="articles">
          <!--Cards -->
          <Card v-for="(article, index) in articles" :article="article" :index="index" />
          <!--End Cards -->
        </div>
        <div class="button-page">
          <button class="btn btn-warning" @click="prevPage(), fetchArticles()" v-if="currentPage > 1">Prev</button> <button class="btn btn-warning">{{ currentPage }}</button> <button class="btn btn-warning"  @click="nextPage(), fetchArticles()" v-if="currentPage < totalPage">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { mapActions } from 'pinia'
import { useFlashStore } from '../stores/flashStore'
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    ...mapState(useFlashStore, ['isLogin', 'articles', 'currentPage', 'totalPage']),
    ...mapWritableState(useFlashStore, ['searchInput'])
  },
  created() {
    this.fetchArticles()
    console.log(this.articles, '<<<')
    this.fetchBookmarks()
  },
  methods: {
    ...mapActions(useFlashStore, ['fetchArticles', 'nextPage', 'prevPage', 'fetchBookmarks']),
  }
}
</script>
