import { Search } from "@mui/icons-material";
import { Button, InputAdornment, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";

const BrowseSlot = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "Type",
    "Location",
    "Price", 
  ];

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
        res.json().then((data) => {
          
          navigate("/main/bookslot");
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    if (!loading) {
      return datalist.map(
        ({
         type,
         location,
         price,
         file,
          _id,
        }) => (
          <div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div class="card mt-5">
              <NavLink className="ripple" to={"/main/pptviewer/" + _id}>
                <img
                  src={url + "/slot/" + file}
                  class="card-img-top"
                  alt="Laptop"
                />
              </NavLink>
              
              <div class="card-body">

              <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      {type}
                    </a>
                  </p>
                  {/* <p class="small text-danger">
                    <s>$1099</s>
                  </p> */}
                </div>


                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      {location}
                    </a>
                  </p>
                  {/* <p class="small text-danger">
                    <s>$1099</s>
                  </p> */}
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">{price}</h5>
                  {/* <h5 class="text-dark mb-0">FREE</h5> */}
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    <span class="fw-bold">
                    <Button
                  type="submit"
                  variant="contained"
                  className="w-100"
                  color="primary"
                  onSubmit={navigate}
                >
                  Book Now
                </Button>
                    </span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      );
    }
  };

  const applyfilter = () => {
    fetch(url + "/slot/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ type, location, price }) => {
          return type.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setDatalist(filtered);
        setLoading(false);
      });
  };

  const applyCategoryfilter = (cate) => {
    fetch(url + "/slot/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ location,type,price }) => {
          return location.toLowerCase().includes(cate.toLowerCase());
        });
        console.log(filtered);
        setDatalist(filtered);
        setLoading(false);
      });
  };

  return (
    <div style={{ background: "#eee" }}>
      <header style={styles.header}>
        <div className="container">
          <Typography className="text-center text-white" variant="h5">
            Pick And Park
          </Typography>
          <Typography className="text-center text-white" variant="h2">
            Explore best palce to park
          </Typography>

          <div className="input-group mt-5">
            <input
              className="form-control"
              value={filter}
              label="Search Here"
              onChange={(e) => setFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "active.active", mr: 1, my: 0.5 }} />
                  </InputAdornment>
                ),
              }}
            />
            <button
              className="btn btn-primary"
              onClick={applyfilter}
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="categories">
            <div className="row justify-content-center">
              {categories.map((cate) => (
                <div className="col-sm-4 col-md-2 mt-4 text-center mx-auto">
                  <button
                    className="btn btn-outline-light btn-rounded"
                    onClick={(e) => applyCategoryfilter(cate)}
                  >
                    {cate}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">{displayData()}</div>
        <nav aria-label="">
          <ul class="pagination justify-content-center my-5">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">
                2 <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const styles = {
  header: {
    background:
      "linear-gradient(to right, #000000c5, #000000c5), url(http://localhost:5000/images/browse_back.jpg)",
    padding: "3rem",
    textShadow: "2px 2px 3px #0000005c",
    // height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default BrowseSlot;