import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// const dayjs = require('dayjs')

export default function Createprojectmodal(props) {
  const { user, CreateNewProject, GetAllProjects } = props;
  const [createClicked, setCreateClicked] = useState(false);
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);


  const [newProject, setNewProject] = useState({
    userid: user.id,
    name: "",
    type: "",
    progress: "",
    startdate: "",
    enddate: "",
    giftedto: "",
    notes: ""
  });
  function onInputChange(event) {
    setNewProject({ ...newProject, [event.target.name]: event.target.value });
  }
  function onCreateClicked() {
    setCreateClicked(!createClicked);
  }
  async function onFormSubmit(e) {
    e.preventDefault();
    await CreateNewProject(newProject);
    onCreateClicked();
    GetAllProjects();
    setNewProject({
      userid: user.id,
      name: "",
      type: "",
      progress: "",
      startdate: "",
      enddate: "",
      giftedto: "",
      notes: "",
    });
  }
  // console.log(startDate);
  // console.log(endDate);
  // // console.log(endDate["$d"]);
  // console.log(newProject);
  let date = new Date();
  date = `${date.toLocaleDateString()}`

  let theCreateProjectContent;

  if (createClicked) {
    theCreateProjectContent = (
      <Box sx={{ 
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
          value={newProject.name}
          onChange={onInputChange}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="type"
          type="text"
          label="Project Type"
          variant="outlined"
          value={newProject.type}
          onChange={onInputChange}
        />
        <br />
        <FormControl style={{ width: "300px" }}>
          <InputLabel id="progress">Progress</InputLabel>
          <Select
            name="progress"
            labelId="progress"
            label="Progress"
            onChange={onInputChange}
            value={newProject.progress}
          >
            <MenuItem value="Idea">Idea</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <br />
        <TextField
        style={{ width: "300px"}}
        id="date"
        label="Start Date"
        name="startdate"
        type="date"
        defaultValue= {date}
        value={newProject.startdate}
        sx={{ width: 220 }}
        onChange={onInputChange}
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
        value={newProject.enddate}
        type="date"
        onChange={onInputChange}
        defaultValue={date}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            name="startdate"
            value={startDate}
            onChange={(newStartDate) => {
              setStartDate(dayjs(newStartDate).format("YYYY-MM-DD").toString());
            }}
            renderInput={(params) => <TextField {...params}  style={{ width: "300px"}}/>}
          />
        </LocalizationProvider> */}

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          style={{ width: "300px", marginTop: 10 }}
            label="End Date"
            name="endDate"
            value={endDate}
            onChange={(newEndDate) => {
              setEndDate(dayjs(newEndDate).toString());
            }}
            renderInput={(params) => <TextField {...params} style={{ width: "300px" }}/>}
          />
        </LocalizationProvider> */}

        {/* <label htmlFor="startdate">Start Date</label>
        <input type="date" name="startdate" onChange={onInputChange} />

        <label htmlFor="enddate">End Date</label>
        <input type="date" name="enddate" onChange={onInputChange} /> */}

        <br />
        <TextField
          style={{ width: "300px"}}
          multiline={true}
          rows= {3}
          name="notes"
          type="text"
          label="Notes"
          variant="outlined"
          value={newProject.notes}
          onChange={onInputChange}
        />
        <br />
        <TextField
          style={{ width: "300px"}}
          name="giftedto"
          type="text"
          label="Gifted To"
          variant="outlined"
          value={newProject.giftedto}
          onChange={onInputChange}
        />
        <br />
        <ButtonGroup>
          <Button onClick={(e) => onFormSubmit(e)}>Create</Button>
          <Button onClick={onCreateClicked}>Cancel</Button>
        </ButtonGroup>
      </Box>
    );
  } else
    theCreateProjectContent = (
      <Button onClick={onCreateClicked}>Add Project</Button>
    );
    
  return <div>{theCreateProjectContent}</div>;
}
