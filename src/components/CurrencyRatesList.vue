<template>
  <div>
     <div class="ui inverted dimmer" :class="{'active': isLoading}">
        <div class="ui text loader">Loading</div>
      </div>
    <table class="ui sortable disabled selectable teal table">
      <thead>
        <tr>
          <th @click="sortByCurrency" class="four wide">Currency</th>
          <th @click="sortByRate" class="four wide">Rate</th>
        </tr>
      </thead>
      <transition-group name="rates-list" tag="tbody">
        <tr v-for="item in rates" :key="item.currencyCode" @click="changeBase(item.currencyCode)">
          <td>
            <h4 class="ui image header">
              <span :class="getFlagClass(item)" class="flag-icon"></span>
              <div class="content">
                {{ item.currencyCode }}
                <div class="sub header">
                  {{ item.currencyName }}
                </div>
            </div>
          </h4></td>
          <td :style="{ 'color': item.rate >= 1 ? 'green' : 'red' }">
            {{ item.rate }}
          </td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'currency-rates-list',
    props: ['rates', 'isLoading'],
    methods: {
      getFlagClass: function (currency) {
        return `flag-icon-${currency.countryCode.toLowerCase()}`
      },
      sortByCurrency: function () {
        this.$emit('sortBy', { property: 'currencyCode', dir: this.sortByCurrencyOrder })
        this.sortByCurrencyOrder = this.sortByCurrencyOrder === 'asc' ? 'desc' : 'asc'
        this.sortByRateOrder = 'asc'
      },
      sortByRate: function () {
        this.$emit('sortBy', { property: 'rate', dir: this.sortByRateOrder })
        this.sortByRateOrder = this.sortByRateOrder === 'asc' ? 'desc' : 'asc'
        this.sortByCurrencyOrder = 'asc'
      },
      changeBase: function (base) {
        this.$emit('changeBase', base)
      }
    },
    data: function () {
      return {
        sortByCurrencyOrder: 'desc',
        sortByRateOrder: 'asc'
      }
    }
  }
</script>

<style scoped>
  .flag-icon {
    font-size: 3em;
  }
  .rates-list-move {
    transition: transform 1s;
  }

  tr:hover {
    cursor: pointer;
  }
</style>
