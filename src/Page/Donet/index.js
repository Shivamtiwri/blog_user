



import React from "react";

const DonationForm = () => {
  return (
   
    <div className="min-h-screen bg-white py-10 px-3 flex flex-col justify-center ">
      <div className="flex flex-col items-center mb-6">
       
         <img src="https://scontent.fknu1-2.fna.fbcdn.net/v/t39.30808-6/469005751_542147531970434_8900241049583642938_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=_8D4kCUJOIcQ7kNvgGbh4Ia&_nc_oc=Adh31ScRmHFCS-Z11k32XPPtc5yOZDixMWZii90U-VcARK2zoIqKG10BjJ3Hism87dM&_nc_zt=23&_nc_ht=scontent.fknu1-2.fna&_nc_gid=rNxA7YNL80H3pYE6kDxTOQ&oh=00_AYHE9ijGBgzk1MokILFtHdvmeH8fLTqEDG6w0Skn6p51ww&oe=67DE2D52" alt=""/>
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
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
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
