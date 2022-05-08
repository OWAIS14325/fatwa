<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <base-header />
      <router-view />
      <base-footer />
    </div>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
export default {
  components : {
    BaseHeader,
    BaseFooter
  }
}
</script>
