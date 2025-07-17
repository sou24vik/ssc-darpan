/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create context
export const CglContext = createContext(null);

// Provider component
const CglContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const url = "https://ssc-darpan.onrender.com/";

  // ===== States =====
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [subjects, setSubjects] = useState([]);

  // ===== Auth =====
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  // ===== API Calls =====
  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${url}/api/notes/list`);
      setNoteList(response.data.data);
    } catch (err) {
      console.error("Failed to fetch notes:", err);
    }
  };

  const fetchSubjects = async () => {
    try {
      const res = await axios.get(`${url}/api/notes/subjects`);
      setSubjects(res.data.subjects);
    } catch (err) {
      console.error("Failed to fetch subjects:", err);
    }
  };

  const fetchNotesBySubject = async (subject) => {
    try {
      const res = await axios.get(`${url}/api/notes/list/${subject}`);
      setNoteList(res.data.notes);
    } catch (err) {
      console.error("Failed to fetch notes by subject:", err);
    }
  };

  // ===== Initial Load =====
  useEffect(() => {
    fetchNotes();
  }, []);

  // ===== Context Value =====
  const contextValue = {
    navigate,
    url,
    token,
    setToken,
    logout,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    noteList,
    fetchNotes,
    fetchNotesBySubject,
    subjects,
    fetchSubjects,
  };

  return (
    <CglContext.Provider value={contextValue}>{children}</CglContext.Provider>
  );
};

export default CglContextProvider;
