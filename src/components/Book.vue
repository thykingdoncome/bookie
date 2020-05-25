<template>
      <div class="book">
        <div class="img-box">
          <img :src="imgSrc" alt="bookcover" class="img"/>
        </div>
        <div class="book-details">
          <h5 v-if="bookTitle" class="mb-1">Title: {{ bookTitle }}</h5>
          <em v-if="bookSubTitle" class="mb-1">Subtitle: {{ bookSubTitle }}</em>
          <em class="mb-1" v-if="bookAuthor">Author(s):
            <li v-for="author in bookAuthor" :key="author.id">{{ author }} </li>
          </em>
          <em v-if="bookCategory" class="mb-1">Category: 
            <span v-for="category in bookCategory" 
            :key="category.id">
              {{ category }} &nbsp; 
            </span>
          </em>
          <p v-if="description" class="mb-1 m-text">{{ description }}</p>
          <p v-if="pubDate" class="mb-1">Date published: {{ pubDate }}</p>
          <p v-if="publisher" class="mb-1">Publisher: {{ publisher }}</p>
          <p v-if="pageCount" class="mb-2">Pages: {{ pageCount }}</p>
          <a :href="bookInfo" target="_blank" class="ma-1"> Book Info</a>
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
    bookAuthor: Array,
    bookInfo: String,
    bookCategory: Array,
    pubDate: String,
    publisher: String,
    pageCount: Number,
    description: {
      String,
      default: `You can get more on this book by clicking the 'Book info' button below`
      }
  },
};
</script>

<style lang="scss"></style>
