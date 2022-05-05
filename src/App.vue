<template>
  <fatwa-header />
  <router-view/>
</template>

<script>
import FatwaHeader from "@/components/FatwaHeader.vue"
export default {
  components : {
    FatwaHeader
  }
}
</script>
