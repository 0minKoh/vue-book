import { createStore } from 'vuex'

const store = createStore({ //store 생성
  state() { //state: 사용할 변수를 정의
    return {
      count: 0
    }
  },
  getters: { //데이터를 가져오는 메소드 정의
    cartCount: (state) => {
      return state.cart.length
    }
  },
  mutations: { //mutations: 데이터를 처리하는 메소드 정의
    increment (state) {
      state.count++
    }
  },
  actions: { //actions: 데이터를 처리하는 비동기 메소드 정의
    increment (context) {
      context.commit('increment')
    }
  }
})

export default store