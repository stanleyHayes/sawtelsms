import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {yellow} from "@mui/material/colors";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
const theme = createTheme({
    typography: {
        fontFamily: 'Raleway'
    },
    palette: {
        background: {
            default: '#e5e5e5',
            paper: '#ffffff',
            light: '#ffffff'
        },
        primary: {
            main: '#000000'
        },
        secondary: {
            main: yellow['500']
        }
    },
    shape: {
        borderRadius: 0
    }
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <App/>
                    </MuiPickersUtilsProvider>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
