import React, { useContext, useEffect, useState } from "react";
import image from "../../Assests/02.7b36c041.jpg";
import logo from "../../Assests/image.png";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import AxiosConfigadmin from "../../Config/AxiosConfig copy";
import { End_Urls } from "../../Config/End_Urls";
import { StakingApp } from "../../Hook";
import Loader from "../../Config/Loder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

export default function Test() {
  const navigate = useNavigate();
  const { selectedDate } = useContext(StakingApp);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function setDeviceId() {
    const deviceId = localStorage.getItem("device_id") || generateDeviceId();
    localStorage.setItem("device_id", deviceId);
    return deviceId;
  }

  function generateDeviceId() {
    return "device_" + Math.random().toString(36).substr(2, 9); // Generates a random ID
  }

  const device_id = setDeviceId();
  const getBlog = () => {
    setIsLoading(true);
    AxiosConfigadmin.get(End_Urls.userget_blog + `?devi=${device_id}`)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getBlog();
  }, [selectedDate]);

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleLike = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/like_blog",
        {
          blog_id: id,
          like_status: 1,
          device_id: device_id, // Toggle like/unlike
        }
      );

      getBlog();
      // setLikeStatus(!cset);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const unhandleLike = async (id, likr_id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/un_likeBlog",
        {
          blog_id: id,
          like_id: likr_id, // Toggle like/unlike
        }
      );

      getBlog();
      // setLikeStatus(!cset);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto  py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar Left */}
          <div className="hidden md:block md:col-span-3">
            <div className="flex flex-col items-start sticky top-24 gap-4">
              <img
                src={logo}
                alt="Shruthilaya Music Academy Logo"
                className="h-32 w-32 md:h-36 md:w-36 rounded-full shadow-md"
              />
              <div className="text-center">
                <div className="text-red-700 text-lg md:text-2xl font-semibold">
                  Shruthilaya
                </div>
                <div className="text-red-700 text-md">Music Academy</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-6 border">
            {data
              ?.filter((item) => item.created_date.includes(selectedDate))
              .map((item) => (
                <div key={item.id} className="  cursor-pointer ">
                  <div className="flex flex-col ">
                    <div className="relative">
                      {item.image_url.split(".")[3] === "mp4" ? (
                        <video
                          className="w-full h-48 md:h-96 object-cover "
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={item.image_url} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={item.image_url}
                          alt="Blog Image"
                          className="w-full h-48 md:h-64 object-cover "
                        />
                      )}
                    </div>
                    <div className="py-4">
                      <div className="px-4">
                        <p className="text-red-700 text-lg font-semibold">
                          {item.title}
                        </p>
                        <div className="flex gap-2 my-3 items-center text-sm text-gray-500">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                            alt="Admin Icon"
                            className="h-5 w-5 rounded-full"
                          />
                          <span className="font-medium text-red-500">
                            {item.admin_name}
                          </span>
                          <span className="text-gray-400 font-semibold">
                            · {formatDate(item.created_date)}{" "}
                            {formatTime(item.created_date)}
                          </span>
                        </div>
                        <p
                          dangerouslySetInnerHTML={{ __html: item.description }}
                          className="text-gray-600 text-base mb-4 line-clamp-3"
                        ></p>
                      </div>

                      <div className="flex justify-between items-center mt-3 border-b-2 py-3 px-4">
                        <p
                          onClick={() => navigate(`/details/${item.id}`)}
                          className="text-black  hover:text-red-700 hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                        >
                          <ChatBubbleOutlineIcon /> {item.total_comments}
                        </p>
                        {item.like_status === 0 ? (
                          <p
                            onClick={() => handleLike(item.id)}
                            className="text-black   hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                          >
                            <FavoriteBorderIcon /> {item.total_likes}
                          </p>
                        ) : (
                          <p
                            onClick={() => unhandleLike(item.id, item.like_id)}
                            className="text-red-700  hover:text-red-700 hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                          >
                            <FavoriteIcon /> {item.total_likes}
                          </p>
                        )}

                        {/* <p
                          onClick={() => navigate(`/details/${item.id}`)}
                          className="text-black  hover:text-red-700 hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                        >
                          <ShareIcon /> {item.total_comments}
                        </p> */}
                        <p
                          onClick={() => navigate(`/details/${item.id}`)}
                          className="text-black  hover:text-red-700 hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                        >
                          <ReadMoreIcon />
                        </p>
                        {/* <p className="text-red-700 font-medium hover:underline">
                          Read More
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Sidebar Right */}
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center bg-white shadow-md py-1 px-2 rounded-md">
                <SearchIcon className="text-gray-500" />
                <input
                  type="text"
                  className="outline-none w-full py-2 px-3 rounded-md"
                  placeholder="Search"
                />
              </div>
              <div className="flex justify-end mt-3 gap-3">
                <p
                  onClick={() => navigate("/about-us")}
                  className="text-sm hover:text-gray-600 hover:underline cursor-pointer text-red-600"
                >
                  About Us
                </p>
                <p
                  onClick={() => navigate("/privacy")}
                  className="text-sm hover:text-gray-600 hover:underline cursor-pointer text-red-600"
                >
                  Privacy
                </p>
                <p
                  onClick={() => navigate("/terms")}
                  className="text-sm hover:text-gray-600 hover:underline cursor-pointer text-red-600"
                >
                  Terms
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
