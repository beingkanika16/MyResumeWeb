import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typed from 'typed.js';
import history from './history';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import kanu from './kanu.jpg';
import kanuThar from './kanuThar.jpg';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

  const handleSubmit = (event) => {
    console.log('innnnnnnnnnnnnnnnn');
    event.preventDefault();

    history.push('/home')
    window.location.reload();

  };
  const text = React.useMemo(() => ["This is React Word !", "This works"], []);
  const divRef = React.useRef();

  React.useEffect(() => {
    const options = {
      // strings: text,
      stringsElement: "#typed-string",
      typeSpeed: 90,
      showCursor: true,
      backSpeed: 20,
      smartBackspace: false,
      shuffle: true,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity
    };

    const typed = new Typed(divRef.current, options);

    return () => {
      typed.destroy();
    }

  }, [text]);
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} style={{backgroundColor: 'black'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `${<kanu />}`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img src={kanuThar} style={{marginTop:'-35%', width: '107%', height: '100rem'}} />


        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{backgroundColor: 'black'}}>
          <Box style={{width: '35%', backgroundColor: 'black'}}
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <Typography component="h1" variant="h5" style={{
              fontWeight: 400,
              color: 'white',
              width: '134%',

            }}>
            Hi, I'm  Kanika Agarwal
            </Typography>
            <Typography style={{
              fontWeight: 300,
              height: '5rem',
              color: 'white',
width: '172%', marginTop: '20%'
            }}>
         Associate Developer at Vline India Pvt Ltd
            </Typography>
            <Typography>
              <div id="typed-string">

                <Typography component="h1" variant="h1">I am a Developer</Typography>
                <Typography className="p2" component="h1" variant="h1" > I am a Designer</Typography>
                <Typography className="p2" component="h1" variant="h1">I am a Learner</Typography>
                <Typography className="p2" component="h1" variant="h1">Innovation is My Passion</Typography>

              </div>
              <span ref={divRef} style={{
              fontWeight: 900,
              height: '5rem',
              color: 'white',
             fontSize: '185%',
             width: '80%',

            }}></span>            </Typography>
<Typography  style={{
              fontWeight: 300,
              height: '5rem',
              color: 'white',
              width: '94%',
              marginTop: '35%',
              marginLeft: '12%',


            }}>Learn More about me     <NavigateNextIcon onClick={handleSubmit} style={{
              fontWeight: 800,
              height: '5rem',
              color: 'white',
              marginBottom: '-19%',

            }}/></Typography>
       
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}