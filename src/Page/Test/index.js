import React, { useContext, useEffect, useRef, useState } from "react";
import image from "../../Assests/02.7b36c041.jpg";
import logo from "../../Assests/image.png";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import AxiosConfigadmin from "../../Config/AxiosConfig copy";
import { End_Urls } from "../../Config/End_Urls";
import { StakingApp } from "../../Hook";
import Loader from "../../Config/Loder";

export default function Test() {
  const navigate = useNavigate();
  const { selectedDate } = useContext(StakingApp);
  const [data, setData] = useState();
  const [isLoding,setIslodin]=useState(false)

  const date = (datetime) => {
    const date = new Date(datetime);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };

  const time = (datetime) => {
    const date = new Date(datetime);
    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  };

  const adminlogin = () => {
    setIslodin(true)
    AxiosConfigadmin.get(End_Urls.userget_blog)
      .then((res) => {
        setData(res.data.data);
        setIslodin(false)
      })
      .catch((err) => {
        console.log(err);
        setIslodin(false)
      });
  };

  useEffect(() => {
    adminlogin();
  }, [selectedDate]);

  return (<>{
    isLoding?<Loader/>:
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-3 hidden md:block  p-4 rounded-lg ">
          <div className="flex flex-col items-center fixed top-24 left-44 gap-4">
            <img
              src={logo}
              alt="Shruthilaya Music Academy Logo"
              className="h-20 w-20 rounded-full shadow-md"
            />
            <div className="text-center">
              <div className="text-red-700 text-2xl font-semibold">
                Shruthilaya
              </div>
              <div className="text-red-700 text-lg">Music Academy</div>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="col-span-12 md:col-span-6 mt-5">
          {data
            ?.filter((item) => item.created_date.includes(selectedDate))
            .map((item) => {
              return (
                <div
                  // onClick={() => navigate(`/details/${item.id}`)}
                  className="bg-white rounded-xl shadow-md mb-6 cursor-pointer transform transition-all hover:scale-105"
                >
                  <div className="flex flex-col bg-white rounded-xl shadow-lg">
                    <div className="relative">
                      {item.image_url.split(".")[3] === "mp4" ? (
                        <video
                          className="w-full h-64 object-cover rounded-t-xl"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={item.image_url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={item.image_url}
                          alt="Image"
                          className="w-full h-64 object-cover rounded-t-xl"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-red-700 text-lg font-semibold">
                        {item.title}
                      </p>
                      <div className="flex gap-2 my-3 items-center text-sm text-gray-500">
                        <div className="flex rounded-full bg-gray-200 p-1">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                            alt="Admin Icon"
                            className="h-5 w-5 rounded-full"
                          />
                        </div>
                        <span className="font-medium text-red-500">
                          {item.admin_name}
                        </span>
                        <span className="text-gray-400 font-semibold">
                          ·
                          {`${date(item.created_date)} time: ${time(
                            item.created_date
                          )}`}{" "}
                        </span>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                        className="text-gray-600 text-base mb-4 line-clamp-3"
                      ></p>
                      <hr />
                      <div className="flex justify-between items-center mt-3">
                        <p
                          onClick={() => navigate(`/details/${item.id}`)}
                          className="text-gray-500 font-medium hover:text-red-700"
                        >
                          {item.total_comments} Comments
                        </p>
                        <p
                          onClick={() => navigate(`/details/${item.id}`)}
                          className="text-red-700 font-medium hover:underline"
                        >
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
        <div className="col-span-3 hidden md:block ">
          <div className="col-span-3 hidden md:block fixed top-24 right-36">
            <div className="flex items-center  bg-white shadow-md py-1 px-2 rounded-md  ">
              <SearchIcon className="text-gray-500" />
              <input
                type="text"
                className="outline-none w-full py-2 px-3  rounded-md"
                placeholder="Search"
              />
            </div>
            <div className="flex  justify-end mt-3 gap-3  ">
              <p onClick={()=>navigate("/about-us")} className="text-sm hover:text-gray-600 hover:underline cursor-pointer text-red-600 transition-colors">
                About us
              </p>
              <p onClick={()=>navigate("/privacy")} className="text-sm hover:text-gray-600 hover:underline cursor-pointer text-red-600 transition-colors">
                Privacy
              </p>
              <p onClick={()=>navigate("/terms")} className="text-sm hover:text-gray-600 hover:underline cursor-pointer text-red-600 transition-colors">
                Terms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}
