import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import app_config from "../../config";
import IconButton from "@mui/material/IconButton";
import toast from "react-hot-toast";

const Manageprofile = () => {
  const url = app_config.backend_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("owner"))
  );
  const [loading, setLoading] = useState(true);
  const [updateForm, setUpdateForm] = useState(currentUser);
  const [selImage, setSelImage] = useState("");

  console.log(currentUser);

  const onFormSubmit = (value, { setSubmitting }) => {
    fetch(url + "/owner/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setCurrentUser(data);
          sessionStorage.setItem("owner", JSON.stringify(data));
        });
      }
      Swal.fire({
        icon: "success",
        title: "Welldone!",
        text: "You have successfully Updated",
      });
    });
  };

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        fetch(url + "/owner/update/" + currentUser._id, {
          method: "PUT",
          body: JSON.stringify({ image: file.name }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            res.json().then((data) => {
              console.log(data);
              setCurrentUser(data);
              sessionStorage.setItem("owner", JSON.stringify(data));
            });
          }
          Swal.fire({
            icon: "success",
            title: "Welldone!",
            text: "You have successfully Updated",
          });
        });
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  return (
    <Formik initialValues={updateForm} onSubmit={onFormSubmit}>
      {({ values, handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
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
                              src={
                                currentUser.image
                                  ? url + "/uploads/" + currentUser.image
                                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                              }
                              alt="Maxwell Admin"
                            />
                            <input
                              className="form-control w-100 mb-4"
                              type="file"
                              onChange={uploadThumbnail}
                            />
                          </div>
                          <h5 className="user-name mt-2">
                            {currentUser.username}
                          </h5>
                          <h6 className="user-email">{currentUser.email}</h6>
                        </div>
                        <div className="about">
                          <TextField
                            className="mt-2"
                            fullWidth
                            id="address"
                            label="Address"
                            multiline
                            rows={4}
                            value={values.address}
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
                              label="Parking Lot Title"
                              id="title"
                              value={values.title}
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
                              label="Username"
                              id="username"
                              value={values.username}
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
