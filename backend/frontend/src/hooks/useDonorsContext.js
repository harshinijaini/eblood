import { DonorsContext } from "../context/DonorContext";
import { useContext } from "react";

export const useDonorsContext = () => {
  const context = useContext(DonorsContext);

  if (!context) {
    throw Error(
      "useDonorsContext must be used inside an DonorsContextProvider"
    );
  }

  return context;
};
