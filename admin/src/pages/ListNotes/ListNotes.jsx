import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListNotes.css"; 

const ListNotes = ({ url }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState("");

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/api/notes/list`);
      if (response.data.success) {
        setNotes(response.data.data || []);
      } else {
        console.error("API response not successful:", response.data.message);
     
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
  
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        const response = await axios.post(`${url}/api/notes/delete/${id}`); // Send ID in body as per common practice
        if (response.data.success) {
          setNotes(notes.filter((note) => note._id !== id));
          setDeleteMessage("Note deleted successfully!");
        } else {
          setDeleteMessage(`Failed to delete: ${response.data.message}`);
        }
      } catch (error) {
        console.error("Failed to delete note:", error);
        setDeleteMessage("Failed to delete note. Please try again.");
      } finally {
        setTimeout(() => setDeleteMessage(""), 3000);
      }
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []); 

  return (
    <div className="list-notes-page-container">
      <h2 className="list-notes-page-title">All Uploaded Notes</h2>

      {deleteMessage && (
        <p
          className={`list-notes-delete-message ${
            deleteMessage.includes("successfully") ? "success" : "error"
          }`}
        >
          {deleteMessage}
        </p>
      )}

      {loading ? (
        <p className="list-notes-status">Loading notes...</p>
      ) : notes.length === 0 ? (
        <p className="list-notes-status no-notes">
          No notes uploaded yet. Start adding some!
        </p>
      ) : (
        <ul className="notes-grid">
          {notes.map((note) => (
            <li key={note._id} className="note-card">
              <div className="note-content">
                <h3 className="note-title">{note.title}</h3>
                <p className="note-detail">
                  <strong>Subject:</strong> {note.subject}
                </p>
                <p className="note-detail">
                  <strong>Chapter:</strong> {note.chapter}
                </p>
                {note.description && ( 
                  <p className="note-description">
                    <strong>Description:</strong> {note.description}
                  </p>
                )}
              </div>
              <div className="note-actions">
                {note.file && ( 
                  <a
                    href={note.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-note-button"
                  >
                    View Note
                  </a>
                )}
                <button
                  onClick={() => deleteNote(note._id)}
                  className="delete-note-button"
                >
                  Delete Note
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListNotes;
