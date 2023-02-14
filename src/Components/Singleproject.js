import Editprojectmodal from "./Editprojectmodal";
import Projectimage from "./Projectimage";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Singleproject(props) {
  const { user, singleProject, GetAllProjects } = props;
  const [photoClicked, setPhotoClicked] = useState(true);
  const [editProjectClicked, setEditProjectClicked] = useState(false);
  // const [color, setColor] = useState("");

  function changePhotoStatus() {
    setPhotoClicked(!photoClicked);
  }
  function onPhotoClicked(e) {
    e.preventDefault();
    changePhotoStatus();
  }
  function openEditProjectArea() {
    setEditProjectClicked(!editProjectClicked);
  }

  async function EditProject(editProject) {
    console.log(editProject);
    let id = singleProject.id;
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/projects/editproject/${id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProject),
    });
    res = await res.json();
    await GetAllProjects();
  }

  // =================Delete Project Function
  async function DeleteProject(id) {
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/projects/deleteproject/${id}`);
    res = await res.json();
    await GetAllProjects();
  }

  let color;
  if (singleProject.progress === "Idea") {
    color = "#ffff81";
  } else if (singleProject.progress === "In Progress") {
    color = "#F0A868";
  } else color = "#6CC675";

  let thePhotoIcon;
  if (photoClicked) {
    thePhotoIcon = (
      <div>
        <Button
          variant="container"
          startIcon={<AddAPhotoIcon />}
          onClick={onPhotoClicked}
        >
          Add Image
        </Button>
      </div>
    );
  } else
    thePhotoIcon = (
      <Projectimage
        singleProject={singleProject}
        changePhotoStatus={changePhotoStatus}
        GetAllProjects={GetAllProjects}
      />
    );
  const newStartDate = new Date(singleProject.startdate).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
  const newEndDate = new Date(singleProject.enddate).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  let projectContent = (
    <Card
      sx={{
        display: "flex",
        margin: 1,
        width: 1,
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={singleProject.imagename}
        alt={singleProject.name}
      />
{/* <Box> ==========================This box makes it pretty on smaller screens */ }
<Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 1,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {singleProject.name}
          </Typography>
          <Typography variant="body2">Type: {singleProject.type}</Typography>
          <Typography variant="body2">Began: {newStartDate}</Typography>
          <Typography variant="body2">Finished: {newEndDate}</Typography>
          <Typography variant="body2">
            Gifted To: {singleProject.giftedto}
          </Typography>
          <Typography variant="body2">Notes: {singleProject.notes}</Typography>
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: color }}
          >
            {singleProject.progress}
          </Button>
        </CardContent>
      </Box>
      <CardActions sx={{ alignSelf: "flex-end" }}>
        {thePhotoIcon}
        <Button onClick={openEditProjectArea}>Edit</Button>
      </CardActions>
{/* </Box> */}


    </Card>
  );
  if (editProjectClicked) {
    projectContent = (
      <div>
        <Container maxWidth="sm">
          <Editprojectmodal
            project={singleProject}
            user={user}
            openEditProjectArea={openEditProjectArea}
            EditProject={EditProject}
            DeleteProject={DeleteProject}
          />
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {projectContent}
      </Grid>
    </div>
  );
}

// import Editprojectmodal from "./Editprojectmodal";
// import {useState} from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import CardActions from '@mui/material/CardActions';
// import Phototest from "./UpdateProfileImage";
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';

// export default function Singleproject(props){
//     const {user, singleProject, GetAllProjects} = props;
//     const [editProjectClicked, setEditProjectClicked] = useState(false);
//     const cloud_name = "dexffe7jc";
//     const upload_preset = "dmarrsdj";
//     const [imageUrl, setImageUrl] = useState("")
//     const [photoIconClicked, setPhotoIconClicked] = useState(true);

//     function onPhotoIconClicked(){
//         setPhotoIconClicked(!photoIconClicked);
//     }

//     async function handleClick() {
//         console.log("I'm hitting the handle Click function");
//         const { files } = document.querySelector(".app_uploadInput");
//         const formData = new FormData();

//         formData.append("file", files[0]);
//         formData.append("upload_preset", upload_preset);
//         const options = {
//             method: "POST",
//             body: formData,
//         };
//         let res = await fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`,
//         options
//         )
//         res = await res.json()

//         setImageUrl(res.secure_url);

//         let res2 = await fetch(`http://localhost:3005/projects/editphoto/${singleProject.id}`,
//         {
//             method: 'POST',
//             mode:'cors',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//                 },
//                 //Key value pair, key name for the server to reference, then the information!
//             body: JSON.stringify({imagename:res.secure_url})
//         })
//     };

//     function openEditProjectArea(){
//         setEditProjectClicked(!editProjectClicked);
//     }

//     async function EditProject(editProject){
//         console.log(editProject);
//         let id = singleProject.id;
//         let res = await fetch(`http://localhost:3005/projects/editproject/${id}`,
//         {
//             method: 'POST',
//             mode:'cors',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//                 },
//             body: JSON.stringify(editProject)
//             });
//             res = await res.json();
//             await GetAllProjects();
//     }

//     async function DeleteProject(id){
//         let res = await fetch(`http://localhost:3005/projects/deleteproject/${id}`)
//         res = await res.json();
//         await GetAllProjects();
//     }
//     let thePhotoIcon;
//     if(photoIconClicked){
//         thePhotoIcon = (
//             <AddAPhotoIcon onClick={onPhotoIconClicked}></AddAPhotoIcon>
//         )
//     }
//     else(
//         thePhotoIcon = (
//         <div>
//             <input
//             className="app_uploadInput"
//             type="file"/>
//             <img sx={{width:100}}
//             src={imageUrl} className="app_uploadedImg" alt="" />
//             <button
//             className="app_uploadButton"
//             onClick={handleClick}>Save</button>
//         </div>
//         )
//     )
// //     <div>
// //     <input
// //     className="app_uploadInput"
// //     type="file"/>
// //     <img sx={{width:100}}
// //     src={imageUrl} className="app_uploadedImg" alt="" />
// //     <button
// //     className="app_uploadButton"
// //     onClick={handleClick}>Save</button>
// //  </div>
// const newStartDate = new Date(singleProject.startdate).toLocaleString(
//     "en-US",
//       {
//         month: "short",
//         day: "2-digit",
//         year: "numeric",
//       }
//     );
// const newEndDate = new Date(singleProject.enddate).toLocaleString(
//     "en-US",
//       {
//         month: "short",
//         day: "2-digit",
//         year: "numeric",
//       }
//     );

//     let projectContent = (
//             <Card sx={{ display: 'flex', margin: 1}}>
//                       <CardMedia
//                         component="img"
//                         sx={{ width: 151 }}
//                         image={singleProject.imagename}
//                         alt={singleProject.name}
//                     />
//                 <Box sx={{ display: 'flex', flexDirection: 'column' }}></Box>
//                 {/* {thePhotoIcon} */}
//                 <CardContent>
//                     <Typography
//                     variant="h5"
//                     component="div">
//                     {singleProject.name}
//                     </Typography>
//                     <Typography variant="body2">Type: {singleProject.type}</Typography>
//                     <Typography variant="body2">Began: {newStartDate}</Typography>
//                     <Typography variant="body2">Finished: {newEndDate}</Typography>
//                     <Typography variant="body2">Gifted To: {singleProject.giftedto}</Typography>
//                     <Typography variant="body2">Notes: {singleProject.notes}</Typography>
//                 </CardContent>

//                 {/* <p>{singleProject.progress}</p> */}

//                     <CardActions>
//                         <Button onClick={openEditProjectArea}>Edit</Button>
//                     </CardActions>
//                 <Box/>
//             </Card>
//     )
//     if(editProjectClicked){
//         projectContent = (
//             <div>
//                 <Container maxWidth="sm"
//                 alignItems="center">
//                 <Editprojectmodal
//                         project={singleProject}
//                         user={user}
//                         openEditProjectArea={openEditProjectArea}
//                         EditProject={EditProject}
//                         DeleteProject={DeleteProject}/>
//                 </Container>

//             </div>)}

//     return(
//         <div>
//             <Grid
//             container
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//             >
//                 {projectContent}
//             </Grid>

//         </div>
//     )
// }
