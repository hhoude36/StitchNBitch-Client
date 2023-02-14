import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ButtonGroup } from "@mui/material";
import './GroupCard.css';


export default function Loginmodal(props) {
  const { setUser, setIsLoggedIn } = props;
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  //Authenticate password and login
  function onInputChange(event) {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  }
  function onFormSubmit(event) {
    event.preventDefault();
    Login(loginInfo);
  }

  async function Login(loginInfo) {
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    res = await res.json();
    // console.log(res);
    setUser(res);
    setIsLoggedIn();
    navigate("/Dashboard");
  }

  return (
    <div className="loginModal">
    <Box maxWidth="sm"       
    sx={{
      display: 'flex',
      flexDirection: 'column',
      marginTop: 10,
      alignItems: "center",
      '& .MuiTextField-root': { width: '25ch' },
    }}>
             <Typography className="homeType" variant="h5" component="p">
                       Sign In<br/>
                </Typography>
        <TextField
        style={{ width: "300px" }}
          variant="outlined"
          name="username"
          label="Username"
          value={loginInfo.username}
          onChange={onInputChange}
        />
        <br/>
        <TextField
        style={{ width: "300px" }}
          variant="outlined"
          name="password"
          type="password"
          label="Password"
          value={loginInfo.password}
          onChange={onInputChange}
        />
        <br/>
        <Button variant="outlined" onClick={(e) => onFormSubmit(e)}>
          Submit</Button>

    </Box>
    </div>
  );
}
