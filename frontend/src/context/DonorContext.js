import { createContext, useReducer } from "react";

export const DonorsContext = createContext();

export const donorReducer = (state, action) => {
  switch (action.type) {
    case "SET_DONORS":
      return {
        donors: action.payload,
      };
    case "CREATE_DONOR":
      return {
        donors: [action.payload, ...state.donors],
      };
    case "DELETE_DONOR":
      return {
        donors: state.donors.filter((d) => d._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const DonorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(donorReducer, {
    donors: null,
  });

  // dispatch({type: 'SET_DONORS', payload: [{}, {}]})

  return (
    <DonorsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DonorsContext.Provider>
  );
};
