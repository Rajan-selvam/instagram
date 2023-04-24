import { Typography, Link } from "@mui/material";

export const CopyRight = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "} <span className="name">Rajan</span>
      <Link
        color="inherit"
        href="https://rajan-selvam.github.io/portfolio"
        target="new"
        sx={{ paddingLeft: "10px" }}
        className="my-site-link"
      >
        My Site
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
