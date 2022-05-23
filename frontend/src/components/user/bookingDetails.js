import React, { useState } from "react";
import app_config from "../../config";

const BookingDetails = () => {
  const url = app_config.backend_url;

  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/book/get");
  };

  return <div>BookingDetails</div>;
};

export default BookingDetails;
