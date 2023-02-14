import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextareaAutosize from '@mui/base/TextareaAutosize';
const dayjs = require('dayjs')

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// const dayjs = require("dayjs");

export default function Editprojectmodal(props) {
  const { user, openEditProjectArea, EditProject, project, DeleteProject } =
    props;
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const [editProject, setEditProject] = useState({
    userid: user.id,
    name: project.name,
    type: project.type,
    progress: project.progress,
    startdate: project.startdate,
    enddate: project.enddate,
    giftedto: project.giftedto,
    notes: project.notes,
    imagename: project.imagename,
  });
  let date = new Date();
  date = `${date.toLocaleDateString()}`

  async function onDeleteClick(e) {
    e.preventDefault();
    DeleteProject(project.id);
  }

  function onInputChange(event) {
    setEditProject({ ...editProject, [event.target.name]: event.target.value });

    // console.log(event.target.name);
  }
  async function onFormSubmit(e) {
    e.preventDefault();
    await EditProject(editProject);
    openEditProjectArea();
  }
  function closeEdit() {
    openEditProjectArea();
  }

  return (
    <Box marginTop="20px" sx={{ 
      minWidth: 120, 
      marginBottom: 5,
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" }}>
      
        <TextField
          style={{ width: "300px"}}
          name="name"
          type="text"
          label="Project Name"
          variant="outlined"
          onChange={onInputChange}
          value={editProject.name || ""}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="type"
          type="text"
          label="Project Type"
          variant="outlined"
          onChange={onInputChange}
          value={editProject.type || ""}
        />
        <br />
        <FormControl 
        style={{ width: "300px"}}>
          <InputLabel id="progress">Progress</InputLabel>
          <Select
            name="progress"
            labelId="progress"
            value={editProject.progress || ""}
            label="Progress"
            onChange={onInputChange}
          >
            <MenuItem value="Idea">Idea</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <br/>
        <TextField
        style={{ width: "300px"}}
        id="date"
        label="Start Date"
        name="startdate"
        type="date"
        // defaultValue= {date}
        value={dayjs(editProject.startdate).format("YYYY-MM-DD")}
        sx={{ width: 220 }}
        onChange={onInputChange}
        // setStartDate(dayjs(newStartDate).format("YYYY-MM-DD").toString());
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br/>
        <TextField
        style={{ width: "300px"}}
        id="date"
        label="End Date"
        name="enddate"
        value={dayjs(editProject.enddate).format("YYYY-MM-DD")}
        type="date"
        onChange={onInputChange}
        // defaultValue={date}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br/>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          style={{ width: "300px"}}
            label="Start Date"
            name="startdate"
            value={startDate}
            onChange={(newStartDate) => {
              setStartDate(dayjs(newStartDate).format('YYYY-MM-DD'));
            }}
            renderInput={(params) => <TextField {...params}
            style={{ width: "300px"}} />}
          />
        </LocalizationProvider> */}
        {/* <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
            name="endDate"
            value={endDate}
            onChange={(newEndDate) => {
              setEndDate(newEndDate);
            }}
            renderInput={(params) => <TextField {...params}  
            style={{ width: "300px"}}/>}
          />
        </LocalizationProvider>
        <br/> */}
{/* 
        <label htmlFor="startdate">Start Date</label>
        <input type="date" name="startdate" onChange={onInputChange} />

        <label htmlFor="enddate">End Date</label>
        <input type="date" name="enddate" onChange={onInputChange} /> */}
        <TextField
          style={{ width: "300px"}}
          multiline={true}
          rows= {3}
          name="notes"
          type="text"
          label="Notes"
          variant="outlined"
          onChange={onInputChange}
          value={editProject.notes || ""}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="giftedto"
          type="text"
          label="Gifted To"
          variant="outlined"
          onChange={onInputChange}
          value={editProject.giftedto || ""}
        />
        <br />
        <ButtonGroup>
          <Button onClick={onFormSubmit}>Save</Button>
          <Button onClick={onDeleteClick}>Delete</Button>
          <Button onClick={closeEdit}>Cancel</Button>
        </ButtonGroup>
    </Box>
  );
}
