export const GET_RATES = 'GET_RATES_ACTION'
export const ORDER_RATES = 'ORDER_RATES_ACTION'
import RatesService from '../services/rates.service'
import * as mutationTypes from './mutations-types'

export default {
  [ GET_RATES ] ({ commit }, base) {
    commit(mutationTypes.SET_LOADING)
    RatesService.getRates(base)
      .then(rates => commit(mutationTypes.SET_RATES, { rates, base }))
      .catch(error => commit(mutationTypes.SET_REQUEST_ERROR, error))
  },
  [ ORDER_RATES ] ({ state, commit }, { property, dir }) {
    let isAsc = dir === 'asc'
    if (property === 'currencyCode') {
      commit(
        mutationTypes.SET_RATES,
        { rates: [].concat(...state.rates).sort((a, b) =>
          isAsc ? a.currencyCode.localeCompare(b.currencyCode) : b.currencyCode.localeCompare(a.currencyCode))}
      )
    } else {
      commit(
        mutationTypes.SET_RATES,
        { rates: [].concat(...state.rates).sort((a, b) =>
          isAsc ? b[property] - a[property] : a[property] - b[property])}
      )
    }
  }
}
