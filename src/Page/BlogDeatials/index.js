import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import { useParams } from "react-router-dom";
import AxiosConfigadmin from "../../Config/AxiosConfig copy";
import { End_Urls } from "../../Config/End_Urls";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import Loader from "../../Config/Loder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Header1 from "../Header copy";

export default function BlogDeatials() {
  const [like, setLike] = useState(false);
  const [cset, setCset] = useState(false);
  const [user, setuser] = useState("");
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comment, setComment] = useState("");
  const [commentdata, setCommentData] = useState();
  const user_id = localStorage.getItem("user_id");
  const date = (datetime) => {
    const date = new Date(datetime);

    // Format date to "1 January 2025"
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };
  const time = (datetime) => {
    const date = new Date(datetime);

    // Format date to "1 January 2025"
    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedTime;
  };

  function setDeviceId() {
    const deviceId = localStorage.getItem("device_id") || generateDeviceId();
    localStorage.setItem("device_id", deviceId);
    return deviceId;
  }

  function generateDeviceId() {
    return "device_" + Math.random().toString(36).substr(2, 9); // Generates a random ID
  }

  const device_id = setDeviceId();

  // Fetch blog data
  const adminlogin = async () => {
    try {
      const res = await AxiosConfigadmin.get(
        End_Urls.getsingaleblog + `?id=${id}&devi=${device_id}`
      );
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const response = await axios.post(
        "https://api.saarkansas.org/user/like_blog",
        {
          blog_id: id,
          like_status: cset ? 0 : 1, // Toggle like/unlike
          device_id: device_id,
        }
      );

      adminlogin();
      // setLikeStatus(!cset);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const unhandleLike = async (likr_id) => {
    try {
      const response = await axios.post(
        "https://api.saarkansas.org/user/un_likeBlog",
        {
          blog_id: id,
          like_id: likr_id, // Toggle like/unlike
        }
      );

      adminlogin();
      // setLikeStatus(!cset);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const getComment = async () => {
    try {
      const res = await AxiosConfigadmin.get(End_Urls.getcomment + `?id=${id}`);
      setCommentData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComment();
  }, [cset]);
  useEffect(() => {
    adminlogin();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    try {
      await axios.post("https://api.saarkansas.org/user/add_comment", {
        blog_id: data?.id,
        comment_content: comment,
        user_id: user_id ? user_id : user,
      });
      setComment("");
      adminlogin(); // Refresh the blog data after commenting
      localStorage.setItem("user_id", user);
      getComment();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to add comment!");
    }
  };

  // Toggle functions for like and comment visibility
  const toggleLike = () => setLike((prev) => !prev);
  const toggleCommentSection = () => setCset((prev) => !prev);

  if (!data) return <Loader />;

  const {
    title,
    like_id,
    image_url,
    description,
    admin_name,
    created_date,
    total_likes,
    total_comments,
    like_status,
  } = data;

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header1 />
      <div className="max-w-7xl mx-auto lg:px-0 px-1  lg:bg-white rounded-t-xl mt-2 lg:mt-8">
        <div className=" overflow-hidden ">
          {image_url.split(".")[3] === "mp4" ? (
            <video
              className="w-full lg:h-96 h-64 object-cover rounded-t-xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={image_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={image_url}
              alt="Image"
              className="w-full lg:h-96 h-64 object-cover rounded-t-xl"
            />
          )}
          {/* <img
            src={image_url}
            alt="Post"
            className="w-full h-[50%] object-cover"
          /> */}
          <div className="p-6 bg-white">
            <h2 className="text-2xl text-red-700  font-semibold mb-2">
              {title}
            </h2>
            <p className="text-sm text-red-700 mb-4">
              By {admin_name} |{" "}
              {`${date(created_date)} time: ${time(created_date)}`}
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-gray-700 mb-1"
            ></p>

           
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-500 border-t-2 bg-white">
              <div className="flex items-center gap-2">
                {like_status === 0 ? (
                  <p
                    onClick={() => {
                      toggleLike();
                      handleLike();
                    }}
                    className="text-black   hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                  >
                    <FavoriteBorderIcon />
                    {total_likes}
                  </p>
                ) : (
                  <p
                    onClick={() => unhandleLike(like_id)}
                    className="text-red-700  hover:text-red-700 hover:bg-red-100 hover:rounded-3xl px-5 py-1"
                  >
                    <FavoriteIcon /> {total_likes}
                  </p>
                )}

                <MarkChatUnreadOutlinedIcon
                  onClick={toggleCommentSection}
                  className="cursor-pointer"
                />
                {total_comments}
              </div>
            </div>

        {cset && (
          <div className="text-sm mt-2 ">
            
            <div className="lg:px-6 px-2 flex flex-col py-4 bg-white shadow-md rounded-lg">
            <h4 className="text-lg text-red-700 font-semibold mb-2 lg:pl-5">Comment</h4>
              <div className="flex flex-col max-h-52 overflow-auto lg:px-10 px-5">
                {commentdata?.map((item) => {
                  return (
                    <span
                      className={`flex items-center my-2 py-1 rounded-md  ${
                        item.user_id == user_id
                          ? " text-red-700 bg-gray-50"
                          : " bg-gray-50"
                      }`}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                        alt=""
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-bold text-red-700">{item.user_id}</p>
                        <p className="pl-2">{item.comment_content}</p>
                      </div>
                    </span>
                  );
                })}
              </div>

              <form onSubmit={handleCommentSubmit}>
                <div className="flex flex-col gap-1 rounded-lg p-4">
                
                    <input
                      type="text"
                      placeholder="Enter User Name"
                      value={user_id?`@`+user_id:`@`+user}
                      onChange={(e) => setuser(e.target.value)}
                      className="outline-none border bg-gray-100 w-44 pl-1 ml-2 py-1 rounded-md"
                      disabled={user_id}
                    />
             

                  <div className="flex items-center gap-2">
                    <textarea
                      placeholder="Enter Comment"
                      className="py-2 rounded-md border w-full pl-5"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-gray-100 border py-1 text-center px-5 rounded-md text-white"
                    >
                      <SendIcon className="!text-red-700" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
