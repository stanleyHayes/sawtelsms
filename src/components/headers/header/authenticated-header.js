import {AppBar, Hidden} from "@mui/material";
import MobileHeader from "../navbar/mobile-header";
import TabletHeader from "../navbar/tablet-header";
import TabletTopBar from "../top-nav/tablet-top-nav";
import AuthenticatedDesktopHeader from "../navbar/authenticated-desktop-header";

const AuthenticatedHeader = () => {

    return (
        <AppBar variant="elevation" elevation={0} color="primary">
            <Hidden mdDown={true}>
                <AuthenticatedDesktopHeader/>
            </Hidden>
            <Hidden mdUp={true}>
                <MobileHeader/>
            </Hidden>
            <Hidden only={['xs', 'sm', 'lg', 'xl']}>
                <TabletTopBar/>
                <TabletHeader/>
            </Hidden>
        </AppBar>
    )
}

export default AuthenticatedHeader;
