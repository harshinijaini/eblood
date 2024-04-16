//import { Form } from "react-router-dom";
import { useDonorsContext } from "../hooks/useDonorsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DonorDetails = ({ donors }) => {
  const { dispatch } = useDonorsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/donors/" + donors._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_DONOR", payload: json });
    }
  };
  return (
    <div className="donor-details">
      <p>
        <strong>First Name: </strong>
        {donors.firstname}
      </p>
      <p>
        <strong>Last Name: </strong>
        {donors.lastname}
      </p>
      <p>
        <strong>Mobile No: </strong>
        {donors.mobile_no}
      </p>
      <p>
        <strong>Blood Group: </strong>
        {donors.blood_group}
      </p>
      <p>
        <strong>Age: </strong>
        {donors.age}
      </p>
      <p>
        <strong>Location: </strong>
        {donors.location}
      </p>
      <p>
        {formatDistanceToNow(new Date(donors.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default DonorDetails;
