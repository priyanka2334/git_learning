

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      age: age,
    };

    localStorage.setItem("formData", JSON.stringify(formData)); 
    navigate("/result"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Fill the Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" ref={emailRef} required />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
