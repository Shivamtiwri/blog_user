import React from "react";
import image from "../../Assests/02.7b36c041.jpg";
import logo from "../../Assests/image.png";

import SearchIcon from "@mui/icons-material/Search";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-4">
        {/* Left Sidebar */}
        <div className="col-span-3 hidden md:block">
          <div className="flex flex-col gap-2 ">
            <img src={logo} alt="" className="h-16 w-16 rounded-full" />
            <div className="text-[#7367f0] text-xl font-bold">Shruthilaya</div>
            <div className="text-[#7367f0] text-xl font-bold">
              Music Academy
            </div>
          </div>
        </div>
        {/* <Header /> */}
        {/* Main Feed */}
        <div className="col-span-12 md:col-span-6">
          <div
            onClick={() => navigate("/details")}
            className="bg-white rounded-lg shadow-md mb-4 cursor-pointer"
          >
            <div className="flex flex-col bg-white  rounded-bl-xl rounded-br-xl shadow-xl rounded-tl-xl rounded-tr-xl">
              <div className="flex image  ">
                <img
                  src="https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg"
                  alt=""
                  className="rounded-tl-xl rounded-tr-xl"
                />
              </div>
              <div className="flex flex-col text p-3  ">
                <p className="text-gray-700 text-md font-bold">
                  SimpleText allows text editing and text formatting .
                </p>
                <div className="flex gap-1 my-2 items-center ">
                  <div className="flex rounded-full bg-gray-100 p-1">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                      alt=""
                      className="h-5 w-5 rounded-full"
                    />
                  </div>
                  <p className="text-gray-400 text-sm">by</p>
                  <p className="text-sm pr-2 border-r-2">Amit</p>
                  <p className="text-gray-400 text-sm">19/01/2025</p>
                </div>
                <p className="my-3 text-gray-400 text-md">
                  It can be considered similar to Windows' WordPad application.
                  In later versions it also gained additional read only display
                  capabilities for PICT files.
                </p>
                <hr />
                <div className="flex w-full justify-between items-center my-2">
                  <p className="text-gray-400 font-bold cursor-pointer">
                    76 Comments
                  </p>
                  <p className="text-blue-400 font-bold cursor-pointer">
                    Read More
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="flex flex-col bg-white  rounded-bl-xl rounded-br-xl shadow-xl rounded-tl-xl rounded-tr-xl">
              <div className="flex image  ">
                <img
                  src="https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg"
                  alt=""
                  className="rounded-tl-xl rounded-tr-xl"
                />
              </div>
              <div className="flex flex-col text p-3  ">
                <p className="text-gray-700 text-md font-bold">
                  The Best Features Coming to iOS and Web design
                </p>
                <div className="flex gap-1 my-2 ">
                  <p className="text-gray-400 text-sm">by</p>
                  <p className="text-sm pr-2 border-r-2">Amit</p>
                  <p className="text-gray-400 text-sm">19/01/2025</p>
                </div>
                <p className="my-3 text-gray-400 text-md">
                  Donut fruitcake soufflé apple pie candy canes jujubes
                  croissant chocolate bar ice cream.
                </p>
                <hr />
                <div className="flex w-full justify-between items-center my-2">
                  <p className="text-gray-400 font-bold cursor-pointer">
                    76 Comments
                  </p>
                  <p className="text-blue-400 font-bold cursor-pointer">
                    Read More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="col-span-3 hidden md:block">
          <div className="flex gap-3 bg-[#FFFF] p-2 rounded-md shadow-md">
            <SearchIcon />
            <input
              type="text "
              className="outline-none"
              placeholder="Searech"
            />
          </div>
          <div className="flex w-full justify-end gap-3 items-center p-3">
            <p className="text-sm text-[#7367f0] cursor-pointer hover:underline">
              About us
            </p>
            <p className="text-sm text-[#7367f0] cursor-pointer hover:underline">
              Privacy
            </p>
            <p className="text-sm text-[#7367f0] cursor-pointer hover:underline">
              Terms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
