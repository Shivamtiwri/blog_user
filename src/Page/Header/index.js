import React, { useContext, useState } from "react";
import log from "../../Assests/image.png";
import { useNavigate } from "react-router-dom";
import AnchorTemporaryDrawer from "../AnchorTemporaryDrawer";
import { Button, Menu, MenuItem } from "@mui/material";
import { StakingApp } from "../../Hook";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const navigate = useNavigate();
  const { selectedDate, setSelecteddate } = useContext(StakingApp);
  const [anchorEl, setAnchorEl] = useState(null);
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

  return (
    <nav className="sticky lg:top-5 top-0 z-10  lg:mx-5 lg:rounded-md">
      <div className="max-w-7xl bg-white shadow-md  lg:rounded-md mx-auto px-4 lg:py-2 py-3 flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img
            src={log}
            alt="Shruthilaya Logo"
            className="h-8 w-8 rounded-full"
          />
          <div className="text-red-700 text-xl font-bold">Shruthilaya</div>
        </div>

        <div>
          <div className="lg:hidden">
            <AnchorTemporaryDrawer />
          </div>
          <div className="hidden lg:block">
            <FilterListIcon
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className=" !text-red-700"
            />

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
                  className="border p-2 rounded-md w-full"
                />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="flex w-full px-5 items-center mt-3 gap-2 lg:hidden">
        <div className="flex items-center bg-gray-50 w-[90%] shadow-md py-1 px-2 rounded-full">
          <SearchIcon className="!text-red-700" />
          <input
            type="text"
            className="outline-none w-full py-2 px-3 bg-transparent rounded-md"
            placeholder="Search"
          />
        </div>
        <div className="p-2 bg-gray-50 shadow-md rounded-full">
          <FilterListIcon
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className=" !text-red-700"
          />
        </div>
      </div>
    </nav>
  );
}
