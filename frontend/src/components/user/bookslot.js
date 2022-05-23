import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import app_config from "../../config";

const BookSlot = () => {
  const url = app_config.backend_url;
  const [selFile, setSelFile] = useState("");
  const navigate = useNavigate();

  const [SlotArray, setSlotArray] = useState([]);
  const [slotData, setSlotData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slotid } = useParams();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const userForm = {
    carnumber: "",
    checkin: "",
    checkout: "",
    email: "",
    phone: "",
    owner: currentUser._id,
    slot: slotid,
    createAt: new Date(),
  };

  const fetchSlot = () => {
    fetch(url + "/slot/getbyid/" + slotid).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setSlotData(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchSlot();
  }, []);

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
          text: "Booked successfully",
        });
      });
  };

  const showSlotDetails = () => {
    if (!loading) {
      return (
        <div className="card">
          <div className="card-body">
            <h3>
              <span className="fw-bold">Parking Name : </span>
              {slotData.title}
            </h3>
            <h3>
              <span className="fw-bold">Parking Type : </span>
              {slotData.type}
            </h3>
            <h3>
              <span className="fw-bold">Slots Available : </span>
              {slotData.total}
            </h3>
          </div>
        </div>
      );
    }
  };

  const displayForm = () => {
    if (!loading) {
      return (
        <Formik initialValues={userForm} onSubmit={userSubmit}>
          {({ values, handleSubmit, handleChange, errors }) => (
            <form onSubmit={handleSubmit} className="mt-5">
              <div class="row">
                <div class="col-md">
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
                <div class="col-md-6">
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
                <div class="col-md-6">
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
      );
    }
  };

  return (
    <div id="booking" class="section">
      <div class="section-center">
        <div class="container">
          <div class="row">
            <div class="booking-form">
              <div class="form-header">
                <h1 className="mt-4">Book Slot Now</h1>
                {showSlotDetails()}
              </div>
              {displayForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
