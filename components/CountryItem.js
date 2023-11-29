import { ButtonBase, Card, CardActionArea, CardContent, Typography, ListItem, ListItemAvatar, ListItemText, Avatar, TableRow, TableCell } from '@mui/material';
import { useDialog } from '../contexts/DialogContext';
import styles from '../styles/CountryItem.module.css';
import Country from './Country';

const CountryItem = (props) => {
  const { showDialog } = useDialog();

  const handleCountryClick = () => {
    showDialog(props.name.official, Country(props));
  }

  return (
    <TableRow hover onClick={handleCountryClick}>
      <TableCell>
        <img
          src={props.flags.svg}
          alt={`${props.name.common} flag`}
          style={{ width: '30px', height: 'auto' }}
        />
      </TableCell>
      <TableCell>{props.name.common}</TableCell>
      <TableCell>{props.cca3}</TableCell>
      <TableCell>{props.population.toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default CountryItem;