import {
  REMOVE_COUNTRY,
  PIN_COUNTRY,
  UNPIN_COUNTRY,
  LOAD_COUNTRY_IN_PROGRESS,
  LOAD_COUNTRY_SUCCESS,
  LOAD_COUNTRY_FAILURE,
  LOAD_GLOBAL_IN_PROGRESS,
  LOAD_GLOBAL_SUCCESS,
  LOAD_GLOBAL_FAILURE,
  LOAD_COUNTRY_CODES,
} from './actions'
import codes from '../countriesWithCodes'

export const isLoading = (state = true, action) => {
  const { type } = action

  switch (type) {
    case LOAD_COUNTRY_IN_PROGRESS:
    case LOAD_GLOBAL_IN_PROGRESS:
      return true
    case LOAD_GLOBAL_SUCCESS:
    case LOAD_GLOBAL_FAILURE:
    case LOAD_COUNTRY_SUCCESS:
    case LOAD_COUNTRY_FAILURE:
      return false
    default:
      return state
  }
}

export const countries = (state = [], { type, payload }) => {
  //console.log('countries payload', payload)
  switch (type) {
    case REMOVE_COUNTRY: {
      return state.filter(
        country => country.countryInfo.iso2 !== payload.countryCode
      )
    }
    case PIN_COUNTRY: {
      const { countryCode } = payload
      return state.map(country => {
        if (country.countryInfo.iso2 === countryCode) {
          return { ...country, isPinned: true }
        }
        return country
      })
    }

    case UNPIN_COUNTRY: {
      const { countryCode } = payload
      return state.map(country => {
        if (country.countryInfo.iso2 === countryCode) {
          return { ...country, isPinned: false }
        }
        return country
      })
    }

    case LOAD_COUNTRY_SUCCESS: {
      const country = payload.country
      const newCountry = { ...country, isPinned: false }
      return [...state, newCountry]
      /*  if (
        payload.countries.results &&
        payload.countries.results[0].data === 'none'
      ) {
        alert('Invalid Country Code!')
        return state
      }
      const apiCountry = payload.countries.countrydata[0]
      const newCountry = { ...country, isPinned: false }
      return [...state, newCountry] */
    }
    case LOAD_COUNTRY_IN_PROGRESS:
    case LOAD_COUNTRY_FAILURE:
    default: {
      return state
    }
  }
}

export const global = (state = [], { type, payload }) => {
  // console.log('global payload', payload)
  switch (type) {
    case LOAD_GLOBAL_SUCCESS: {
      const globalData = payload
      return globalData
    }
    case LOAD_GLOBAL_IN_PROGRESS:
    case LOAD_GLOBAL_FAILURE:
    default: {
      return state
    }
  }
}

export const isoCodes = (state = codes, { type, payload }) => {
  switch (type) {
    case LOAD_COUNTRY_CODES: {
      console.log('isoCodes reducer payload', payload)
      const codes = payload
      return codes
    }
    default: {
      return state
    }
  }
}
