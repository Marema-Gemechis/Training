import { CSVLink } from 'react-csv';

const Csv = ({ data }) => {
  const headers = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Street Address', key: 'streetaddress' },
    { label: 'City', key: 'city' },
    { label: 'Post Code', key: 'postcode' },
  ];

  return (
    <CSVLink
      data={data}
      headers={headers}
      filename={'my-file.csv'}
      className="btn btn-primary"
      target="_blank"
    >
      Export csv
    </CSVLink>
  );
};

export default Csv;
