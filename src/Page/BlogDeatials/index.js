import React, { useState } from "react";
import Header from "../Header";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export default function BlogDeatials() {
  const [like, setlike] = useState(false);

  const toggleMenu = () => {
    setlike((prev) => !prev); // Toggle menu visibility
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg"
            alt="Post"
            className="w-full h-[50%] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              SimpleText allows text editing and text formatting
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              By shivam | Jan 10, 2020
            </p>
            <p className="text-gray-700 mb-4">
              Before you get into the nitty-gritty of coming up with a perfect
              title, start with a rough draft: your working title. What is that,
              exactly? A lot of people confuse working titles with topics. Let’s
              clear that. Topics are very general and could yield several
              different blog posts...
            </p>
            <h3 className="text-lg font-semibold mb-2">
              Unprecedented Challenge
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Preliminary thinking systems</li>
              <li>Bandwidth efficient</li>
              <li>Green space</li>
              <li>Social impact</li>
              <li>Thought partnership</li>
              <li>Fully ethical life</li>
            </ul>
            <div className="flex justify-between items-center text-gray-500">
              <div className="flex items-center gap-2">
                <FavoriteBorderIcon
                  onClick={() => toggleMenu()}
                  className={`${
                    like ? "text-red-500 cursor-pointer" : "cursor-pointer"
                  }`}
                />
                139
                <MarkChatUnreadOutlinedIcon className="cursor-pointer" />
                131k
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
        <h4 className="text-lg font-semibold mb-2">Comment</h4>
        <div className="px-6 py-4 bg-white  shadow-md rounded-lg ">
          <div className=" rounded-lg p-4 ">
            <p className="text-gray-700 mb-2">Shivam - May 24, 2020</p>
            <p className="text-gray-600">
              A variation on the question technique above, the multiple-choice
              question great way to engage your reader.
            </p>
            <button className="text-blue-600 mt-2">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
