<template>
    <div>
        <button :disabled="disabled">
            {{ buttonText }}
        </button>
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
<style>
button{
    border-radius: 1rem;
    background-color: #657f56;
    color: #b3cca3;
    height:2.5rem;
    width: 2.5rem;
    }
</style>