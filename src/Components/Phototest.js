
import { useState } from 'react';


export default function Phototest(props){
    const {user} = props;
    const cloud_name = "dexffe7jc";
    const upload_preset = "dmarrsdj";
    const [imageUrl, setImageUrl] = useState("")

    async function handleClick() {

        console.log("I'm hitting the handle Click function");
        const { files } = document.querySelector(".app_uploadInput");
        const formData = new FormData();
        console.log(FormData)

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

        let res2 = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/editphoto/${user.id}`,
        {
            method: 'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                //Key value pair, key name for the server to reference, then the information!
            body: JSON.stringify({imagename:res.secure_url}) 
        })
    };

    return(
        <div>
            <input 
            className="app_uploadInput"
            type="file"/>
            <img src={imageUrl} className="app_uploadedImg" alt="" />
            <button 
            className="app_uploadButton" 
            onClick={handleClick}>Save</button>
        </div>
    )
}










// import {useState} from 'react';
// import Axios from 'axios';
// import {Image} from 'cloudinary-react'

// export default function Phototest(){

// const [imageSelected, setImageSelected] = useState("")

// const uploadImage = (files) => {
//     const formData = new FormData()
//     formData.append("file", imageSelected)
//     formData.append("upload_preset", "dmarrsdj")

//     Axios.post(
//         "https://api.cloudinary.com/v1_1/dexffe7jc/image/upload", 
//         formData
//         ).then((res)=>
//         console.log(res))
//     };

//     return(
//         <div>
//         <input type="file"
//         onChange={(event) => {
//             setImageSelected(event.target.files[0]);
//         }}/>
//         <button onClick={uploadImage}>Upload</button>
//         <Image 
//         style={{ width:200}}
//         cloudName="dexffe7jc"
//         publicId="https://res.cloudinary.com/dexffe7jc/image/upload/v1675124629/wlcmyrw18inf1nuokjol.jpg"
//         />
//         </div>
//     )
// }