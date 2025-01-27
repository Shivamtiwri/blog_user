import React from "react";
import log from "../../Assests/image.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className="bg-[#FFFF] shadow-md sticky top-5 z-10 lg:mx-[17%] mx-5 rounded-md ">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={log} alt="" className="h-8 w-8 rounded-full" />
          <div className="text-[#7367f0] text-xl font-bold">Shruthilaya</div>
        </div>

        <div className="flex rounded-full bg-gray-100 p-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
