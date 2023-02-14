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
    }


    let viewDetailsArea = <Button onClick={onViewButtonClicked} 
    size="small" color="primary">Learn More</Button>
    if (viewDetailsClicked) {
   
        viewDetailsArea = <div>
                    <ByCityDetails
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
                        <Typography gutterBottom variant="h5" component="div">
                            <p>{singleGroup.name}</p>
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



            {/* <h3> {singleGroup.name}</h3>
            <p> {singleGroup.city}</p>
            <p> {singleGroup.state}</p>
            <button onClick={onViewButtonClicked}>View Details</button>
            {viewDetailsArea} */}
        </div>
    )
}