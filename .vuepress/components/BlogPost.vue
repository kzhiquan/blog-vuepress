<template>
    <div style="min-height: 100%; position: relative;">
        <Nav/>
         <div class="theme-default-content" style="padding-bottom: 0px;">
          <div style="fontSize: 1.5rem; margin: 0px;display: inline-block;">{{this.$page.title}}</div>
          <div style="display: inline-block; margin-left: 1.25rem;">{{ this.$page.frontmatter.date.substring(0,10) }}</div>
          <div style="height: 1px; border: 0; border-top: 1px solid #ccc;" />
          <Content/>
        </div>
        <!--<Content class="theme-default-content" style="padding-bottom: 96px; padding-top: 0px;">-->
        </Content>
        <Footer/>
    </div>
</template>

<style lang="stylus">
body, html, #app {
  height: 100%; 
}
</style>