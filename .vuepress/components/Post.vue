<template>
    <div class="flex flex-col min-h-screen">
        <Nav/>
        <Content class="flex-grow theme-default-content" style="padding-bottom: 96px; padding-top: 0px; max-width: 740px;">
        </Content>
        <Footer/>
    </div>
</template>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
@media screen and (min-width: 960px){
    .theme-default-content{
        min-width : 740px;
    }
}
</style>