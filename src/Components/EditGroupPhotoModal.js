import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function EditGroupPhotoModal(props) {
  const { changePhotoStatus, singleAdminGroup, GetAllAdminGroups } = props;
  const cloud_name = "dexffe7jc";
  const upload_preset = "dmarrsdj";
  const [imageUrl, setImageUrl] = useState("");

  async function handleClick() {
    console.log("I'm hitting the handle Click function");
    const { files } = document.querySelector(".app_uploadInput");
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", upload_preset);
    const options = {
      method: "POST",
      body: formData,
    };
    let res = await fetch(
      `https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`,
      options
    );
    res = await res.json();

    setImageUrl(res.secure_url);

    let res2 = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/groups/editphoto/${singleAdminGroup.id}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //Key value pair, key name for the server to reference, then the information!
        body: JSON.stringify({ imagename: res.secure_url }),
      }
    );
    changePhotoStatus();
    await GetAllAdminGroups();
  }

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" component="label">
          Upload Image
          <input className="app_uploadInput" type="file" hidden />
        </Button>
        <img
          style={{ width: 50 }}
          src={imageUrl}
          className="app_uploadedImg"
          alt=""
        />
        <Button className="app_uploadButton" onClick={handleClick}>
          Save
        </Button>
      </ButtonGroup>
    </div>
  );
}
