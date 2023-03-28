import React from "react";
import { CSVLink } from "react-csv";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Contents = ({ dataBase, value }) => {
  const [currentPage, setCurrentPage] = React.useState(20);

  const headers = [
    { label: "Name", key: "name" },
    { label: "City", key: "city" },
    { label: "Street", key: "street" },
    { label: "Address", key: "address " },
    { label: "Secondary", key: "secondary" },
    { label: "Phone", key: "phone" },
  ];
  const csvReport = {
    filename: "Report.csv",
    headers: headers,
    data: dataBase.slice(0, currentPage),
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 10);
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">address</TableCell>
              <TableCell align="right">secondary</TableCell>
              <TableCell align="right">street</TableCell>
              <TableCell align="right">phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataBase.slice(0, currentPage).map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {value >= 0.5 ? row.name.substr(1) : row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">
                  {value >= 2.25
                    ? row.city.split("").splice(1, 3, "d", "b", "f")
                    : row.city}
                </TableCell>
                <TableCell align="right">
                  {value >= 4.25 ? row.address.replace(/\s/g, "") : row.address}
                </TableCell>
                <TableCell align="right">
                  {value >= 6.25
                    ? row.secondary.replace(/[0-3]/g, "").split(" ").join("")
                    : row.secondary}
                </TableCell>
                <TableCell align="right">
                  {value >= 8.75
                    ? row.street.concat(Math.random().toString(36).substr(5, 1))
                    : row.street}
                </TableCell>
                <TableCell align="right">
                  +{value >= 9.5 ? row.phone.replace(/[^0-9]/g, "") : row.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {dataBase.length === 0 ? null : (
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <CSVLink
            style={{ textDecoration: "none", marginTop: 20 }}
            {...csvReport}
          >
            <Button position="fixed" variant="contained" color="secondary">
              Export CSV
            </Button>
          </CSVLink>
          <Button
            onClick={() => loadMore()}
            variant="contained"
            style={{ marginLeft: 20 }}
            color="secondary"
          >
            Load more
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Contents;
