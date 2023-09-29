import TableData from "../TableData/TableData";
import "./Table.css";

/* eslint-disable react/prop-types */
const Table = ({ column, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map(({ name, label }) => {
            return <th key={name}>{label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map(({ username, email, tags, desc }) => {
          return (
            <TableData
              key={username}
              username={username}
              email={email}
              tags={tags}
              desc={desc}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
