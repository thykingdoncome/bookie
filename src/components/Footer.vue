<template>
  <footer>
    <div class="footer ma-0">
      <div>
        <b> &copy;</b> <span>{{ copyRight }}</span>
      </div>

      <div>
        <a
          href="https://github.com/thykingdoncome/bookie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      copyRight: "",
    };
  },
  methods: {
    myCopy() {
      this.copyRight = new Date().getFullYear();
    },
  },

  mounted() {
    this.myCopy();
  },
};
</script>

<style lang="scss">

// footer i {

// }
</style>
