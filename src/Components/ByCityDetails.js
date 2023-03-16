import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../Pages/GroupCards.css';
import Typography from '@mui/material/Typography';

export default function ByCityDetails(props) {
    const { user,
        groupUsers,
        setGroupUsers,
        singleGroup,
        viewDetailsClicked,
        setViewDetailsClicked,
        onViewButtonClicked,
        open,
        FindMatchingUsers,
        OnJoinClick } = props;
    
    const [joinMeClicked, setJoinMeClicked] = useState(false);


    function ViewLessDetails(e) {
        //  e.preventDefault();
        console.log("view less details clicked")
        onViewButtonClicked();
    }


    // // FINISH CHECKS!
    // // ========================================================
    // async function isUserInGroupAlready(){
    //   let res;
    //     for(let groupUser of groupUsers){
    //     if(groupUser.id == user.id ){
    //      break
    //      res = true
    //     }
    //     else{res= false}
    // }
    // console.log(res)
    // return res
    // }

    function JoinMe(e) {
        e.preventDefault();
        console.log("leave group clicked");
        // CheckForRepeatsInGroup()
        OnJoinClick(singleGroup.id);
        setJoinMeClicked(!joinMeClicked);
    }
 
let detailsButtons = 
<div className="detailsButtons">
<Stack direction="row" spacing={2}>
<Button onClick={JoinMe} variant="contained">Join this group</Button></Stack>
<Button onClick={ViewLessDetails}>Less Information</Button>
</div>

if(joinMeClicked || FindMatchingUsers()){
 detailsButtons=
 <div className="detailsButtons">
<div style={{ color:"green"}}>
 <Stack direction="row" spacing={2}>
 <Typography variant="body1" component="p" >
        ✓ Group Joined
 </Typography></Stack>
 </div>
 <Button onClick={ViewLessDetails}>Less Information</Button>
</div>   
}


    return (

        <div>
            <Dialog onClose={viewDetailsClicked} open={open}>
                <img src={singleGroup.imagename}
                    height="300" />
                <div className="modalTitleDiv">
                    <Typography className="modalName" variant="h4" component="p">
                        {singleGroup.name}
                    </Typography>

                    <Typography className="modalName" variant="body1" component="p">
                        {singleGroup.city}, {singleGroup.state}
                    </Typography>
                </div>
                <DialogContent>

                    <div className="allModalInfo">
                        <div className="keyInfo">

                            <DialogContentText >
                                <Typography variant="body1" component="p">
                                    Time
                                </Typography>
                                {singleGroup.meetingtime}
                            </DialogContentText>
                            <DialogContentText>
                                <Typography variant="body1" component="p">
                                    Day
                                </Typography>
                                {singleGroup.meetingday}
                            </DialogContentText>

                            <DialogContentText>
                                <Typography variant="body1" component="p">
                                    Location
                                </Typography>
                                {singleGroup.meetinglocation}
                            </DialogContentText>

                            <DialogContentText>
                                <Typography variant="body1" component="p">
                                    Interests
                                </Typography>
                                {singleGroup.groupinterestes}
                            </DialogContentText>

                        </div>
                        <div className="modalDescription">
                            <DialogContentText>
                                {singleGroup.description}
                                euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida<br />euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida
                            </DialogContentText>
                        </div>

                    </div>
                </DialogContent>
               {detailsButtons}
                </Dialog>
            </div>

        )
}


