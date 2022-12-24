import React from "react";

export const Input = ({ searchState, searchDispatch, Hello }) => {
  return (
    <>
      <Hello />
      <input
        type="text"
        value={searchState.searchTerm}
        onChange={(e) =>
          searchDispatch({ type: "SET_SEARCHTERM", payload: e.target.value })
        }
      />
    </>
  );
};
