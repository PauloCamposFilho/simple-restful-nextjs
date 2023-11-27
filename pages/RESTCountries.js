import Head from "next/head";
import styles from '../styles/Home.module.css';
import RESTCountriesStyles from '../styles/RESTCountries.module.css';
import useCountryData from "../hooks/RESTCountries/useCountryData";
import { useEffect } from "react";
import Country from "../components/Country";

export default function RESTCountries() {
  const {
    inputValue,
    responseData,
    handleInputChange,
    resetInputValue,
    handleResponseData
  } = useCountryData();

  return (
    <div className={styles.container}>
      <Head>
        <title>RESTCountries Demo</title>
        <meta name="description" content="A simple nextJS app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>RESTCountries</h1>
      {inputValue != '' &&
        <p>Debug: {inputValue}</p>
      }
      <input type="text" placeholder="Enter Country Name" value={inputValue} onChange={handleInputChange} />
      <button onClick={() => {
        handleResponseData(inputValue);
        resetInputValue();
      }} className={RESTCountriesStyles.search} type="button">Get info!</button>
      {responseData.length > 0 &&
        <div className="country-data__info">
          {responseData.map((country) => {
            return <Country key={country.cca3} {...country} />
          })}
        </div>
      }
    </div>
  );
}