import React from 'react'
import Country from './Country'

function Countries({countries, searchInput}) {
  return (
    <div className='countries'>
        {countries.map((country, index) => {
            return country.name.common.toLowerCase().includes(searchInput.toLowerCase()) && <Country countryData={country} key={index} />
        })}
    </div>
  )
}

export default Countries