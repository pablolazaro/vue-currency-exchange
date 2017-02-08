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

      </div>
      <div class="column">
        <currency-rates-list
          :rates="rates"
          :isLoading="isLoading"
          :base="baseCurrency"
          @sortBy="orderRates"
          @setBase="getRates">
        </currency-rates-list>
      </div>
    </div>
  </div>
</template>

<script>
  import CurrencyRatesList from './components/CurrencyRatesList'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      CurrencyRatesList
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
      baseCurrency: 'getBaseCurrency'
    })
  }
</script>
