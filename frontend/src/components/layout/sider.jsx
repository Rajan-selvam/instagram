import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./layout.css";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Avatar,
  Popover,
  Button,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import CreatePost from "../modal/CreatePost";


const Sider = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [createpost, setCreatePost] = useState(false);
  const navigate = useNavigate();
  
  const menus = [
    { label: "Home", url: "/", icon: <HomeOutlinedIcon /> },
    { label: "Search", url: "/", icon: <SearchOutlinedIcon /> },
    { label: "Explore", url: "/", icon: <ExploreOutlinedIcon /> },
    { label: "Reels", url: "/", icon: <SlideshowOutlinedIcon /> },
    { label: "Messages", url: "/", icon: <DraftsOutlinedIcon /> },
    { label: "Notifications", url: "/", icon: <FavoriteBorderOutlinedIcon /> },
    { label: "Create", props: true, handler: setCreatePost , icon: <AddBoxOutlinedIcon /> },
    { label: "Profile", url: "/profile", icon: <Avatar
    alt="Profile_Pic"
    src="https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg"
    sx={{ width: 26, height: 26, border: "2px solid black" }}
  /> },
  ];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const navigateHandler = (type, url, props) => {
    if (type === "url") {
      navigate(url);
    }
    else if (type === "handler") {
      url(props);
    }
  };

  return (
    <Grid>
      <Box className="sider_logo_box">
        <Typography className="logo" onClick={() => navigate("/")}>
          Instagram
        </Typography>
      </Box>
      <Box className="sider_menu_box">
        <List>
          {menus?.map((menu, i) => (
            <ListItem
              key={i}
              disablePadding
              onClick={() =>
                menu.url
                  ? navigateHandler("url", menu.url)
                  : navigateHandler("handler", menu.handler, menu.props)
              }
            >
              <ListItemButton>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="More" />
            </ListItemButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              elevation={3}
              className="logout_popover"
            >
              <Button sx={{ p: 1, width: "100%", color: "black" }}>
                Log out
              </Button>
            </Popover>
          </ListItem>
        </List>
      </Box>
      <CreatePost open={createpost} setOpen={setCreatePost} />
    </Grid>
  );
};

export default Sider;
