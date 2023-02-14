import Singleproject from "./Singleproject";
import Createprojectmodal from "./Createprojectmodal";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import Editprojectmodal from "../Components/Editprojectmodal";

export default function Myprojects(props) {
  const { user } = props;
  const [projectList, setProjectList] = useState([]);

  async function CreateNewProject(newProject) {
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/projects/createproject`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });
    res = await res.json();
  }

  async function GetAllProjects() {
    let id = user.id;
    console.log("hitting the all projects function", id);
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/projects/findall/${id}`);
    res = await res.json();
    console.log(res);
    setProjectList(res);
  }
  useEffect(() => {
    GetAllProjects();
  }, []);

  let theProjectList;
  if (projectList.length > 0) {
    theProjectList = projectList.map(function (singleProject) {
      return (
        <Singleproject
          singleProject={singleProject}
          user={user}
          key={singleProject.id}
          GetAllProjects={GetAllProjects}
        />
      );
    });
  } else {
    theProjectList = <Typography variant="h5" align="center">Click New Project to add some projects!</Typography>;
  }
  return (
    <div>
      <Createprojectmodal
        CreateNewProject={CreateNewProject}
        user={user}
        GetAllProjects={GetAllProjects}
      />
      {theProjectList}
    </div>
  );
}
