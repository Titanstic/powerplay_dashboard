import React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ListItemIcon from "@mui/material/ListItemIcon";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import logo from "../static/PPlay_logo.png";
import { Link } from "react-router-dom";
import "../style/App.css";

const drawerWidth = 320;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideBar = ({ open }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#f7f7f7",
        },
      }}
      className="sidebar"
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "270px",
            height: "60px",
            backgroundColor: "#f7f7f7",
            borderRadius: "40px",
            m: 4,
            mb: 2,
            padding: 2,
            boxShadow: 10,
          }}
        >
          <img src={logo} alt="power play" fontSize="300px" height="28px" />
        </Box>
      </DrawerHeader>
      <List className="nav-list" style={{ fontSize: "18px", padding: "1rem" }}>
        <Link to="/" className="nav-link">
          <ListItem button className="nav-btn">
            <ListItemIcon>
              <AccountCircleIcon
                sx={{ fontSize: "27px" }}
                className="nav-link-icon"
              />
            </ListItemIcon>
            Users
          </ListItem>
        </Link>
        <Link to="/video" className="nav-link">
          <ListItem button className="nav-btn">
            <ListItemIcon>
              <PlayCircleFilledIcon
                sx={{ fontSize: "27px" }}
                className="nav-link-icon"
              />
            </ListItemIcon>
            Video Package
          </ListItem>
        </Link>
        <Link to="/routine" className="nav-link">
          <ListItem button className="nav-btn">
            <ListItemIcon>
              <ScheduleSendIcon
                sx={{ fontSize: "27px" }}
                className="nav-link-icon"
              />
            </ListItemIcon>
            Exercise Routine
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SideBar;
