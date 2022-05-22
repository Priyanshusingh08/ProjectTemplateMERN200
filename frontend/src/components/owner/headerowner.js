import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  AccountCircle,
  AppRegistration,
  Home,
  Login,
  MoreVert,
  Subscriptions,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

const pages = [
  {
    name: "Browse Slot",
    link: "/user/browseslot",
  },
];

const guestOwner = [
  {
    name: "Home",
    link: "/main/home",
    icon: <Home />,
  },
  {
    name: "Login",
    link: "/owner/ownerlogin",
    icon: <Login />,
  },
  {
    name: "Signup",
    link: "/owner/ownersignup",
    icon: <AppRegistration />,
  },
];

const Headerowner = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElGuest, setAnchorElGuest] = useState(null);

  const [currentOwner, setCurrentUser] = useState(null);

  const owner = sessionStorage.getItem("owner");

  useEffect(() => {
    setCurrentUser(JSON.parse(sessionStorage.getItem("owner")));
  }, [owner]);

  const navigate = useNavigate();

  const logout = () => {
    setAnchorElUser(null);
    sessionStorage.removeItem("owner");
    navigate("/owner/ownerlogin");
  };

  const userMenu = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/owner/manageprofile",
    },
    {
      name: "Manage Plan",
      icon: <Subscriptions />,
      link: "/owner/manageplan",
    },
    {
        name: "Manage Slot",
        icon: <Subscriptions />,
        link: "/owner/manageslot",
      },
      {
        name: "Plans",
        icon: <Subscriptions />,
        link: "/owner/pricingplan",
      },
    {
      name: "Logout",
      icon: <AccountCircle />,
      click: logout,
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            PickAndPark
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ name, link }) => (
                <MenuItem key={name} onClick={(e) => navigate(link)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Parking
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, link }) => (
              <Button
                key={name}
                onClick={(e) => navigate(link)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {guestOwner.map(({ name, link, icon }) => (
              <Tooltip title={name}>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={(e) => navigate(link)}
                  sx={{ mr: 2 }}
                >
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
          {currentOwner !== null && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {userMenu.map(({ name, icon, link, click }) => (
                  <MenuItem
                    key={name}
                    onClick={link ? (e) => navigate(link) : click}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{name}</ListItemText>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <Box sx={{ flexGrow: 0, ml: 3, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="User Options">
              <IconButton
                onClick={(e) => setAnchorElGuest(e.currentTarget)}
                sx={{ p: 0 }}
                color="inherit"
              >
                <MoreVert />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElGuest}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElGuest)}
              onClose={(e) => setAnchorElGuest(null)}
            >
              {guestOwner.map(({ name, icon, link }) => (
                <MenuItem key={name} onClick={(e) => navigate(link)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Headerowner;
