import React from "react";
import logo from "../../Assests/image.png";
import founder1 from "../../Assests/founder1.jpeg";
import founder2 from "../../Assests/founder2.jpeg";
import banner from "../../Assests/banner.jpg"

const Home = () => {
  return (
    <div className="min-h-screen py-2 bg-white">
      <div className="relative w-full">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-yellow-400 text-3xl font-bold drop-shadow-lg">
            SHRUTHILAYA ACADEMY OF ARKANSAS
          </h1>
        </div> */}
      </div>

      <div className="flex flex-col items-center mt-4">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 rounded-full border-4 border-black shadow-lg"
        />
        <h2 className="mt-2 text-xl font-semibold text-black">
          Shruthilaya Academy of Arkansas - SAA
        </h2>
      </div>

      <div className="mt-6 mx-6 p-4 bg-purple-600 text-white rounded-lg shadow-md">
        <h3 className="text-lg font-bold">About Us</h3>
        <p className="mt-2 text-sm">
          Team of Youth devoted to Carnatic music united through a shared
          passion for the arts and serving the community through arts, music,
          and dance to raise money for well-deserved causes.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-center text-xl font-semibold text-purple-700">
          The Founders
        </h3>
        <div className="flex flex-wrap justify-center mt-4 gap-6 px-2">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <img
              src={founder1}
              alt="Bhavana Sridharan"
              className="lg:w-40 lg:h-40 object-cover rounded-lg mx-auto"
            />
            <h4 className="mt-2 text-purple-700 font-bold">
              BHAVANA SRIDHARAN
            </h4>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <img
              src={founder2}
              alt="Siddarth Sridharan"
              className="lg:w-40 lg:h-40 object-cover rounded-lg mx-auto"
            />
            <h4 className="mt-2 text-purple-700 font-bold">
              SIDDARTH SRIDHARAN
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
