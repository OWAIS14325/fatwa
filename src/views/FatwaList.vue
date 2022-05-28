<template>
    <BaseHeader />
    <!-- Main content -->
      <div class="flex-1 flex items-stretch ">
        <main class="flex-1 overflow-y-auto">
          <!-- Primary column -->
          <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col lg:order-last p-10">
            <h1 id="primary-heading" class="sr-only">Photos</h1>
            <!-- Your content -->
             <ul role="list" class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
            <li v-for="fatwa in fatwaList" :key="fatwa.id" class="sm:py-8">
              <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img class="object-cover shadow-lg rounded-lg" :src="fatwa.data.fatwaImage" alt="" />
                </div>
                <div class="sm:col-span-2">
                  <div class="space-y-4">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3><router-link :to="`/single-fatwa/${fatwa.id}`">{{ fatwa.data.question }}</router-link></h3>
                      <p class="text-indigo-600">{{fatwa.data.author}}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500" v-html="fatwa.data.shortDesc"></p>
                    </div>
                    <ul role="list" class="flex space-x-5">
                      <li>
                        <router-link class="text-base text-amber-500" :to="`/single-fatwa/${fatwa.id}`">Read More</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- <fatwa-pagination /> -->
          </section>
        </main>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden w-96 bg-white border-l border-gray-200 lg:block p-5 h-screen sticky top-0">
          <!-- Your content -->
         <sidebar-content />

        </aside>
      </div>
    <BaseFooter />
</template>
<script>
import SidebarContent from "@/components/SidebarContent.vue"
// import FatwaPagination from "@/components/FatwaPagination.vue"
import BaseHeader from "@/components/BaseHeader.vue"
import BaseFooter from "@/components/BaseFooter.vue"

export default {
 
 
  computed : {
    fatwaList(){
      return this.$store.getters['getAllFatwas']
    }
  },
  mounted(){
     
     console.log(this.fatwaList);

  },
  components : {
    SidebarContent,
    // FatwaPagination,
    BaseHeader,
    BaseFooter
}
}
</script>