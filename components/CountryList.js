import CountryItem from "./CountryItem";
import RESTCountriesStyles from '../styles/CountryList.module.css';
import { Grid, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Avatar, Paper, TableBody, Table } from "@mui/material";
import Country from "./Country";

const CountryList = ({ countries }) => {
  return (
    <Paper className={RESTCountriesStyles.container_wrapper}>
      <Table>
        <TableBody>
          {countries.map((country) => {
            <CountryItem key={country.cca3} {...country} />
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default CountryList;