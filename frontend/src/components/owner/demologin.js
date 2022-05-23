import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  import { Formik } from "formik";
  import { useNavigate } from "react-router-dom";
  import Swal from "sweetalert2";
  import app_config from "../../config";

const Demologin = () => {
    const url = app_config.backend_url;
    const navigate = useNavigate();
  
    const loginForm = {
      email: "",
      password: "",
    };
  
    const loginSubmit = (formdata) => {
      console.log(formdata);
  
      fetch(url + "/owner/authenticate", {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success!!",
            text: "Successfully loggedin",
          });
          console.log("there");
          res.json().then((data) => {
            sessionStorage.setItem("owner", JSON.stringify(data));
            navigate("/owner/manageplan");
          });
        } else if (res.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Oops!!",
            text: "Login Failed",
          });
        }
      });
    };
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://www.freeiconspng.com/uploads/log-off-icon-3.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Formik initialValues={loginForm} onSubmit={loginSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
        
        
        <Box component="form" sx={{ mt: 1 }}>
        <TextField
                    className="w-100 mb-4"
                    label="Email"
                    variant="outlined"
                    helperText="Invalid Email ID"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <TextField
                    className="w-100 mb-4"
                    label="Password"
                    variant="outlined"
                    type="password"
                    helperText="Enter correct password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        </form>
              )}
            </Formik>
      </Box>
    </Grid>
  </Grid>
  )
}

export default Demologin;
