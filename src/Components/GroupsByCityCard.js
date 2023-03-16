import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ByCityDetails from './ByCityDetails'
import './GroupCard.css';


export default function GroupsByCityCard(props) {
    const { user, setUser, isLoggedIn, setIsLoggedIn, singleGroup, LeaveGroup, JoinGroup } = props
    const [viewDetailsClicked, setViewDetailsClicked] = useState(false)
    const [joinClicked, setJoinClicked] = useState(false);
    const [groupUsers, setGroupUsers] = useState([]);

    const [newMember, setNewMember] = useState({
        userid: user.id,
        groupid: singleGroup.id,
        status: "active",
    })

    function OnJoinClick() {
        console.log("join group clicked")
        setJoinClicked(!joinClicked)
        JoinGroup(newMember);
        // GetAllUserGroups()
    }


    function onViewButtonClicked(e) {
        // e.preventDefault();
        console.log("view details was clicked");
        setViewDetailsClicked(!viewDetailsClicked);
        GetUsersInGroup(singleGroup.id)
    }


    async function GetUsersInGroup(id){
            console.log("I am hitting get all users in group function")
            let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/findgroupmembers/${id}`)
            res = await res.json();
            setGroupUsers(res);
        }
    

            // FINISH CHECKS!
    // ========================================================
     function FindMatchingUsers(){
       const result = groupUsers.find(({userid}) => userid === user.id )
       if(result !== undefined){
        return true 
       }
       else{return false}
      }

  



    let viewDetailsArea = <Button onClick={onViewButtonClicked} 
    size="small" color="primary">Learn More</Button>
    if (viewDetailsClicked) {
   
        viewDetailsArea = <div>
                    <ByCityDetails
                    FindMatchingUsers={FindMatchingUsers}                    
                    groupUsers={groupUsers}
                    setGroupUsers={setGroupUsers}
                    LeaveGroup={LeaveGroup}
                    user={user} isLoggedIn={isLoggedIn}
                    singleGroup={singleGroup}
                    open={viewDetailsClicked}
                    setViewDetailsClicked={setViewDetailsClicked}
                    OnJoinClick={OnJoinClick} 
                    onViewButtonClicked={onViewButtonClicked}/> 
                    <button onClick={onViewButtonClicked}>Less Info</button>   
                   </div>
                 }

    return (
        <div>
            <div className="cardDiv">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image= {singleGroup.imagename}
                        alt="group image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                                {singleGroup.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {singleGroup.city}, {singleGroup.state}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {viewDetailsArea}
                </CardActions>
            </Card>
        </div>



           
        </div>
    )
}