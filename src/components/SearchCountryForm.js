import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loadCountry } from '../countries/thunks'
//import countryCodes from '../countriesWithCodes.json'

const div = styled.div`
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 0px 2px white;
  background: #212121;
`

const SearchCountryInput = styled.input`
  font-size: 1rem;
  padding: 8px;
  border: none;
  width: 70%;
  outline: none;
`

const SearchCountryButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 0.5rem;
  width: 20%;
  background-color: #73b2ff;
  text-transform: uppercase;
`

const SearchCountryForm = () => {
  const [inputCountryCode, setInputCountryCode] = useState('')
  const [showText, setShowText] = useState(false)
  const dispatch = useDispatch()

  const state = useSelector(state => state)
 // console.log('countryCodes', countryCodes)
  console.log('state', state.isoCodes)
  const codes = useSelector(state => state.isoCodes)
  const countries = useSelector(state => state.countries)
  const onSubmitPressed = countryCode => dispatch(loadCountry(countryCode))

  const options = Object.keys(codes.object).map((key, i) => (
    <option key={i} value={key}>
      {codes.object[key]}
    </option>
  ))
  options.splice(0, 0,
    <option key='INITIAL' value=''>
      Please, select a country
    </option>
  )

  return (
    <div>
      {/*       <SearchCountryInput
        onChange={e => setInputCountryCode(e.target.value)}
        value={inputCountryCode}
        placeholder="Type country code and submit to start tracking!"
      /> */}
      <div onClick={() => setShowText(!showText)}>
        <button>{showText ? 'Hide List' : 'Display List of Countries'}</button>
      </div>
      {showText &&
        Object.keys(codes.object).map((key, i) => (
          <p key={i}>
            <span>{key}</span>
            <br />
            <span>{codes.object[key]}</span>
          </p>
        ))}

      <br />
      <select value={inputCountryCode} onChange={e => setInputCountryCode(e.currentTarget.value)}>
        {options}
      </select>
      <SearchCountryButton
        onClick={() => {
          const isDuplicateCountry = countries.some(
            country => country.countryInfo.iso2 === inputCountryCode
          )
          if (!isDuplicateCountry && inputCountryCode) {
            onSubmitPressed(inputCountryCode)
            setInputCountryCode('')
          }
        }}
        className="search-country-button"
      >
        Submit
      </SearchCountryButton>
      <br />
    </div>
  )
}

export default SearchCountryForm
