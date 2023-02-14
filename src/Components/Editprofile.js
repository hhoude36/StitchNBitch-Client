import { useState } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Editprofile(props) {
  let { user, setUser, onEditClicked } = props;

  const [editUserInfo, setEditUserInfo] = useState({
    name: user.name,
    username: user.username,
    interests: user.intersts,
    about: user.about,
    city: user.city,
    state: user.state,
  });

  async function EditUserFunction(editUserInfo) {
    let res = await fetch(`http://localhost:3005/users/edit/${user.id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUserInfo),
    });
    res = await res.json();
    setUser(res.results[1]);
  }

  function onInputChange(event) {
    setEditUserInfo({
      ...editUserInfo,
      [event.target.name]: event.target.value,
    });
  }
  function onFormSubmit(e) {
    e.preventDefault();
    EditUserFunction(editUserInfo);
    onEditClicked();
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        minWidth: 120, 
        marginBottom: 5, 
        marginTop: 5, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"
      }}
      noValidate
      autoComplete="off"
    >
  
        <TextField
          style={{ width: "300px" }}
          name="name"
          type="text"
          label="Name"
          variant="outlined"
          onChange={onInputChange}
          value={editUserInfo.name || ""}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="username"
          type="text"
          label="Userame"
          variant="outlined"
          onChange={onInputChange}
          value={editUserInfo.username || ""}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="interests"
          type="text"
          label="Interests"
          variant="outlined"
          onChange={onInputChange}
          value={editUserInfo.interests || ""}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="city"
          type="text"
          label="City"
          variant="outlined"
          onChange={onInputChange}
          value={editUserInfo.city || ""}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="state"
          type="text"
          label="State"
          variant="outlined"
          onChange={onInputChange}
          value={editUserInfo.state || ""}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="about"
          type="text"
          label="About"
          multiline={true}
          rows= {3}
          variant="outlined"
          onChange={onInputChange}
          value={editUserInfo.about || ""}
        />
        <br />
        <ButtonGroup>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => onFormSubmit(e)}
          >
            Save
          </Button>
          {/* Calling on a function to render state, not directly updating state */}
          <Button variant="outlined" color="primary" onClick={onEditClicked}>
            Cancel
          </Button>
        </ButtonGroup>
      
    </Box>
  );
}
