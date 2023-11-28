import CountryItem from "./CountryItem";
import RESTCountriesStyles from '../styles/CountryList.module.css';

const CountryList = ({ countries }) => {
  return (
    <div className={RESTCountriesStyles.container_wrapper}>
      <table>
        <thead>
          <tr>
            <th>{/* Flag */}</th>
            <th>Country</th>
            <th>Code</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => {
            return <CountryItem key={country.cca3} {...country} />
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;