import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function CountriesDetails(props) {

  const params = useParams()
  const { countryCode } = params

  const { allCountries } = props

  const [ countryDetails, setCountryDetails ] = useState(null)
  const [ bordersCountries, setBorderCountries ] = useState(null)
  

  useEffect( () => {
    const countrySelected = allCountries.filter( each => each.alpha3Code === countryCode)
    setCountryDetails(countrySelected)
    const bordersCountriesNames = []
    allCountries.forEach( eachCountry => {
      for (let i = 0; i < countrySelected[0].borders.length; i++ )
        if (eachCountry.alpha3Code === countrySelected[0].borders[i]) {
          bordersCountriesNames.push(eachCountry)
        }
    })
    setBorderCountries(bordersCountriesNames)
  },[countryCode])
  

  return (
    <div>
        
        {
          countryDetails === null
          ? <h5>Buscando</h5>
          :
          <div>
            <div>
            <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails[0].alpha2Code.toLowerCase()}.png`}
                  alt={`${countryDetails[0].alpha3Code}`}
                />
              <h4>{countryDetails[0].name.common}</h4>
            </div>
            <div>
              <hr />
              <p>Capital: {countryDetails[0].capital[0]}</p>
              <hr />
              <p>Area: {countryDetails[0].area}km2</p>
              <hr />
              <ul>
                {bordersCountries.map( each => {
                  return (
                    <li key={each.name.common}><Link to={`/details/${each.alpha3Code}`}>{each.name.common}</Link></li>
                  )
                })}
              </ul>

            </div>
          </div>

        }


    </div>
  )
}

export default CountriesDetails