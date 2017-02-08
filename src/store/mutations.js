import * as types from './mutations-types'

export default {
  [ types.SET_LOADING ] (state) {
    state.isLoading = true
  },
  [ types.SET_RATES ] (state, payload) {
    state.isLoading = false
    state.rates = payload.rates
    state.baseCurrency = payload.base ? payload.base : state.baseCurrency
  }
}
