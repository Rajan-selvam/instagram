// import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import styles from "./pages.module.css";
import { Divider } from "@mui/material";
import GridPost from "../components/profile/GridPost";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={5} className={styles.profileDetails}>
        <Grid md={5} sm={8} className={styles.profilePicture}>
            <Avatar className={styles.avatar} src="https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg" />
        </Grid>
        <Grid md={5} sm={3} className={styles.details}>
            <div>
                <div className={styles.nameContainer}>
                  <p>_rajan_vjs</p>
                  <p className={styles.editProfile}>Edit Profile</p>
                </div>
                <div className={styles.postContainer}>
                    <p><span className="bold">23 </span>posts</p>
                    <p><span className="bold">100 </span>followers</p>
                    <p><span className="bold">20 </span>following</p>
                </div>
                <div className={styles.bioContainer}>
                    <p>Rajan</p>
                    <p>Developer</p>
                    <p>Music Addict</p>
                    <p className={styles.bioUrl}>Bio-url</p>
                </div>
            </div>
        </Grid>
      </Grid>
    </Box>
      <Divider light sx={{ mr: 4, ml: 4 }} />
      <GridPost />
    </div>
  );
};

export default Profile;
