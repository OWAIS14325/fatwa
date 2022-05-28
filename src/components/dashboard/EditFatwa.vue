<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="md:flex md:items-center md:justify-between">
    <div class="flex-1 min-w-0">
      <!-- <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        
      </h2> -->
      <h3 class="text-md font-bold leading-7 text-gray-900 sm:text-xl sm:truncate">Question</h3>
      <textarea class="w-full text-base border border-gray-200 p-2" rows="3" v-model="question"></textarea>

    </div>

  </div>
  <h3 class="text-md font-bold leading-7  text-gray-900 sm:text-xl sm:truncate">Short Description</h3>
  <textarea class="w-full text-base border border-gray-200 p-2" rows="4" v-model="shortDescription"
    placeholder="Short Description of Fatwa"></textarea>
  <rich-text-editor v-model:content="editorContent" />
  <div>
    <input class="mt-5" type="file" @change="onUpload" ref="input1" accept="image/*" /> <br>
  </div>

  <div class="mt-5">
    <label class="text-base">Author</label>
    <input class="ml-2 border border-gray-200" type="text" v-model="author" />
  </div>

  <div class="mt-5">
    <label for="fatwaCategor">Fatwa Category</label>

    <select class="border ml-2 py-2" name="fatwaCategory" id="fatwaCategory" v-model="fatwaCategory">
     <option value="general" selected>General</option>
      <option v-for="category in fatwaCategories" :value="category.value" :key="category.value">{{ category.name }}</option>
    </select>
  </div>

  <div class="mt-8 flex">
    <button type="button" class="
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          rounded-md
          shadow-sm
          text-sm
          font-medium
          text-gray-700
          bg-white
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        ">
      Edit
    </button>
    <button type="button" @click="updateContent" class="
          ml-3
          inline-flex
          items-center
          px-4
          py-2
          border border-transparent
          rounded-md
          shadow-sm
          text-sm
          font-medium
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        ">
      Save
    </button>
  </div>
</template>

<script>

import RichTextEditor from "@/components/dashboard/RichTextEditor.vue";
import firebase from "firebase";
import { createFatwa } from "@/firebase/firebase.js"
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
export default {
  data() {
    return {
      fatwaId : null,
      question: "",
      img1: "",
      imageData: null,
      editorContent: "",
      shortDescription: 'Short Description',
      author: '',
      fatwaCategory : 'general'
    };
  },
  components: {
    RichTextEditor,
  },
  computed: {
    fatwaCategories(){
     return this.$store.getters['getCategories']
    },
    editor() {
        console.log(this.$refs.editor)
      return this.$refs.editor;
    }
  },
  created() {
    this.setFormData() ;
  },
  methods: {
    async updateContent() {
      const fatwaObject = {
        qid: this.qid,
        question: this.question,
        answer: this.editorContent,
        author: this.author,
        fatwaImage: this.img1,
        shortDesc: this.shortDescription,
        fatwaCategory : this.fatwaCategory,
        date: Date.now()
      }
      await createFatwa(fatwaObject)
      createToast('You Have successfully answerd a question', { type: 'success' })
    },
    onUpload(event) {
      this.imageData = event.target.files[0];
      this.img1 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
          });
        }
      );
    },

    async setFormData(){
      this.fatwaId = this.$route.params.id;
      const fatwaList = await this.$store.dispatch('fetchFatwas') ;
      const fatwa = fatwaList.filter((fatwa) => fatwa.id === this.fatwaId)
      this.question = fatwa[0].data.question,
      this.editorContent = fatwa[0].data.answer,
      this.shortDescription = fatwa[0].data.shortDesc,
      this.author = fatwa[0].data.author,
      this.fatwaCategory  = fatwa[0].data.fatwaCategory

      console.log(this.editorContent);
    }
  },
  mounted(){
    
  }
};
</script>
