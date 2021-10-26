import {Box, SwipeableDrawer} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import DesktopSidebarContent from "../drawer-content/desktop-sidebar-content";
import AuthenticatedFooter from "../headers/footer/authenticated-footer";
import AuthenticatedDrawerContent from "../drawer-content/authenticated-drawer-content";
import AuthenticatedHeader from "../headers/header/authenticated-header";

const AuthenticatedLayout = ({children}) => {

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
                paddingTop: 96,
                backgroundColor: theme.palette.background.default
            }
        }
    });

    const classes = useStyles();

    const {isToggled} = useSelector(selectUI);

    const dispatch = useDispatch();

    return (
        <Box className={classes.root}>
            <Box sx={{marginTop: {lg: 8}}}>
                <AuthenticatedHeader />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    minHeight: '100vh',
                    backgroundColor: 'background.default'
                }}>
                <Box
                    sx={{
                        display: {xs: 'none', md: 'block'}
                    }}>
                    <DesktopSidebarContent/>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1
                    }}>
                    {children}
                </Box>
            </Box>
            <Box className={classes.footer}>
                <AuthenticatedFooter/>
            </Box>

            <SwipeableDrawer
                open={isToggled}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openSidebar())}>
                <AuthenticatedDrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default AuthenticatedLayout;
