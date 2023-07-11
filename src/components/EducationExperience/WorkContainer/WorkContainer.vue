<template lang="">
  <div id="experience">
    <h4>Experience</h4>
    <WorkItem v-for="page in paginated()" :key="page" v-bind="page"/>
    <PageContainer :currentPage="current" @incrementCurrent="current++" @decrementCurrent="current--" :isStart="isStart" :isEnd="isEnd"/>
  </div>
</template>
<script>
import WorkItem from "../WorkItem/WorkItem.vue";
import experience from "../../../assets/api/experience.json"
import PageContainer from "../../Utility/Pagination/PageContainer.vue";

export default {
  name: "WorkContainer",
  components: { WorkItem,PageContainer},
  computed:{
    indexStart() {
    return (this.current - 1) * this.pageSize;
  },
    indexEnd() {
    return this.indexStart + this.pageSize;
  },
    isStart(){
    return this.current-1===0
    },
    isEnd(){
        return this.current === Math.ceil(this.experienceList.length/2)
    }
  },
  methods:{
    paginated(){
        return this.experienceList.slice(this.indexStart, this.indexEnd);
    }
  },
  data(){
    return {
        current:1,
        pageSize:2,
        experienceList:experience
    }
  }
};
</script>
<style scoped>

#experience{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: space-between;
    height: 100%;
}
</style>
