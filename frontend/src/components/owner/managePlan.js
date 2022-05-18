import React, { useState, useEffect } from "react";
import app_config from "../../config";
import toast from "react-hot-toast";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Fab,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Formik } from "formik";
import {
  Category,
  DeleteRounded,
  Edit,
  ExpandMore,
  Newspaper,
  TitleSharp,
} from "@mui/icons-material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManagePlan = () => {
  const [loading, setLoading] = useState(true);
  const url = app_config.backend_url;

  const [floristArray, setFloristArray] = useState([]);
  const [filter, setFilter] = useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/slot/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFloristArray(data);
        setLoading(false);
      });
  };

  const deleteData = (id) => {
    fetch(url + "/slot/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("News Successfully Deleted!!", {
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

  const applyfilter = () => {
    fetch(url + "/slot/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ title }) => {
          return title.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setFloristArray(filtered);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitUpdateForm = (formdata) => {
    console.log(formdata);
  };

  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <div>
          <Card>
            <CardContent sx={{ width: 640 }}>
              <Formik
                initialValues={updateFormdata}
                onSubmit={submitUpdateForm}
              >
                {({ values, handleChange, handleSubmit, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Title"
                        label="Title"
                        variant="outlined"
                        id="title"
                        type="text"
                        onChange={handleChange}
                        value={values.title}
                        error={Boolean(errors.title)}
                        helperText={errors.title}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <TitleSharp
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label1">
                          Category
                        </InputLabel>

                        <Select
                          labelId="demo-simple-select-label1"
                          id="category"
                          name="category"
                          label="Category"
                          value={values.category}
                          error={Boolean(errors.category)}
                          helperText={errors.category}
                          onChange={handleChange}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Category
                                  sx={{
                                    color: "active.active",
                                    mr: 1,
                                    my: 0.5,
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        >
                          {[].map((category) => (
                            <MenuItem value={category}>{category}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <br></br>
                      <br></br>

                      <TextField
                        className="w-100 mt-3"
                        label="Add News"
                        multiline
                        rows={4}
                        variant="outlined"
                        id="summary"
                        onChange={handleChange}
                        value={values.summary}
                        error={Boolean(errors.summary)}
                        helperText={errors.summary}
                        aria-label="Add News"
                        placeholder="Add News"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Newspaper
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <Button
                        type="submit"
                        className="btn btn-primary"
                        color="success"
                        variant="contained"
                      >
                        Submit
                      </Button>
                      <Button
                        onClick={(e) => setShowUpdateForm(false)}
                        type="button"
                        className="btn btn-primary"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      );
    }
  };

  const displayData = () => {
    if (!loading) {
      return floristArray.map(
        ({ type, city, address, price, features, file, createdAt, _id }, i) => (
        <div className="container " >
        <Accordion key={_id}  className="shadow p-3 rounded  p-3 mb-2 bg-primary text-white">
            <AccordionSummary
            
            className="p-3 mb-2 bg-primary text-white  "
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4 >{type}</h4>
            </AccordionSummary>
            <AccordionDetails  className="p-3 mb-2 bg-info text-white" >
              <Grid container spacing={5}>
                <Grid item md={3} sx={12}>
                  <img
                    src={url + "/uploads/" + file}
                    alt=""
                    className="img-fluid"
                  />
                </Grid>

                <Grid item md={3} sx={12}>
                  <h4>Details</h4>
                  <h5>{price}</h5>
                  <h5>{features}</h5>
                  <h5>{city}</h5>
                  <h5>{address}</h5>
                </Grid>

                <Grid item md={3} sx={12}>
                  <Stack direction="row" spacing={2}>
                    <Fab
                      size="medium"
                      color="primary"
                      onClick={(e) => deleteData(_id)}
                      aria-label="add"
                      sx={{ mr: 1 }}
                    >
                      <DeleteRounded />
                    </Fab>
                    <Tooltip title="Update News Article">
                      <Fab
                        size="medium"
                        color="success"
                        onClick={(e) => {
                          // setUpdateFormdata(news);
                          setShowUpdateForm(true);
                        }}
                        aria-label="add"
                      >
                        <Edit size="small" />
                      </Fab>
                    </Tooltip>
                    <Tooltip title="Update News Article">
                      <Fab
                        size="medium"
                        color="success"
                        onClick={(e) => {
                          // setUpdateFormdata(news);
                          setShowUpdateForm(true);
                         
                        }}
                        aria-label="add"
                      >
                        <Edit size="small" />
                      </Fab>
                    </Tooltip>
                  </Stack>
                </Grid>

                



              </Grid>
            </AccordionDetails>
          </Accordion>
          </div>
        )
      );
    }
  };

  return (
    <div className="container">
      <h1>Manage Plan     <Button className="mt-2 float-right"
                  type="submit"
                  variant="contained"
                  position="right"
                  color="primary"
                  onClick={(e) => navigate("/owner/manageslot")}
                  
                
                >
                  Add Plan
                </Button></h1>
    
      {displayData()}
    </div>
  );
};
export default ManagePlan;
