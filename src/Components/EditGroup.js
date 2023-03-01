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

export default function EditGroupModal(props) {
    const { user,
        handleClose,
        open,
        EditGroup,
        onEditClick,
        singleAdminGroup,
        editClicked,
        setEditClicked
         } = props;



    const [editGroupInfo, setEditGroupInfo] = useState({
        name: "",
        description: "",
        meetingtime: "",
        city: "",
        state: "",
        meetinglocation: "",
        meetingday: "",
        groupinterests: "",
        adminid: user.id
    })

    function onInputChange(event) {
        setEditGroupInfo({ ...editGroupInfo, [event.target.name]: event.target.value });
    }

    function onFormSubmit(event) {
        event.preventDefault();
        // CreateNewGroup(newGroup, newMember);
        // setAddPhotoClicked(!addPhotoClicked)
    }

   

    return (
        <div>
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
                            value={singleAdminGroup.name}
                        />

                        <FormControl sx={{ minWidth: 300 }}>
                            <InputLabel id="groupinterests">Group Interests</InputLabel>
                            <Select
                                name='groupinterests'
                                labelId="groupinterests"
                                label="groupinterests"
                                onChange={onInputChange}
                                value={singleAdminGroup.groupinterests}
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
                            value={singleAdminGroup.groupinterests}
                        />
                        <br />
                        <TextField size="large"
                            style={{ width: "300px", margin: "5px" }}
                            name='description'
                            type="text"
                            label="Description"
                            variant="outlined"
                            onChange={onInputChange}
                            value={singleAdminGroup.description}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='city'
                            type="text"
                            label="City"
                            variant="outlined"
                            onChange={onInputChange}
                            value={singleAdminGroup.city}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='state'
                            type="text"
                            label="State"
                            variant="outlined"
                            onChange={onInputChange}
                            value={singleAdminGroup.state}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            name='meetingtime'
                            type="time"

                            variant="outlined"
                            onChange={onInputChange}
                            value={singleAdminGroup.meetingtime}
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
                            value={singleAdminGroup.meetingday}
                        />
                        <br />
                    
                            <div className="createGroupButtons">
                            <Stack direction="row" spacing={2}>
                                <Button onClick={(e) => onFormSubmit(e)} variant="contained"> Save </Button></Stack>
                            <Stack direction="row" spacing={2}>
                                <Button onClick={() => setEditClicked(false)} variant="contained"> Cancel </Button></Stack>
                            </div>

                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    )
}