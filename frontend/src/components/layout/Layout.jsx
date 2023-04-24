import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Sider from "./sider";
import "./layout.css";

const Layout = ({ layout }) => {
  return (
    <div>
        <Grid container className="main_container">
          <Grid
            className="sider_continer"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Sider />
          </Grid>
          <Grid className="body_container">
            <Outlet />
          </Grid>
        </Grid>
    </div>
  );
};

export default Layout;
