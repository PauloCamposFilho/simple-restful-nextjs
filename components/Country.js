import styles from '../styles/Country.module.css';
const Country = (props) => {
  const countryNames = [];
  for (const language in props.name.nativeName) {
    countryNames.push(`${language}: ${props.name.nativeName[language].common}`);
  }
  return (
    <div className={styles.country}>
      <div className={styles.flag_container}>
        <img className={styles.flag} src={props.flags.svg} alt={`${props.name.common} flag. ${props.flags.alt}`} />
      </div>
      <h2 className={styles.name}>{props.name.common} - {props.cca3}</h2>
      <h3 className={styles.official_name}>Official Name: {props.name.official}</h3>
      <div className={styles.stats}>
        <span className={styles.stats}>Population: {props.population.toLocaleString()}</span>
        <span className={styles.stats}>Indepent: {props.independent ? "Yes" : "No"}</span>
        <span className={styles.stats}>Region: {props.region}</span>
        <span className={styles.stats}>Sub-region: {props.subregion}</span>
      </div>
    </div>
  );
};

export default Country;