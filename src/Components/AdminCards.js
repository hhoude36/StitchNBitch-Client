import { useState } from 'react';
import Groupdetailsmodal from './Groupdetailsmodal'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AdminGroupDetails from './AdminGroupDetails';

export default function AdminCards(props) {
    const { user, 
        setUser, 
        isLoggedIn, 
        setIsLoggedIn, 
        singleAdminGroup, 
        adminGroups, 
        DeleteGroup, 
        EditGroup,
        GetAllAdminGroups } = props
    const [viewDetailsClicked, setViewDetailsClicked] = useState(false)
    const [groupUsers, setGroupUsers] = useState([]);



    //BUTTONS CLICKED AREA
    //=================================
    function onViewButtonClicked() {
        console.log("view details was clicked");
        setViewDetailsClicked(!viewDetailsClicked);
        GetUsersInGroup(singleAdminGroup.groupid);

    }

    async function GetUsersInGroup(id){
        console.log("I am hitting get all users in group function")
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/findgroupmembers/${id}`)
        res = await res.json();
        setGroupUsers(res);
    }


    //View Details area
    //==========================================
    let viewDetailsArea= <Button onClick={onViewButtonClicked} 
    size="small" color="primary">Learn More</Button>
    if (viewDetailsClicked) {
        viewDetailsArea =
        <div>
        <AdminGroupDetails 
        groupUsers={groupUsers}
        GetAllAdminGroups={GetAllAdminGroups}
        EditGroup={EditGroup}
        DeleteGroup={DeleteGroup}
        user={user} 
        isLoggedIn={isLoggedIn} 
        singleAdminGroup={singleAdminGroup} 
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
                        image= {singleAdminGroup.imagename}
                        alt="group image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {singleAdminGroup.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {singleAdminGroup.city}, {singleAdminGroup.state}
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
