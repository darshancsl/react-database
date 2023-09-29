/* eslint-disable react/prop-types */
const TableData = ({ username, email, tags, desc }) => {
  return (
    <>
      <tr key={username}>
        <td>{username}</td>
        <td>{email}</td>
        <td>{tags?.map((tag) => `#${tag.value}`)}</td>
        <td>{desc}</td>
      </tr>
    </>
  );
};

export default TableData;
