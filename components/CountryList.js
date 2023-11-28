import Country from "./Country";
import RESTCountriesStyles from '../styles/RESTCountries.module.css';

const CountryList = ({ countries }) => {
  return (
  <div className={RESTCountriesStyles.container}>
    {countries.map((country) => {
      return <Country key={country.cca3} {...country} />
    })}
  </div>
  );
};

export default CountryList;