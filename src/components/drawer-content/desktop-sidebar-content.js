import {Box, Divider, Stack} from "@mui/material";
import DesktopSidebarLinkItem from "../shared/desktop-sidebar-link-item";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import {
    Assessment, AssessmentOutlined,
    Contacts,
    ContactsOutlined,
    Dashboard,
    DashboardOutlined,
    Face,
    FaceOutlined, Group, GroupOutlined, MultipleStop, MultipleStopOutlined, Payment, PaymentOutlined,
    Send,
    SendOutlined
} from "@mui/icons-material";

const DesktopSidebarContent = () => {

    const {activePath} = useSelector(selectUI);

    return (
        <Box sx={{backgroundColor: 'primary.main'}}>
            <Stack
                direction="column"
                divider={
                    <Divider
                        variant="fullWidth"
                        sx={{
                            backgroundColor: 'secondary.main',
                            color: 'secondary.main'
                        }}/>
                }>
                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/dashboard' ?
                            <Dashboard sx={{color: 'secondary.main'}} />:
                            <DashboardOutlined sx={{color: 'white'}} />
                    }
                    label="Dashboard"
                    path="/dashboard"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/send' ?
                            <Send sx={{color: 'secondary.main'}} />:
                            <SendOutlined sx={{color: 'white'}} />
                    }
                    label="Send Message"
                    path="/send"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/contacts' ?
                            <Contacts sx={{color: 'secondary.main'}} />:
                            <ContactsOutlined sx={{color: 'white'}} />
                    }
                    label="Contacts"
                    path="/contacts"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/groups' ?
                            <Group sx={{color: 'secondary.main'}} />:
                            <GroupOutlined sx={{color: 'white'}} />
                    }
                    label="Groups"
                    path="/groups"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/reports' ?
                            <Assessment sx={{color: 'secondary.main'}} />:
                            <AssessmentOutlined sx={{color: 'white'}} />
                    }
                    label="Reports"
                    path="/reports"
                    activePath={activePath} />
                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/payments' ?
                            <Payment sx={{color: 'secondary.main'}} />:
                            <PaymentOutlined sx={{color: 'white'}} />
                    }
                    label="Payments"
                    path="/payments"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/profile' ?
                            <Face sx={{color: 'secondary.main'}} />:
                            <FaceOutlined sx={{color: 'white'}} />
                    }
                    label="Profile"
                    path="/profile"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/purchases' ?
                            <MultipleStop sx={{color: 'secondary.main'}} />:
                            <MultipleStopOutlined sx={{color: 'white'}} />
                    }
                    label="Purchases"
                    path="/purchases"
                    activePath={activePath} />

            </Stack>
        </Box>
    )
}

export default DesktopSidebarContent;
