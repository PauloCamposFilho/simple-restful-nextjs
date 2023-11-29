import CountryItem from "./CountryItem";
import RESTCountriesStyles from '../styles/CountryList.module.css';
import { Grid, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Avatar, Paper, TableBody, Table } from "@mui/material";
import { FixedSizeList } from 'react-window';
import Country from "./Country";

const CountryList = ({ countries }) => {
  const countryRow = ({ index, style }) => {
    const country = countries[index];
    return <CountryItem key={country.cca3} style={style} {...country} />;
  };
  return (
    <Paper className={RESTCountriesStyles.container_wrapper}>
      {/* <Table>
        <TableBody>
          {countries.map((country) => {
            return <CountryItem key={country.cca3} {...country} />
          })}
        </TableBody>
      </Table> */}
      <FixedSizeList
        height={400}
        width='100%'
        itemSize={50}
        itemCount={countries.length}
        overscanCount={50}
      >
        {countryRow}
      </FixedSizeList>

    </Paper>
  );
}

export default CountryList;