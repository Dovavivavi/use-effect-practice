import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import LoadingMask from './components/LoadingMask';
/*Material UI-bol importált styleing*/
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  //states
  const [countries/*sima*/, setCountries/*setter, (neve legyen ugyanaz)*/] = useState([])
  const [showCountries, setShowCountries] = useState(true)
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState('asc')
  const [searchInput, setSearchInput] = useState('')
  const [showSubregion, setShowSubregion] = useState(true)

  useEffect(() => {
    /*sima fetch-elés*/
    fetch('https://restcountries.com/v3.1/all')
    .then(data => data.json())
    .then(countriesData => {
      console.log(countriesData)
      setCountries(countriesData)
      setLoading(false)
    })
  },[])

  return (
    <>
    {loading 
      ? 
        <LoadingMask /> 
      : 
        <div className="App">
          <Button variant='contained'/*MUI-s style-ra kell a variant*/ onClick={() => {
            setCountries([...countries].sort((a, b) => sort === 'asc' ? a.population - b.population : b.population - a.population))
            setSort(sort === 'asc' ? 'desc' : 'asc')
          }}>sort countries</Button>

          <Button variant='contained' onClick={() => {
            setShowCountries(!showCountries)
          }}>show/hide countries</Button>

          <Button variant='contained' onClick={() => {
            setShowSubregion(!showSubregion)
          }}>show/hide subregion</Button>

          <TextField label="name" variant="outlined" type="text" value={searchInput} onChange={(event) => {
            setSearchInput(event.target.value)
          }} />

          {showCountries && <Countries searchInput={searchInput} countries={countries} />}
        </div>
    }
    </>
  );
}

export default App;