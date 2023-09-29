import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setLocalStorage } from "../../utils/setLocalStorage";
import Table from "../Table/Table";

const column = [
  {
    name: "username",
    label: "Name",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "tags",
    label: "Tags",
  },
  {
    name: "desc",
    label: "Description",
  },
];

const Dashboard = () => {
  const { data } = useSelector((state) => state.addDataReducer);

  useEffect(() => {
    setLocalStorage("data", data);
  });

  return (
    <div>
      <Table column={column} data={data} />
    </div>
  );
};

export default Dashboard;
