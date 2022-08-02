import { createStore } from 'vuex'

function updatedLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product =>{
      const item = state.cart.find(i => i.id === product.id)
      if(item) return item.quality;
      else return null;
    }
  },
  mutations: {
    addToCart(state, product){
      let item = state.cart.find(i => i.id === product.id)

      if(item){
        item.quality++
      }
      else{
        state.cart.push({...product, quality: 1})
      }

      updatedLocalStorage(state.cart)
    }
  },
  actions: {
  },
  modules: {
  }
})
