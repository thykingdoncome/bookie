<template>
  <div class="page-container ma-0">
   <Header />

   <div class="form py-1">
      <form id="form" @submit.prevent="fetchBooks">
      <input type="text" class="mr-2 mb-1" id="query" v-model="query" placeholder="Search by title keyword" autofocus/>
      <input type="text" class="mr-2 mb-1" id="author" v-model="authorName" placeholder="Search by Author"/>
      <input type="submit" value="Search">
    </form>
   </div>

    <div v-for="book in this.books" :key="book.id" class="book-wrapper my-2">
      <book
       :bookCategory="book.volumeInfo.categories && book.volumeInfo.categories[0]"
        :imgSrc="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail"
        :bookAuthor="book.volumeInfo.authors && book.volumeInfo.authors[0]"
        :bookTitle="book.volumeInfo.title && book.volumeInfo.title"
        :bookSubTitle="book.volumeInfo.subtitle && book.volumeInfo.subtitle"
        :bookInfo="book.volumeInfo.infoLink && book.volumeInfo.infoLink"
        :pubDate="book.volumeInfo.publishedDate && book.volumeInfo.publishedDate"
        :publisher="book.volumeInfo.publisher && book.volumeInfo.publisher"
        :pageCount="book.volumeInfo.pageCount && book.volumeInfo.pageCount"
        :description="book.volumeInfo.description && book.volumeInfo.description"
      />
    </div>

  </div>
</template>

<script>
import axios from "axios";
import dotEnv from "dotenv";
import Book from "./Book";
import Header from "../components/Header";

dotEnv.config();
const { VUE_APP_BASE_URL, VUE_APP_API_KEY } = process.env;

export default {
  name: "Container",
  components: {
    Book,
    Header
  },
  data() {
    return {
      query: "",
      books: "",
      authorName: "",
    };
  },
  computed: {},
  methods: {
    async fetchBooks() {
      try {
        const res = await axios.get(
          `${VUE_APP_BASE_URL}?q=${this.query}+inauthor:${this.authorName}&key=${VUE_APP_API_KEY}`
        );
        this.books = res.data.items;
        this.query = "";
        this.authorName = "";
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style lang="scss"></style>
