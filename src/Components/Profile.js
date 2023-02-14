import { useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Editprofile from './Editprofile';
import UpdateProfileImage from './UpdateProfileImage'
// ============================MUI 
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';



export default function Profile(props){
    const {user, setUser} = props;
    const [editNotClicked, setEditNotClicked] = useState(true);
    const [photoClicked, setPhotoClicked] = useState(true)

function changePhotoStatus(){
    setPhotoClicked(!photoClicked)
}
function onPhotoClicked(e){
    e.preventDefault()
    changePhotoStatus()
}
function onEditClicked(){
    setEditNotClicked(!editNotClicked);
}
let thePhotoIcon;
 if(photoClicked){
    thePhotoIcon = (
        <div>
            <Button 
            variant="container"
            startIcon={<AddAPhotoIcon/>}
            // alignItems="baseline"
            onClick={onPhotoClicked}>Update
            </Button>
        </div>
    )
 }
 else(
    thePhotoIcon =(
        <UpdateProfileImage user={user} 
        changePhotoStatus={changePhotoStatus}
        setUser={setUser}/>
    )
 )
    let theProfileCard;
    if(editNotClicked){
        theProfileCard = (
        <Card sx={{
            display: 'flex',
            marginBottom: 10, 
            marginTop: 10,
            width: 1, 
            justifyContent: "space-between",
            backgroundColor: "#F5DCF9",
            flexWrap: "wrap"
            }}>
            <Box style={{margin: 10}}>
                <CardMedia
                component="img"
                alt="ProfileImage"
                height="150"
                // width="50"
                image={user.imagename}
                sx={{ borderRadius: 30}}
                />
            </Box>
            <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            width: 1/2 }}>
                <CardContent>
                    <Typography variant="h4" marginBottom="20px" marginTop="10px">Hey {user.name}!</Typography>
                    <Box display="flex" alignItems='baseline'>
                    <Typography variant='caption' marginRight="5px">Username:</Typography>
                    <Typography>{user.username}</Typography>
                    </Box>
                    <Box display="flex" alignItems='baseline'>
                    <Typography variant='caption' marginRight="5px">About:</Typography>
                    <Typography>{user.about}</Typography>
                    </Box>
                    <Box display="flex" alignItems='baseline'>
                    <Typography variant='caption' marginRight="5px">I'm intersted in...</Typography>
                    <Typography>{user.interests}</Typography>
                    </Box>
                    <Box display="flex" alignItems='baseline'>
                    <Typography variant='caption' marginRight="5px">I live in</Typography>
                    <Typography>{user.city}, {user.state}</Typography>
                    </Box>
                </CardContent>
            </Box>
            <CardActions  sx={{alignSelf: "flex-end"}}>
                 {thePhotoIcon}
                <Button size="small" onClick={onEditClicked}>Edit Profile</Button>
            </CardActions>
        </Card>
        )
    }
    else(
        theProfileCard =(
            <Editprofile user={user} onEditClicked={onEditClicked} setUser={setUser}/>
        )
    )
    return(
        <div>
            {theProfileCard}
        </div>
    )
}