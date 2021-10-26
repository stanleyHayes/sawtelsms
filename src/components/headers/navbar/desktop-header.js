import {Button, Container, Grid, Stack, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import LinkItem from "../../shared/link-item";
import {Link} from "react-router-dom";

const DesktopHeader = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar
            variant="regular">
            <Container>
                <Grid container={true} alignItems="center">
                    <Grid item={true} lg={2}>
                        <Link to="/" className={classes.link}>
                            <Typography sx={{color: 'secondary.main'}} variant="h4">Sawtel</Typography>
                        </Link>
                    </Grid>

                    <Grid item={true} lg={7} container={true} justifyContent="center">
                        <Stack spacing={3} direction="row">
                            <LinkItem path="/" label="Home"/>
                            <LinkItem path="/about" label="About"/>
                            <LinkItem path="/pricing" label="Pricing"/>
                            <LinkItem path="/contact" label="Contact Us"/>
                        </Stack>

                    </Grid>
                    <Grid container={true} lg={3} spacing={2} justifyContent="flex-end">
                        <Grid item={true}>
                            <Link className={classes.link} to="/login">
                                <Button
                                    color="secondary"
                                    size="medium"
                                    variant="outlined"
                                    sx={{
                                        borderWidth: 2,
                                    }}>
                                    Login
                                </Button>
                            </Link>
                        </Grid>

                        <Grid item={true}>
                            <Link to="/signup" className={classes.link}>
                                <Button
                                    color="secondary"
                                    disableElevation={true}
                                    size="medium"
                                    variant="contained">
                                    Sign Up
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default DesktopHeader
