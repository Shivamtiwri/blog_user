import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Menu, MenuItem } from "@mui/material";
import { StakingApp } from "../Hook";

const Search = () => {
  const { selectedDate, setSelecteddate, page,email, setEmail, subscribe ,serch,setSerceh } = useContext(StakingApp);

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
    <div className="lg:hidden my-2">
      {page === 2 && (<div className="px-5">
        <p className="font-bold text-red-700 my-1">Subscribe to get reminder on your mail</p>
        <div className="flex gap-2 items-center  ">
          <input
            type="email"
            placeholder="Enter Email"
            className="outline-none border rounded-md py-2 pl-2 w-[75%]"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <button onClick={()=>subscribe()} className="bg-red-700 py-2 w-[25%] rounded-md text-white px-2 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
       
      )}

      <div className="flex w-full px-5 items-center mt-3 gap-2 lg:hidden">
        <div className="flex items-center bg-white w-[90%] shadow-md py-1 px-2 rounded-full">
          <SearchIcon className="!text-red-700" />
          <input
            type="text"
            className="outline-none w-full py-2 px-3 bg-transparent rounded-md"
            placeholder="Search"
            value={serch}
            onChange={(e)=>setSerceh(e.target.value)}
          />
        </div>
        <div className="p-2 bg-white shadow-md rounded-full">
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
  );
};

export default Search;
