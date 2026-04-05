import { useEffect, useState } from "react";

function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/student/view");
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:500/student/delete/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  const handleEdit = (student) => {
    setEditData(student);
  };

  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/student/update/${editData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    });

    setEditData(null);
    fetchData();
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Student List</h2>

        {students.map((s) => (
          <div key={s._id} className="student-item">
            <b>{s.name}</b> - {s.email} - {s.course}
            <br />
            <button className="edit-btn" onClick={() => handleEdit(s)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => handleDelete(s._id)}>
              Delete
            </button>
          </div>
        ))}

        {editData && (
          <div className="card">
            <h3>Edit Student</h3>

            <input
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
            />

            <input
              value={editData.email}
              onChange={(e) =>
                setEditData({ ...editData, email: e.target.value })
              }
            />

            <input
              value={editData.course}
              onChange={(e) =>
                setEditData({ ...editData, course: e.target.value })
              }
            />

            <button className="update-btn" onClick={handleUpdate}>
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewStudents;
