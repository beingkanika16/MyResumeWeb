
import './App.css';
import Button from '@mui/material/Button';

import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

import Paper from '@mui/material/Paper';

function AboutTab() {
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
     <Stack spacing={4} sx={{ maxWidth: 900, marginTop: '3%' }}>
      <SnackbarContent style={{textAlign: 'left', fontSize: 'medium'  }}
        message={
          `Hello,My Name is Kanika & I am specialized in Web Design and Development with having 11+ Months of experience as a Web developer. `
         
        }
      />
      <SnackbarContent  style={{textAlign: 'left', fontSize: 'medium' }}
        message=" Currently I am working as Associate Developer at Vline India Pvt Ltd."
        action={action}
      />
            <SnackbarContent  style={{textAlign: 'left', fontSize: 'medium' }}
        message="I can work with a team as well as individuals. I have completed projects such as CTS, PPS, Migration, FileConvertor etc."
      />
    </Stack>

      </Paper>
    </div>
  );    
}
export default AboutTab;
