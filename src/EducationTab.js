

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
   (2017 - 2020)
    </Button>
  );
  const actionBca = (
    <Button style={{color: 'white'}} size="small">
   (2014 - 2017)
    </Button>
  );
  const action12 = (
    <Button style={{color: 'white'}} size="small">
   (2013 - 2014)
    </Button>
  );
  const action10 = (
    <Button style={{color: 'white'}} size="small">
(2011 - 2012)    </Button>
  );
  return (
    <div className="App">
        <Paper elevation={3} style={{width: '65%', height: '80vh', marginLeft: '26%', marginRight: 'auto', marginTop: '-44%'}}>
      <h2 style={{backgroundColor: 'black',color: 'white',  height: '3rem'}}>Education</h2>
     <Stack spacing={2} sx={{ maxWidth: 900, marginTop: '4%' }}>
      <SnackbarContent style={{textAlign: 'left' }}
        message={
          `I have done MCA. from Kurukshetra University (Kurukshetra )`
         
        }
        action={action}
      />
      <SnackbarContent  style={{textAlign: 'left'}}
        message="I have done BCA Rajiv Gandhi Govt College For Women (Bhiwani).
        "
        action={actionBca}
      />
          <SnackbarContent  style={{textAlign: 'left'}}
        message="I have done senior secondary from CBSE board, Bhiwani in Physics, Chemistry and Mathematics stream.

        "
        action={action12}
      />  
                <SnackbarContent  style={{textAlign: 'left'}}
        message="I have done seniors(10th) from CBSE board, Bhiwani. 
        "
        action={action10}
      />  
    </Stack>

      </Paper>
    </div>
  );
}
export default ExperienceTab;
