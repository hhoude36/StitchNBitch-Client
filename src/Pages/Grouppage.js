import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import GroupCard from '../Components/GroupCard';
import CreateGroup from '../Components/CreateGroup'
import Groupdetailpage from '../Components/Groupdetailsmodal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { flexbox } from '@mui/system';
import './GroupCards.css';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@mui/material';
import { Link } from "react-router-dom";



export default function Grouppage(props) {
    // const { user, 
    //     setUser, 
    //     isLoggedIn, 
    //     setIsLoggedIn, 
    //     userGroups, 
    //     setUserGroups, 
    //     GetAllUserGroups } = props
    // // const [createGroupClicked, setCreateGroupClicked] = useState(false);
    // // const [newGroupId, setnewGroupId] = useState("")


    // function onNoThanksCLicked(event) {
    //     setCreateGroupClicked(!createGroupClicked)
    //     GetAllUserGroups();
    // }

    // //CREATE NEW GROUP
    // //==============================

    // function GetAllGroups(){
    //     GetAllUserGroups();
    // }
    // useEffect(() => {
    //     GetAllGroups();
    // }, []);
    
    // function onAddClick(e) {
    //     e.preventDefault();
    //     console.log("Add was clicked")
    //     setCreateGroupClicked(!createGroupClicked);
    // }


    // async function CreateNewGroup(newGroup) {
    //     console.log("I am hitting the create group function")
    //     let res = await fetch("http://localhost:3005/groups/creategroup",
    //         {
    //             method: 'POST',
    //             mode: 'cors',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(newGroup)
    //         });
    //     res = await res.json();
    //     console.log(res.results.id)
    //     setnewGroupId(res.results.id)
    //     GetAllGroups()
    // }




    // FIND GROUPS FOR ONE USER 
    //=============================
    // async function GetAllUserGroups() {
    //     console.log("I am hitting get all groups function")
    //     let theid = user.id
    //     let res = await fetch(`http://localhost:3005/groups/findmembers/${theid}`)
    //     res = await res.json();
    //     setUserGroups(res);
    // }


    // useEffect(() => {
    //     GetAllUserGroups();
    // }, []);


    //LEAVE GROUP
    //===========================================

    // async function LeaveGroup(id) {
    //     console.log("I am hitting LeaveGroup function on Group Page" + id)
    //     let res = await fetch(`http://localhost:3005/groups/deletegroupmember/${id}`);
    //     res = await res.json();
    //     console.log(res);
    //     GetAllGroups()
    // }

    //LOOPING THROUGH FOR THE CARDS
    //================================
    // let theGroupCards;
    // if (userGroups.length > 0) {
    //     theGroupCards = userGroups.map(function (singleGroup) {
    //         return (
    //     <div>
            
    //             <GroupCard 
    //             key={user.id}
    //             GetAllUserGroups={GetAllUserGroups} 
    //             LeaveGroup={LeaveGroup} 
    //             user={user} 
    //             setUser={setUser} 
    //             isLoggedIn={isLoggedIn} 
    //             setIsLoggedIn={setIsLoggedIn} 
    //             singleGroup={singleGroup}
    //             />
    //         </div>

           
    //         )
    //     })
    // }
    //if there are none, send a message. 
    //================================
    // else {
    //     theGroupCards =    <div className="noGroupsDiv"> <Typography className="homeType" variant="h5" component="p">
    //     Sorry, you don't belong to any groups. <br/>
    //     <Stack className="findGroupsButton" direction="row" spacing={2}>
    //         <Link to='/search'><Button variant="contained" color="secondary">Search  Groups</Button></Link></Stack>
    //     </Typography></div>
    // }

    //if the add group button is clicked
    //================================
    // let addGroupArea =
    //     <Stack className="AddButton" direction="row" spacing={2}>
    //         <Button onClick={onAddClick} variant="contained"><AddIcon/> Create Group</Button></Stack>
    // if (createGroupClicked) {
    //     return (
    //         addGroupArea = <CreateGroup
    //             handleClose={onAddClick}
    //             open={createGroupClicked}
    //             newGroupId={newGroupId}
    //             onNoThanksCLicked={onNoThanksCLicked}
    //             CreateNewGroup={CreateNewGroup}
    //             createGroupClicked={createGroupClicked}
    //             setCreateGroupClicked={setCreateGroupClicked}
    //             user={user}

    //         />
    //     )
    // }
    //otherwise, show this button.
    //================================

    return (
        <h1>blah</h1>
        // <div>
   
        // <div className='GroupCards'>
        //     {theGroupCards}
        // </div>
        // <div className="sadLadyDiv">
        //         <img class="sadLady" width="400" src="https://res.cloudinary.com/dqfviar71/image/upload/v1675609728/5270_lrbaxg.jpg"/>
        //         <Typography className="homeType" variant="body1" component="p">
        //                 Didn't quite find what you're looking for? <br/>
        //         </Typography>
        //         <Stack className="AddButton" direction="row" spacing={2}>
        //         {addGroupArea}
        //         </Stack>
        //     </div>
        // </div>

    )
}