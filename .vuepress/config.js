module.exports = {
    title: "Blog - chitaner",
    description: "a blog of chitaner",
    serviceWorker: true,
    head: [
      ['link', { rel: 'icon', href: '/logo.png'}]
    ],
    themeConfig: {
      nav: [{ text: "首页", link: "/" }, 
            { text: "产品", link: "/product/"},
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
                'vuepress-plugin-comment',
                {
                  choosen: 'gitalk', 
                  container: '.comment',
                  options: {
                    clientID: 'e311dfde0df52af856aa',
                    clientSecret: '60e9d1059d9b435f90944df9cf292ac032ae2c3c',
                    repo: 'blog-vuepress',
                    owner: 'kzhiquan',
                    admin: ['kzhiquan'],
                    id: '<%- frontmatter && (frontmatter.commentid || frontmatter.permalink || frontmatter.title || frontmatter.to.path) || window.location.pathname %>', // Ensure uniqueness and length less than 50
                    distractionFreeMode: false,  // Facebook-like distraction free mode
                    labels: ['Gitalk', 'Comment'],
                    title: '「评论」<%- frontmatter.title %>',
                    body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
                  }

                }
              ],


            ],
  }