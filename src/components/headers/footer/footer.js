import {Box, Container, Divider, Grid, Link, Typography} from "@mui/material";

const Footer = () => {

    return (
        <Box pt={4} pb={4} sx={{backgroundColor: 'primary.main', color: 'secondary.main'}}>
            <Container maxWidth="lg">
                <Grid container={true} spacing={4} alignItems="flex-start">
                    <Grid sx={{height: '100%'}} item={true} xs={12} sm={6} md={4} lg={2}>
                        <Typography variant="h6">Sawtel</Typography>
                        <Typography sx={{color: 'white'}} variant="body2" fontWeight='bold'>
                            Corporate Office Sawtel
                        </Typography>
                        <Typography sx={{color: 'white'}} variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua.
                        </Typography>
                    </Grid>
                    <Grid sx={{height: '100%'}} item={true} xs={12} sm={6} md={4} lg={4}>
                        <Typography sx={{color: 'white'}} variant="body2" fontWeight='bolder'>Products</Typography>
                        <Divider
                            variant="fullWidth"
                            sx={{marginTop: 1, marginBottom: 1, color: 'white', backgroundColor: 'white'}}/>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                                <Typography variant="body2">Lorem ipsum</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{height: '100%'}} item={true} xs={12} sm={6} md={4} lg={2}>
                        <Typography sx={{color: 'white'}} variant="body2" fontWeight='bolder'>Services</Typography>
                        <Divider
                            variant="fullWidth"
                            sx={{marginTop: 1, marginBottom: 1, color: 'white', backgroundColor: 'white'}}/>
                        <Typography variant="body2">Lorem ipsum</Typography>
                        <Typography variant="body2">Lorem ipsum</Typography>
                        <Typography variant="body2">Lorem ipsum</Typography>
                        <Typography variant="body2">Lorem ipsum</Typography>
                        <Typography variant="body2">Lorem ipsum</Typography>
                    </Grid>
                    <Grid sx={{height: '100%'}} item={true} xs={12} sm={6} md={4} lg={2}>
                        <Typography
                            sx={{color: 'white'}}
                            variant="body2" fontWeight='bolder'>
                            Customer Support
                        </Typography>
                        <Divider
                            variant="fullWidth"
                            sx={{
                                marginTop: 1,
                                marginBottom: 1, color: 'white', backgroundColor: 'white'
                            }}/>
                        <Link sx={{color: 'secondary.main'}} variant="body2">
                            Online Support
                        </Link>
                        <Link sx={{color: 'secondary.main'}} variant="body2">
                            Request Service
                        </Link>
                    </Grid>
                    <Grid sx={{height: '100%'}} item={true} xs={12} sm={6} md={4} lg={2}>
                        <Typography
                            sx={{color: 'white'}} variant="body2" fontWeight='bolder'>
                            Contact Information
                        </Typography>
                        <Divider
                            variant="fullWidth"
                            sx={{
                                marginTop: 1, marginBottom: 1,
                                color: 'white', backgroundColor: 'white'
                            }}/>
                        <Typography variant="body2">
                            Lorem ipsum
                        </Typography>
                        <Typography variant="body2">
                            dolor sit amet
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;
