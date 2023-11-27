import Head from "next/head";
import styles from '../styles/Home.module.css';
import RESTCountriesStyles from '../styles/RESTCountries.module.css';
import useCountryData from "../hooks/RESTCountries/useCountryData";

export default function RESTCountries() {
  const {
    inputValue,
    responseData,
    handleInputChange,
    resetInputValue,
    getResponseData,
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
      <button className={RESTCountriesStyles.search} type="button">Get info!</button>
    </div>
  );
}