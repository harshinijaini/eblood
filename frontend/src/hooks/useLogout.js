import { useAuthContext } from "./useAuthContext";
import { useDonorsContext } from "./useDonorsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchDonors } = useDonorsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchDonors({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
