<template>
    <div class="pb-3 border-b border-gray-200">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            Follow Us On Twitter
        </h3>
    </div>
    <div>
      <TwitterWidget />
    </div>
    <div class="pb-3 border-b border-gray-200 mt-5">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            Fatwa Categories
        </h3>
    </div>
    <ul role="list" class="divide-y divide-gray-200">
    <li v-for="category in fatwaCategories" :key="category.name" class="py-2 flex">
        <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ category.name }}</p>
        </div>
    </li>
    </ul>
    <button type="submit" class="block w-full mt-5 py-3 px-4 rounded-md shadow bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">ASK A FATWA</button>
</template>
<script>
import TwitterWidget from './TwitterWidget.vue'

export default {
    components: { TwitterWidget },
    computed : {
      fatwaCategories(){
        return this.$store.getters['getCategories']
      }
    }
}
</script>