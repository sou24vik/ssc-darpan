import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AddQuestion from "./pages/AddQuestion/AddQuestion";
import ListQuestion from "./pages/ListQuestion/ListQuestion";
import AddNotes from "./pages/AddNotes/AddNote";
import ListNotes from "./pages/ListNotes/ListNotes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const url = "https://ssc-darpan.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/addquestion" element={<AddQuestion url={url} />} />
          <Route path="/listquestion" element={<ListQuestion url={url} />} />
          <Route path="/addnotes" element={<AddNotes url={url} />} />
          <Route path="/listnotes" element={<ListNotes url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
