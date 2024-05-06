import "./App.css";
import Header from "./pages/header/Header";
import Dashboard from "./pages/dashboard/dashboard";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/noMatch/noMatch";
import PostUser from "./pages/employee/PostUser";
import UpdateUser from "./pages/employee/UpdateUser";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/employee" element={<PostUser/>}/>
        <Route path="/:id" element={<UpdateUser/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default App;
