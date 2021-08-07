<template>
    <div id="product-list-one">
        <h2>Product list one</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product.name">
                {{ product.name }} - {{ product.price }}
            </li>
        </ul>
    </div>
    <button @click="reducePrice(4)">Reduce price</button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

import { useStore } from '@/store/store'

export default defineComponent({
    setup() {
        const store = useStore()

        const products = computed(() => {
            return store.state.products    
        })
        // const saleProducts = computed(() => {
        //     return store.getters.saleProducts
        // })
        // const reducePrice = (delta: number) => {
        //     // console.log('reduce price')
        //     // store.commit('reducePrice')
        //     store.dispatch('reducePrice', delta)
        // }

        return { products/*, saleProducts, reducePrice*/ }        
    },
    computed: {
        ...mapGetters([
            'saleProducts'
        ])
    },
    methods: {
        ...mapActions([
            'reducePrice'
        ])
    }
})
</script>
