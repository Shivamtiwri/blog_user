import * as React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AxiosConfigadmin from "../../Config/AxiosConfig copy";
import { End_Urls } from "../../Config/End_Urls";
import { StakingApp } from "../../Hook";
import ReactPlayer from "react-player";
import axios from "axios";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
export default function StyledAccordion() {
  const { serch } = React.useContext(StakingApp);
  const navigate = useNavigate();
  const playerRef = React.useRef(null);
  const [selectedMonth, setSelectedMonth] = React.useState(
    new Date().getMonth() + 1
  );
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState();
  const [selectedYear, setSelectedYear] = React.useState(
    new Date().getFullYear()
  );
  function setDeviceId() {
    const deviceId = localStorage.getItem("device_id") || generateDeviceId();
    localStorage.setItem("device_id", deviceId);
    return deviceId;
  }
  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  function generateDeviceId() {
    return "device_" + Math.random().toString(36).substr(2, 9);
  }

  const device_id = setDeviceId();
  const getBlog = () => {
    setIsLoading(true);
    AxiosConfigadmin.get(
      End_Urls.userget_blog + `?devi=${device_id}&status=${2}&todate=&fromdate=`
    )
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getBlog();
  }, [selectedYear && selectedMonth && selectedDate]);

  const yearScrollRef = React.useRef(null);
  const monthScrollRef = React.useRef(null);
  const dateScrollRef = React.useRef(null);
  const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 200;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2009 }, (_, i) => 2010 + i);

  const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();
  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const handleLike = async (id) => {
    try {
      const response = await axios.post(
        "https://api.saarkansas.org/user/like_blog",
        {
          blog_id: id,
          like_status: 1,
          device_id: device_id,
        }
      );

      getBlog();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const unhandleLike = async (id, likr_id) => {
    try {
      const response = await axios.post(
        "https://api.saarkansas.org/user/un_likeBlog",
        {
          blog_id: id,
          like_id: likr_id, // Toggle like/unlike
        }
      );
      getBlog();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-6 px-1">
      {/* Year Selector */}
      <div className="flex bg-white shadow-md p-2 rounded-md my-1 items-center gap-1">
        <ArrowBackIosIcon
          onClick={() => scroll(yearScrollRef, "left")}
          className="cursor-pointer"
        />
        <div
          ref={yearScrollRef}
          className="flex gap-2 overflow-auto whitespace-nowrap example"
        >
          {years.map((year) => (
            <div
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`py-1 px-3 rounded-xl shadow-lg font-semibold cursor-pointer my-1 ${
                selectedYear === year ? "bg-red-500 text-white" : "bg-gray-100"
              }`}
            >
              {year}
            </div>
          ))}
        </div>
        <ArrowForwardIosIcon
          onClick={() => scroll(yearScrollRef, "right")}
          className="cursor-pointer"
        />
      </div>

      {/* Month Selector */}
      <div className="flex bg-white shadow-md p-2 rounded-md my-1 items-center gap-1">
        <ArrowBackIosIcon
          onClick={() => scroll(monthScrollRef, "left")}
          className="cursor-pointer"
        />
        <div
          ref={monthScrollRef}
          className="flex gap-2 overflow-auto whitespace-nowrap example"
        >
          {months.map((month, index) => (
            <div
              key={index}
              onClick={() => setSelectedMonth(index + 1)}
              className={`py-1 px-3 rounded-xl shadow-lg font-semibold cursor-pointer my-1 ${
                selectedMonth === index + 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {month}
            </div>
          ))}
        </div>
        <ArrowForwardIosIcon
          onClick={() => scroll(monthScrollRef, "right")}
          className="cursor-pointer"
        />
      </div>

      {/* Date Selector */}
      <div className="flex bg-white shadow-md p-2 rounded-md my-1 items-center gap-1">
        <ArrowBackIosIcon
          onClick={() => scroll(dateScrollRef, "left")}
          className="cursor-pointer"
        />
        <div
          ref={dateScrollRef}
          className="flex gap-2 overflow-auto whitespace-nowrap example"
        >
          {dates.map((date) => (
            <div
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`py-1 px-3 rounded-xl shadow-lg font-semibold cursor-pointer my-1 ${
                selectedDate === date ? "bg-red-500 text-white" : "bg-gray-100"
              }`}
            >
              {date}
            </div>
          ))}
        </div>
        <ArrowForwardIosIcon
          onClick={() => scroll(dateScrollRef, "right")}
          className="cursor-pointer"
        />
      </div>
      <div>
        {data
          ?.filter((item) => item.title.includes(serch))
          .map((item) => (
            <div key={item.id} className="cursor-pointer ">
              <div className="flex flex-col ">
                <div className="relative my-1">
                  {item.file_type === "1" && (
                    <img
                      src={item.image_url}
                      alt="Blog Image"
                      className="w-full h-48 md:h-64 object-cover"
                    />
                  )}
                  {item.file_type === "2" && (
                    <ReactPlayer
                      ref={playerRef}
                      url={item.image_url}
                      controls
                      width="100%"
                      height="400px"
                    />
                  )}
                  {item.file_type === "3" && (
                    <ReactPlayer
                      ref={playerRef}
                      url={item.image_url}
                      controls
                      width="100%"
                      height="400px"
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
                      <span className="font-medium text-red-700">
                        {item.admin_name}
                      </span>
                      <span className="text-gray-400 font-semibold">
                        · {formatDate(item.created_date)}
                        {formatTime(item.created_date)}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {item.tags.map((tag, ind) => {
                        return (
                          <p
                            className={`${
                              ind + 1 === 1
                                ? "bg-green-200"
                                : ind + 1 === 2
                                ? "bg-red-200"
                                : ind + 1 === 3
                                ? "bg-yellow-200"
                                : ind + 1 === 4
                                ? "bg-blue-200"
                                : ind + 1 === 5
                                ? "bg-purple-200"
                                : "bg-amber-200"
                            } rounded-full px-2 shadow-md my-3`}
                          >
                            {tag.tag_name}
                          </p>
                        );
                      })}
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                      className="text-gray-600 text-base mb-4 line-clamp-3"
                    ></p>
                  </div>

                  <div className="flex justify-between items-center mt-3 border-b-2 py-3 px-4">
                    <span className="flex gap-1">
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
                      <p
                        onClick={() => navigate(`/details/${item.id}`)}
                        className="text-black  hover:text-red-700 hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                      >
                        <ChatBubbleOutlineIcon /> {item.total_comments}
                      </p>
                    </span>

                    <p
                      onClick={() => navigate(`/details/${item.id}`)}
                      className="text-black  hover:text-red-700 hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                    >
                      <ReadMoreIcon />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
