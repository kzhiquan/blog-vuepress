<template>
  <div class="flex flex-col min-h-screen">
    <Nav/>
    <div style="max-width: 740px;margin: 0 auto;" class="py-8 px-6 pb-24 flex-grow content">
      <div class="text-4xl font-bold pt-12">草稿</div>
      <div class="border-solid border-t mb-3"></div>
      <div class="pt-3">
        <div v-for="post in posts">
          <router-link :to="post.path" class="text-2xl">{{ post.title }}</router-link>
          <div class="pb-5 font-hairline">{{ post.frontmatter.date.substring(0,10) }}</div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "PostsLayout",
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/draft/"))
        .filter(x => !x.frontmatter.blog_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
      },
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
@media screen and (min-width: 960px){
  .content{
      min-width : 740px;
  }
}
</style>