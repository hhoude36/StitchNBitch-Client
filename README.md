<p align="center">
  <a href="https://stitchnbitch.onrender.com/" rel="" target="_blank"><img width="150" src="https://res.cloudinary.com/dexffe7jc/image/upload/v1675447587/kp0ykq0joo93crqx0xha.jpg" alt="Stitch 'N Bitch"></a></p>
</p>
<h1 align="center">Stitch 'N Bitch</h1>
<h2 align="center">A Home for Crafters</h2>

Crafters can find and build groups that meet regularly to quilt, knit, crochet, needlepoint, sew, and do other handicrafts while tracking their own and others’ progress on current and past projects. With Stitch 'N Bitch it's never been easier to build community around the activities you love.

> Build Status:
Deployed@**[Stitch 'N Bitch](https://stitchnbitch.onrender.com/)**

## Inspiration

Historically, women have used these gatherings as a way to gather and build community. During the 80s and 90s women in the Feminist, Punk, and DIY circles brought these craft circles back to life, using them as a place to reclaim women's work and build political movements. Ever since, the Stitch 'N Bitch has remained alive and well but there has never been a platform dedicated entirely to them. 

## Quick Preview

<img src="https://res.cloudinary.com/dexffe7jc/image/upload/v1676647788/stitch_z5l9os.gif" alt="View of Website"/>

## Features
- Bcrypt Encoding
- User Log-in, Sign-up and Log-out
- Upload ability for User Profile, Group, and Project photos
- Ability to search for Groups by location
- Add, Edit and Delete Projects
- Join, Leave and Create Groups
- Edit Profile Information

## Installation
To install Stitch 'N Bitch use *npm install*:

Front-End:
**[Repository](https://github.com/hhoude36/StitchNBitch-Client)**

Back-End:
**[Repository](https://github.com/hhoude36/StitchNBitch-Server)**

## Technical Framework Usage:
- ElephantSQL
- Express
- React.js
- Node.js
- Sequelize

## Code Framework Style
- Material UI
- Custom Styled Components

## Design Research & Inspiration
The design aims to bridge across generations. While these traditional handicrafts are often associated with older crowds, we also wanted to keep in mind the resurgence among young, hip crafters. We referenced punk/DIY/feminist aesthetics while choosing our fonts and color scheme, while also ensuring the site was desktop friendly and fully mobile. Below are some of the materials we referenced.

<img width="400" src="https://res.cloudinary.com/dqfviar71/image/upload/v1676659914/designgif_jqimgj.gif" alt="Design inspiration images"/>


## Data References
Custom Secured Data Usage

## Usage
Sign-In or Sign-Up

  <h4>Components for each setup:</h4>

        Home Landing     | User Dashboard         | Groups Page         | Profile Page
       --------------------------------------------------------------------------------
        Sign-In Button   | Preview Profile        | Search Bar          | View Profile
        Sign-Up Button   | Edit Profile Button    | View Local Groups   | Edit Profile
        Mobile Preview   | View Projects Button   | Create Groups       | Update Profile Photo
                         | View Joined Groups     | Add Group Photo     | View Current Projects
                         | Create Groups Button   | Join Groups         | Add Project
                         | Search Groups Button   | Leave Groups        | Add Project Photo
                         |                        | Add Group Photo     | Edit Project
                         |                        |                     | Delete Project
        
## Stretch Goals
- [ ] Admin login.
- [ ] Inter group chats.
- [ ] Ability to comment on other user's projects.
- [ ] Ability to add other users as friends.
- [ ] Add editing capabilities for group admins.
- [ ] Utilize session cookies.
- [ ] Offer invite only option for group settings.

## Challenges
- Time managing with less than two(2) weeks to complete. 
- Collaborating in a team of two(2) using Git and GitHub.
- Learning how to allow users to upload images.
- Using ElephantSQL for the first time to facilitate collaboration.  

## Triumphs
- The ability to upload and update a Profile, Group, or Project image.
- Successfully communication between team members to ensure smooth merges.
- Applied the knowledge form the sixteen(16)-week DigitalCrafts Bootcamp.
- Built the back end with our stretch goals in mind so we can continue to add functionalities. 

## Capstone Project Credits Go To The Following Builders
 
- Full-Stack Developer:[Betty-Lee Carter](https://github.com/hhoude36) Ideation, Front-End, Back-End, Deployment, ReadMe-files. Responsible for the Profile and Project functionalities. 
- Full-Stack Developer:[Heather Houde](https://github.com/deliflows) Back-End, Ideation, Front-End, Design-Styles Back-End. Responsible for the Group functionalities. 

## Miscellaneous 
- Git and GitHub Commits, Merges and Branching.
- Cloudinary image storage.
- Used ClickUp as our guide for completing tasks.

## Code Example Extraction
Uploading images to groups
```
async function handleClick(e) {
    e.preventDefault();
    const { files } = document.querySelector(".app_uploadInput");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", upload_preset);
    const options = {method: "POST",body: formData};
    let res = await fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`,options)
    res = await res.json()
    setImageUrl(res.secure_url);
    let res2 = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/addphoto/${id}`,
    { method: 'POST',mode: 'cors', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({ imagename: res.secure_url })
  })
await onNoThanksCLicked(); };

```
Joining the group members and groups tables to find the groups associated with one user.
```
router.get('/findmembers/:id', async function(req,res){
    const {id} = req.params;
    console.log("I am hitting the find all groups members call");
    let memberResults = await groupmembers.findAll({
            where:{
                 userid: id
            },
            include: groups
        }, )
        
    res.json(memberResults); 
});
```

## The End.
