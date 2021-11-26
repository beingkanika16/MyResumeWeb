
import './App.css';
import Button from '@mui/material/Button';

import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

import Paper from '@mui/material/Paper';

function SkillsTab() {
  console.log('inside the tabbbb');
  const action = (
    <Button style={{ color: 'white' }} size="small">
      Languages
    </Button>
  );
  const action1 = (
    <Button style={{ color: 'white' }} size="small">
      Operating System    </Button>
  );
  const action2 = (
    <Button style={{ color: 'white' }} size="small">
      Applications    </Button>
  );

  const action3 = (
    <Button style={{ color: 'white' }} size="small">
      Tools and Technologies    </Button>
  );
  return (
    <div className="App">
      <Paper elevation={3} style={{ width: '65%', height: '80vh', marginLeft: '26%', marginRight: 'auto', marginTop: '-44%' }}>
        <h2 style={{ backgroundColor: 'black', color: 'white', height: '3rem' }}>Skills</h2>
        <Stack spacing={2} sx={{ maxWidth: 900, marginTop: '4%' }}>
          <SnackbarContent action={action}
            style={{ textAlign: 'left' }}
            message={
              `Gradle Frontend: ReactJS, HTML , CSS,`

            }
          />
          <SnackbarContent style={{ textAlign: 'left' }}
            message="Ubuntu 16.04, Ubuntu 18.04, Windows
        .
        "
            action={action1}
          />
          <SnackbarContent style={{ textAlign: 'left' }}
            message="Development Tool: Visual Studio Code 1.21.1 
.

        "
            action={action2}
          />
          <SnackbarContent style={{ textAlign: 'left' }}
            message="BitBucket, GitHub, Firebase
.

        "
            action={action3}
          />

        </Stack>

      </Paper>
    </div>
  );
}
export default SkillsTab;
