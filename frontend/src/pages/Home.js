import { useEffect } from "react";
import { useDonorsContext } from "../hooks/useDonorsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import DonorDetails from "../components/DonorDetails";
import DonorForm from "../components/DonorForm";

const Home = () => {
  const { donors, dispatch } = useDonorsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchDonors = async () => {
      const response = await fetch("/api/donors", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_DONORS", payload: json });
      }
    };
    if (user) {
      fetchDonors();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="donors">
        {donors &&
          donors.map((donor) => (
            <DonorDetails key={donor._id} donors={donor} />
          ))}
      </div>
      <DonorForm />
    </div>
  );
};

export default Home;
