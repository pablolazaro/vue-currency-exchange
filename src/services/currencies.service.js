import currencies from './data/currencies'

function getCurrency (code) {
  return currencies.filter(currency => currency.code === code)[0]
}

function getCurrencies () {
  return currencies
}

export default {
  getCurrencies,
  getCurrency
}
