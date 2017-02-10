import CountriesService from './countries.service'
import CurrenciesService from './currencies.service'

export default {
  getRates
}

const url = 'http://api.fixer.io'

function getRates (base) {
  return new Promise((resolve, reject) => {
    let xmlHttp = new XMLHttpRequest()

    xmlHttp.open('GET', !base ? `${url}/latest` : `${url}/latest?base=${base}`, true)

    xmlHttp.onload = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        resolve(mergeData(JSON.parse(xmlHttp.responseText).rates))
      } else {
        reject()
      }
    }
    xmlHttp.onerror = reject

    xmlHttp.send()
  })
}

function mergeData (data) {
  return Object.keys(data)
    .reduce((rates, key) => rates.concat({currency: key, rate: data[key]}), [])
    .map(rate => {
      return {
        countryCode: CountriesService.getCountryByCurrency(rate.currency).alpha2,
        currencyCode: rate.currency,
        currencyName: CurrenciesService.getCurrency(rate.currency).name,
        rate: rate.rate
      }
    })
}
