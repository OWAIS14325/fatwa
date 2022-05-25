<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="md:flex md:items-center md:justify-between">
    <div class="flex-1 min-w-0">
      <!-- <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        
      </h2> -->
      <textarea class="w-full text-base border-sm" v-model="question"></textarea>
    </div>
    <div class="mt-4 flex md:mt-0 md:ml-4">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Edit
      </button>
      <button type="button" @click="saveContent" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save
      </button>
    </div>
  </div>
  <rich-text-editor v-model:content="editorContent" />
</template>

<script>
import RichTextEditor from "@/components/dashboard/RichTextEditor.vue"
export default {
    data(){
    return {
        question : '',
        editorContent : {"ops":[{"insert":"Owais....."},{"attributes":{"header":3},"insert":"\n"},{"insert":"consectetur adipiscing elit. "},{"attributes":{"bold":true},"insert":"Nunc ultrices ligula"},{"insert":" eu eros pulvinar, eu consequat nulla consectetur. Cras ut purus felis. Nunc placerat risus a augue sodales, at ultricies diam tristique. Donec venenatis auctor mauris,"},{"attributes":{"italic":true},"insert":" at molestie enim euismo"},{"insert":"d ac. Mauris viverra, leo id porttitor maximus, diam magna blandit nibh, ac vehicula nulla diam in eros. Nullam mi risus, blandit a elit quis, aliquam porttitor diam. In mauris nunc, fringilla at auctor in, sodales eu diam. In convallis gravida urna, ut gravida massa euismod quis.\nProin rutrum tortor at augue eleifend finibus. "},{"attributes":{"underline":true},"insert":"Quisque non tincidunt dolor."},{"insert":" Aenean ullamcorper, diam ac vehicula imperdiet, arcu erat sodales sem, vitae lobortis dolor urna dapibus nisi. Nulla lacus urna, vehicula quis rutrum sit amet, "},{"attributes":{"link":"http://localhost"},"insert":"porttitor eget ligula"},{"insert":". Nam eget ante ornare, egestas nulla dapibus, tempus nisi. Sed vel odio augue. Fusce vulputate, risus sit amet venenatis tristique, ex ex pulvinar orci, vitae lobortis massa enim ac ante. Nulla sodales mauris ligula, a tempus felis vulputate ut. Sed scelerisque dolor at leo hendrerit vehicula.\n"}]}
    }
    },
    components : {
        RichTextEditor
    },
    computed : {
        questions(){
           return this.$store.getters['getAllQuestions']
        },
        currentQuestion(){
            const qid = this.$route.params.id ;
           return this.questions ? this.questions.filter(que => que.id === qid) : null
        }
    },
    methods :{
        saveContent(){
            console.log(this.editorContent);
        }
    },
    mounted(){
         this.question = this.currentQuestion ? this.currentQuestion[0].data.question : '' ;
    }
}
</script>
