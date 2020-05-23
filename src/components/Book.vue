<template>
  <div class="book my-2">
    <div class="image-section">
      <div class="img">
        <img :src="imgSrc" alt="bookcover" />
      </div>
        <a :href="bookInfo" target="_blank" class="ma-0"> Book Info</a>
    </div>

    <div class="book-description px-1">
      <h2 v-if="bookTitle" class="py-1">Title: {{ bookTitle }}</h2>
      <em v-if="bookSubTitle" class="py-1">Subtitle: {{ bookSubTitle }}</em>
      <em v-if="bookAuthor" class="py-1">Author: {{ bookAuthor }}</em>
      <em v-if="bookCategory" class="py-1">Category: {{ bookCategory }}</em>
        <p v-if="description" class="py-1 m-text">{{ description }}</p>
      <p v-if="pubDate" class="py-1">Date published: {{ pubDate }}</p>
      <p v-if="publisher" class="py-1">Publisher: {{ publisher }}</p>
      <p v-if="pageCount" class="py-1">Pages: {{ pageCount }}</p>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: {
    bookTitle: String,
    bookSubTitle: String,
    imgSrc: {
      String,
      default:
        "https://i.pinimg.com/564x/33/5d/74/335d744b8d2a2bf9a868e634055aa971.jpg",
    },
    bookAuthor: {
      type: String,
      default: "unknown",
    },
    bookInfo: String,
    bookCategory: String,
    pubDate: String,
    publisher: String,
    pageCount: Number,
    description: String,
  },
};
</script>

<style lang="scss"></style>
