import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import GroupCard from "../Components/GroupCard";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import CreateGroup from '../Components/CreateGroup'

import './GroupCards.css';




export default function Dashboard(props) {
  const [createGroupClicked, setCreateGroupClicked] = useState(false);
  const [newGroupId, setnewGroupId] = useState("")
  const [userGroups, setUserGroups] = useState([]);

  
  const { user, setUser, isLoggedIn, setIsLoggedIn } = props;

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    //if logged in changes, run the effect again
    //to log out, reset the login state to navigate back to home
  }, [isLoggedIn]);

  let profileContent = (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#F5DCF9",
      }}
    >
      <Box padding="20px">
        <CardMedia
          component="img"
          alt="ProfileImage"
          height="200"
          // width="50"
          image={user.imagename}
          sx={{ borderRadius: 30 }}
        ></CardMedia>
      </Box>
      <Box width="1/2" sx={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'flex-end'
      }}
      >
        <Typography 
        variant="h4" 
        marginTop="10px" 
        marginLeft="10px">
          {user.name}'s Profile
        </Typography>
        <CardActions
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/Profile")}
          >
            Edit Profile
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/Profile")}
          >
            View Projects
          </Button>
        </CardActions>
      </Box>
    </Card>
  );


//GROUP STUFF
//================================================= 
function onAddClick(e) {
  e.preventDefault();
  console.log("Add was clicked")
  setCreateGroupClicked(!createGroupClicked);
}


function onNoThanksCLicked(event) {
  setCreateGroupClicked(!createGroupClicked)
  GetAllUserGroups();
}

//GET ALL USERS FUNCTION
  //=======================
  async function GetAllUserGroups() {
    console.log("I am hitting get all user groups function")
    let theid = user.id
    console.log(theid)
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/findmembers/${theid}`)
    res = await res.json();
    console.log(res, "data from get all user groups")
    setUserGroups(res);
}


useEffect(() => {
    GetAllUserGroups();
}, []);


async function CreateNewGroup(newGroup) {
  console.log("I am hitting the create group function")
  let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/creategroup`,
      {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newGroup)
      });
  res = await res.json();
  console.log(res.results.id)
  setnewGroupId(res.results.id)
  GetAllUserGroups()
}




    //LEAVE GROUP
    //===========================================

    async function LeaveGroup(id) {
      console.log("I am hitting LeaveGroup function on Group Page" + id)
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/deletegroupmember/${id}`);
      res = await res.json();
      console.log(res);
      GetAllUserGroups()
  }


   //LOOPING THROUGH FOR THE CARDS
    //================================
// function GetAllGroups(){
//   console.log("Get All Groups is firing")
//   useEffect(() => {
//     console.log("use effect inside of get all groups is firing")
//     GetAllUserGroups();
// }, []);
// }





    let theGroupCards;
    if (userGroups.length > 0) {
        theGroupCards = userGroups.map(function (singleGroup) {
            return (
        <div>
            
                <GroupCard 
                key={user.id}
                GetAllUserGroups={GetAllUserGroups} 
                LeaveGroup={LeaveGroup} 
                user={user} 
                setUser={setUser} 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                singleGroup={singleGroup}
                />
            </div>

           
            )
        })
    }
    //if there are none, send a message. 
    //================================
    else {
        theGroupCards =    <div className="noGroupsDiv"> <Typography className="homeType" variant="h5" component="p">
        Sorry, you don't belong to any groups. <br/>
        <Stack className="findGroupsButton" direction="row" spacing={2}>
            <Link to='/search'><Button variant="contained" color="secondary">Search  Groups</Button></Link></Stack>
        </Typography></div>
    }

 //if the add group button is clicked
    //================================
    let addGroupArea =
        <Stack className="AddButton" direction="row" spacing={2}>
            <Button onClick={onAddClick} variant="contained"><AddIcon/> Create Group</Button></Stack>
    if (createGroupClicked) {
        return (
            addGroupArea = <CreateGroup
                handleClose={onAddClick}
                open={createGroupClicked}
                newGroupId={newGroupId}
                onNoThanksCLicked={onNoThanksCLicked}
                CreateNewGroup={CreateNewGroup}
                createGroupClicked={createGroupClicked}
                setCreateGroupClicked={setCreateGroupClicked}
                user={user}

            />
        )
    }


  return (
    <div>
      {/* LOGGED IN HEADER WITH SEARCH BAR AND LOG OUT OPTION
        MY GROUPS TITLE
        CARDS OF GROUPS
        MY PROFILE TITLE
        IMAGE OF PROFILE PIC, NAME, USER NAME, EDIT PROFILE BUTTON AND VIEW PROJECTS BUTTON */}

      
      {profileContent}

    {/* GROUPS AREA  */}
    <Typography className="userGroupsText"
        variant="h5" 
        marginTop="10px" 
        marginLeft="10px">
      You belong to {userGroups.length} groups.        
    </Typography>
 

      <div className="cardDiv">
    {theGroupCards}
      </div>

      <div className="sadLadyDiv">
                <img class="sadLady" width="400" src="https://res.cloudinary.com/dqfviar71/image/upload/v1675609728/5270_lrbaxg.jpg"/>
                <Typography className="homeType" variant="body1" component="p">
                        Haven't quite found  what you're looking for? <br/>
                </Typography>
                <Stack className="AddButton" direction="row" spacing={2}>
                {addGroupArea}
                </Stack>
            </div>
    </div>
  );
}
