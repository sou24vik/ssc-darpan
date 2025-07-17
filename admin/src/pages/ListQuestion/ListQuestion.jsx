import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListQuestion.css"; 

const ListQuestion = ({ url }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState("");

  const fetchQuestions = async () => {
   
    setLoading(true);
    try {
      const response = await axios.get(`${url}/api/previousYear/list`);
      if (response.data.success) {
        setQuestions(response.data.data || []);
      } else {
        console.error("API response not successful:", response.data.message);
       
      }
    } catch (error) {
      console.error("Error fetching questions:", error);

    } finally {
      setLoading(false);
    }
  };

  const deleteQuestion = async (id) => {
    if (
      window.confirm("Are you sure you want to delete this question paper?")
    ) {
      try {
        
        const response = await axios.post(
          `${url}/api/previousYear/delete/${id}`
        );
        if (response.data.success) {
          setQuestions(questions.filter((ques) => ques._id !== id));
          setDeleteMessage("Question paper deleted successfully!");
        } else {
          setDeleteMessage(`Failed to delete: ${response.data.message}`);
        }
      } catch (error) {
        console.error("Failed to delete question:", error);
        setDeleteMessage("Failed to delete question paper. Please try again.");
      } finally {
        setTimeout(() => setDeleteMessage(""), 3000); 
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="list-question-page-container">
      <h2 className="list-question-page-title">All Uploaded Questions</h2>

      {deleteMessage && (
        <p
          className={`list-question-delete-message ${
            deleteMessage.includes("successfully") ? "success" : "error"
          }`}
        >
          {deleteMessage}
        </p>
      )}

      {loading ? (
        <p className="list-question-status">Loading questions...</p>
      ) : questions.length === 0 ? (
        <p className="list-question-status no-questions">
          No question papers uploaded yet. Start adding some!
        </p>
      ) : (
        <ul className="questions-grid">
          {questions.map((ques) => (
            <li key={ques._id} className="question-card">
              <div className="question-content">
                <h3 className="question-title">{ques.title}</h3>
                <p className="question-detail">
                  <strong>Exam:</strong> {ques.exam}
                </p>
                <p className="question-detail">
                  <strong>Year:</strong> {ques.year}
                </p>
                <p className="question-detail">
                  <strong>Category:</strong> {ques.category}
                </p>
                {/* */}
                {ques.description && ( 
                  <p className="question-description">
                    <strong>Description:</strong> {ques.description}
                  </p>
                )}
              </div>
              <div className="question-actions">
                <a
                  href={ques.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-question-button"
                >
                  View Paper
                </a>

                <button
                  onClick={() => deleteQuestion(ques._id)}
                  className="delete-question-button"
                >
                  Delete Paper
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListQuestion;
