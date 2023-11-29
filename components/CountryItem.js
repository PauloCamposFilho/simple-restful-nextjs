import { ButtonBase, Card, CardActionArea, CardContent, Typography, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import { useDialog } from '../contexts/DialogContext';
import styles from '../styles/CountryItem.module.css';
import Country from './Country';
// const CountryItem = (props) => {
//   const { showDialog } = useDialog();
//   const countryNames = [];
//   for (const language in props.name.nativeName) {
//     countryNames.push(`${language}: ${props.name.nativeName[language].common}`);
//   }
//   return (
//     <tr onClick={() => { showDialog(props.name.official, Country(props)) }}>
//       <td><img className={styles.flag} src={props.flags.svg} alt={`${props.name.common} flag. ${props.name.alt}`} /></td>
//       <td>{props.name.common}</td>
//       <td>{props.cca3}</td>
//       <td>{props.population.toLocaleString()}</td>
//     </tr>
//   );
// };

// const CountryItem = (props) => {
//   const { showDialog } = useDialog();

//   return (
//     <ButtonBase onClick={() => { showDialog(props.name.official, Country(props)) }}>
//       <Card className={styles.card}>
//         <CardActionArea>
//           <img className={styles.flag} src={props.flags.svg} alt={`${props.name.common} falg. ${props.name.alt}`} />
//           <CardContent>
//             <Typography variant='h6' component="div">{props.name.common}</Typography>
//             <Typography variant='body2' color="text.secondary">Code: {props.cca3}</Typography>
//             <Typography variant='body2' color="text.secondary">Population: {props.population.toLocaleString()}</Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </ButtonBase>
//   );
// };

const CountryItem = (props) => {
  return (
    <ListItem button onClick={() => { showDialog(props.name.official, Country(props)) }}>
      <ListItemAvatar>
        <Avatar alt={`${props.name.common} flag`} src={props.flags.svg} />
      </ListItemAvatar>
      <ListItemText
        primary={props.name.common}
        secondary={`Code: ${props.cca3} | Population: ${props.population.toLocaleString()}`}
      />
    </ListItem>
  );
};

export default CountryItem;