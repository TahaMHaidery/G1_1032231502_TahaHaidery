import { useState } from "react";

function AddStudent() {
  const [data, setData] = useState({ name: "", email: "", course: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Student Added");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Student</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="course" placeholder="Course" onChange={handleChange} />

        <button className="add-btn" onClick={handleSubmit}>
          Add Student
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
