import Searchpage from "../Pages/Searchpage";
import Loginmodal from "./Loginmodal";
import Homepage from "../Pages/Homepage";
import Registermodal from "./Registermodal";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as React from "react";
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
import Profile from "./Profile";

// import AdbIcon from '@mui/icons-material/Adb';

export default function Header(props) {
  console.log(props);
  const { isLoggedin, ChangeLogin } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  function onLogoutClick() {
    ChangeLogin();
  }

  function SearchButton(e) {
    e.preventDefault();
  }

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

  let loginArea;
  console.log(isLoggedin);
  if (isLoggedin) {
    const pages = ["Dashboard", "Profile", "Search"];
    const settings = ["Edit Profile", "Logout"];
    loginArea = (
      // <ul>
      // <li><Link to='/createuser'>Register</Link></li>
      // <li><Link to='/login'>Login</Link></li></ul>
      <AppBar position="static" style={{ background: '#f4df4f'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              STITCH 'N BITCH
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={`/${page}`} style={{textDecoration: "none", color: "black"}}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            {/* =================================ls
            If Main logo is clicked, it will Log you out */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              S 'N B
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={`/${page}`} style={{textDecoration: "none", color: "black"}}>{page}</Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings">
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
                <MenuItem onClick={handleCloseUserMenu}>

                </MenuItem>
              </Menu> */}
              <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <Typography 
                textAlign="center" 
                onClick={onLogoutClick}>
                  Logout
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  } else {
    const pages = ["Dashboard", "Profile", "Search"];
    const settings = ["Edit Profile", "Logout"];
    loginArea = (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#f4df4f', justifycontent: 'flex-end'}}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              STITCH 'N BITCH
            </Typography>
            <Link to="/login" style={{textDecoration: "none", color: "black"}}>
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/createuser" style={{textDecoration: "none", color: "black"}}>
              <Button color="inherit">Sign Up</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  return (
    <>
      <nav>{loginArea}</nav>
    </>
  );
}
