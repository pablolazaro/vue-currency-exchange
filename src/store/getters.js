export default {
  getBaseCurrency: (state) => state.baseCurrency,
  getRates: (state) => state.rates,
  hasError: (state) => state.hasError,
  isLoading: (state) => state.isLoading
}
