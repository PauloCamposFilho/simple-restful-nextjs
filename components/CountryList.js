import Country from "./Country";

const CountryList = ({ countries }) => {
  <div className={RESTCountriesStyles.container}>
    {countries.map((country) => {
      return <Country key={country.cca3} {...country} />
    })}
  </div>
};

export default CountryList;