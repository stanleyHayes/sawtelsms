import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const AboutPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            banner: {
                width: '100%',
                height: '100%',
                objectPosition: 'left',
                objectFit: 'cover'
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Box pb={8}  sx={{backgroundColor: 'background.light', height: '100%'}}>
                <Box sx={{height: '60vh'}}>
                    <img src="/assets/about.jpg" className={classes.banner} alt="About banner" title="About banner" />
                </Box>
                <Container maxWidth="md" sx={{pt: 8}}>
                    <Typography fontWeight='bold' variant="h4" mb={2}>About Us</Typography>
                    <Typography variant="body2" mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography variant="body2" mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Container>
            </Box>
        </Layout>
    )
}

export default AboutPage;
