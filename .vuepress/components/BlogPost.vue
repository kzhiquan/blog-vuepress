<template>
    <div style="min-height: 100%; position: relative;">
        <Nav/>
         <div class="theme-default-content" style="padding-bottom: 0px;">
          <div style="fontSize: 1.5rem; font-weight: 500; margin: 0px;display: inline-block;">{{this.$page.title}}</div>
          <div style="display: inline-block; margin-left: 1.25rem; font-size: .875rem; font-weight: 200;">{{ this.$page.frontmatter.date.substring(0,10) }}</div>
          <div style="height: 0.5px; border: 0; border-top: 0.5px solid #ddd; margin-top: 6px;" />
          <Content style="padding-bottom: 32npmpx; padding-top: 16px;"/>
          <div class="comment">
          </div>
          <Comment />
        </div>
        <Footer/>
    </div>
</template>



<style lang="stylus">
body, html, #app {
  height: 100%; 
}
</style>