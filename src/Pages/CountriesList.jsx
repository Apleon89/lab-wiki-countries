import { Link } from 'react-router-dom';

function CountriesList(props) {
  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    width: '50%'
  };

  return (
    <div>
      {props.allCountries.map((each) => (
        <Link
          key={each.alpha3Code}
          to={`/details/${each.alpha3Code}`}
          style={listStyle}
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${each.alpha2Code.toLowerCase()}.png`}
            alt={`${each.alpha3Code}`}
          />
          <h3>{each.name.common}</h3>
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;
