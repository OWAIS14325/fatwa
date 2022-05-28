<!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <div class="flex flex-col">
    
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <router-link to="/ask-fatwa" type="button" class="inline-flex float-right px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mr-8">
    Add Question
  </router-link>
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="ques in getAllFatwas" :key="ques.data.email">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ ques.data.question }}
                </td>
                <td class="px-6 py-4  text-sm text-gray-500 break-words">
                  {{ ques.data.fatwaCategory }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ ques.data.author }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ new Date(ques.data.date).toLocaleDateString() }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button class="text-red-600 hover:text-red-900" @click="deleteFatwa(ques.id)">Delete</button>
                  <span class="mx-2">|</span>
                  <router-link :to="`/dashboard/edit-fatwa/${ques.id}`" class="text-green-600 hover:text-green-900">Edit Answer</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  data(){
    return {
     showModal : false
    }
  },
  computed : {
      getAllFatwas(){
          return this.$store.getters['getAllFatwas']
      }
  },
  methods :{
      deleteFatwa(id){
          this.$store.dispatch('deleteFatwa', id)
      },
  }
}
</script>