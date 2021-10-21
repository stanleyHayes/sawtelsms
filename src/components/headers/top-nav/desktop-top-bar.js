import {Button, Container, Grid, Menu, MenuItem, Stack, TextField, Toolbar} from "@mui/material";
import {useSelector} from "react-redux";
import {selectAuth} from "../../../redux/authentication/auth-reducer";
import {useState} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {grey} from "@mui/material/colors";
import {KeyboardArrowDown} from "@mui/icons-material";

const DesktopTopBar = () => {

    const {authData} = useSelector(selectAuth);

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    const {email, password} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleLogin = event => {
        event.preventDefault();

        if (!email) {
            setError({error, email: 'Email field required'});
            return;
        } else {
            setError({error, email: null});
        }

        console.log(email, password)
    }

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            }
        }
    });


    const classes = useStyles();

    return (
        <Toolbar variant="dense">
            <Container>
                {authData ? (
                    <Grid
                        container={true}
                        justifyContent="flex-end"
                        alignItems="center" spacing={2}>
                        <Grid item={true}>
                            <Button
                                endIcon={<KeyboardArrowDown/>}
                                onClick={handleMenuOpen}
                                sx={{color: 'white'}} variant="body2">
                                Hello, {authData.name.split(' ')[0]}
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                onClose={handleMenuClose}
                                open={menuOpen}>
                                <MenuItem>
                                    <Link className={classes.link} to="/profile">
                                        <Button fullWidth={true} variant="text">Profile</Button>
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link className={classes.link}  to="/change-password">
                                        <Button fullWidth={true} variant="text">Change Password</Button>
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link className={classes.link}  to="/login">
                                        <Button fullWidth={true} variant="text">Log out</Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Grid>
                        <Grid item={true}>
                            <Button sx={{color: 'secondary.main'}} variant="text">Log out</Button>
                        </Grid>
                    </Grid>
                ) : (
                    <form onSubmit={handleLogin}>
                        <Grid
                            sx={{pt: 2}}
                            container={true}
                            spacing={1}
                            alignItems="flex-start"
                            justifyContent="flex-end">
                            <Grid item={true} lg={3}>
                                <TextField
                                    name="email"
                                    value={email}
                                    type="email"
                                    variant="outlined"
                                    error={Boolean(error.email)}
                                    label="Email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    fullWidth={true}
                                    required={true}
                                    helperText={error.email}
                                    margin="none"
                                    size="small"
                                    sx={{
                                        borderColor: 'secondary.main',
                                        backgroundColor: 'white',
                                        borderWidth: 2
                                    }}
                                />
                            </Grid>

                            <Grid item={true} lg={3}>
                                <Stack direction="column">
                                    <TextField
                                        name="password"
                                        value={password}
                                        type="password"
                                        variant="outlined"
                                        error={Boolean(error.password)}
                                        label="Password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        fullWidth={true}
                                        required={true}
                                        helperText={error.password}
                                        margin="none"
                                        size="small"
                                        sx={{
                                            borderColor: 'secondary.main',
                                            backgroundColor: 'white',
                                            borderWidth: 2
                                        }}
                                    />
                                    <Link to="/forgot-password" className={classes.link}>
                                        <Button sx={{color: 'secondary.main'}} variant="text" size="small">
                                            Forgot Password
                                        </Button>
                                    </Link>
                                </Stack>
                            </Grid>

                            <Grid item={true}>
                                <Button
                                    size="medium"
                                    variant="outlined"
                                    sx={{
                                        borderWidth: 2,
                                        backgroundColor: 'white',
                                        color: grey['800']
                                    }}>
                                    Login
                                </Button>
                            </Grid>

                            <Grid item={true}>
                                <Link to="/signup" className={classes.link}>
                                    <Button
                                        sx={{
                                            borderWidth: 2,
                                            backgroundColor: 'white',
                                            color: grey['800']
                                        }}
                                        size="medium"
                                        variant="outlined">
                                        Sign Up
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Container>
        </Toolbar>
    )
}

export default DesktopTopBar;
