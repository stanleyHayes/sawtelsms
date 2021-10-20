import {Container, Grid, Stack, Toolbar, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectAuth} from "../../../redux/authentication/auth-reducer";
import {makeStyles} from "@mui/styles";
import LinkItem from "../../shared/link-item";
import {Link} from "react-router-dom";

const DesktopHeader = () => {

    const {authData} = useSelector(selectAuth);

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();

    console.log(authData)
    return (
        <Toolbar variant="dense">
            <Container>
                {authData ? (
                    <Grid container={true} justifyContent="space-around" alignItems="center">
                        <Grid item={true}>
                            <LinkItem path="/dashboard" label="Dashboard"/>
                        </Grid>
                        <Grid item={true}>
                            <LinkItem path="/send" label="Send Message"/>
                        </Grid>
                        <Grid item={true}>
                            <LinkItem path="/contacts" label="Contacts"/>
                        </Grid>
                        <Grid item={true}>
                            <LinkItem path="/groups" label="Groups"/>
                        </Grid>
                        <Grid item={true}>
                            <LinkItem path="/reports" label="Reports"/>
                        </Grid>
                        <Grid item={true}>
                            <LinkItem path="/payments" label="Payments"/>
                        </Grid>
                        <Grid item={true}>
                            <LinkItem path="/purchases" label="Purchases"/>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container={true} justifyContent="space-around" alignItems="center">
                        <Grid item={true}>
                            <Link to="/" className={classes.link}>
                                <Typography sx={{color: 'secondary.main'}} variant="h4">Sawtel</Typography>
                            </Link>
                        </Grid>

                        <Grid item={true}>
                            <Stack spacing={3} direction="row">
                                <LinkItem path="/" label="Home"/>
                                <LinkItem path="/about" label="About"/>
                                <LinkItem path="/pricing" label="Pricing"/>
                                <LinkItem path="/contact" label="Contact Us"/>
                            </Stack>

                        </Grid>
                    </Grid>
                )}
            </Container>
        </Toolbar>
    )
}

export default DesktopHeader
