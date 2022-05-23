import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();
  return (
    <div>
      <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content">
          <p>Adorning your vehicle need</p>
          <h6>Pick And Park</h6>
          <Button
            type="submit"
            variant="contained"
            color="success"
            onClick={(e) => navigate("/main/browseslot")}
          >
            Browse
          </Button>
        </div>
      </header>

      <div>

      <h1 className="d-flex justify-content-around mt-5" >Why Us?</h1>

      <Grid container spacing={2} className="my-3" >
        
        <Grid item xs={4} className="d-flex justify-content-around">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2021/07/02/09/39/cars-6381364__340.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Make Parking Easier
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access all of your Parking Passes in one place available on your phone
                  <p>Create Payment and Vehicle profiles for easy check out.
                  Park and Pick has established SecureTech, the in-house state-of-art technology division for continuous innovation in products & services</p>
                
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} className="d-flex justify-content-around">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_bay_parking_guide.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Solution For Operators
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Digitize your parking operations with Pick and Park's plug-and-play solutions. Improve revenue and customer satisfaction with new bundled offerings.
                <p>
                Cloud-based parking management software that supports offline functionality. A multi-lingual android interface that digitizes any parking in just 10 minutes
                </p>

                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} className="d-flex justify-content-around">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea >
              <CardMedia
                component="img"
                height="140"
                image="https://www.constructionworld.in/assets/uploads/fa1358150768744abe4181b9e314c07f.jpg"
                alt="green iguana"
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div" >
                  Superior Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Our extensive experience and deep insight of car parking dynamics helps us to improve customer experience
                <p>Pick and Park focuses in providing holistic end-to-end solution for traffic & parking management</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      </div>

      <section id="about">
        <div class="container">
          <div class="about-wrapper">
            <div class="after">
              <h1>About Us</h1>
            </div>
            <div class="content">
              <h5 class="title mb-3">Our Vision</h5>

              <div class="row">
                <div class="col">
                  <p>
                   Our vision is to make every parking transaction a sub-conscious experience. With a strong foundation of the team, technology, and partnerships, we are creating a future-proof parking platform to connect the parking industry internally as well as with urban mobility players.
                  </p>
                  <p>
                    <b>
                    Milestones
                    </b>
                  </p>
                  <p>
                  Each year brings with it new learnings, new milestones, and new challenges. We look back on our delightful journey with a little bit of nostalgia & a whole lot of excitement for what lies ahead.
                  </p>
                  <p>
                  
                  </p>
                </div>
                <div class="col">
                  <p>
                  Our technology enables seamless use of parking for pick up and drop of shared mobility, storage and deliveries for e-commerce, EV charging, and on the fly automotive services.


                  </p>
                  <p>
           
                  </p>
                  <p>
                  Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer. In today’s new-age mobility, you need an ecosystem of integrated hardware and software components regardless of which version or vendor they all come from. Our GMP Platform delivers you that coherent interoperable ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
