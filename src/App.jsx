import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="createuser" element={<CreateUser />} />
        <Route path="edituser/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
