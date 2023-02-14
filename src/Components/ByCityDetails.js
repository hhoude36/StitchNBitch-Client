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
        singleGroup,
        viewDetailsClicked,
        setViewDetailsClicked,
        onViewButtonClicked,
        LeaveGroup,
        open,
        OnJoinClick } = props;

    function ViewLessDetails(e) {
        //  e.preventDefault();
        console.log("view less details clicked")
        onViewButtonClicked();
    }

    function JoinMe(e) {
        e.preventDefault();
        console.log("leave group clicked");
        OnJoinClick(singleGroup.id);
    }
    // function OnLeaveClick(){
    //     console.log("leave group clicked");
    //     LeaveGroup(singleGroup.id)
    // }

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
                <div className="detailsButtons">
                    <Stack direction="row" spacing={2}>
                        <Button onClick={JoinMe} variant="contained">Join this group</Button></Stack>
                    <Button onClick={ViewLessDetails}>Less Information</Button>
                </div>
            </Dialog>
        </div>

        // <div>
        //     <Dialog onClose={viewDetailsClicked} open={open}>
        //         <DialogTitle>{singleGroup.name}</DialogTitle>
        //         <DialogContent>
        //             <DialogContentText>
        //                 {singleGroup.city},  {singleGroup.state}
        //             </DialogContentText>
        //             <DialogContentText>
        //                 {singleGroup.meetingday}
        //             </DialogContentText>
        //             <DialogContentText>
        //                {singleGroup.meetingday}
        //             </DialogContentText>
        //         </DialogContent>
        //         <button onClick={JoinMe}>Join</button>
        //         <button onClick={ViewLessDetails}>Less Information</button>
        //       </Dialog>

        )
}


