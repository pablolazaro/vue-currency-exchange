import CountriesService from './countries.service'
import CurrenciesService from './currencies.service'

export default {
  getRates
}

const url = 'http://api.fixer.io'

function getRates (base) {
  return new Promise((resolve, reject) => {
    fetch(!base ? `${url}/latest` : `${url}/latest?base=${base}`)
      .then(response => {
        response.json().then(data => {
          let ratesData = data.rates
          let rates = Object.keys(ratesData).reduce((rates, key) => rates.concat({currency: key, rate: ratesData[key]}), [])
          resolve(rates.map(rate => {
            return {
              countryCode: CountriesService.getCountryByCurrency(rate.currency).alpha2,
              currencyCode: rate.currency,
              currencyName: CurrenciesService.getCurrency(rate.currency).name,
              rate: rate.rate
            }
          }))
        })
      })
      .catch(reject)
  })
}
