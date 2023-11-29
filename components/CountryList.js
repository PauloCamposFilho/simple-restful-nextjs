import CountryItem from "./CountryItem";
import RESTCountriesStyles from '../styles/CountryList.module.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const CountryList = ({ countries }) => {
  return (
    <div className={RESTCountriesStyles.container_wrapper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => {
            return <CountryItem key={country.cca3} {...country} />
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CountryList;