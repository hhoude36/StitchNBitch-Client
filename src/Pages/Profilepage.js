import Myprojects from "../Components/Myprojects";
import Profile from "../Components/Profile";
import Typography from '@mui/material/Typography';

export default function Profilepage(props) {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = props;

  return (
    <div>
      <Profile user={user} setUser={setUser} />
      <Typography align="center" variant="h4">My Projects</Typography>
      <Myprojects user={user}/>
    </div>
  );
}
