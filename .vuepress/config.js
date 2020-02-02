module.exports = {
    title: "Blog - chitaner blog",
    description: "a blog of chitaner",
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
    plugins: ['vuepress-plugin-reading-time',
              ['@vuepress/google-analytics',
                {
                  'ga': 'UA-150406837-1'
                }
              ],
              [
                'gitalk-maker',
                {
                  gitalkConfig: {
                    clientID: 'e311dfde0df52af856aa',
                    clientSecret: '60e9d1059d9b435f90944df9cf292ac032ae2c3c',
                    repo: 'blog-vuepress',
                    owner: 'kzhiquan',
                    admin: [''],
                    // id: location.pathname, // 无法配置默认用 location.pathname
                    distractionFreeMode: false, // Facebook-like distraction free mode
                  },
                },
              ]
            ],
  }