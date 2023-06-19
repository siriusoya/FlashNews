<template>
  <div class="detail-container">
    <div
      class="detail-header"
      :style="`background-image: url('${articleDetail.imgUrl}'), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`"
    >
      <div class="detail-content">
        <h5 class="detail-category">{{ articleDetail.Category.name }}</h5>
        <h2>{{ articleDetail.title }}</h2>
        <p>{{ articleDetail.User.email }}</p>
      </div>
    </div>

    <div class="detail-body">
      <div class="detail-article">
        <p style="font-weight: bold">{{ new Date(articleDetail.createdAt).toDateString() }}</p>
        <p>
          {{ articleDetail.content }}
        </p>
      </div>
      <div class="qr-code">
        <p style="font-weight: bold">Share QR Code</p>
        <span v-html="qrCode"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useFlashStore } from '../stores/flashStore'
import { mapActions } from 'pinia'
import { mapWritableState } from 'pinia'

export default {
  components: {},
  computed: {
    ...mapState(useFlashStore, ['articleDetail', 'qrCode']),
    ...mapWritableState(useFlashStore, ['articleId'])
  },
  methods: {
    ...mapActions(useFlashStore, ['articleById']),
  },
  data() {
    return {
      gatau: 'menangis'
    }
  },
  created() {
    this.articleId = this.$route.params.id
    this.articleById()
    console.log(this.articleDetail, '<<< article detail')
  }
}
</script>
