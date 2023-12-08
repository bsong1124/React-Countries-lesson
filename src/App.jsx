import { useEffect, useState } from 'react'
import './App.css'
import AllCountries from './AllCountries'
import MyCountries from './MyCountries'

export default function App() {
  const [allCountries, setAllCountries] = useState([])
  const [myCountries, setMyCountries] = useState([])

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/region/europe')
      const data = await response.json()
      setAllCountries(data)
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchCountries()
  }, [])

  const addToList = (country) => {
    setMyCountries([...myCountries, country])
  }
  console.log(myCountries)
  return (
    // get list of countries from api
    // display country names
    // show button to add to my personal list of countries i want to visit
    // button should become unclickable so i cant add same country multiple times
    // also show names for my countries
    // add button that deletes a country from my personal list
    // have button that switches from my personal list and all countries list
    <>
      <AllCountries allCountries={allCountries} addToList={addToList}/>
      <MyCountries />
    </>
  )
}

