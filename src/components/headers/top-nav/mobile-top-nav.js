import {Button, Grid, Toolbar, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth} from "../../../redux/authentication/auth-reducer";

const MobileTopBar = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();

    const {authData} = useSelector(selectAuth);

    return (
        <Toolbar variant="dense">
            {authData ? (
                <Grid container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item={true} xs={6}>
                        <Typography
                            variant="body2">
                            Hello, {authData.name.split(' ')[0]}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Button
                            fullWidth={true}
                            size="medium"
                            sx={{
                                borderWidth: 2,
                                backgroundColor: 'white'
                            }}
                            variant="outlined">
                            Log out
                        </Button>
                    </Grid>
                </Grid>
            ) : (
                <Grid container={true} alignItems="center" spacing={2}>
                    <Grid item={true} xs={6}>
                        <Link className={classes.link} to="/login">
                            <Button
                                fullWidth={true}
                                sx={{
                                    borderWidth: 2,
                                    backgroundColor: 'white',
                                    color: grey['800'],
                                    fontWeight: 'bold'
                                }}
                                size="medium"
                                variant="outlined">
                                Login
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Link className={classes.link} to="/signup">
                            <Button
                                fullWidth={true}
                                sx={{
                                    borderWidth: 2,
                                    backgroundColor: 'white',
                                    color: grey['800'],
                                    fontWeight: 'bold'
                                }}
                                size="medium"
                                variant="outlined">
                                Sign Up
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            )}
        </Toolbar>
    )
}

export default MobileTopBar
