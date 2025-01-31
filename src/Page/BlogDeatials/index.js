import React, { useEffect, useState } from "react";
import Header from "../Header";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import { useParams } from "react-router-dom";
import AxiosConfigadmin from "../../Config/AxiosConfig copy";
import { End_Urls } from "../../Config/End_Urls";
import axios from "axios";

export default function BlogDeatials() {
  const [like, setlike] = useState(false);
  const [cset, setCset] = useState(false);
  const { id } = useParams();
  // ** States
  const [data, setData] = useState(null);
  const [comment, setComment] = useState();
  const toggleMenu1 = () => {
    setCset((prev) => !prev);
    setComment(""); // Toggle menu visibility
  };
  const adminlogin = () => {
    AxiosConfigadmin.get(End_Urls.getsingaleblog + `?id=${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Comment cannot be empty!");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.saarkansas.org/user/add_comment",
        {
          blog_id: data?.id,
          comment_content: comment,
        }
      );
      // toast.success();
      setComment("");
      adminlogin();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to add comment!");
    }
  };

  // const handleLike = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://api.saarkansas.org/user/like_blog",
  //       {
  //         blog_id: 10,
  //         like_status: likeStatus ? 0 : 1, // Toggle like/unlike
  //       }
  //     );

  //     console.log(response.data);
  //     alert(likeStatus ? "Blog unliked!" : "Blog liked!");
  //     setLikeStatus(!likeStatus);
  //   } catch (error) {
  //     console.error("Error:", error.response?.data || error.message);
  //     alert("Failed to like blog!");
  //   }
  // };

  useEffect(() => {
    adminlogin();
  }, [id]);
  const toggleMenu = () => {
    setlike((prev) => !prev); // Toggle menu visibility
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
          <img
            src={data?.image_url}
            alt="Post"
            className="w-full h-[50%] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{data?.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              By {data?.admin_name} | {data?.created_date}
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: data?.description }}
              className="text-gray-700 mb-4"
            ></p>

            <div className="flex justify-between items-center text-gray-500">
              <div className="flex items-center gap-2">
                <FavoriteBorderIcon
                  onClick={() => toggleMenu()}
                  className={`${
                    like ? "text-red-500 cursor-pointer" : "cursor-pointer"
                  }`}
                />
                {data?.total_likes}
                <MarkChatUnreadOutlinedIcon
                  onClick={() => toggleMenu1()}
                  className="cursor-pointer"
                />
                {data?.total_comments}
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
        {cset && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Comment</h4>
            <div className="px-6 py-4 bg-white  shadow-md rounded-lg ">
              <form onSubmit={handleCommentSubmit}>
                {/* <textarea
                  placeholder="Write a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
                <button type="submit">Submit Comment</button> */}
                <div className=" flex gap-5 items-center rounded-lg p-4 ">
                  {/* <p className="text-gray-700 mb-2">Shivam - May 24, 2020</p> */}
                  <textarea
                    type="text"
                    placeholder="Enter Comment"
                    className="py-2 rounded-md border w-full pl-5"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 py-2 px-5 rounded-md text-white"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
