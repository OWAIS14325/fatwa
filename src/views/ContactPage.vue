<template>
<BaseHeader />
<main class="overflow-hidden">
      <!-- Header -->
      <div class="bg-warm-gray-50">
        <div class="py-24 lg:py-32">
          <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">Ask a Fatwa</h1>
            <!-- <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et fermentum amet consequat.</p> -->
          </div>
        </div>
      </div>

      <!-- Contact section -->
      <section class="relative bg-white" aria-labelledby="contact-heading">
        <div class="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />
        <!-- Decorative dot pattern -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-warm-gray-100" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative bg-white shadow-xl">
            <h2 id="contact-heading" class="sr-only">Ask a Fatwa </h2>

            <div class="grid grid-cols-1 lg:grid-cols-3">
              <!-- Contact information -->
              <div class="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-amber-400 to-orange-400 sm:px-10 xl:p-12">
                <!-- Decorative angle backgrounds -->
                <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                  <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                    <defs>
                      <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                  <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                    <defs>
                      <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                  <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                    <defs>
                      <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white">Follow Us on Twitter</h3>
                <dl class="mt-8 space-y-6">
                  <TwitterWidget />
                </dl>
              </div>

              <!-- Contact form -->
              <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-medium text-warm-gray-900">Fill the Details</h3>
                <form @submit.prevent="onSubmit" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label for="first-name" class="block text-sm font-medium text-warm-gray-900">First name</label>
                    <div class="mt-1">
                      <input type="text" name="first-name" v-model="form.firstName" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-md text-warm-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-500 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label for="last-name" class="block text-sm font-medium text-warm-gray-900">Last name</label>
                    <div class="mt-1">
                      <input type="text" name="last-name" id="last-name" v-model="form.lastName" autocomplete="family-name" class="py-3 px-4 block w-full shadow-md text-warm-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-500 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-warm-gray-900">Email</label>
                    <div class="mt-1">
                      <input id="email" name="email" type="email" v-model="form.email" autocomplete="email" class="py-3 px-4 block w-full shadow-md text-warm-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-500 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label for="phone" class="block text-sm font-medium text-warm-gray-900">Phone</label>
                      <span id="phone-optional" class="text-sm text-warm-gray-500">Optional</span>
                    </div>
                    <div class="mt-1">
                      <input type="text" name="phone" id="phone" v-model="form.Phone" autocomplete="tel" class="py-3 px-4 block w-full shadow-md text-warm-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-500 rounded-md" aria-describedby="phone-optional" />
                    </div>
                  </div>
                  <!-- <div class="sm:col-span-2">
                    <label for="subject" class="block text-sm font-medium text-warm-gray-900">Fatwa Cate</label>
                    <div class="mt-1">
                      <input type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-500 rounded-md" />
                    </div>
                  </div> -->
                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label for="message" class="block text-sm font-medium text-warm-gray-900">Fatwa Question</label>
                      <span id="message-max" class="text-sm text-warm-gray-500">Max. 500 characters</span>
                    </div>
                    <div class="mt-1">
                      <textarea id="message" name="message" rows="4" v-model="form.question" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-amber-500 focus:border-amber-500 border border-warm-gray-500 rounded-md" aria-describedby="message-max" required />
                    </div>
                  </div>
                  <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <button type="submit" class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:w-auto">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
</main>
<BaseFooter />

</template>
<script>
import TwitterWidget from '@/components/TwitterWidget.vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import { createQuestion } from '@/firebase/firebase';
export default {
  
  data(){
    return{
      form : { 
      firstName: '', 
      lastName: '' ,
      Phone : '',
      question : '',
      email : '',
      date : Date.now()

      }
    }
  },
  components: {
    TwitterWidget,
    BaseHeader,
    BaseFooter
  },
  computed : {
    questions(){
      return this.$store.getters['getAllQuestions']
    }
  },
  created(){
     console.log(this.questions);
  },
  methods : {
  async onSubmit (){
      const today = Date.now() ;
      const date = new Date(today).toLocaleDateString() 
     
      const res = this.questions.filter(que => que.data.email === this.form.email && new Date(que.data.date).toLocaleDateString() === date ) ;
      if(!res.length){
        await createQuestion({ ...this.form })
      this.form.firstName = ''
      this.form.email = ''
      this.form.lastName = '',
      this.form.Phone = '',
      this.form.question = ''
      createToast('Your Question was submitted successfully. you will get notified.', {type : 'success'})
    }else {
      createToast('Your Have Crossed Daily Limit of 1 question.', {type : 'danger'})
    }
      }
      
}
}
</script>