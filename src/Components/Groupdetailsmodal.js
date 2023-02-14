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


export default function GroupDetailsModal(props){
    const {user, 
        singleGroup, 
        viewDetailsClicked, 
        setViewDetailsClicked, 
        onViewButtonClicked,
        LeaveGroup,
        open,
        GetAllUserGroups,
        // setOpen, 
        handleClose
            } = props;


    function OnLeaveClick(){
        console.log("leave group clicked");
        LeaveGroup(singleGroup.id);
        GetAllUserGroups()
        
    }

    function ViewLessDetails(e){
        //  e.preventDefault();
        console.log("view less details clicked")
        onViewButtonClicked();
    }

//JOIN GROUP
//==============================

async function JoinGroup(newMember){
    console.log("I am hitting the join group function")
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/addgroupmember`,
    {
            method: 'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(newMember) 
        });
        res = await res.json();
}



    return(

        <div>
            <Dialog onClose={handleClose} open={open}>
                <img src={singleGroup.group.imagename}
                height="300"/>
                <div className="modalTitleDiv">
                <Typography className="modalName" variant="h4" component="p">
                {singleGroup.group.name}
                </Typography>

                <Typography className="modalName" variant="body1" component="p">
                {singleGroup.group.city}, {singleGroup.group.state}
                </Typography>
                </div>
                <DialogContent>
                
                <div className="allModalInfo">
                <div className="keyInfo">
                   
                    <DialogContentText >
                    <Typography  variant="body1" component="p">
                        Time
                    </Typography>
                       {singleGroup.group.meetingtime}
                    </DialogContentText>
                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Day
                    </Typography>
                     {singleGroup.group.meetingday}
                    </DialogContentText>
                    
                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Location
                    </Typography>
                       {singleGroup.group.meetinglocation}
                    </DialogContentText>

                    <DialogContentText>
                    <Typography  variant="body1" component="p">
                        Interests
                    </Typography>
                       {singleGroup.group.groupinterestes}
                    </DialogContentText>

                </div>
                <div className="modalDescription">
                    <DialogContentText>
                        {singleGroup.group.description}
                        euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida<br/>euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida
                    </DialogContentText>
                </div>
              
                </div>
                </DialogContent>
                <div className="detailsButtons">
                <Stack direction="row" spacing={2}>
                <Button onClick={OnLeaveClick} variant="contained">Leave this group</Button></Stack>
                <Button onClick={ViewLessDetails}>Less Information</Button>
                </div>
              </Dialog>
      </div>
        )

    }
        

