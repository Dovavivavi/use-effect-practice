import React from 'react'

function Country({countryData}) {
  return (
    <div className='country'>{countryData.name.common} {countryData.population}</div>
  )
}

export default Country