"use Server";
import axios from "axios";
import React, { useState, createContext } from "react";
import { toast } from "react-toastify";
export const StakingApp = createContext();
export const Staking = ({ children }) => {
  const [serch, setSerceh] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelecteddate] = useState("");
  const [page, setPage] = useState(3);
  const [email, setEmail] = useState("");
  const user_id = localStorage.getItem("user_id");
  const [todate,setTodate]=useState("")
  const [fromdate,setFromdate]=useState("")
  function setDeviceId() {
    const deviceId = localStorage.getItem("device_id") || generateDeviceId();
    localStorage.setItem("device_id", deviceId);
    return deviceId;
  }

  function generateDeviceId() {
    return "device_" + Math.random().toString(36).substr(2, 9); // Generates a random ID
  }

  const device_id = setDeviceId();

  const subscribe = async () => {
    try {
      const response = await axios.post(
        "https://api.saarkansas.org/user/user-subscribe",
        {
          email: email,
          device_id: device_id,
          user_id: user_id,
        }
      );
      if (response) {
        toast.success(response.data.msg);
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <StakingApp.Provider
      value={{
        selectedMonth,
        setSelectedMonth,
        selectedDate,
        setSelecteddate,
        page,
        setPage,
        email,
        setEmail,
        subscribe,
        serch,
        setSerceh,
        todate,setTodate,fromdate,setFromdate
      }}
    >
      {children}
    </StakingApp.Provider>
  );
};
