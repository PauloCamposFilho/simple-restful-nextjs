import CountryItem from "./CountryItem";
import RESTCountriesStyles from '../styles/CountryList.module.css';
import { Grid, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import Country from "./Country";

// const CountryList = ({ countries }) => {
//   return (
//     <div className={RESTCountriesStyles.container_wrapper}>
//       <table>
//         <thead>
//           <tr>
//             <th>{/* Flag */}</th>
//             <th>Country</th>
//             <th>Code</th>
//             <th>Population</th>
//           </tr>
//         </thead>
//         <tbody>
//           {countries.map((country) => {
//             return <CountryItem key={country.cca3} {...country} />
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const CountryList = ({ countries }) => {
//   return (
//     <div className={RESTCountriesStyles.container_wrapper}>
//       <Grid container spacing={3}>
//         {countries.map((country) => {
//           return (
//             <Grid item key={country.cca3} xs={12} sm={6} md={4} lg={3}>
//               <Card>
//                 <CardContent>
//                   <CountryItem {...country} />
//                 </CardContent>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </div>
//   );
// };

const CountryList = ({ countries }) => {
  return (
    <List>
      {countries.map((country) => (
        <ListItem key={country.cca3} button>
          <ListItemAvatar>
            <Avatar alt={`${country.name.common} flag`} src={country.flags.svg} />
          </ListItemAvatar>
          <ListItemText
            primary={country.name.common}
            secondary={`Code: ${country.cca3} | Population: ${country.population.toLocaleString()}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CountryList;