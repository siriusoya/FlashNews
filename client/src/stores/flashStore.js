import { defineStore } from 'pinia'
import axios from 'axios';


export const useFlashStore = defineStore('flash', {
  state: () => ({
    baseUrl: 'https://flashnews.challenge-2-siriusoya.site/customers',
    isLogin: false,
    articles: [],
    currentPage: 1,
    totalPage: 1,
    articleDetail: {},
    bookmarks: [],
    articleId: 0,
    qrCode: null,
    searchInput: '',
    bookmarkIdList: []
  }),
  getters: {
    // doubleCount: (state) => state.count * 2
  },
  actions: {
    async loginHandler(payload) {
      try {
        let result  = await axios({
          method: 'POST',
          url: this.baseUrl + '/login',
          data: payload
        })
        localStorage.setItem('access_token', result.data.access_token)
        this.isLogin = true;
        this.router.push('/');
      } catch (err) {
        console.log(err, '<<<')
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    async handleCredentialResponse(response) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/google-sign-in',
          method: 'POST',
          headers: {
            google_token: response.credential
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true;
        this.router.push('/');
      } catch (err) {
        console.log(err)
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    async signupHandler(payload) {
      try {
        await axios({
          method: 'POST',
          url: this.baseUrl + '/signup',
          data: payload
        })
        this.router.push('/login');
      } catch (err) {
        console.log(err)
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    async fetchArticles() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/articles',
          params: {
            page: this.currentPage,
            search: this.searchInput
          }
        })
        this.articles = data.data;
        this.totalPage = data.totalPage;
        console.log(this.articles)
      } catch (err) {
        console.log(err)
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    async articleById() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/articles/' + this.articleId
        })
        this.articleDetail = data.data;
        // console.log(this.articleDetail, '<<< detail dari store')
        this.qrCode = data.qrCode;

      } catch (err) {
        console.log(err)
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    async fetchBookmarks() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/bookmark',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.bookmarks = data.data

        let listOfId = []; 
        data.data.forEach((el) => {
          listOfId.push(el.id);
        })
        console.log(listOfId)

        this.bookmarkIdList = listOfId;
      } catch (err) {
        console.log(err)
      }
    },
    async addBookmark(articleId) {
      try {
        let { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/bookmark/' + articleId,
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(data)
        this.router.push(`/bookmark`)
      } catch (err) {
        console.log(err)
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    logout() {
      localStorage.clear()
      this.isLogin = false;
    },
    nextPage(){
      this.currentPage++
    },
    prevPage(){
      this.currentPage--
    }
  }
})
