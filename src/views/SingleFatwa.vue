<template>
<BaseHeader />
  <!-- Main content -->
  <div class="flex-1 flex items-stretch">
    <main class="flex-1 overflow-y-auto">
      <!-- Primary column -->
      <section
        aria-labelledby="primary-heading"
        class="min-w-0 flex-1 h-full flex flex-col lg:order-last"
      >
        <h1 id="primary-heading" class="sr-only">Photos</h1>
        <!-- Your content -->
        <div class="relative p-16 bg-white" v-if="fatwaDetails">
          <img class="w-full object-cover h-72" :src="fatwaDetails.fatwaImage" alt="" srcset="">
          <h3>Question:</h3>
          <p>{{fatwaDetails.question}}</p>
          <h3>Answer:</h3>
          <div v-html="fatwaDetails.answer"></div>
        </div>
      </section>
    </main>

    <!-- Secondary column (hidden on smaller screens) -->
    <aside
      class="
        hidden
        w-96
        bg-white
        border-l border-gray-200
        lg:block
        p-5
        h-screen
        sticky
        top-0
      "
    >
      <!-- Your content -->
      <sidebar-content />
    </aside>
  </div>
<BaseFooter />
</template>
<script>
import SidebarContent from "@/components/SidebarContent.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import { getFatwa } from "@/firebase/firebase.js"

export default {
  components: { SidebarContent, BaseHeader, BaseFooter },
  data(){
    return {
      fatwaDetails : null
    }
  },

  setup() {
    return {};
  },
  created(){
    this.getFatwaDetails()
  },
  methods : {
    async getFatwaDetails(){
      const id = this.$route.params.fatwaId
      const res = await getFatwa(id)
      this.fatwaDetails = res ;
    }
  }
};
</script>
<style >
h3 {
  font-size: 23px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
}
ul, ol, li {
  list-style: auto;
}
.ql-align-center{
  text-align: center !important;
}
</style>