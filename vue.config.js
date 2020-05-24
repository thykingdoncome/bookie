module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `
            @import "@/styles/style.scss";    
            `
        }
      }
    }
  };