import { useDialog } from '../contexts/DialogContext';
import styles from '../styles/CountryItem.module.css';
import Country from './Country';
import { TableRow, TableCell } from '@mui/material';
const CountryItem = (props) => {
  const { showDialog } = useDialog();

  const handleCountryClick = () => {
    showDialog(props.name.official, Country(props))
  };

  return (
    <TableRow onClick={handleCountryClick} sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
      <TableCell><img className={styles.flag} src={props.flags.svg} alt={`${props.name.common} flag. ${props.name.alt}`} /></TableCell>
      <TableCell sx={{ color: 'white' }}>{props.name.common}</TableCell>
      <TableCell sx={{ color: 'white' }}>{props.cca3}</TableCell>
      <TableCell sx={{ color: 'white' }}>{props.population.toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default CountryItem;