<template>
    {{ path }}
    <SectionContainer>
      <template v-slot:content>
        <WelcomeText />
      </template>
      <template v-slot:media>
        <WelcomeGraphic :svgPath="svgPath"/>
      </template>
    </SectionContainer>
  </template>
<script>
import SectionContainer from "../SectionContainer/SectionContainer.vue"
import WelcomeText from "./WelcomeText/WelcomeText.vue"
import WelcomeGraphic from "./WelcomeGraphic/WelcomeGraphic.vue"

let publicPath = process.env.BASE_URL;
let svgPath =  `${publicPath}SVGs/HTML.svg`
export default {
    name:"WelcomeContainer",
    components:{
        SectionContainer,
        WelcomeText,
        WelcomeGraphic
    },
    data(){
        return{
            svgPath:svgPath
        }
    }
}
</script>
<style lang="">
    
</style>