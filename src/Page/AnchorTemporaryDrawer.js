import React, { useCallback } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../Assests/image.png";
import { useNavigate } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const navigate=useNavigate()
  const [state, setState] = React.useState({
    right: false, // Only track the right-side drawer state
  });

  const toggleDrawer = useCallback(
    (open) => (event) => {
      // Prevent opening/closing with Tab or Shift keys
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
        return;
      }

      setState((prevState) => ({ ...prevState, right: open })); // Only toggle the right drawer
    },
    []
  );

  return (
    <div>
      {/* Button to open the right drawer */}
      <MenuIcon onClick={toggleDrawer(true)} aria-label="open menu" />

      {/* Drawer component */}
      <Drawer
        anchor="bottom"
        open={state.right}
        onClose={toggleDrawer(false)} // Close on clicking outside
        sx={{
          '& .MuiDrawer-paper': {
            borderTopLeftRadius: '16px', // Apply top-left radius
            borderTopRightRadius: '16px', // Apply top-right radius
          },
        }}
      >
        <div className="flex flex-col p-5">
          {/* Search Bar */}
          <div className="flex items-center bg-white border py-1 px-2 rounded-md">
            <SearchIcon className="text-gray-500" />
            <input
              type="text"
              className="outline-none w-full py-2 px-3 rounded-md"
              placeholder="Search"
              aria-label="search"
            />
          </div>

          {/* Logo and Title */}
          <div className="flex flex-col items-center mt-5 gap-4">
            <img
              src={logo}
              alt="Shruthilaya Music Academy Logo"
              className="h-20 w-20 rounded-full shadow-md"
            />
            <div className="text-center">
              <div className="text-red-700 text-2xl font-semibold">Shruthilaya Music</div>
              <div className="text-red-700 text-lg">Academy</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center mt-5 gap-3">
            <div className="flex w-[50%] justify-between">
              <p onClick={()=>navigate("/about-us")} className="text-sm text-gray-600 cursor-pointer hover:text-red-600 hover:underline transition-colors">
                About us
              </p>
              <p onClick={()=>navigate("/privacy")} className="text-sm text-gray-600 cursor-pointer hover:text-red-600 hover:underline transition-colors">
                Privacy
              </p>
            </div>
            <p onClick={()=>navigate("/terms")} className="text-sm text-gray-600 cursor-pointer hover:text-red-600 hover:underline transition-colors">
              Terms
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
