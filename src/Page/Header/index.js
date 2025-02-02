import React, { useContext, useState } from "react";
import log from "../../Assests/image.png";
import { useNavigate } from "react-router-dom";
import AnchorTemporaryDrawer from "../AnchorTemporaryDrawer";
import { Button, Menu, MenuItem } from "@mui/material";
import { StakingApp } from "../../Hook";

export default function Header() {
  const navigate = useNavigate();
  

  const { selectedDate, setSelecteddate } = useContext(StakingApp);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 

  const handleYearChange = (event) => {
    setSelecteddate(event.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //[#7367f0]
  return (
    <nav className="bg-[#FFFF] shadow-md sticky top-5 z-10 lg:mx-[8%] mx-5 rounded-md ">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={log} alt="" className="h-8 w-8 rounded-full" />
          <div className="text-red-700 text-xl font-bold ">Shruthilaya</div>
        </div>

        <div>
          <div className="lg:hidden">
            <AnchorTemporaryDrawer />
          </div>
          <div className="lg:block hidden ">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="!border !border-red-500 !bg-red-500 !text-white"
            >
              Filter
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleYearChange}
                  placeholder="Enter Year"
                  min="1900"
                  max="2100"
                />
              </MenuItem>
              {/* <MenuItem>
                <input
                  type="month"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                />
              </MenuItem> */}
            </Menu>
          </div>
        </div>

        {/* <div className="flex rounded-full bg-gray-100 p-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
        </div> */}
      </div>
    </nav>
  );
}
