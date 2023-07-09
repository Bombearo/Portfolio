<template lang="">
    <div class="EducationContainer">
        <h4>Education</h4>
        <EducationItem year="2021-2025 (Expected)" location="BSc Computer Science University of Edinburgh"/>
        <EducationItem year="2020-2021" location="Advanced Highers Including As in Computing, Maths"/>
    </div>
</template>
<script>
import EducationItem from '../EducationItem/EducationItem.vue';
export default {
    name:"EducationContainer",
    components:{EducationItem}
}
</script>
<style>
.EducationContainer{
    width:80%;
    margin:auto;
}

@media screen and (max-width: 1024px){
    .EducationContainer{
        width:100%;
    }
}
</style>