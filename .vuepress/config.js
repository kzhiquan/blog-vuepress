module.exports = {
    title: "Blog - chitaner blog",
    description: "a blog of chitaner",
    ga: "UA-33278530-1",
    serviceWorker: true,
    head: [
      ['link', { rel: 'icon', href: '/logo.png'}]
    ],
    themeConfig: {
      nav: [{ text: "首页", link: "/" }, 
            { text: "关于", link: "/about/" },],
    },
    postcss: {
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
    plugins: ['vuepress-plugin-reading-time'],
  }