import styles from '../styles/CountryItem.module.css';
const CountryItem = (props) => {
  const countryNames = [];
  for (const language in props.name.nativeName) {
    countryNames.push(`${language}: ${props.name.nativeName[language].common}`);
  }
  return (
    <tr onClick={() => { alert(`${props.name.common}`) }}>
      <td><img className={styles.flag} src={props.flags.svg} alt={`${props.name.common} flag. ${props.name.alt}`} /></td>
      <td>{props.name.common}</td>
      <td>{props.cca3}</td>
      <td>{props.population.toLocaleString()}</td>
    </tr>
  );
};

export default CountryItem;