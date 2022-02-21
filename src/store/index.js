import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: ()=>{
    let _data = [
      {
        "id": 1,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 132.00,
      },
      {
        "id": 2,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 12.00,
      },
      {
        "id": 3,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 157.00,
      },
      {
        "id": 4,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 100.00,
      },
      {
        "id": 5,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 11.00,
      },
      {
        "id": 6,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 32.00,
      },
      {
        "id": 7,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 39.00,
      },
      {
        "id": 8,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 124.00,
      },
      {
        "id": 9,
        "title": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 19.00,
      }
    ];
    let _map = {}
    for(let product of _data){
      _map[product.id] = product
    }
    return {
      products: _data,
      infoMap:_map,
      cart: {}
    }

  },
  mutations: {
    addToCart(state, payload){
      let newElem = {}
      if(state.cart.hasOwnProperty(payload.productId)) {
        newElem = Object.assign({}, state.cart[payload.productId])
        newElem.count++
      }
      else {
        newElem = Object.assign({}, state.infoMap[payload.productId],{count:1})
        delete newElem.id;
      }
      state.cart = {...state.cart,[payload.productId]:newElem}
    },
    removeFromCart(state,payload){
      let _cart = {}
      for(let key of Object.keys( state.cart))
        if(key!=payload.productId)_cart[key] = state.cart[key]
      state.cart = _cart;
    }
  },
  actions: {
  },
  modules: {
  }
})
