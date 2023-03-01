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
    name: "",
    description: "",
    meetingtime: "",
    city: "",
    state: "",
    meetinglocation: "",
    meetingday: "",
    groupinterests: "",
    adminid: user.id
})


function onEditInputChange(event) {
    setEditGroupInfo({ ...editGroupInfo, [event.target.name]: event.target.value });
}

function onEditFormSubmit(event) {
    event.preventDefault();
    // CreateNewGroup(newGroup, newMember);
    // setAddPhotoClicked(!addPhotoClicked)
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
        console.log(singleAdminGroup.id)
        DeleteGroup(singleAdminGroup.id)
        setViewDetailsClicked(!open)
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
                <Button onClick={OnDeleteClick} variant="contained">Edit Group</Button>
                <Button onClick={ViewLessDetails}>Less Information</Button>
                </div>
              </Dialog>
      </div>
    if(!editClicked){

        detailsArea=
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
                <Button onClick={OnDeleteClick} variant="contained">Edit Group</Button>
                <Button onClick={ViewLessDetails}>Less Information</Button>
                </div>
              </Dialog>
      </div>
        
    }

    return(
       {detailsArea}
    )
    }
        