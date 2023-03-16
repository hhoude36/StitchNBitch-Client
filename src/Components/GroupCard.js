import { useState } from 'react';
import Groupdetailsmodal from './Groupdetailsmodal'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './GroupCard.css';

export default function GroupCard(props) {
    const { user, setUser, isLoggedIn, setIsLoggedIn, singleGroup, LeaveGroup } = props
    const [viewDetailsClicked, setViewDetailsClicked] = useState(false)
    const [groupUsers, setGroupUsers] = useState([]);
    const [groupAdmin, setGroupAdmin] = useState([]);

    function onViewButtonClicked() {
        console.log("view details was clicked");
        setViewDetailsClicked(!viewDetailsClicked);
        GetUsersInGroup(singleGroup.groupid);
        GetGroupAdminImage(singleGroup.group.adminid);
    }

    async function GetUsersInGroup(id){
        console.log("I am hitting get all users in group function")
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/findgroupmembers/${id}`)
        res = await res.json();
        setGroupUsers(res);
    }

    async function GetGroupAdminImage(id){
        console.log("I am hitting get admin of group function")
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/getadmin/${id}`)
        res = await res.json();
        setGroupAdmin(res);
    }



    let viewDetailsArea= <Button onClick={onViewButtonClicked} 
    size="small" color="primary">Learn More</Button>
    if (viewDetailsClicked) {
        viewDetailsArea =
            <div>
                <Groupdetailsmodal 
                setGroupAdmin={setGroupAdmin}
                groupAdmin={groupAdmin}
                groupUsers={groupUsers}
                GetUsersInGroup={GetUsersInGroup} 
                LeaveGroup={LeaveGroup} 
                user={user} 
                isLoggedIn={isLoggedIn} 
                singleGroup={singleGroup} 
                open={viewDetailsClicked}
                setViewDetailsClicked={setViewDetailsClicked}
                onViewButtonClicked={onViewButtonClicked} />
            </div>
    }


    return (
        <div className="cardDiv">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image= {singleGroup?.group?.imagename}
                        alt="group image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {singleGroup?.group?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {singleGroup?.group?.city}, {singleGroup?.group?.state}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {viewDetailsArea}
                </CardActions>
            </Card>
        </div>
    )

}