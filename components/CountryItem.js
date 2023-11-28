import { useDialog } from '../contexts/DialogContext';
import styles from '../styles/CountryItem.module.css';
import Country from './Country';
const CountryItem = (props) => {
  const { showDialog } = useDialog();
  const countryNames = [];
  for (const language in props.name.nativeName) {
    countryNames.push(`${language}: ${props.name.nativeName[language].common}`);
  }
  return (
    <tr onClick={() => { showDialog(props.name.official, Country(props)) }}>
      <td><img className={styles.flag} src={props.flags.svg} alt={`${props.name.common} flag. ${props.name.alt}`} /></td>
      <td>{props.name.common}</td>
      <td>{props.cca3}</td>
      <td>{props.population.toLocaleString()}</td>
    </tr>
  );
};

export default CountryItem;