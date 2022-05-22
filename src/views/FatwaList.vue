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
            <li v-for="person in fatwas" :key="person.name" class="sm:py-8">
              <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt="" />
                </div>
                <div class="sm:col-span-2">
                  <div class="space-y-4">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3><router-link to="/single-fatwa">{{ person.name }}</router-link></h3>
                      <p class="text-indigo-600">{{ person.role }}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500">{{ person.bio }}</p>
                    </div>
                    <ul role="list" class="flex space-x-5">
                      <li>
                        <router-link class="text-base text-amber-500" to="/single-fatwa">Read More</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <fatwa-pagination />
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
import FatwaPagination from "@/components/FatwaPagination.vue"
import BaseHeader from "@/components/BaseHeader.vue"
const fatwas = [
  {
    name: 'Assalamualaikum,I would really like your help. Can you please tell me if Erythritol is halal?...',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Is-Erythritol-halal.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. Erythritol is a sugar alcohol produced in the industry through the fermentation of glucose that is derived from starch. The starch is extracted from corn/maize....',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/1.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'Should we add Arabic on the headstone of our grandfather’s grave?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Should-we-add-Arabi.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. It is detestable (makruh) to add anything on a headstone other than what is required to recognise the grave, such as the name of the deceased and the date of death...',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/2.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'Is a person who died through cancer a Shahῑd?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Is-a-person-who-died-through-cancer-a-Shahῑd.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. A person who passes away due to a cancer of any part of the body will, insha’Allah, be considered a Shahῑd...',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/3.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'Medical student examining female patients',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Medical-student-examining-female-patients.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. We commend you for your desire to follow the path of Taqwa. Shari’ah has not permitted the viewing of the body of the opposite gender for a non-mahram man.1 Allah Ta’ala says:...',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/4.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'Completely removing the moustache',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_moustache-with-a-jack-razo.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. It is permissible to use the jack razor1 to shave off the moustache completely.2...',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/5.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'What is the ruling on purchasing items on an Auction Website that sells products that have been confiscated by Police Officers...',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_purchasing-items-on-an-Auction-Website.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. The query in reference is governed by the concept of Isteela’ – legal authority like in the case of a Government...',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/6.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'Is it permissible to take medicine even when we known that it contains haram ingredients.If not permissible what would be the alternative?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_medicine-even-when-we-known-that-it-contains-haram-ingredient.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. The Prophet Ṣallallāhu ‘Alayhi Wasallam said: إِنَّ اللهَ لَمْ يَجْعَلْ شِفَاءَكُمْ فِيْ حَرَامٍ ..',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/7.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'I found 20 Rands, what should I do with it?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_I-found-20-Rands.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. Your attitude of seeking guidance on the issue in reference is an indication that you are on the straight path (Ṣirātul Mustaqῑm)...',
    pdfUrl:'http://itqaninstitute.org/wp-content/uploads/2022/05/8.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'Seeking blessings through the relics of the Prophet Sallallahu Alayhi Wasallam',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Seeking-blessings-through-the-relics.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. Different countries have different approaches to the relics of Rasulullah Ṣallallāhu ‘Alayhi Wasallam and the Sahabah...',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/9.pdf',
    linkedinUrl: '#',
  },
  {
    name: 'Designer Babies/Mitochondrial Replacement – Is it permissible?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. You refer to two concepts in your query, ‘Designer Babies’ and ‘Mitochondrial Replacement’. Both are relatively new concepts1, thus requiring a proper understanding of the concepts before presenting the Islamic perspective on them...',
    pdfUrl: 'http://itqaninstitute.org/wp-content/uploads/2022/05/10.pdf',
    linkedinUrl: '#',
  },

]
export default {
 
  setup() {
      
    return {
      fatwas
    }
  },
  created(){
      console.log(this.$route.name);
  },
  components : {
    SidebarContent,
    FatwaPagination,
    BaseHeader
}
}
</script>