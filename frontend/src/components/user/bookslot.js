import { Button, TextField } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import { Formik } from "formik";
import app_config from "../../config";

const BookSlot = () => {

    const url = app_config.backend_url;
    const [selFile, setSelFile] = useState("");
    const navigate = useNavigate();
  
    const [SlotArray, setSlotArray] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(sessionStorage.getItem("user"))
    );
  
    const userForm = {
      City: "",
      Type: "",
      Carnumber: "",
      Checkin: "",
      Checkout: "",
      Email: "",
      Phone: "",
      owner: currentUser._id,
      createAt: new Date(),
    };
  
    const userSubmit = (formdata) => {
      console.log(formdata);
  
      fetch(url + "/book/add", {
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
    <div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <div class="form-header">
                        <h1 className='mt-4'>Book Slot Now</h1>
                    </div>
                    <Formik initialValues={userForm} onSubmit={userSubmit}>
                        {({ values, handleSubmit, handleChange, errors }) => (
                    <form   onSubmit={handleSubmit}>
                        <div class="form-group">
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
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
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
                            <div class="col-md-6">
                                <div class="form-group">
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="text"
                                  label="Car Number"
                                  id="carnumber"
                                  value={values.carnumber}
                                  onChange={handleChange}
                                 
                                />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">

                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="text"
                                  label="Check In"
                                  id="checkin"
                                  value={values.checkin}
                                  onChange={handleChange}
                               
                                />
                              
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="text"
                                  label="Check Out"
                                  id="checkout"
                                  value={values.checkout}
                                  onChange={handleChange}
                                 
                                />
                                </div>
                            </div>
                           
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
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
                            <div class="col-md-6">
                                <div class="form-group">
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="text"
                                  label="phone"
                                  id="phone"
                                  value={values.phone}
                                  onChange={handleChange}
                                />
                                </div>
                            </div>
                        </div>
                        <div class="form-btn">
                        <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                className="w-100"
                                color="primary"
                          
                              >
                                Book
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
  )
}

export default BookSlot;
