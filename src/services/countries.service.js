import countries from './data/countries'

function getCountries () {
  return countries
}

function getCountryByCurrency (code) {
  return countries.filter(country => {
    return country.currencies.some(currency => currency === code)
  })[0]
}

export default {
  getCountries,
  getCountryByCurrency
}
