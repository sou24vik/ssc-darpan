import React, { useState } from "react";
import "./AddNote.css"; // Import the CSS file
import axios from "axios";

const AddNote = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    title: "",
    subject: "",
    chapter: "",
    description: "",
    file: null,
  });

  const onChangeHandler = (event) => {
    if (event.target.name === "file") {
      setData({ ...data, file: event.target.files[0] });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subject", data.subject);
    formData.append("chapter", data.chapter);
    formData.append("description", data.description);
    formData.append("file", data.file);

    try {
      const response = await axios.post(`${url}/api/notes/upload`, formData);
      if (response.data.success) {
        setMessage("Note uploaded successfully!");

        setData({
          title: "",
          subject: "",
          chapter: "",
          description: "",
          file: null,
        });

        if (document.getElementById("fileInput")) {
          document.getElementById("fileInput").value = "";
        }
      } else {
        setMessage(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Failed to upload note:", error);
      setMessage("Failed to upload note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-note-page-container">
      <div className="add-note-card">
        <h2 className="add-note-title">Add New Note</h2>
        <form
          onSubmit={onSubmitHandler}
          encType="multipart/form-data"
          className="add-note-form"
        >
          <input
            type="text"
            name="subject"
            placeholder="Subject (e.g., General Studies)"
            value={data.subject}
            onChange={onChangeHandler}
            required
            className="add-note-input"
          />
          <input
            type="text"
            name="chapter"
            placeholder="Chapter (e.g., Indian History)"
            value={data.chapter}
            onChange={onChangeHandler}
            required
            className="add-note-input"
          />
          <input
            type="text"
            name="title"
            placeholder="Note Title (e.g., Mughal Empire Notes)"
            value={data.title}
            onChange={onChangeHandler}
            required
            className="add-note-input"
          />
          <textarea
            name="description"
            placeholder="Description (optional, max 200 characters)"
            value={data.description}
            onChange={onChangeHandler}
            maxLength="200"
            className="add-note-textarea"
          ></textarea>

          <label htmlFor="fileInput" className="add-note-file-label">
            {data.file ? data.file.name : "Choose File (PDF, DOC, DOCX)"}
          </label>
          <input
            type="file"
            name="file"
            id="fileInput"
            accept=".pdf,.doc,.docx"
            onChange={onChangeHandler}
            required
            className="add-note-file-input"
          />

          <button type="submit" disabled={loading} className="add-note-button">
            {loading ? "Uploading..." : "Upload Note"}
          </button>
        </form>
        {message && (
          <p
            className={`add-note-message ${
              message.includes("Error") || message.includes("Failed")
                ? "error"
                : "success"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddNote;
