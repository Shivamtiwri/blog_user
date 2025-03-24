
import React from "react";
import banner from "../../Assests/banner.jpg"

const DonationForm = () => {
  return (
   
    <div className="min-h-screen bg-white py-10 px-3 flex flex-col justify-center ">
      <div className="flex flex-col items-center mb-6">
       
         <img src={banner} alt=""/>
      </div>
      
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 border rounded-lg"
        />
        
        <select className="w-full p-3 border rounded-lg">
        <option>INR</option>
          <option>USD</option>
         
         
        </select>
        
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-3 border rounded-lg"
          />
        </div>
        
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-2/3 p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="MM/YY"
            className="w-1/6 p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="CVV"
            className="w-1/6 p-3 border rounded-lg"
          />
        </div>
        
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded-lg"
        ></textarea>
        
        <button className="w-full p-3 bg-red-700 text-white rounded-lg text-white font-bold"> Donate Now</button>
      </form>
    </div>
 
  );
};

export default DonationForm;
