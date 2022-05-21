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
      
      <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content">
            <p>Adorning your vehicle need</p>
            <h6>Pick And Park</h6> 
            <Button
                                type="submit"
                                variant="contained"
                                
                                color="success"
                                onClick={(e) => navigate("/main/login")}
                              >
                                Login
                              </Button>
        </div>      
    </header>
    
    
    <section id="about">
    
        <div class="container">
            
            <div class="about-wrapper">
                <div class="after"><h1>About Us</h1></div>
                <div class="content">
                    <h5 class="title mb-3">Lorem ipsum dolor sit.</h5>
                
                    <div class="row">
                        <div class="col">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda soluta nisi cumque nostrum porro repellat iusto neque quos asperiores, aliquam.</p>
                            <p><b>Adipisicing elit. Modi similique  iusto voluptatibus sint.</b></p>                        
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dignissimos modi molestias voluptas possimus perferendis saepe soluta accusantium, obcaecati neque quas ducimus, alias labore nesciunt atque ab voluptatibus quis! Molestiae dicta reprehenderit, quod laborum voluptatem laboriosam! Sapiente vel, fugiat voluptates.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quis!</p>
                        </div>
                        <div class="col">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda soluta nisi cumque nostrum porro repellat iusto neque quos asperiores, aliquam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quis!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dignissimos modi molestias voluptas possimus perferendis saepe soluta accusantium, obcaecati neque quas ducimus, alias labore nesciunt atque ab voluptatibus quis! Molestiae dicta reprehenderit, quod laborum voluptatem laboriosam! Sapiente vel, fugiat voluptates.</p>
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
