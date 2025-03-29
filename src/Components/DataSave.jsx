
import React from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const formData = JSON.parse(localStorage.getItem("formData"));

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Submitted Data</h2>
      {formData ? (
        <div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      ) : (
        <p>No data found. Please submit the form.</p>
      )}
    </div>
  );
};

export default ResultPage;
