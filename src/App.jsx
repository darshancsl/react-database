import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Form />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
