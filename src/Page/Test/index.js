import React, { useEffect, useState } from "react";
import image from "../../Assests/02.7b36c041.jpg";
import logo from "../../Assests/image.png";

import SearchIcon from "@mui/icons-material/Search";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import AxiosConfigadmin from "../../Config/AxiosConfig copy";
import { End_Urls } from "../../Config/End_Urls";

export default function Test() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const adminlogin = () => {
    AxiosConfigadmin.get(End_Urls.userget_blog)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    adminlogin();
  }, []);
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
          {data?.map((item) => {
            return (
              <div
                onClick={() => navigate(`/details/${item.id}`)}
                className="bg-white rounded-lg shadow-md mb-4 cursor-pointer"
              >
                <div className="flex flex-col bg-white  rounded-bl-xl rounded-br-xl shadow-xl rounded-tl-xl rounded-tr-xl">
                  <div className="flex image  ">
                    <img
                      src={item.image_url}
                      alt={item.tatile}
                      className="rounded-tl-xl rounded-tr-xl"
                    />
                  </div>
                  <div className="flex flex-col text p-3  ">
                    <p className="text-gray-700 text-md font-bold">
                      {item.tatile}
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
                      <p className="text-sm pr-2 border-r-2">
                        {item.admin_name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {item.created_date}
                      </p>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="my-3 text-gray-400 text-md text-clip"
                    ></p>
                    <hr />
                    <div className="flex w-full justify-between items-center my-2">
                      <p className="text-gray-400 font-bold cursor-pointer">
                        {item.total_comments} Comments
                      </p>
                      <p className="text-blue-400 font-bold cursor-pointer">
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
