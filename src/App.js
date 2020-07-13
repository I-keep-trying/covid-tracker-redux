import React from 'react'
import styled from 'styled-components'
import CountriesList from './components/CountriesList'
import SearchCountryForm from './components/SearchCountryForm'


const AppWrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`

function App() {

  return (
    <AppWrapper>

      <SearchCountryForm />
      <CountriesList />
    </AppWrapper>
  )
}

export default App
