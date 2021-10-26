import Layout from "../../components/layout/layout";
import {
    Box,
    Container,
    Grid,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";

const PricingPage = () => {

    const useStyles = makeStyles(() => {
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
            <Box pb={8} sx={{backgroundColor: 'background.light', height: '100%'}}>
                <Box sx={{height: '30vh'}}>
                    <img src="/assets/about.jpg" className={classes.banner} alt="About banner" title="About banner"/>
                </Box>
                <Container sx={{pt: 8}} maxWidth="md">
                    <Grid container={true} spacing={8}>
                        <Grid item={true} xs={12} md={6}>
                            <TableContainer component={Paper}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    SMS Count
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    Price
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow hover={true}>
                                            <TableCell>1 - 1000</TableCell>
                                            <TableCell>GHS 20.00</TableCell>
                                        </TableRow>
                                        <TableRow hover={true}>
                                            <TableCell>1 - 1000</TableCell>
                                            <TableCell>GHS 20.00</TableCell>
                                        </TableRow>
                                        <TableRow hover={true}>
                                            <TableCell>1 - 1000</TableCell>
                                            <TableCell>GHS 20.00</TableCell>
                                        </TableRow>
                                        <TableRow hover={true}>
                                            <TableCell>1 - 1000</TableCell>
                                            <TableCell>GHS 20.00</TableCell>
                                        </TableRow>
                                        <TableRow hover={true}>
                                            <TableCell>1 - 1000</TableCell>
                                            <TableCell>GHS 20.00</TableCell>
                                        </TableRow>
                                        <TableRow hover={true}>
                                            <TableCell>1 - 1000</TableCell>
                                            <TableCell>GHS 20.00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Typography sx={{textTransform: 'uppercase'}} variant="h4" mb={2}>Affordable Prices</Typography>
                            <Typography variant="body2" mb={2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default PricingPage;
