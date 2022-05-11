<template>
    <!-- Main content -->
      <div class="flex-1 flex items-stretch">
        <main class="flex-1 overflow-y-auto">
          <!-- Primary column -->
          <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col lg:order-last">
            <h1 id="primary-heading" class="sr-only">Photos</h1>
            <!-- Your content -->
             <div class="relative py-16 bg-white">
              <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                  <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                      <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                  </svg>
                  <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                      <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                  </svg>
                  <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                      <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                  </svg>
                </div>
              </div>
              <div class="relative px-4 sm:px-6 lg:px-8">
                <div class="text-lg  mx-auto">
                  <h1>
                    <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Question</span>
                    <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Assalamualaikum, I would really like your help. Can you please tell me if Erythritol is halal? Its some sort of sugar alcohol derived from plants according to my research. JazakAllah for your time and efforts, may Allah bless you.</span>
                  </h1>
                  <p class="mt-8 text-xl text-gray-500 leading-8">In the Name of <strong>Allah</strong>, the Most Gracious, the Most Merciful.</p>
                </div>
                <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                  <p>As-salāmu ‘alaykum wa-rahmatullāhi wa-barakātuh.</p>
                </div>
                <object data="http://itqaninstitute.org/wp-content/uploads/2022/05/Fatwa1.pdf" width="100%" height="800px" ></object>
              </div>
             </div>
          </section>
        </main>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden w-96 bg-white border-l border-gray-200 lg:block p-5 h-screen sticky top-0">
          <!-- Your content -->
          <sidebar-content />
        </aside>
      </div>
</template>
<script>
import SidebarContent from '@/components/SidebarContent.vue'


export default {
  components: { SidebarContent },
 
  setup() {
    return {
    }
  },
}
</script>