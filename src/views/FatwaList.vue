<template>
    <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
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
                      <h3>{{ person.name }}</h3>
                      <p class="text-indigo-600">{{ person.role }}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500">{{ person.bio }}</p>
                    </div>
                    <ul role="list" class="flex space-x-5">
                      <li>
                        <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Twitter</span>
                          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">LinkedIn</span>
                          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          </section>
        </main>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block p-5">
          <!-- Your content -->
          <div class="pb-3 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Popular Fatwas
            </h3>
          </div>

           <ul role="list" class="divide-y divide-gray-200">
            <li v-for="person in people" :key="person.email" class="py-4 flex">
              <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
                <p class="text-sm text-gray-500">{{ person.email }}</p>
              </div>
            </li>
          </ul>

          <button type="submit" class="block w-full mt-5 py-3 px-4 rounded-md shadow bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">ASK A FATWA</button>

        </aside>
      </div>
</template>
<script>
const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const fatwas = [
  {
    name: 'Assalamualaikum,I would really like your help. Can you please tell me if Erythritol is halal?...',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Is-Erythritol-halal.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. Erythritol is a sugar alcohol produced in the industry through the fermentation of glucose that is derived from starch. The starch is extracted from corn/maize....',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Should we add Arabic on the headstone of our grandfather’s grave?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Should-we-add-Arabi.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. It is detestable (makruh) to add anything on a headstone other than what is required to recognise the grave, such as the name of the deceased and the date of death...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Is a person who died through cancer a Shahῑd?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Is-a-person-who-died-through-cancer-a-Shahῑd.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. A person who passes away due to a cancer of any part of the body will, insha’Allah, be considered a Shahῑd...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Medical student examining female patients',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Medical-student-examining-female-patients.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. We commend you for your desire to follow the path of Taqwa. Shari’ah has not permitted the viewing of the body of the opposite gender for a non-mahram man.1 Allah Ta’ala says:...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Completely removing the moustache',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_moustache-with-a-jack-razo.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. It is permissible to use the jack razor1 to shave off the moustache completely.2...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'What is the ruling on purchasing items on an Auction Website that sells products that have been confiscated by Police Officers...',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_purchasing-items-on-an-Auction-Website.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. The query in reference is governed by the concept of Isteela’ – legal authority like in the case of a Government...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Is it permissible to take medicine even when we known that it contains haram ingredients.If not permissible what would be the alternative?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_medicine-even-when-we-known-that-it-contains-haram-ingredient.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. The Prophet Ṣallallāhu ‘Alayhi Wasallam said: إِنَّ اللهَ لَمْ يَجْعَلْ شِفَاءَكُمْ فِيْ حَرَامٍ ..',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'I found 20 Rands, what should I do with it?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_I-found-20-Rands.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. Your attitude of seeking guidance on the issue in reference is an indication that you are on the straight path (Ṣirātul Mustaqῑm)...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Seeking blessings through the relics of the Prophet Sallallahu Alayhi Wasallam',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Seeking-blessings-through-the-relics.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. Different countries have different approaches to the relics of Rasulullah Ṣallallāhu ‘Alayhi Wasallam and the Sahabah...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Designer Babies/Mitochondrial Replacement – Is it permissible?',
    role: 'Mu’ādh Chati',
    imageUrl:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
    bio:
      'In the Name of Allah, the Most Gracious, the Most Merciful. You refer to two concepts in your query, ‘Designer Babies’ and ‘Mitochondrial Replacement’. Both are relatively new concepts1, thus requiring a proper understanding of the concepts before presenting the Islamic perspective on them...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  // More people...
]
export default {
 
  setup() {
    return {
      people,
      fatwas
    }
  },
}
</script>