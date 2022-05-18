import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Home = () => {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex h-100 text-center text-white bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0"></h3>
            </div>
          </header>

          <main className="px-3">
            <h1>Cover your page.</h1>
            <p className="lead container ">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <p className="lead">
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={(e) => navigate("/user/browseslot")}
                >
                  Browse
                </Button>
              </div>
            </p>
          </main>
        </div>
      </div>

      <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }} className="d-flex justify-content-center">
        <Item>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.staticmb.com/mbcontent//images/uploads/2021/12/underground-parking-cars-white-colors.jpg"
        alt="parking
        "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Parking
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Item>
        <Item> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/01/10/640599-car-parking.jpg"
        alt="parking"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Parking
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Item>
        <Item> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://thumbs.dreamstime.com/b/underground-car-parking-lot-building-43173657.jpg"
        alt="parking"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Parking
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Item>
      </Stack>

   
    </div>
  );
};

export default Home;
