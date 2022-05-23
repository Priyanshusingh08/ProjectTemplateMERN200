import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import * as Yup from "yup";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

const Demosignup = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  const userForm = {
    email: "",
    password: "",
    username: "",
    address: "",
    city: "",
    phone: "",
  };

  const userSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/owner/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registered successfully",
        });
        navigate("/main/ownerlogin");
      });
  };

  const myValidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    password: Yup.string().min(3, "Too Short!!").required("Password Required"),
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://www.parkingforme.com/blog/wp-content/uploads/2018/06/importance-of-car-parking-service.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={userForm}
            onSubmit={userSubmit}
            validationSchema={myValidation}
          >
            {({ values, handleSubmit, handleChange, errors }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="User name"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  helperText={errors.username}
                  error={Boolean(errors.username)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  helperText={errors.email}
                  error={Boolean(errors.email)}
                />

                <Grid container>
                  <Grid item xs>
                    <TextField
                      margin="normal"
                      required
                      id="city"
                      label="City"
                      value={values.city}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      margin="normal"
                      required
                      id="phone"
                      label="Phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  value={values.address}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
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
              </form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Demosignup;
