import Country from "./Country";
import RESTCountriesStyles from '../styles/CountryList.module.css';

const CountryList = ({ countries }) => {
  return (
    <div className={RESTCountriesStyles.container_wrapper}>
      <div className={RESTCountriesStyles.container}>
        {countries.map((country) => {
          return <Country key={country.cca3} {...country} />
        })}
      </div>
    </div>
  );
};

export default CountryList;