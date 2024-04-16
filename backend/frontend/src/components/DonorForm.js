import { useDonorsContext } from "../hooks/useDonorsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

const DonorForm = () => {
  const { dispatch } = useDonorsContext();
  const { user } = useAuthContext();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile_no, setMobileno] = useState("");
  const [blood_group, setBloodGroup] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const donor = {
      firstname,
      lastname,
      mobile_no,
      blood_group,
      age,
      location,
    };

    const response = await fetch("/api/donors", {
      method: "POST",
      body: JSON.stringify(donor),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setFirstname("");
      setLastname("");
      setMobileno("");
      setBloodGroup("");
      setAge("");
      setLocation("");
      setError(null);
      setEmptyFields([]);
      console.log("New donor added", json);
      dispatch({ type: "CREATE_DONOR", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Donor</h3>

      {/* <label>
        First Name<span className="required"> *</span>
      </label> */}
      <input
        type="text"
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
        className={emptyFields.includes("firstname") ? "error" : ""}
        required
        placeholder="First Name *"
      />

      {/* <label>
        Last Name <span className="required"> *</span>
      </label> */}
      <input
        type="text"
        onChange={(e) => setLastname(e.target.value)}
        value={lastname}
        className={emptyFields.includes("lastname") ? "error" : ""}
        required
        placeholder="Last Name *"
      />

      {/* <label>
        Mobile No <span className="required"> *</span>
      </label> */}
      <input
        type="number"
        onChange={(e) => setMobileno(e.target.value)}
        value={mobile_no}
        className={emptyFields.includes("mobile_no") ? "error" : ""}
        required
        placeholder="Mobile No *"
      />

      {/* <label>
        Blood Group <span className="required"> *</span>
      </label> */}
      <input
        type="text"
        onChange={(e) => setBloodGroup(e.target.value)}
        value={blood_group}
        className={emptyFields.includes("blood_group") ? "error" : ""}
        required
        placeholder="Blood Group *"
      />
      {/* 
      <label>
        Age <span className="required"> *</span>
      </label> */}
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className={emptyFields.includes("age") ? "error" : ""}
        required
        placeholder="Age *"
      />

      {/* <label>
        Location<span className="required"> *</span>
      </label> */}
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className={emptyFields.includes("location") ? "error" : ""}
        required
        placeholder="Location *"
      />

      <button>Add Donor</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default DonorForm;
