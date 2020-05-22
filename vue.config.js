module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `
            @import "@/styles/style.scss";
            @import "@/styles/_variables.scss";
            @import "@/styles/_mixins.scss";
            `
        }
      }
    }
  };