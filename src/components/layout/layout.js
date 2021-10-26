import {Box, SwipeableDrawer} from "@mui/material";
import Header from "../headers/header/header";
import Footer from "../headers/footer/footer";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import DrawerContent from "../drawer-content/drawer-content";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            root: {
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column'
            },
            header: {},
            footer: {},
            content: {
                flex: 1,
                paddingTop: 64,
                backgroundColor: theme.palette.background.default
            }
        }
    });

    const classes = useStyles();

    const {isToggled} = useSelector(selectUI);

    const dispatch = useDispatch();

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Header/>
            </Box>
            <Box className={classes.content}>
                {children}
            </Box>
            <Box className={classes.footer}>
                <Footer/>
            </Box>

            <SwipeableDrawer
                open={isToggled}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openSidebar())}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;
