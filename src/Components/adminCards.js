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
    const { user, setUser, isLoggedIn, setIsLoggedIn, singleAdminGroup, adminGroups, DeleteGroup } = props
    const [viewDetailsClicked, setViewDetailsClicked] = useState(false)

    function onViewButtonClicked() {
        console.log("view details was clicked");
        setViewDetailsClicked(!viewDetailsClicked);
    }


    let viewDetailsArea= <Button onClick={onViewButtonClicked} 
    size="small" color="primary">Learn More</Button>
    if (viewDetailsClicked) {
        viewDetailsArea =
        <div>
        <AdminGroupDetails 
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
                            <p>{singleAdminGroup.name}</p>
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