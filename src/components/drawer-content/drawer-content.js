import {Button, Container, Divider, Grid, Stack} from "@mui/material";
import {
    AssessmentOutlined,
    Close,
    ContactPage, ContactsOutlined,
    DashboardOutlined, FaceOutlined,
    Favorite, GroupOutlined,
    Home,
    Info, MultipleStopOutlined, PaymentOutlined,
    SendOutlined,
    Star
} from "@mui/icons-material";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import {useDispatch, useSelector} from "react-redux";
import SideBarLinkItem from "../shared/side-bar-link-item";
import {selectAuth} from "../../redux/authentication/auth-reducer";

const DrawerContent = () => {

    const dispatch = useDispatch();

    const {authData} = useSelector(selectAuth);

    return (
        <Container
            sx={{
                width: '90vw',
                height: '100vh',
                paddingTop: 2,
                paddingBottom: 8,
                backgroundColor: 'primary.main'
            }}>
            <Grid container={true} justifyContent="flex-end">
                <Grid item={true}>
                    <Button
                        onClick={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                        variant="outlined"
                        color="secondary"
                        endIcon={<Close color="secondary"/>}>
                        Close
                    </Button>
                </Grid>
            </Grid>


            {authData ? (
                <Stack mt={2} direction="column" divider={<Divider/>} spacing={2}>
                    <SideBarLinkItem
                        icon={
                            <DashboardOutlined
                                sx={{
                                    color: "secondary.main",
                                    borderRadius: 1,
                                    padding: 0.4,
                                    width: 24,
                                    height: 24,
                                    backgroundColor: '#F9A34F40'
                                }}/>}
                        label="Dashboard"
                        path="/dashboard"
                    />
                    <SideBarLinkItem
                        icon={<SendOutlined
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Send Message"
                        path="/send"
                    />
                    <SideBarLinkItem
                        icon={<ContactsOutlined
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Contacts"
                        path="/contacts"
                    />
                    <SideBarLinkItem
                        icon={<GroupOutlined
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Groups"
                        path="/groups"
                    />
                    <SideBarLinkItem
                        icon={<AssessmentOutlined
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Reports"
                        path="/reports"
                    />
                    <SideBarLinkItem
                        icon={<PaymentOutlined
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Payments"
                        path="/payments"
                    />
                    <SideBarLinkItem
                        icon={<MultipleStopOutlined
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Purchases"
                        path="/purchases"
                    />

                    <SideBarLinkItem
                        icon={<FaceOutlined
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Profile"
                        path="/profile"
                    />
                </Stack>
            ): (
                <Stack mt={2} direction="column" divider={<Divider/>} spacing={2}>
                    <SideBarLinkItem
                        icon={
                            <Home
                                sx={{
                                    color: "secondary.main",
                                    borderRadius: 1,
                                    padding: 0.4,
                                    width: 24,
                                    height: 24,
                                    backgroundColor: '#F9A34F40'
                                }}/>}
                        label="Home"
                        path="/"
                    />
                    <SideBarLinkItem
                        icon={<Info
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="About"
                        path="/about"
                    />

                    <SideBarLinkItem
                        icon={<Star
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Pricing"
                        path="/pricing"
                    />
                    <SideBarLinkItem
                        icon={<Favorite
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Contact"
                        path="/contact"
                    />
                    <SideBarLinkItem
                        icon={<ContactPage
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Login"
                        path="/login"
                    />

                    <SideBarLinkItem
                        icon={<ContactPage
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}
                        />}
                        label="Sign Up"
                        path="/signup"
                    />
                </Stack>
            )}
        </Container>
    )
}

export default DrawerContent;
