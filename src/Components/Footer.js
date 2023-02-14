import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import './footer.css';



export default function Footer(){
    return(
        <div className="footer">
            <Typography className="text" variant="body1" component="p">
            <p>Ⓒ Betty-Lee Carter and Heather Houde</p>
            </Typography>
        </div>
    )
}