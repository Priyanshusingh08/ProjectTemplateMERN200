import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import app_config from "../../config";
import IconButton from "@mui/material/IconButton";

const Manageprofile = () => {
  const url = app_config.backend_url;

  const userForm = {
    name: "",
    email: "",
    phone: "",
    city: "",
    state:"",
    road:"",
    image:"",
    about:"",

  };

  const userSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/ownerprofile/add");
    fetch(url + "/ownerprofile/add", {
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
      });
  };


  return (
    <Formik
                        initialValues={userForm}
                        onSubmit={userSubmit}
                    
                      >
                        {({ values, handleSubmit, handleChange, errors }) => (
                          <form
                            onSubmit={handleSubmit}
                            className="mx-1 mx-md-4"
                          >
          <div className="bdy mt-5">
            <div className="container">
              <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="account-settings">
                        <div className="user-profile">
                          <div className="user-avatar">
                            <img
                              className="img-fluid"
                              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                              alt="Maxwell Admin"
                            />
                            <input
                              className="form-control w-100 mb-4"
                              type="file"
                              id="image"
                              value={values.image}
                            onChange={handleChange}
                            />
                          </div>
                          <h5 className="user-name mt-2">Yuki Hayashi</h5>
                          <h6 className="user-email">yuki@Maxwell.com</h6>
                        </div>
                        <div className="about">
                          <TextField
                            className="mt-2"
                            fullWidth
                            id="about"
                            label="About you"
                            multiline
                            rows={4}
                            value={values.about}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mb-2 text-primary">
                            Personal Details
                          </h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <TextField
                              fullWidth
                              variant="outlined"
                        
                              type="text"
                              label="Name"
                              id="name"
                              value={values.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <TextField
                              fullWidth
                              variant="outlined"
                              
                              type="text"
                              label="Email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <TextField
                              fullWidth
                              variant="outlined"
                              
                              type="text"
                              label="Phone"
                              id="phone"
                              value={values.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                       
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mt-3 mb-2 text-primary">Address</h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <TextField
                              fullWidth
                              variant="outlined"
                            
                              type="text"
                              label="City"
                              id="city"
                              value={values.city}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <TextField
                              fullWidth
                              variant="outlined"
                              
                              type="text"
                              label="State"
                              id="state"
                              value={values.state}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <TextField
                              fullWidth
                              variant="outlined"
                              
                              type="text"
                              label="road"
                              id="road"
                              value={values.road}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                    
                        
                        
                        
                       
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="text-right">
                            <Button
                              fullWidth
                              type="submit"
                              size="large"
                              variant="contained"
                              className="w-100"
                              color="primary"
                            >
                              Update
                            </Button>

                            <Button
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                              className="w-100 mt-3"
                              color="error"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </form>
                        )}
                      </Formik>
  );
};

export default Manageprofile;
