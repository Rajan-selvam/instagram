import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CopyRight } from "../components/login/CopyRight";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const theme = createTheme();

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: { error: false },
    password: { error: false  },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      fullName: data.get("fullName"),
      userName: data.get("userName"),
      password: data.get("password"),
    });
  };

  const validateEmail = (e) => {
    const value = e.target.value;
    let error;
    if (!value) {
      error = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid Email address";
    } 
    setFormErrors({
      ...formErrors,
      email: !error
      ? {
        error: false,
      } : {
        error: true,
      }
    });
  };

  const onChangeHandler = (event) => {
    setShowSubmit(false);
    const data = new FormData(event.currentTarget);
    if (
      data.get("email") &&
      data.get("fullName") &&
      data.get("userName") &&
      data.get("password") && 
      data.get("password").length > 4 &&
      !formErrors?.email?.error
    ) {
      setShowSubmit(true);
    } else if (
      data.get("password") && 
      data.get("password").length <= 4 &&
      event.target.name === "password"
    ) {
      setFormErrors({
        ...formErrors,
        password: {
          error: true,
        }
      })
    } 
    if (
      data.get("password") && 
      data.get("password").length > 4 &&
      event.target.name === "password"
    ) {
      setFormErrors({
        ...formErrors,
        password: {
          error: false,
        }
      })
    }
  };

  React.useMemo(() => {
    document.title = "Sign Up • Instagram";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          component={Paper}
          elevation={3}
          square
          sx={{
            height: { md: "90vh" },
            mt: { md: 4, xs: 0, sm: 0 },
            ml: "auto",
            mr: "auto",
            padding: "0px 30px",
          }}
        >
          <Box
            sx={{
              my: 6,
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
              sx={{ mt: 1, my: 3 }}
              component="form"
              noValidate
              onSubmit={handleSubmit}
              className="custom"
              onChange={onChangeHandler}
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                placeholder="email"
                name="email"
                autoComplete="email"
                // autoFocus
                onChange={validateEmail}
                required
                size="small"
                // color={formErrors?.email?.success ?? ""}
                error={formErrors?.email?.error}
              />
              <TextField
                margin="normal"
                fullWidth
                id="fullName"
                placeholder="Full Name"
                name="fullName"
                size="small"
              />
              <TextField
                margin="normal"
                fullWidth
                id="userNamr"
                placeholder="Username"
                name="userName"
                autoComplete="userName"
                size="small"
              />
              <OutlinedInput
                fullWidth
                size="small"
                id="password"
                placeholder="password"
                name="password"
                error={formErrors?.password?.error}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  mt: 2,
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 2, borderRadius: 3 }}
                disabled={!showSubmit}
              >
                Sign Up
              </Button>
              <Grid container sx={{ mt: 4 }}>
                <Grid item sx={{ margin: "auto" }}>
                  Have an account?
                  <Link
                    onClick={() => navigate("/login")}
                    variant="body1"
                    sx={{
                      paddingLeft: "5px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {"Log in"}
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

export default SignUp;
