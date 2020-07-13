import React from 'react'
import styled from 'styled-components'

const CountryWrapper = styled.div`
  background: ${props => (props.isPinned ? '#350000' : '#212121')};

  color: white;
  margin-top: 1rem;
  padding: 1rem;
  position: relative;
  box-shadow: 0 0px 2px white;
`

const ButtonsWrapper = styled.div`
  margin-top: 1rem;
`

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

const PinButton = styled(Button)`
  display: inline-block;
  background-color: #73b2ff;
`

const UnpinButton = styled(Button)`
  display: inline-block;
  background-color: #73b2ff;
`

const RemoveButton = styled(Button)`
  display: inline-block;
  background-color: #e60000;
  margin-left: 8px;
  @media screen and (max-width: 767px) {
    background-color: white;
  }
`

const Image = styled.img`
  float: right;
  width: 6rem;
  box-shadow: 0px 0px 14px 2px rgba(255, 255, 255, 0.19);
`

const CountryDetail = ({ country, onRemovePressed, onPin, onUnpin }) => {
  return (
    <CountryWrapper bg={country.countryInfo.flag} isPinned={country.isPinned}>
      <h3>
        {country.country}
        <Image src={country.countryInfo.flag} alt="country flag" />
      </h3>
      <table>
        <thead>
          <tr>
            <th>Total Cases</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{country.cases.toLocaleString()}</td>
            <td>{country.recovered.toLocaleString()}</td>
            <td>{country.deaths.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <ButtonsWrapper>
        {!country.isPinned && (
          <PinButton onClick={() => onPin(country.countryInfo.iso2)}>
            Pin Country
          </PinButton>
        )}

        {country.isPinned && (
          <UnpinButton onClick={() => onUnpin(country.countryInfo.iso2)}>
            Unpin Country
          </UnpinButton>
        )}

        <RemoveButton onClick={() => onRemovePressed(country.countryInfo.iso2)}>
          Remove
        </RemoveButton>
      </ButtonsWrapper>
    </CountryWrapper>
  )
}

export default CountryDetail
