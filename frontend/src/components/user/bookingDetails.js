import { Button } from '@mui/material';
import React from 'react'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import app_config from "../../config";

const BookingDetails = () => {

    const [loading, setLoading] = useState(true);
  const url = app_config.backend_url;

  const [floristArray, setFloristArray] = useState([]);
  const [filter, setFilter] = useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/book/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFloristArray(data);
        setLoading(false);
      });
  };

  const deleteData = (id) => {
    fetch(url + "/book/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("Successfully Deleted!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Deleted",
        });
      });
  };

 
  useEffect(() => {
    fetchData();
  }, []);

  const submitUpdateForm = (formdata) => {
    console.log(formdata);
  };

  const displayData = () => {
    if (!loading) {
      return floristArray.map(
        ({ city,  price, title, total, createdAt, _id }, i) => (
          <div className="container ">
            <div  
              key={_id}
              className="shadow p-3 rounded  p-3 mb-1 bg-primary text-white"
            >

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{city}</td>
      <td>type</td>
      <td>car no.</td>
      </tr>
  </tbody>
</table>
              
            </div>
          </div>
        )
      );
    }
  };
  return (
    <div>

<div className="container" >
      <h1>
        Booking Details{" "}
        <Button
          className="mt-3 float-right "
          type="submit"
          variant="contained"
          position="right"
          color="primary"
          onClick={(e) => navigate("/main/browseslot")}
        >
          Cancel
        </Button>
      </h1>

      {displayData()}
    </div>
      
    </div>
  )
}

export default BookingDetails;
