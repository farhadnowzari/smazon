import AppBarComponent from "./components/AppBarComponent";
import ToolbarComponent from "./components/ToolbarComponent";
import { ThemeProvider, createTheme } from '@mui/material/styles';
 
import './root.css';


const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: "#FF9900"
    },
    secondary: {
      main: "#131921",
      light: "#232F3E"
    }
  }
})

export default function Root(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppBarComponent></AppBarComponent>
      <ToolbarComponent></ToolbarComponent>
    </ThemeProvider>
  )
}
