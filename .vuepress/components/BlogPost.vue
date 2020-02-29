<template>
    <div class="flex flex-col min-h-screen">
        <Nav/>
        <div class="flex-grow theme-default-content" style="padding-bottom: 0px; max-width: 740px;">
            <div style="fontSize: 1.5rem; font-weight: 500; margin: 0px;display: inline-block;">{{this.$page.title}}</div>
            <div class="sm:block lg:inline-block sm:ml-5" style="font-size: .875rem; font-weight: 200;">{{ this.$page.frontmatter.date.substring(0,10) }}</div>
            <div style="height: 0.5px; border: 0; border-top: 0.5px solid #ddd; margin-top: 6px;" />
            <Content style="padding-bottom: 32px; padding-top: 24px;"/>
            <div class="gitalkcomment"  style="padding-bottom: 96px;"></div>
            <Comment />
        </div>
        <Footer/>
    </div>
</template>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
@media screen and (min-width: 960px){
    .theme-default-content{
        min-width : 740px;
        margin: 0 auto;
    }
}

@media screen and (max-width: 960px){
    .theme-default-content{
        margin: 0;
    }
}
</style>