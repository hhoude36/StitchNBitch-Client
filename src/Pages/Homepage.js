import Footer from "../Components/Footer";
import Registermodal from "../Components/Registermodal";
import './Homepage.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import mobile from './images/mobile.png'



export default function Homepage() {
  return (
    
    <div>
      {/* TOP BANNER */}
      {/* ==================================== */}
      <div className='homePageTop'>
        <div className="typeFlexDiv">
          <Typography className="homeType" variant="h2" component="h1">
            A home for crafters.
          </Typography>
          <Typography className="homeType" variant="h6" component="p">
            Whether you quilt, sew, knit, crochet, emroider, <br /> or dabble in them all,
            it's never been easier <br />to meet others who share your interests.
          </Typography>
          <Button className="joinTodayButton" color="secondary" variant="contained" component="label"> Sign up today</Button>
        </div>
        {/* <Footer/> */}
        </div>

    {/* PHONE VIEW DIV  */}
    {/* ==================================== */}

      <div class="phoneDiv">

    {/* INDIVIDUAL PHONE */}
    {/* ==================================== */}

        <div className="phoneAndText, phonediv1">
          <Typography className="text" variant="h4" component="p">
        <span variant="h1" class="firstword">Archive</span>  <br/> your projects.
          </Typography>
          <img className="phone" src="https://res.cloudinary.com/dqfviar71/image/upload/v1675548060/mobile_1_dqdzq5.png" alt="React Image" />
        </div>
      

          {/* INDIVIDUAL PHONE */}
    {/* ==================================== */}

    <div className="phoneAndText, phonediv2">
          <Typography className="text" variant="h4" component="p">
          <span class="firstword">Discover</span> <br/> crafting circles.
          </Typography>
          <img className="phone" src="https://res.cloudinary.com/dqfviar71/image/upload/v1675651306/Search_cv8fbw.png" alt="React Image" />
        </div>


          {/* INDIVIDUAL PHONE */}
    {/* ==================================== */}

    <div className="phoneAndText, phonediv3">
          <Typography className="text" variant="h4" component="p">
          <span class="firstword">Create</span> <br/> your own.
          </Typography>
          <img className="phone" src="https://res.cloudinary.com/dqfviar71/image/upload/v1675651310/Deshboard_ir0wqy.png" alt="React Image" />
        </div>
      
      </div>





    </div>
  );
}
