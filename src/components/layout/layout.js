import {Box} from "@mui/material";
import Header from "../headers/header/header";
import Footer from "../headers/footer/footer";
import {makeStyles} from "@mui/styles";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            root: {
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column'
            },
            header: {

            },
            footer: {},
            content: {
                flex: 1,
                paddingTop: 96,
                backgroundColor: theme.palette.background.default
            }
        }
    });

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Header />
            </Box>
            <Box className={classes.content}>
                {children}
            </Box>
            <Box className={classes.footer}>
                <Footer />
            </Box>
        </Box>
    )
}

export default Layout;
