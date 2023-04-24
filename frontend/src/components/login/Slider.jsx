import { useState } from "react";
import image1 from "../../assests/img/LoginCollapase/image1.png";
import image2 from "../../assests/img/LoginCollapase/image2.png";
import image3 from "../../assests/img/LoginCollapase/image3.png";
import image4 from "../../assests/img/LoginCollapase/image4.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const images = [
    {
        key: 0,
        url: image1
    },
    {
        key: 1,
        url: image2
    },
    {
        key: 2,
        url: image3
    },
    {
        key: 3,
        url: image4
    },
];

const Slider = () => {
    const [key, setKey] = useState(0);

    setInterval(() => {
        if (key < 3)
            setKey(key + 1);
        else
            setKey(0);
    }, 10000);

  return (
    <Box
      component={Paper}
      elevation={6}
      sx={{
        width: "255px",
        float: "right",
        borderRadius: "25px",
        height: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${images[key]?.url})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Slider;
