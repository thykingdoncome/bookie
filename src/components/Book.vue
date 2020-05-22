<template>
  <div class="book">
    <p>
      {{ bookTitle }}
    </p>
    <em> {{ bookSubTitle }}</em>
    <h1 v-if="bookAuthor">
      {{ bookAuthor }}
    </h1>
    <em>
      {{ bookCategory }}
    </em>
    <p>
      {{ pubDate }}
    </p>
    <p>
      {{ publisher }}
    </p>

    <p>
      {{ pageCount }}
    </p>
    <p>
      {{ description }}
    </p>

    <div>
      <img :src="imgSrc" alt="bookcover" />
    </div>
    <a :href="bookInfo" class="m-2" target="_blank"> Book Info</a>
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
        default: "https://i.pinimg.com/564x/33/5d/74/335d744b8d2a2bf9a868e634055aa971.jpg"  
        },
    bookAuthor: {
        type: String,
        default: "unknown"
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

<style lang="scss">
</style>
