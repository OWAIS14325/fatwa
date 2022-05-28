<template>
  <div class="bg-white">
    <div class="relative">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  async created(){
   await this.$store.dispatch('fetchQuestions') ;
   await this.$store.dispatch('fetchFatwas') ;
    
  }
}
</script>
