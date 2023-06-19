<template>
  <div class="card" style="width: 19rem">
    <img class="card-img-top" :src="article.imgUrl" alt="Card image cap" />
    <div class="card-body">
      <h5 class="ad-category">{{ article.Category.name }}</h5>
      <h4 class="card-title" @click="toDetail()">
        {{ article.title }}
      </h4>
      <p class="card-text">
        {{ article.content }}
      </p>
    
    </div>
  </div>
</template>

<script>

import { useFlashStore } from '../stores/flashStore'
import { mapWritableState } from 'pinia'
import { mapState } from 'pinia'
import { mapActions } from 'pinia'

export default {
  components: {},
  computed: {
    ...mapWritableState(useFlashStore, ['articleId']),
    ...mapState(useFlashStore, ['isLogin', 'bookmarkIdList'])

  },
  props: ['article', 'index'],
  methods: {
    ...mapActions(useFlashStore, ['addBookmark']),
    toDetail() {
      console.log('dapat idnya >>>', this.article.id)
      this.articleId = this.article.id
      this.$router.push(`/articles/${this.article.id}`)
      console.log(this.articleId)
    }
  }
}
</script>

<style scoped></style>
