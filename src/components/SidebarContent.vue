<template>
    <div class="pb-3 border-b border-gray-200">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            Follow Us On Twitter
        </h3>
    </div>
    <div>
      <TwitterWidget />
    </div>
    <div class="pb-3 border-b border-gray-200 mt-5">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            Fatwa Categories
        </h3>
    </div>
    <ul role="list" class="divide-y divide-gray-200">
    <li v-for="category in fatwaCategories" :key="category.email" class="py-4 flex">
        <img class="h-10 w-10 rounded-full" :src="category.image" alt="" />
        <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ category.name }}</p>
        <p class="text-sm text-gray-500">{{ category.email }}</p>
        </div>
    </li>
    </ul>
    <button type="submit" class="block w-full mt-5 py-3 px-4 rounded-md shadow bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">ASK A FATWA</button>
</template>
<script>
import TwitterWidget from './TwitterWidget.vue'
const fatwaCategories = [
  {
    name: 'ZAKAAH (ALMS) - (300)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'SAWM & RAMADHAAN (FASTING)› - (200)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Should-we-add-Arabi.jpg'),
  },
  {
    name: "AQAA'ID (BELIEFS)› - (100)",
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Seeking-blessings-through-the-relics.jpg'),
  },
  {
    name: 'SALAAH (PRAYER)› - (400)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'HAJJ/ UMRAH (PILGRIMAGE) - (500)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_moustache-with-a-jack-razo.jpg'),
  },
  {
    name: 'NIKAH & TALAQ (MARRIAGE & DIVORCE) - (240)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Medical-student-examining-female-patients.jpg'),
  },
  {
    name: "BUYOO' (MONEY-RELATED ISSUES) - (350)",
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'AADAAB (ETTIQUETTES & MANNERS) - (330)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'HALAAL & HARAAM - (220)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'WAQF & CHARITY - (120)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: "TAHAARAH (CLEANLINESS) - (180)",
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'OATHS & VOWS - (160)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'CUSTOMS - (270)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: "QUR'AN & HADEETH› - (670)",
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: "DAILY MATTERS - (380)",
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'SOCIAL CONDUCT - (100)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: 'DEATH (FUNERAL) - (330)',
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
  {
    name: "INHERITANCE & WILL - (305)",
    email: 'calvin.hawkins@example.com',
    image:
      require('@/assets/Fatwas/Fatwa-Images_Designer-BabiesMitochondrial-Replacement.jpg'),
  },
]

export default {
    setup() {
        return {
            fatwaCategories
        };
    },
    components: { TwitterWidget }
}
</script>