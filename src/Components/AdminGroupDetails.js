import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useState} from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../Pages/GroupCards.css';
import Typography from '@mui/material/Typography';
import { getAccordionActionsUtilityClass } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function AdminGroupDetails(props){
    const {user, 
        EditGroup,
        singleAdminGroup, 
        viewDetailsClicked, 
        setViewDetailsClicked, 
        onViewButtonClicked,
        DeleteGroup,
        open,
        GetAllUserGroups,
        // setOpen, 
        handleClose
            } = props;

const [editClicked, setEditClicked] = useState(false);
const [editGroupInfo, setEditGroupInfo] = useState({
    name: singleAdminGroup.name,
    description: singleAdminGroup.description,
    meetingtime: singleAdminGroup.meetingtime,
    city: singleAdminGroup.city,
    state: singleAdminGroup.state,
    meetinglocation: singleAdminGroup.meetinglocation,
    meetingday: singleAdminGroup.meetingday,
    groupinterestes: singleAdminGroup.groupinterestes,
    adminid: singleAdminGroup.adminid
})


function onEditInputChange(event) {
    setEditGroupInfo({ ...editGroupInfo, [event.target.name]: event.target.value });
}

function onEditFormSubmit(event) {
    event.preventDefault();
    setEditClicked(!editClicked)
    EditGroup(editGroupInfo, singleAdminGroup.id);
}

function OnDeleteClick(){
        console.log("delete group clicked");
        console.log(singleAdminGroup.id)
        DeleteGroup(singleAdminGroup.id)
        setViewDetailsClicked(!open)
    }

function ViewLessDetails(e){
        //  e.preventDefault();
        console.log("view less details clicked")
        onViewButtonClicked();
    }

function OnEditClick(){
        console.log("edit group clicked");
        setEditClicked(!editClicked)
    }

    //DETAILS AREA
    //=============================================
    let detailsArea= 
    <div>
            <Dialog onClose={handleClose} open={open}>
                <img src={singleAdminGroup.imagename}
                height="300"/>
                <div className="modalTitleDiv">
                <Typography className="modalName" variant="h4" component="p">
                {singleAdminGroup.name}
                </Typography>

                <Typography className="modalName" variant="body1" component="p">
                {singleAdminGroup.city}, {singleAdminGroup.state}
                </Typography>
                </div>
                <DialogContent>
                
                <div className="allModalInfo">
                <div className="keyInfo">
                   
                    <DialogContentText >
                    <Typography  variant="body1" component="p">
                        Time
                    </Typography>
                       {singleAdminGroup.meetingtime}
                    </DialogContentText>
                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Day
                    </Typography>
                     {singleAdminGroup.meetingday}
                    </DialogContentText>
                    
                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Location
                    </Typography>
                       {singleAdminGroup.meetinglocation}
                    </DialogContentText>

                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Interests
                    </Typography>
                       {singleAdminGroup.groupinterestes}
                    </DialogContentText>

                </div>
                <div className="modalDescription">
                    <DialogContentText>
                        {singleAdminGroup.description}
                        euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida<br/>euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida
                    </DialogContentText>
                </div>
              
                </div>
                </DialogContent>
                <div className="detailsButtons">
                <Stack direction="row" spacing={2}>
                <Button onClick={OnDeleteClick} variant="contained">Delete Group</Button></Stack>
                <Button onClick={OnEditClick} variant="contained">Edit Group</Button>
                <Button onClick={ViewLessDetails}>Less Information</Button>
                </div>
              </Dialog>
      </div>
    if(editClicked){

        detailsArea=
        <div>
<Dialog className="editGroupModal" onClose={handleClose} open={open}>
                <DialogTitle>Edit Your Group</DialogTitle>
                <DialogContent>
                    <Box sx={{ minWidth: 120, marginBottom: 5 }}>
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='name'
                            type="text"
                            label="Group Name"
                            variant="outlined"
                            image=""
                            onChange={onEditInputChange}
                            value={editGroupInfo.name || ""}
                        />

                        {/* <FormControl sx={{ minWidth: 300 }}>
                            <InputLabel id="groupinterestes">Group Interests</InputLabel>
                            <Select
                                name='groupinterestes'
                                labelId="groupinterestes"
                                label="groupinterestes"
                                onChange={onEditInputChange}
                                value={singleAdminGroup.groupinterestes}
                            >
                                <MenuItem value="Quilting">Quilting</MenuItem>
                                <MenuItem value="Knitting">Knitting</MenuItem>
                                <MenuItem value="Crocheting">Crocheting</MenuItem>
                                <MenuItem value="Needlepoint">Needlepoint</MenuItem>
                                <MenuItem value="Sewing">Sewing</MenuItem>
                                <MenuItem value="Multiple interests">Multiple interests</MenuItem>
                            </Select>
                        </FormControl> */}

                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='name'
                            type="text"
                            label="Group Interests"
                            variant="outlined"
                            onChange={onEditInputChange}
                            value={editGroupInfo.groupinterestes || ""}
                        />
                        <br />
                        <TextField size="large"
                            style={{ width: "300px", margin: "5px" }}
                            name='description'
                            type="text"
                            label="Description"
                            variant="outlined"
                            onChange={onEditInputChange}
                            value={editGroupInfo.description || ""}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='city'
                            type="text"
                            label="City"
                            variant="outlined"
                            onChange={onEditInputChange}
                            value={editGroupInfo.city || ""}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='state'
                            type="text"
                            label="State"
                            variant="outlined"
                            onChange={onEditInputChange}
                            value={editGroupInfo.state || ""}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='meetingtime'
                            type="time"

                            variant="outlined"
                            onChange={onEditInputChange}
                            value={editGroupInfo.meetingtime || ""}
                        />
                        <br />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='meetingday'
                            type="text"
                            label="Meeting day"
                            variant="outlined"
                            onChange={onEditInputChange}
                            value={editGroupInfo.meetingday || ""}
                        />
                        <br />
                    


                            <div className="createGroupButtons">
                            <Stack direction="row" spacing={2}>
                                <Button onClick={(e) => onEditFormSubmit(e)} variant="contained"> Save </Button></Stack>
                            <Stack direction="row" spacing={2}>
                                <Button onClick={() => setEditClicked(false)} variant="contained"> Cancel </Button></Stack>
                            </div>

                    </Box>
                </DialogContent>
            </Dialog>


            {/* <Dialog onClose={handleClose} open={open}>
                <img src={singleAdminGroup.imagename}
                height="300"/>
                <div className="modalTitleDiv">
                <Typography className="modalName" variant="h4" component="p">
                {singleAdminGroup.name}
                </Typography>

                <Typography className="modalName" variant="body1" component="p">
                {singleAdminGroup.city}, {singleAdminGroup.state}
                </Typography>
                </div>
                <DialogContent>
                
                <div className="allModalInfo">
                <div className="keyInfo">
                   
                    <DialogContentText >
                    <Typography  variant="body1" component="p">
                        Time
                    </Typography>
                       {singleAdminGroup.meetingtime}
                    </DialogContentText>
                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Day
                    </Typography>
                     {singleAdminGroup.meetingday}
                    </DialogContentText>
                    
                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Location
                    </Typography>
                       {singleAdminGroup.meetinglocation}
                    </DialogContentText>

                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Interests
                    </Typography>
                       {singleAdminGroup.groupinterestes}
                    </DialogContentText>

                </div>
                <div className="modalDescription">
                    <DialogContentText>
                        {singleAdminGroup.description}
                        euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida<br/>euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida
                    </DialogContentText>
                </div>
              
                </div>
                </DialogContent>
                <div className="detailsButtons">
                <Stack direction="row" spacing={2}>
                <Button onClick={onEditFormSubmit} variant="contained">Update</Button></Stack>
                <Button onClick={ViewLessDetails}>Cancel</Button>
                </div>
              </Dialog> */}
      </div>
        
    }

    return(
    <div>
       {detailsArea}
    </div>
    )
    }
        