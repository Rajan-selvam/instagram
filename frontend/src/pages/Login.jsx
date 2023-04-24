import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CopyRight } from "../components/login/CopyRight";
// import Slider from "../components/login/Slider";

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  React.useMemo(() => {
    document.title = "Log in • Instagram"
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {/* <Grid
          item
          md={5}
          square
          sx={{
            margin: 5,
          }}
        >
          <Slider />
        </Grid> */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          component={Paper}
          elevation={3}
          square
          sx={{
            height: {md: "90vh"},
            mt: { md: 4, xs: 0, sm: 0 },
            ml: "auto",
            mr: "auto",
            padding: "0px 30px",
          }}
        >
          <Box
            sx={{
              my: 7,
              mx: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" className="login-logo">
              Instagram
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 5 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                placeholder="email or username"
                name="email"
                autoComplete="email"
                // autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                placeholder="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 3 }}
              >
                Log In
              </Button>
              <Grid container sx={{ mt: 5 }}>
                <Grid item sx={{ margin: "auto" }}>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ color: "black", textDecoration: "none" }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Grid container sx={{ mt: 2 }}>
                <Grid item sx={{ margin: "auto" }}>
                  Don't have an account?
                  <Link
                    onClick={() => navigate("/sign-up")}
                    variant="body1"
                    sx={{ paddingLeft: "5px", textDecoration: "none", cursor: "pointer" }}
                  >
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <CopyRight sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
