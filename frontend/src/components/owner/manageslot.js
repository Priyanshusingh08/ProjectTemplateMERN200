import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import app_config from "../../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageSlot = () => {
  const url = app_config.backend_url;
  const [selFile, setSelFile] = useState("");
  const navigate = useNavigate();

  const [SlotArray, setSlotArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("owner"))
  );

  const userForm = {
    title: "",
    type: "",
    price: 0,
    total: 0,
    owner: currentUser._id,
    createAt: new Date(),
  };

  const userSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/slot/add", {
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
          text: "Added successfully",
        });
        
      });
      
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Add Slot
                      </p>

                      <Formik initialValues={userForm} onSubmit={userSubmit}>
                        {({ values, handleSubmit, handleChange, errors }) => (
                          <form
                            onSubmit={handleSubmit}
                            className="mx-1 mx-md-4"
                          >
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="text"
                                  label="Title"
                                  id="title"
                                  value={values.title}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="text"
                                  label="Type"
                                  id="type"
                                  value={values.type}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="number"
                                  label="Price per 4 hrs."
                                  id="price"
                                  value={values.price}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <TextField
                                  fullWidth
                                  type="text"
                                  variant="outlined"
                                  label="Total Slots Available"
                                  id="total"
                                  value={values.total}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                className="w-100 ml-4"
                                color="primary"
                          
                              >
                                Add Slot
                              </Button>
                              
                              <Button
                                fullWidth
                                
                                variant="outlined"
                                className="w-100 ml-4"
                                color="primary"
                                onClick={(e) => navigate("/owner/manageplan")}
                          
                              >
                                View 
                              </Button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageSlot;
