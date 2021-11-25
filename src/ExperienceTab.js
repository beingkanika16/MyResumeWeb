
import './App.css';
import Button from '@mui/material/Button';

import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

import Paper from '@mui/material/Paper';

function ExperienceTab() {
  console.log('inside the tabbbb');
  const action = (
    <Button style={{color: 'white'}} size="small">
    (2021-present)


    </Button>
  );
  return (
    <div className="App">
        <Paper elevation={3} style={{width: '65%', height: '80vh', marginLeft: '26%', marginRight: 'auto', marginTop: '-44%'}}>
      <h2 style={{backgroundColor: 'black',color: 'white',  height: '3rem'}}> Experience</h2>
     <Stack spacing={4} sx={{ maxWidth: 900, marginTop: '3%' }}>
      <SnackbarContent  style={{textAlign: 'left', fontSize: 'medium' }}
        message=" Currently I am working as Associate Developer at Vline India Pvt Ltd. having an experience of 11+ months."
        action={action}
      />
            <SnackbarContent  style={{textAlign: 'left', fontSize: 'medium' }}
        message="I can work with a team as well as individuals. I have completed projects such as CTS, PPS, Migration, FileConvertor etc."
      />
                  <SnackbarContent  style={{textAlign: 'left', fontSize: 'medium' }}
        message="Designed, developed, and implemented software applications
        for a website based on analyzed requirements and
        understanding of industry technical standards."
      />
       <SnackbarContent  style={{textAlign: 'left', fontSize: 'medium' }}
        message="Collaborated with other developers to identify and alleviate
        software errors and inefficiencies."
      />
    </Stack>

      </Paper>
    </div>
  );    
}
export default ExperienceTab;
