import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useState, useEffect} from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../Pages/GroupCards.css';
import Typography from '@mui/material/Typography';
import { getAccordionActionsUtilityClass } from '@mui/material';
import './GroupDetails.css';



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
        setGroupAdmin,
        groupAdmin,
        singleGroup, 
        groupUsers,
        viewDetailsClicked, 
        setViewDetailsClicked, 
        onViewButtonClicked,
        LeaveGroup,
        open,
        GetAllUserGroups,
        // setOpen, 
        handleClose,
        GetUsersInGroup,
        
            } = props;

    // console.log(groupAdmin.results.imagename)

    function OnLeaveClick(){
        console.log("leave group clicked");
        setViewDetailsClicked(!open)
        LeaveGroup(singleGroup.id);
        console.log(singleGroup.id)
    }

    function ViewLessDetails(e){
        //  e.preventDefault();
        console.log("view less details clicked")
        onViewButtonClicked();
    }
//GROUP USERS AREA
//============================================================
    let groupUsersArea;
    if(groupUsers.length > 0){
        groupUsersArea = groupUsers.map(function(singleGroupUser){
            return(
                <div className= "singleMemberInGroup">
                    <img width= "50" src={singleGroupUser.user.imagename} ></img>
                </div>
            )
        })
    }
    else{
        groupUsersArea="";
    }
    console.log(groupAdmin.results.imagename)

//trying the same for admins
    // let groupAdminArea= <img width="50" src={groupAdmin.results.imagename}></img>;
let groupAdminArea=""
    // if(groupAdmin.length > 0){
    //     groupAdminArea = groupUsers.map(function(singleGroupAdmin){
    //         return(
    //             <div className= "singleMemberInGroup">
    //                 <img width= "50" src={singleGroupAdmin.results.imagename} ></img>
    //             </div>
    //         )
    //     })}

    // else{
    //     groupAdminArea="";
    // }



    return(

        <div>
            <Dialog onClose={handleClose} open={open}>
                <img src={singleGroup.group.imagename}
                height="300"/>
                
                <div className="titleAndAdmin">
                <Typography className="modalName" variant="h4" component="p">
                {singleGroup.group.name}
                </Typography>

                <div className="adminImageTitle">
                    {/* here the imagename is giving an error- needs to be fixed. */}
                    <img width="45"src={"https://res.cloudinary.com/dqfviar71/image/upload/v1675631922/alex-mccarthy-RGKdWJOUFH0-unsplash_mj1wjq.jpg"}></img>
                <Typography className="modalName" variant="body1" component="p">
                Group Admin
                </Typography>
                </div>
                </div>

                
                <Typography className="location" variant="body1" component="p">
                {singleGroup.group.city}, {singleGroup.group.state}
                </Typography>
                
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
                <div className="groupMembersTitle">
                    <Typography  variant="body1" component="p">
                       This group has {groupUsers.length} active members. 
                    </Typography>
                <div className="groupUsersImages">
                    {groupUsersArea}
                </div>
                </div>
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
        