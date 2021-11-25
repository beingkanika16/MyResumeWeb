import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { AppBar, Tabs, Tab } from '@mui/material';
import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArticleIcon from '@mui/icons-material/Article';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import {
  faFacebookSquare,
  faTwitter,
  faLinkedin,
  faGithub,
  faSkype,
  faGoogle,
  faInstagramSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import ExperienceTab from './ExperienceTab';
import EducationTab from './EducationTab';
import SkillsTab from './SkillsTab';
import ResumeDownload from './ResumeDownload';
import AboutTab from './AboutTab';



import history from './history';
import 'react-pro-sidebar/dist/css/styles.css';
function HomePage() {
  const [type, setType] = React.useState('about');
  const tabClicked = (type) => {
    setType(type);

  }
  const onExit = () => {
    history.push('/');
    window.location.reload();
  }


  return (
    <>
      <AppBar title="My App">
        <Tabs style={{ backgroundColor: 'black' }}>      <FloatingLettersTextBuilder
          floatingSpeed={500}
          lettersAppearanceDelay={250}
          animationMaxMargin={"200px"}
          style={{ color: 'white', fontSize: '30px' }}
          animationMinMargin={"0px"}
        > Welcome To My Resume  </FloatingLettersTextBuilder> <span style={{ fontSize: '3em', color: 'Tomato' }}>
          <ExitToAppIcon style={{ display: 'flex', flexDirection: 'rowReverse', color: 'white', width: '140rem' }} onClick={onExit} />
          </span></Tabs>



      </AppBar>
      <ProSidebar style={{ height: '40rem' }}>
        <div style={{ marginTop: '20%' }}>
          <Typography style={{ fontWeight: 'bolder' }}>Kanika Agarwal
            <a style={{ marginLeft: '14%' }} href={"https://www.linkedin.com/in/kanika-agarwal-381a51171/"}><FontAwesomeIcon style={{ color: 'white', marginLeft: '5%' }} icon={faLinkedin} /></a>
            <a href={"https://twitter.com/beingknu16"}>  <FontAwesomeIcon style={{ color: 'white', fontSize: '20px' }} icon={faTwitter} />  </a>
            <a href={"https://github.com/beingkanika16"}>  <FontAwesomeIcon style={{ color: 'white', fontSize: '20px' }} icon={faGithub} />  </a>

          </Typography>



          <hr style={{ width: '100%' }} />
          <hr style={{ width: '100%' }} />

          <Menu iconShape="square">
            <MenuItem style={{ fontSize: 'larger', height: '4rem' }} onClick={() => tabClicked('about')}><PersonOutlineIcon style={{ width: '25%' }} />About</MenuItem>
            <MenuItem style={{ fontSize: 'larger', height: '4rem' }} onClick={() => tabClicked('education')}><CastForEducationIcon style={{ width: '25%' }} />Education</MenuItem>
            <MenuItem style={{ fontSize: 'larger', height: '4rem' }} onClick={() => tabClicked('experience')}><AutoStoriesIcon style={{ width: '25%' }} />Experience</MenuItem>

            <MenuItem style={{ fontSize: 'larger', height: '4rem' }} onClick={() => tabClicked('tech')}><DesignServicesIcon style={{ width: '25%' }} />Technology</MenuItem>
            <MenuItem style={{ fontSize: 'larger', height: '4rem' }} onClick={() => tabClicked('download')}><ArticleIcon style={{ width: '25%' }} />Resume</MenuItem>


            {/* <SubMenu title="Components" >
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
      </SubMenu> */}
          </Menu>
        </div>

      </ProSidebar>
      {type === 'about' && <AboutTab style={{ marginTop: '-44%' }} />}
      {type === 'experience' && <ExperienceTab style={{ marginTop: '-44%' }} />}
      {type === 'education' && <EducationTab style={{ marginTop: '-44%' }} />}
      {type === 'tech' && <SkillsTab style={{ marginTop: '-44%' }} />}
      {type === 'download' && <ResumeDownload style={{ marginTop: '-44%' }} />}

    </>);

}
export default HomePage;