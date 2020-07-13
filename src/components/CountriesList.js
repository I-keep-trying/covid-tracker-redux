import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

import CountryDetail from './CountryDetail'
import Global from './Global'
import { loadGlobal } from '../countries/thunks'
import {
  removeCountry,
  pinCountry,
  unpinCountry,
} from '../countries/actions'

const CountriesListWrapper = styled.div`
  margin-bottom: 2rem;
`

const Loader = styled.div`
  margin: 15px 0;
  text-align: center;
`

const CountriesList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGlobal())
  }, [dispatch])


  const countries = useSelector(state => state.countries)

  const pinnedCountries = countries.filter(country => country.isPinned)

  const notPinnedCountries = countries.filter(country => !country.isPinned)
  const isLoading = useSelector(state => state.isLoading)

  const onRemovePressed = countryCode => dispatch(removeCountry(countryCode))
  const onPin = countryCode => dispatch(pinCountry(countryCode))
  const onUnpin = countryCode => dispatch(unpinCountry(countryCode))

  const globalData = useSelector(state => state.global)

  const loadingMessage = <Loader>Loading Country...</Loader>
  const content = (
    <CountriesListWrapper>

      <Global  data={globalData} />
      {pinnedCountries.map((country, index) => {
        return (
          <CountryDetail
            key={index}
            country={country}
            onRemovePressed={onRemovePressed}
            onPin={onPin}
            onUnpin={onUnpin}
          />
        )
      })}
      {notPinnedCountries.map((country, index) => {
        return (
          <CountryDetail
            key={index}
            country={country}
            onRemovePressed={onRemovePressed}
            onPin={onPin}
            onUnpin={onUnpin}
          />
        )
      })}
    </CountriesListWrapper>
  )
  return isLoading ? loadingMessage : content
}

export default CountriesList
