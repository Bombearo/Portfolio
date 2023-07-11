<template>
    <div>
        <button :disabled="disabled">{{ buttonText }}</button>
    </div>
</template>
<script>
export default {
    name:"PageButton",
    props:{
        buttonText:{type:String},
        colour:{type:String},
        disabled:{type:Boolean}
    }
}
</script>
<style lang="">
    
</style>