import React, { useEffect, useState } from "react";
import PageHeading from "../../shared/components/page-heading/PageHeading";
import SearchTable from "../../shared/components/search-table/SearchTable";
import searchJsonData from "../../assets/mock-api-data/search-results.json";

function SearchResults() {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    // TODO : API call to fetch searchData instead of mock JSON data
    setSearchData(searchJsonData?.customerDetails);
  }, []);

  // Later can be created as the custom hook for masking context
  const isMasked = true; // Set to true or false based on the logic

  // Simulated customer details data
  const customerDetails = [
    {
      customerID: "8c8621c31cb1086c3965630d73af3288",
      customerName: "John Doe",
      customerType: "Customer",
      isActive: true,
      emailAddress: "john.doe@example.com",
      ban: "456789123",
      msisdnNumber: "5557654321",
    },
    {
      customerID: "5e8b9f34dc4d2f0e2301234abcd5678",
      customerName: "Jane Smith",
      customerType: "Former Customer",
      isActive: false,
      emailAddress: "jane.smith@example.com",
      ban: "789456123",
      msisdnNumber: "5551234567",
    },
    {
      customerID: "3f9e29c9a5d44e1e8f1744c9d8e2b6b1",
      customerName: "Alice Johnson",
      customerType: "Former Customer",
      isActive: true,
      emailAddress: "alice.johnson@example.com",
      ban: "123456789",
      msisdnNumber: "5559876543",
    },
  ];

  const columns = [
    { key: "universalID", label: "User Id" },
    { key: "fullName", label: "Name" },
    { key: "emailAddress", label: "Email" },
    { key: "customerType", label: "Customer Type" },
    { key: "ban", label: "BAN" },
    { key: "msisdnNumber", label: "MSISDN" },
  ];

  return (
    <>
      <PageHeading pageHeading="Search Results" showMaskedButton={true} />
      {searchData && (
        <SearchTable data={searchData} columns={columns} isMasked={isMasked} />
      )}
    </>
  );
}

export default SearchResults;
