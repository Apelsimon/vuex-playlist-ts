<template>
    <div id="product-list-two">
        <h2>Product list two</h2>
        <ul>
            <li v-for="product in products" :key="product.name">
                {{ product.name }} - {{ product.price }}
            </li>
        </ul>
    </div>
    
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useStore } from '@/store/store'

export default defineComponent({
    setup() {
        const store = useStore()
        const products = ref(store.state.products)

        return { products }
    },
})
</script>
