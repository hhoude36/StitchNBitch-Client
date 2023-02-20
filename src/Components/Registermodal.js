import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Registermodal(props) {
  //destructuring props on a separate line from App state which is currently set to empty/false
  const { setUser, setIsLoggedIn } = props;
  const navigate = useNavigate();
  //local login form state
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    imagename:
      "https://res.cloudinary.com/dexffe7jc/image/upload/v1675372800/elo9bt0yq2bveznzkhir.jpg",
  });

  function ClearInputs() {
    setUserInfo({
      name: "",
      username: "",
      email: "",
      password: "",
      imagename:
        "https://res.cloudinary.com/dexffe7jc/image/upload/v1675372800/elo9bt0yq2bveznzkhir.jpg",
    });
  }

  async function AddUserFunction(userInfo) {
    //hiting back end with local login form state
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/register`, {
      //posting that information to the back end using form info
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //info is an object and here we are turing it into a string and sending it in the body
      body: JSON.stringify(userInfo),
    });
    //data response is sending us the user info as json
    res = await res.json();
    // console.log(res);
    //setting app user state to the database response
    setUser(res);
    setIsLoggedIn(true);
    navigate("/usermain");
  }

  function onInputChange(event) {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  }
  // console.log(userInfo);
  function onFormSubmit(e) {
    e.preventDefault();
    AddUserFunction(userInfo);
    ClearInputs();
  }
  let PasswordInfo;
  let PasswordColor = "primary";


  if (userInfo.password.length > 0) {
    let theWarnings = [];
    let theError = false;
    if (userInfo.password.length < 8) {
      theWarnings.push(["Please enter more than 8 characters", 0]);
      theError = true;
    }
    if (userInfo.password === userInfo.password.toLowerCase()) {
      theWarnings.push(["Please enter an upper case letter.", 1]);
      theError = true;
    }
    if (userInfo.password === userInfo.password.toUpperCase()) {
      theWarnings.push(["Please enter a lower case letter.", 2]);
      theError = true;
    }
    if (!/\d/.test(userInfo.password)) {
      theWarnings.push(["Please enter a number.", 3]);
      theError = true;
    }
    PasswordInfo = theWarnings.map(function (theError) {
      return <li key={theError[1]}>{theError[0]}</li>;
    });
    if (theError) {
      PasswordColor = "error";
    } else if (userInfo.password.length > 0) {
      PasswordColor = "success";
    }
  }

  return (
    <Box
      sx={{
        minWidth: 120,
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        style={{ width: "300px" }}
        name="name"
        type="text"
        label="Name"
        variant="outlined"
        value={userInfo.name}
        onChange={onInputChange}
      />
      <br />
      <TextField
        style={{ width: "300px" }}
        name="email"
        type="text"
        label="Email"
        variant="outlined"
        value={userInfo.email}
        onChange={onInputChange}
      />
      <br />
      <TextField
        style={{ width: "300px" }}
        name="username"
        type="text"
        label="Username"
        variant="outlined"
        value={userInfo.username}
        onChange={onInputChange}
      />
      <br />
      <TextField
        style={{ width: "300px" }}
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        helperText={PasswordInfo}
        value={userInfo.password}
        color={PasswordColor}
        onChange={onInputChange}
      />
      <br />
      <ButtonGroup>
        <Button onClick={(e) => onFormSubmit(e)}>Submit</Button>
      </ButtonGroup>
    </Box>

    //   <button onClick={(e) => onFormSubmit(e)}>Submit</button>
    // </form>
  );
}
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import ButtonGroup from "@mui/material/ButtonGroup";

// export default function Registermodal(props) {
//   //destructuring props on a separate line from App state which is currently set to empty/false
//   const { setUser, setIsLoggedIn } = props;
//   const navigate = useNavigate();
//   //local login form state
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     imagename:
//       "https://res.cloudinary.com/dexffe7jc/image/upload/v1675372800/elo9bt0yq2bveznzkhir.jpg",
//   });

//   function ClearInputs(){
//     setUserInfo({
//       name:"",
//       username: "",
//       email:"",
//       password: "",
//       imagename: "https://res.cloudinary.com/dexffe7jc/image/upload/v1675372800/elo9bt0yq2bveznzkhir.jpg",
//     })
//   }

//   async function AddUserFunction(userInfo) {
//     //hiting back end with local login form state
//     let res = await fetch(`http://localhost:3005/users/register`, {
//       //posting that information to the back end using form info
//       method: "POST",
//       mode: "cors",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       //info is an object and here we are turing it into a string and sending it in the body
//       body: JSON.stringify(userInfo),
//     });
//     //data response is sending us the user info as json
//     res = await res.json();
//     // console.log(res);
//     //setting app user state to the database response
//     setUser(res);
//     setIsLoggedIn(true);
//     navigate("/usermain");
//   }

//   function onInputChange(event) {
//     setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
//   }
//   // console.log(userInfo);
//   function onFormSubmit(e) {
//     e.preventDefault();
//     AddUserFunction(userInfo);
//     ClearInputs();
//   }

//   return (
//     <Box
//       sx={{
//         minWidth: 120,
//         marginTop: 10,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <TextField
//         style={{ width: "300px" }}
//         name="name"
//         type="text"
//         label="Name"
//         variant="outlined"
//         value={userInfo.name}
//         onChange={onInputChange}
//       />
//       <br />
//       <TextField
//         style={{ width: "300px" }}
//         name="email"
//         type="text"
//         label="Email"
//         variant="outlined"
//         value={userInfo.email}
//         onChange={onInputChange}
//       />
//       <br />
//       <TextField
//         style={{ width: "300px" }}
//         name="username"
//         type="text"
//         label="Username"
//         variant="outlined"
//         value={userInfo.username}
//         onChange={onInputChange}
//       />
//       <br />
//       <TextField
//         style={{ width: "300px" }}
//         name="password"
//         type="password"
//         label="Password"
//         variant="outlined"
//         value={userInfo.password}
//         onChange={onInputChange}
//       />
//       <br />
//       <ButtonGroup>
//           <Button onClick={(e) => onFormSubmit(e)}>Submit</Button>
//       </ButtonGroup>
//     </Box>

//     //   <button onClick={(e) => onFormSubmit(e)}>Submit</button>
//     // </form>
//   );
// }
