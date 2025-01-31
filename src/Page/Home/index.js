import React, { useEffect, useState } from "react";
import image from "../../Assests/02.7b36c041.jpg";
import AxiosConfigadmin from "../../Config/AxiosConfig copy";
import { End_Urls } from "../../Config/End_Urls";

const Home = () => {
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
    <div className="lg:p-20 p-5">
      <p className="text-gray-500 font-bold text-4xl">Blog List</p>
      <div className="lg:flex gap-3 w-full my-10  ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:w-[80%] w-full">
          <div className="flex flex-col bg-white my-5 rounded-bl-xl rounded-br-xl shadow-xl rounded-tl-xl rounded-tr-xl">
            <div className="flex image  ">
              <img src={image} alt="" className="rounded-tl-xl rounded-tr-xl" />
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
                Donut fruitcake soufflé apple pie candy canes jujubes croissant
                chocolate bar ice cream.
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
          <div className="flex flex-col bg-white my-5 rounded-bl-xl rounded-br-xl shadow-xl rounded-tl-xl rounded-tr-xl">
            <div className="flex image  ">
              <img src={image} alt="" className="rounded-tl-xl rounded-tr-xl" />
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
                Donut fruitcake soufflé apple pie candy canes jujubes croissant
                chocolate bar ice cream.
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
          <div className="flex flex-col bg-white my-5 rounded-bl-xl rounded-br-xl shadow-xl rounded-tl-xl rounded-tr-xl">
            <div className="flex image  ">
              <img src={image} alt="" className="rounded-tl-xl rounded-tr-xl" />
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
                Donut fruitcake soufflé apple pie candy canes jujubes croissant
                chocolate bar ice cream.
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
          <div className="flex flex-col bg-white my-5 rounded-bl-xl rounded-br-xl shadow-xl rounded-tl-xl rounded-tr-xl">
            <div className="flex image  ">
              <img src={image} alt="" className="rounded-tl-xl rounded-tr-xl" />
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
                Donut fruitcake soufflé apple pie candy canes jujubes croissant
                chocolate bar ice cream.
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
        <div className="flex flex-col gap-5 lg:w-[20%] my-5">
          <div className="flex gap-3 ">
            <img src={image} alt="" className="h-20 w-20 rounded-lg" />
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold">
                Why Should Forget Facebook?
              </p>
              <p className="text-gray-400">Jan 14 2020</p>
            </div>
          </div>
          <div className="flex gap-3 ">
            <img src={image} alt="" className="h-20 w-20 rounded-lg" />
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold">
                Why Should Forget Facebook?
              </p>
              <p className="text-gray-400">Jan 14 2020</p>
            </div>
          </div>
          <div className="flex gap-3 ">
            <img src={image} alt="" className="h-20 w-20 rounded-lg" />
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold">
                Why Should Forget Facebook?
              </p>
              <p className="text-gray-400">Jan 14 2020</p>
            </div>
          </div>
          <div className="flex gap-3 ">
            <img src={image} alt="" className="h-20 w-20 rounded-lg" />
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold">
                Why Should Forget Facebook?
              </p>
              <p className="text-gray-400">Jan 14 2020</p>
            </div>
          </div>
          <div className="flex gap-3 ">
            <img src={image} alt="" className="h-20 w-20 rounded-lg" />
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold">
                Why Should Forget Facebook?
              </p>
              <p className="text-gray-400">Jan 14 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
