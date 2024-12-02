import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import "./SearchTable.scss";

const SearchTable = ({ data, columns, isMasked }) => {
  const navigate = useNavigate();

  const handleViewMore = (customerID) => {
    navigate(`/customer-profile/${customerID}`);
  };

  const maskValue = (value, type) => {
    if (type === "universalID" || type === "fullName" || type === "ban") {
      if (value.length <= 2) return value;
      return (
        value.charAt(0) +
        "x".repeat(value.length - 2) +
        value.charAt(value.length - 1)
      );
    } else if (type === "emailAddress") {
      const [first, domain] = value.split("@");
      return `${first.charAt(0)}${"x".repeat(first.length - 2)}${first.charAt(
        first.length - 1
      )}@${domain}`;
    }
    return value;
  };

  return (
    <TableContainer className="custom-table">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ key, label }, index) => (
              <TableCell key={index} align="center">
                {label}
              </TableCell>
            ))}
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map(({ key }, colIndex) => (
                <TableCell key={colIndex} align="center">
                  {isMasked ? maskValue(row[key], key) : row[key]}
                </TableCell>
              ))}
              <TableCell align="center">
                <Button
                  variant="outlined"
                  onClick={() => handleViewMore(row.customerID)}
                  className="btn-border"
                >
                  <div className="btn-border__icon home__banner-content__btn__icon"></div>
                  View More
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchTable;
