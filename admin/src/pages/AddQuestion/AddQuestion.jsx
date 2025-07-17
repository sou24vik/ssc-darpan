import { useState } from "react";
import "./AddQuestion.css";
import axios from "axios";

const AddQuestion = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    exam: "",
    year: "",
    category: "", // Preli or Mains
    title: "",
    description: "",
    file: null,
  });

  const onChangeHandler = (event) => {
    const { name, value, files } = event.target;
    if (name === "file") {
      setData({ ...data, file: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post(
        `${url}/api/previousYear/upload`,
        formData
      );
      if (response.data.success) {
        setMessage("Question uploaded successfully!");

        setData({
          exam: "",
          year: "",
          category: "",
          title: "",
          description: "",
          file: null,
        });

        if (document.getElementById("questionFileInput")) {
          document.getElementById("questionFileInput").value = "";
        }
      } else {
        setMessage(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Failed to upload question:", error);
      setMessage("Failed to upload question. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-question-page-container">
      <div className="add-question-card">
        <h2 className="add-question-title">Add Previous Year Question</h2>
        <form
          onSubmit={onSubmitHandler}
          encType="multipart/form-data"
          className="add-question-form"
        >
          <input
            type="text"
            name="exam"
            placeholder="Exam (e.g., CGL, WBCS)"
            value={data.exam}
            onChange={onChangeHandler}
            required
            className="add-question-input"
          />
          <input
            type="text"
            name="year"
            placeholder="Year (e.g., 2023)"
            value={data.year}
            onChange={onChangeHandler}
            required
            className="add-question-input"
          />
          <input
            type="text"
            name="category"
            placeholder="Category (e.g., Preli, Mains, Tier-1)"
            value={data.category}
            onChange={onChangeHandler}
            required
            className="add-question-input"
          />

          <input
            type="text"
            name="title"
            placeholder="Question Paper Title (e.g., CGL Tier-1 2023 Shift 1)"
            value={data.title}
            onChange={onChangeHandler}
            required
            className="add-question-input"
          />
          <textarea
            name="description"
            placeholder="Description (optional, max 200 characters)"
            value={data.description}
            onChange={onChangeHandler}
            maxLength="200"
            className="add-question-textarea"
          ></textarea>

          <label
            htmlFor="questionFileInput"
            className="add-question-file-label"
          >
            {data.file ? data.file.name : "Choose File (PDF, DOC, DOCX)"}
          </label>
          <input
            type="file"
            name="file"
            id="questionFileInput"
            accept=".pdf,.doc,.docx"
            onChange={onChangeHandler}
            required
            className="add-question-file-input"
          />

          <button
            type="submit"
            disabled={loading}
            className="add-question-button"
          >
            {loading ? "Uploading..." : "Upload Question"}
          </button>
        </form>
        {message && (
          <p
            className={`add-question-message ${
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

export default AddQuestion;
