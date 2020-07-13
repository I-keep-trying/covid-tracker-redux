import React from 'react'
import styled from 'styled-components'

const GlobalWrapper = styled.div`
  background: white;
  color: black;
  margin: 1rem;
  padding: 1rem;
  position: relative;
  box-shadow: 0 0px 2px white;
`
const GlobalImage = styled.img`
  float: right;
  width: 7rem;
`
//https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg
const Global = ({ data }) => {
  return (
    <GlobalWrapper>
      <h3>
        Global Totals
        <GlobalImage
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg"
          alt="country flag"
        />
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
            <td>{data.cases.toLocaleString()}</td>
            <td>{data.recovered.toLocaleString()}</td>
            <td>{data.deaths.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </GlobalWrapper>
  )
}

export default Global
