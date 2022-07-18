import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentTable from "./components/StudentTable";
import AddStudent from "./components/AddStudent";
import Update from "./components/Update";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="max-w-7xl  mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<StudentTable />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
