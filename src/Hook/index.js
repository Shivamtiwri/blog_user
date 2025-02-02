"use Server";
import React, { useState, createContext } from "react";
export const StakingApp = createContext();
export const Staking = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelecteddate] = useState("");

  return (
    <StakingApp.Provider
      value={{
        selectedMonth,
        setSelectedMonth,
        selectedDate, setSelecteddate
      }}
    >
      {children}
    </StakingApp.Provider>
  );
};
