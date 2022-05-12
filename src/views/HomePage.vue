<template>
  
      
      <main>
        <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:overflow-hidden bg-[url('../assets/banner_2.jpg')] bg-no-repeat bg-cover">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div class="mx-auto max-w-md px-4 pb-16 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div class="lg:pt-20">
                  <!-- <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-amber-500 to-orange-600 rounded-full">Read Fatwas</span>
                    <span class="ml-4 text-sm">Visit our fatwa page</span>
                    <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a> -->
                  <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400 sm:pb-5">Welcome to Itqan Institute</span>
                  </h1>
                  <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                    Excellence and Proficiency in the Sacred Sciences
                  </p>
                  <div class="mt-10 sm:mt-12">
                    <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div class="sm:flex">
                        <div class="min-w-0 flex-1">
                          <label for="email" class="sr-only">Search Fatwas</label>
                          <input id="email" type="email" placeholder="Search Fatwas" class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                          <button type="submit" class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Search Fatwas</button>
                        </div>
                      </div>
                      <!-- <p class="mt-3 text-sm text-gray-300 sm:mt-4">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms of service</a>.</p> -->
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                  <!-- <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="../assets/banner.png" alt="" /> -->
                  <!-- Slider Section -->
                  <home-slider />
                    <!-- Slider Section End -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Blog section -->
        <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-16 mt-0 md:mt-48 lg:mt-0">
          <div class="relative">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Latest Fatwas
              </p>
            </div>
            <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              <div v-for="post in blogPosts" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-amber-600">
                      <a :href="post.category.href" class="hover:underline">
                        {{ post.category.name }}
                      </a>
                    </p>
                    <a :href="post.href" class="block mt-2">
                      <p class="text-xl font-semibold text-gray-900">
                       <a :href="post.author.href"> {{ post.title }} </a>:href  post.author.href      </p>
                      <p class="mt-3 text-base text-gray-500">
                        {{ post.preview }}
                      </p>
                    </a>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a :href="post.author.href">
                        <!-- <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" :alt="post.author.name" />
                         -->
                          <svg class="h-10 w-10 rounded-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a :href="post.author.href" class="hover:underline">
                          {{ post.author.name }}
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time :datetime="post.datetime">
                          {{ post.date }}
                        </time>
                        <span aria-hidden="true">
                          &middot;
                        </span>
                        <!-- <span> {{ post.readingLength }} read </span> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature section with grid -->
        <div class="relative bg-white py-16 sm:py-24 lg:py-16">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Fatwa Categories
            </p>
            <div class="mt-12">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="feature in features" :key="feature.name" class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-md shadow-lg">
                          <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ feature.name }}</h3>
                      <p class="mt-5 text-base text-gray-500">
                        {{ feature.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonial section -->
        <div class="pb-16 bg-gradient-to-r from-amber-400 to-orange-400 lg:pb-0 lg:z-10 lg:relative">
          <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="relative lg:-my-8">
              <div aria-hidden="true" class="absolute inset-x-0 top-0 lg:h-1/2 bg-white lg:hidden" />
              <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img class="object-cover lg:h-full lg:w-full" src="../assets/Book.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg class="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p class="mt-6 text-2xl font-medium text-white">
                      ‘Itqan’ means to do something excellently, proficiently and in the best way. Our vision at Itqan Institute is to contribute to a revival of the Islamic sacred sciences in a way that is authentic and grounded, with professionalism and good organisation
                    </p>
                  </div>
                  <footer class="mt-6">
                    <p class="text-base font-medium text-white">ITQAN INSTITUTE</p>
                    <!-- <p class="text-base font-medium text-cyan-100">CEO at PureInsights</p> -->
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        
        <!-- Feature section with screenshot -->
        <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
             
              <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                OUR ONLINE COURSES
              </p>
              <p class="mt-8 max-w-prose mx-auto text-xl text-gray-500 sm:w-1/4 w-full">
                <button type="submit" class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">View Courses</button>
              </p>
            </div>
            
          </div>
        </div>
        <!-- CTA Section -->
        <div class="relative bg-gray-900">
          <div class="relative h-56 bg-amber-400 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img class="w-full h-full object-cover" src="../assets/section1.jpg" alt="" />
            <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 mix-blend-multiply" />
          </div>
          <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div class="md:ml-auto md:w-1/2 md:pl-10">
              <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                Award winning support
              </h2>
              <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                We’re here to help
              </p>
              <p class="mt-3 text-lg text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
              </p>
              <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                  <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Donate Now
                    <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
   
</template>

<script>

import {
   CurrencyDollarIcon ,
  SpeakerphoneIcon,
  MoonIcon,
  MenuIcon,
  BookOpenIcon,
  GlobeAltIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/vue/solid'
import HomeSlider from "@/components/HomeSlider.vue"


const features = [
  {
    name: 'ZAKAAH (ALMS)',
    description: '(123)',
    icon:  CurrencyDollarIcon ,
  },
  {
    name: 'SAWM & RAMADHAN (FASTING)',
    description: '(300)',
    icon: MoonIcon,
  },
  {
    name: 'AQAAID (BILIEFS)',
    description: '(340)',
    icon: BookOpenIcon,
  },
  {
    name: 'NIKAH & TALAQ (MARRIAGE & DIVORCE)',
    description: '(560)',
    icon: UserGroupIcon,
  },
  {
    name: 'SALAAH (PRAYER)',
    description: '700',
    icon: SpeakerphoneIcon,
  },
  {
    name: 'HAJJ/UMRAH (PILGRIMAGE)',
    description: '290',
    icon: GlobeAltIcon,
  },
]
const blogPosts = [
  {
    id: 1,
    title: 'Should we add Arabic on the headstone of our grandfather’s grave?',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      require('../assets/Fatwas/Fatwa-Images_Should-we-add-Arabi.jpg'),
    preview:
      'In the Name of Allah, the Most Gracious, the Most Merciful. As-salāmu‘alaykumwa-rahmatullāhiwa-barakātuh...',
    author: {
      name: 'Muadh Chati',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: 'http://itqaninstitute.org/wp-content/uploads/2022/05/2.pdf',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'Is a person who died through cancer a Shahῑd?',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      require('../assets/Fatwas/Fatwa-Images_Is-a-person-who-died-through-cancer-a-Shahῑd.jpg'),
    preview:
      'A person who passes away due to a cancer of any part of the body will, insha’Allah, be considered a Shahῑd.',
    author: {
      name: 'Muadh Chati',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: 'http://itqaninstitute.org/wp-content/uploads/2022/05/3.pdf',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Medical student examining female patients',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      require('../assets/Fatwas/Fatwa-Images_Medical-student-examining-female-patients.jpg'),
    preview:
      'We commend you for your desire to follow the path of Taqwa.',
    author: {
      name: 'Muadh Chati',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: 'http://itqaninstitute.org/wp-content/uploads/2022/05/4.pdf',
    },
    readingLength: '11 min',
  },
]


export default {
  components: {
    ChevronRightIcon,
    ExternalLinkIcon,
    MenuIcon,
    XIcon,
    HomeSlider
  },
  setup() {
    return {
      features,
      blogPosts,
    }
  },
}
</script>