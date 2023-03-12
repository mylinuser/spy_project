import { defineStore } from 'pinia'

export const useTestStore = defineStore('TEST', {
  state: () => {
    return {
      current: 1,
      name: '111'
    }
  },
  getters: {},
  actions: {}
})
