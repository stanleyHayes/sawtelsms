import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography
} from "@mui/material";
import Layout from "../../components/layout/layout";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const LandingPage = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container
                sx={{
                    pt: 12,
                    pb: 8
                }}>
                <Grid container={true} alignItems="center">
                    <Grid xs={12} md={6}>
                        <Typography variant="h2" mb={4}>
                            Sawtel SMS Portal
                        </Typography>
                        <Typography variant="body2" mb={8}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                        <Link to="/signup" className={classes.link}>
                            <Button
                                sx={{
                                    borderRadius: 0,
                                    borderWidth: 3
                                }}
                                variant="outlined"
                                size="large">
                                Sign Up Now
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.light'}}>
                <Container>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Typography variant="h6" mb={2}>Welcome to SAWTEL SMS</Typography>
                                    <Typography variant="body1">
                                        Component Microsoft Product
                                    </Typography>
                                    <Typography variant="body2">
                                        Function / Benefit
                                    </Typography>
                                    <Typography variant="body2">
                                        Exchange Server Operate rich email Services include Calendaring, Scheduling,
                                        mobile device synchronization
                                    </Typography>
                                    <Typography variant="body1">
                                        Windows Sharepoint Services
                                    </Typography>
                                    <Typography variant="body2">
                                        Hosting Microsoft Windows Sharepoint Services Provide team Web sites for
                                        Customers
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Typography variant="h6" mb={2}>Table 1: Hosted Messaging and Collaboration
                                        Components</Typography>
                                    <Typography variant="body1">
                                        Live Communications Server
                                    </Typography>
                                    <Typography variant="body2">
                                        Hosting Microsoft Office Live Communications Server Enabled customers to use
                                        instant messaging and to detect if a co-worker is online and available to
                                        communicate
                                    </Typography>
                                    <Typography variant="body1">
                                        Reporting Services Microsoft
                                    </Typography>
                                    <Typography variant="body2">
                                        SQL Server Reporting Services
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Card sx={{backgroundColor: 'secondary.main', height: '100%'}} elevation={0}>
                                <CardContent>
                                    <Typography variant="h6" mb={2}>
                                        Hosted Solution Infrastructure
                                    </Typography>
                                    <Typography variant="body1">
                                        Component Microsoft Product
                                    </Typography>
                                    <Typography variant="body2">
                                        Function / Benefit
                                    </Typography>
                                    <Typography variant="body2">
                                        Exchange Server Operate rich email Services include Calendaring, Scheduling,
                                        mobile device synchronization
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default LandingPage;
