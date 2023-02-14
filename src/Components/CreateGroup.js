import { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';


import './GroupCard.css';

export default function CreateGroup(props) {
    const { user,
        handleClose,
        open,
        setCreateGroupClicked,
        createGroupClicked,
        CreateNewGroup,
        onNoThanksCLicked,
        newGroupId,
        setAddClicked } = props;
    const cloud_name = "dexffe7jc";
    const upload_preset = "dmarrsdj";
    const [imageUrl, setImageUrl] = useState("")
    const [addPhotoClicked, setAddPhotoClicked] = useState(false);

    const [newGroup, setNewGroup] = useState({
        name: "",
        description: "",
        meetingtime: "",
        city: "",
        state: "",
        meetinglocation: "",
        meetingday: "",
        groupinterests: "",
        imagename: "https://res.cloudinary.com/dexffe7jc/image/upload/v1675382416/kodvnyxcmgi0lxccz1qh.jpg",
        adminid: user.id
    })

    function onInputChange(event) {
        setNewGroup({ ...newGroup, [event.target.name]: event.target.value });
    }
    function onFormSubmit(event) {
        event.preventDefault();
        CreateNewGroup(newGroup);
        setAddPhotoClicked(!addPhotoClicked)
    }

    function noThanks(event) {
        console.log("No thanks is being clicked")
        onNoThanksCLicked()
    }


    //SENDING PHOTOS TO CLOUDINARY
    //===============================
    async function handleClick(e) {
        e.preventDefault();
        console.log("I'm hitting the handle Click function");
        const { files } = document.querySelector(".app_uploadInput");
        const formData = new FormData();

        formData.append("file", files[0]);
        formData.append("upload_preset", upload_preset);
        const options = {
            method: "POST",
            body: formData,
        };
        let res = await fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`,
            options
        )
        res = await res.json()
        // .then((res) => res.json())
        setImageUrl(res.secure_url);
        console.log(res.secure_url);
        let id = newGroupId;
        let res2 = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/addphoto/${id}`,
            {   
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //Key value pair, key name for the server to reference, then the information!
                body: JSON.stringify({ imagename: res.secure_url })
            })
        await onNoThanksCLicked();
    };

    //IF FORM WAS SUBMITTED, OFFER OPTION TO ADD PHOTO 
    //=========================================
    let formArea;
    if (!addPhotoClicked) {
        formArea =

            <Dialog className="createGroupModal" onClose={handleClose} open={open}>
                <DialogTitle>Create a New Group</DialogTitle>
                <DialogContent>
                    <Box sx={{ minWidth: 120, marginBottom: 5 }}>
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='name'
                            type="text"
                            label="Group Name"
                            variant="outlined"
                            image=""
                            onChange={onInputChange}
                            value={newGroup.name}
                        />

                        <FormControl sx={{ minWidth: 300 }}>
                            <InputLabel id="groupinterests">Group Interests</InputLabel>
                            <Select
                                name='groupinterests'
                                labelId="groupinterests"
                                label="groupinterests"
                                onChange={onInputChange}
                                value={newGroup.groupinterests}
                            >
                                <MenuItem value="Quilting">Quilting</MenuItem>
                                <MenuItem value="Knitting">Knitting</MenuItem>
                                <MenuItem value="Crocheting">Crocheting</MenuItem>
                                <MenuItem value="Needlepoint">Needlepoint</MenuItem>
                                <MenuItem value="Sewing">Sewing</MenuItem>
                                <MenuItem value="Multiple interests">Multiple interests</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='name'
                            type="text"
                            label="Group Interests"
                            variant="outlined"
                            onChange={onInputChange}
                            value={newGroup.groupinterests}
                        />
                        <br />
                        <TextField size="large"
                            style={{ width: "300px", margin: "5px" }}
                            name='description'
                            type="text"
                            label="Description"
                            variant="outlined"
                            onChange={onInputChange}
                            value={newGroup.description}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='city'
                            type="text"
                            label="City"
                            variant="outlined"
                            onChange={onInputChange}
                            value={newGroup.city}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='state'
                            type="text"
                            label="State"
                            variant="outlined"
                            onChange={onInputChange}
                            value={newGroup.state}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='meetingtime'
                            type="time"

                            variant="outlined"
                            onChange={onInputChange}
                            value={newGroup.meetingtime}
                        />
                        <br />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='meetingday'
                            type="text"
                            label="Meeting day"
                            variant="outlined"
                            onChange={onInputChange}
                            value={newGroup.meetingday}
                        />
                        <br />
                    


                            <div className="createGroupButtons">
                            <Stack direction="row" spacing={2}>
                                <Button onClick={(e) => onFormSubmit(e)} variant="contained"> Add </Button></Stack>
                            <Stack direction="row" spacing={2}>
                                <Button onClick={() => setCreateGroupClicked(false)} variant="contained"> Cancel </Button></Stack>
                            </div>

                    </Box>
                </DialogContent>
            </Dialog>
    }
    else {
        formArea = <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle></DialogTitle>
                <DialogContent>
                    <Box sx={{ minWidth: 120, marginBottom: 5 }}>
                    <div className="addPhotoText">
                    <Typography  variant="h5" component="p">
                    Your group has been added.
                    </Typography>
                    <Typography  variant="body1" component="p">
                    Would you like to add a group image?
                    </Typography>
                    </div>

                        <ButtonGroup>
                            <Button
                                variant="contained"
                                component="label">
                                Upload File
                                <input
                                    className="app_uploadInput"
                                    type="file"
                                    hidden />
                            </Button>
                            <img style={{ width: 50 }}
                                src={imageUrl} className="app_uploadedImg" alt="" />
                            <Button
                                className="app_uploadButton"
                                onClick={handleClick}>Save</Button>

                            <Button onClick={noThanks} variant="contained" component="label">
                                No Thanks
                            </Button>
                        </ButtonGroup>



                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    }

    return (
        <div>
            {formArea}
        </div>
    )
}