<template>
  <div id="app">
    <div class="ui text menu">
      <div class="item">
        <i class="money huge icon teal"></i>
      </div>
      <a class="browse item">
        <h2>Currency Exchange</h2>
      </a>
    </div>
    <div class="ui stackable two column grid">
      <div class="column">
        <currency-converter
          :base="baseCurrency"
          :currencies="rates"
          @changeBase="getRates">
        </currency-converter>
      </div>
      <div class="column">
        <div v-if="hasError" class="ui error message">
          An error ocurred during request. Please, try again later
        </div>
        <div v-else class="ui info message">
          Rates calculated against <b>{{ baseCurrency }}</b> currency
        </div>

        <currency-rates-list
          :rates="rates"
          :isLoading="isLoading"
          @sortBy="orderRates"
          @changeBase="getRates">
        </currency-rates-list>
      </div>
    </div>
  </div>
</template>

<script>
  import CurrencyRatesList from './components/CurrencyRatesList'
  import CurrencyConverter from './components/CurrencyConverter'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      CurrencyRatesList,
      CurrencyConverter
    },
    methods: mapActions({
      getRates: 'GET_RATES_ACTION',
      orderRates: 'ORDER_RATES_ACTION'
    }),
    created: function () {
      this.$store.dispatch('GET_RATES_ACTION')
    },
    computed: mapGetters({
      rates: 'getRates',
      isLoading: 'isLoading',
      baseCurrency: 'getBaseCurrency',
      hasError: 'hasError'
    })
  }
</script>
