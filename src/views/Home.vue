<template>
  <div class="home">
    <ProductListOne/>
    <ProductListTwo/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'

import { Data } from '@/types/Data'

export default defineComponent({
  name: 'Home',
  components: {
    ProductListOne,
    ProductListTwo
  },
  setup() {
    return {};
  }
});
</script>
