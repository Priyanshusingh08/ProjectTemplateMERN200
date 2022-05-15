import { Search } from "@mui/icons-material";
import { Button, InputAdornment, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";

const SlotDetails = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/slot/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };
  
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const applyfilter = () => {
    fetch(url + "/slot/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ type }) => {
          return type.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setDatalist(filtered);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const displayData = () => {
    if (!loading) {
      return datalist.map(({ type,location, price, _id }) => (
        <div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0">


            

          
        </div>
      ));
    }
  };

  return (
    <>
      <div className="container">
        {displayData()}
      </div>
    </>
  );
};

export default SlotDetails;
