import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const Login = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate("/main/pricingplan");
  const loginForm = {
    email: "",
    password: "",
  };
  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/authenticate", {
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

        res.json().then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/main/browseslot");
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
    <div className="login-back">

       <Container maxWidth="xs" sx={{ display: "flex", alignItems: "center" }}>
      <Card className="w-100">
        <p className="text-center mt-5 mb-5 h3">Login</p>
        <CardContent>
          <Formik initialValues={loginForm} onSubmit={loginSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
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
                  variant="contained"
                  className="w-100"
                  color="primary"
                  onSubmit={navigate}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>

    </div>
   
  );
};
export default Login;