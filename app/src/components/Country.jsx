import React from 'react'

function Country({countryData}) {
  return (
    /*kiírja a nevet és a népességet*/
    <div className='country'>{countryData.name.common} {countryData.population}</div>
  )
}

export default Country