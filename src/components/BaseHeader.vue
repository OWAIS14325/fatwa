<template>
    <Popover as="header" class="relative">
        <div class="bg-gray-900 py-6">
          <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Itqan Institute</span>
                  <img class="h-8 w-auto sm:h-10" src="../assets/Weblogo_white.png" alt="" />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-8 md:flex md:ml-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base font-medium text-white hover:text-gray-300">{{ item.name }}</a>
              </div>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-6">
              <!-- <a href="#" class="text-base font-medium text-white hover:text-gray-300">
                Log in
              </a> -->
              <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-700">
                ASK A FATWA
              </a>
            </div>
          </nav>
        </div>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="../assets/Weblogo.png" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="pt-5 pb-6">
                <div class="px-2 space-y-1">
                  <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">{{ item.name }}</router-link>
                </div>
                <div class="mt-6 px-5">
                  <a href="#" class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700">ASK A FATWA</a>
                </div>
                <!-- <div class="mt-6 px-5">
                  <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a></p>
                </div> -->
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
</template>
<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#' },
  { name: 'Fatwa', href: '#' },
  { name: 'Publications', href: '#' },
  { name: 'Contact Us', href: '#' },
]
export default {
    components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
    setup() {
        return {
            navigation
        }
    },
}
</script>