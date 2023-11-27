import styles from '../styles/Country.module.css';
const Country = (props) => {
  console.log(props);
  const countryNames = [];
  for (const language in props.name.nativeName) {
    countryNames.push(`${language}: ${props.name.nativeName[language].common}`);
  }
  console.log(countryNames);
  return (
    <div className={styles.country}>
      <img className={styles.flag} src={props.flags.svg} alt={`${props.name.common} flag`} />
      <h2>{props.name.common}</h2>
      <h3>Official Name: {props.name.official}</h3>
      <div>
        {countryNames.map((name) => {
          return <h4>{name}</h4>
        })}
      </div>
    </div>

  );
};

export default Country;