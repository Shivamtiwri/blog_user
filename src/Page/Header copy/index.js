import React, { useContext, useState } from "react";
import log from "../../Assests/image.png";
import { useNavigate } from "react-router-dom";
import AnchorTemporaryDrawer from "../AnchorTemporaryDrawer";
import { Button, Menu, MenuItem } from "@mui/material";
import { StakingApp } from "../../Hook";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

export default function Header1() {
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
      <div className="max-w-7xl bg-white shadow-md  lg:rounded-md mx-auto px-4 lg:py-4 py-3 flex justify-between items-center">
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
              className=" !text-red-500"
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
    </nav>
  );
}
