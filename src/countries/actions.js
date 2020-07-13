export const CREATE_COUNTRY = 'CREATE_COUNTRY'
export const createCountry = countryCode => ({
  type: CREATE_COUNTRY,
  payload: { countryCode },
})

export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const removeCountry = countryCode => ({
  type: REMOVE_COUNTRY,
  payload: { countryCode },
})

export const REMOVE_GLOBAL = 'REMOVE_GLOBAL'
export const removeGlobal = payload => ({
  type: REMOVE_GLOBAL,
  payload,
})

export const PIN_COUNTRY = 'PIN_COUNTRY'
export const pinCountry = countryCode => ({
  type: PIN_COUNTRY,
  payload: { countryCode },
})

export const PIN_GLOBAL = 'PIN_GLOBAL'
export const pinGlobal = payload => ({
  type: PIN_GLOBAL,
  payload,
})

export const UNPIN_COUNTRY = 'UNPIN_COUNTRY'
export const unpinCountry = countryCode => ({
  type: UNPIN_COUNTRY,
  payload: { countryCode },
})

export const UNPIN_GLOBAL = 'UNPIN_GLOBAL'
export const unpinGlobal = payload => ({
  type: UNPIN_GLOBAL,
  payload,
})

export const LOAD_COUNTRY_IN_PROGRESS = 'LOAD_COUNTRY_IN_PROGRESS'
export const loadCountryInProgress = () => ({
  type: LOAD_COUNTRY_IN_PROGRESS,
})

export const LOAD_COUNTRY_SUCCESS = 'LOAD_COUNTRY_SUCCESS'
export const loadCountrySuccess = country => {
   return { type: LOAD_COUNTRY_SUCCESS,
    payload: { country },}
  }

export const LOAD_COUNTRY_FAILURE = 'LOAD_COUNTRY_FAILURE'
export const loadCountryFailure = () => ({
  type: LOAD_COUNTRY_FAILURE,
})

export const LOAD_GLOBAL_IN_PROGRESS = 'LOAD_GLOBAL_IN_PROGRESS'
export const loadGlobalInProgress = () => ({
  type: LOAD_GLOBAL_IN_PROGRESS,
})

export const LOAD_GLOBAL_SUCCESS = 'LOAD_GLOBAL_SUCCESS'
export const loadGlobalSuccess = payload => {
  return {
    type: LOAD_GLOBAL_SUCCESS,
    payload,
  }
}

export const LOAD_GLOBAL_FAILURE = 'LOAD_GLOBAL_FAILURE'
export const loadGlobalFailure = () => ({
  type: LOAD_GLOBAL_FAILURE,
})

export const LOAD_COUNTRY_CODES = 'LOAD_COUNTRY_CODES'
export const loadCountryCodes = payload => {
  console.log('loadCountryCodes payload', payload)
  return {
    type: LOAD_COUNTRY_CODES,
    payload,
  }
}