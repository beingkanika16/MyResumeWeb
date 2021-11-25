
import './App.css';
import Button from '@mui/material/Button';
import Kanika_Agarwal_Resume from "./Kanika_Agarwal_Resume.pdf";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

import Paper from '@mui/material/Paper';
import { saveAs } from 'file-saver';

function ExperienceTab() {
  console.log('inside the tabbbb');
  const saveFile = () => {
    saveAs(
      Kanika_Agarwal_Resume,
      "KanikaResume.pdf"
    );
  };
  return (
    <div className="App">
        <Paper elevation={3} style={{width: '65%', height: '80vh', marginLeft: '26%', marginRight: 'auto', marginTop: '-44%'}}>
      <h2 style={{backgroundColor: 'black',color: 'white',  height: '3rem'}}> Resume Download</h2>
      <BlinkingCursorTextBuilder
      textStyle={{fontWeight : 900, font : "Times New Roman", fontSize : "30px"
    }}
      style={{ marginTop:"10px", marginBottom :"10px"}}
      cursorComponent={<div style={{color : "gray"}}> Here to download My Resume :)</div>}
      blinkTimeAfterFinish={-1}> Click </BlinkingCursorTextBuilder>
      <DownloadForOfflineIcon size='large' onClick={saveFile}/>

      </Paper>
    </div>
  );    
}
export default ExperienceTab;
