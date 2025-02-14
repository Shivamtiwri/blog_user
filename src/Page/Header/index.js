import React, { useContext, useState } from "react";
import log from "../../Assests/image.png";
import { useNavigate } from "react-router-dom";
import AnchorTemporaryDrawer from "../AnchorTemporaryDrawer";
import { Button, Menu, MenuItem } from "@mui/material";
import { StakingApp } from "../../Hook";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function Header() {
  const navigate = useNavigate();
  const { todate,setTodate,fromdate,setFromdate } = useContext(StakingApp);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleYearTo = (event) => {
    setTodate(event.target.value);
  };

  const handleYearFrom = (event) => {
    setFromdate(event.target.value);
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
              <div className="px-2 w-48 broder-b my-1">
                <p>To date</p>
                <input
                  type="date"
                  value={todate}
                  onChange={handleYearTo}
                  placeholder="Enter Year"
                  min="1900"
                  max="2100"
                  className="border p-2 rounded-md w-full"
                />
              </div>

              <div className="px-2 w-48 border-t my-1">
                <p>From date</p>
                <input
                  type="date"
                  value={fromdate}
                  onChange={handleYearFrom}
                  placeholder="Enter Year"
                  min="1900"
                  max="2100"
                  className="border p-2 rounded-md w-full"
                />
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
