import { InjectionKey } from 'vue'
import { createStore, useStore as baseUserStore, Store } from 'vuex'

import { Data } from '@/types/Data'

interface State {
  products: Data[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: [
      { name: 'Banana skin', price: 20 },
      { name: 'Banana head', price: 10 },
      { name: 'Banana feet', price: 200 },
      { name: 'Banana meat', price: 2 }
    ]
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => product.price -= payload)
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  },
  modules: {
  },
  getters: {
    saleProducts: state => {
      const saleProds = state.products.map(product => {
          return {
              name: '**' + product.name + '**',
              price: product.price / 2
          }
      })
      return saleProds
    }
  }
})

export const useStore = () => {
  return baseUserStore(key)
}