import { useState } from 'react';
import { AppBar, createTheme, ThemeProvider, CssBaseline, Toolbar, Typography, Button } from '@mui/material'
import Multistep from './components/Multistep';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Signin from './components/Signin'

const App = () => {

  const [appTheme, changeAppTheme] = useState<any>('light');
  const [page, setPage] = useState<number>(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7b68ee'
      },
      secondary: {
        main: '#FFFFFF'
      },
      mode: appTheme
    }
  });


  return (<ThemeProvider theme={theme}>
    <AppBar position="fixed">

      <Toolbar variant="dense" className="AppBar">

        <Typography component="div" sx={{ flexGrow: 1 }} className="AppHead">
          Forms Using Formik And Yup
        </Typography>
        <div className="AppBar">

        <Button
          onClick={() => appTheme === 'light' ? changeAppTheme('dark') : changeAppTheme('light')}
        >
          {appTheme === 'light' ? <LightModeIcon style={{ color: 'white' }} /> : <DarkModeIcon />}
        </Button>

        <Button
          onClick={() => page ? setPage(0) : setPage(1)}
          style={{color: 'white'}}
        >
          {page ? 'Multistep' : 'Sign In'}
        </Button>
</div>
      </Toolbar>

    </AppBar>

    <CssBaseline />
  
        {!page ? <Multistep /> :
        <Signin />}
  </ThemeProvider>);
}

export default App;
