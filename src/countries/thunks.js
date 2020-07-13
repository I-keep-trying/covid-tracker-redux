import axios from 'axios'
import {
  loadCountryInProgress,
  loadGlobalInProgress,
  loadCountrySuccess,
  loadGlobalSuccess,
  loadCountryFailure,
  loadGlobalFailure,
} from './actions'

export const showAlert = text => () => {
  alert(text)
}

export const loadCountry = countryCode => async dispatch => {
  try {
    dispatch(loadCountryInProgress())
    //const response = await axios.get(`https://api.thevirustracker.com/free-api?countryTotal=${countryCode}`)
    const response = await axios.get(
      `https://disease.sh/v3/covid-19/countries/${countryCode}`
    )
    const country = response.data
  //  console.log('country res', country)

    // await new Promise(resolve => setTimeout(resolve, 3000));

    dispatch(loadCountrySuccess(country))
  } catch (e) {
    dispatch(loadCountryFailure())
    dispatch(showAlert('thunk alert', e))
  }
}

export const loadGlobal = () => async (dispatch, getState) => {
  try {
    dispatch(loadGlobalInProgress())
    const response = await axios.get(`https://disease.sh/v3/covid-19/all`)
    const globalStats = response.data

    // await new Promise(resolve => setTimeout(resolve, 3000));

    dispatch(loadGlobalSuccess(globalStats))
  } catch (e) {
    dispatch(loadGlobalFailure())
    dispatch(showAlert(e))
  }
}
