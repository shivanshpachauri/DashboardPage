import React from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import data from "./Data.json";
const BottomComponent = () => {
  const [isDraweropen, setisDraweropen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setisDraweropen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDraweropen}
        onClose={() => setisDraweropen(false)}
      >
        <Box p={2} width="250px" role="presentation">
          {data.map((data) => (
            <div key={data.id}>
              <input type="checkbox" />
              <h6>{data.category}</h6>
            </div>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default BottomComponent;
