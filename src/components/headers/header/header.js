import {AppBar, Hidden} from "@mui/material";
import DesktopTopBar from "../top-nav/desktop-top-bar";
import DesktopHeader from "../navbar/desktop-header";
import MobileHeader from "../navbar/mobile-header";
import TabletHeader from "../navbar/tablet-header";
import TabletTopBar from "../top-nav/tablet-top-nav";
import MobileTopBar from "../top-nav/mobile-top-nav";

const Header = () => {

    return (
        <AppBar variant="elevation" elevation={0} color="primary">
            <Hidden mdDown={true}>
                <DesktopTopBar/>
                <DesktopHeader/>
            </Hidden>
            <Hidden mdUp={true}>
                <MobileTopBar/>
                <MobileHeader/>
            </Hidden>
            <Hidden only={['xs', 'sm', 'lg', 'xl']}>
                <TabletTopBar/>
                <TabletHeader/>
            </Hidden>
        </AppBar>
    )
}

export default Header;
