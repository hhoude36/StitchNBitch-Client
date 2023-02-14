import { useState, useEffect } from 'react'
import GroupsByCityCard from '../Components/GroupsByCityCard'
import './GroupCards.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './GroupCards.css';
import AddIcon from '@mui/icons-material/Add';



export default function Searchpage(props) {
    const { user, setUser, isLoggedIn, setIsLoggedIn } = props
    const [citySearched, setCitySearched] = useState("");
    const [cityGroups, setCityGroups] = useState([]);


    //searching functions
    //======================
    function onInputChange(event) {
        setCitySearched(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        SearchGroupsByCity(citySearched);
        console.log(citySearched)
    }

    async function SearchGroupsByCity(citySearched) {
        console.log("hitting SearchGroupsByCityfunction");
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/findbycity/${citySearched}`)
        res = await res.json();
        setCityGroups(res.results);
        console.log(res)
    }


    //LOOPING THROUGH FOR THE CARDS
    //================================
    let theCityGroupCards;
    //if there are cards, send them the group detail page
    if (cityGroups){
    if (cityGroups.length > 0) {
        theCityGroupCards = cityGroups.map(function (singleGroup) {
            return (
                <GroupsByCityCard
                    key={singleGroup.id}
                    singleGroup={singleGroup}
                    user={user} 
                    JoinGroup={JoinGroup}
                    />
            )
        })}

    else if(!cityGroups){
        theCityGroupCards = 
        <Typography className="homeType" variant="h5" component="p">
        Sorry, there are no groups in this city.<br/>
    </Typography>
    }
    }
//JOIN GROUP
//++++++++++++++++++++++++++++++++
    async function JoinGroup(newMember) {
        console.log("I am hitting the join group function")
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/groups/addgroupmember`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newMember)
            });
        res = await res.json();
    }





    return (
        <div>
            <form>
            <Box sx={{ minWidth: 120, marginBottom: 5 }} className="searchDiv">
                <TextField
                    style={{ width: "350px", margin: "5px" }}
                    name='city'
                    type="text"
                    label="Enter your city"
                    variant="outlined"
                    image=""
                    onChange={onInputChange}
                    value={citySearched}
                />

                
                <Button onClick= {onFormSubmit}  variant="contained">Search</Button>
            </Box>
            </form>
            <div className='GroupCards'>
            {theCityGroupCards}
            </div> 
                {setCityGroups}
            <div className="sadLadyDiv">
                <img class="sadLady" width="400" src="https://res.cloudinary.com/dqfviar71/image/upload/v1675609728/5270_lrbaxg.jpg"/>
                <Typography className="homeType" variant="body1" component="p">
                        Didn't quite find what you're looking for? <br/>
                </Typography>
                <Stack className="AddButton" direction="row" spacing={2}>
            <Button variant="contained"><AddIcon/> Create Group</Button></Stack>
            </div>
        </div>
    )
}