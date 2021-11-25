
import './App.css';
import Button from '@mui/material/Button';

import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

import Paper from '@mui/material/Paper';

function EducationTab() {
  console.log('inside the tabbbb');
  const action = (
    <Button style={{color: 'white'}} size="small">
    (2021-present)
    </Button>
  );
  return (
    <div className="App">
        <Paper elevation={3} style={{width: '65%', height: '80vh', marginLeft: '26%', marginRight: 'auto', marginTop: '-44%'}}>
      <h2 style={{backgroundColor: 'black',color: 'white',  height: '3rem'}}> About</h2>
     <Stack spacing={8} sx={{ maxWidth: 600, marginTop: '7%' }}>
      <SnackbarContent style={{textAlign: 'left', fontSize: 'large'  }}
        message={
          `Currently working as Associate Software Developer(React Js) in Vline India Pvt. Ltd.Gurugram.
          Experience in Team Coordination, Development.`
         
        }
      />
      <SnackbarContent  style={{textAlign: 'left', fontSize: 'large' }}
        message="Web Developer
        Currently working in vision which is one of our products for Banks. I am Working on a CTS Application and PPS Applications.
        "
        action={action}
      />
    </Stack>

      </Paper>
    </div>
  );
}
export default EducationTab;
