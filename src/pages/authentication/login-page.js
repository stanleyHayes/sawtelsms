import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import {useState} from "react";
import validator from "validator";
import Layout from "../../components/layout/layout";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const LoginPage = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const {password, email} = user;

    const handleSubmit = event => {
        event.preventDefault();


        if (!email) {
            setError({error, email: 'Email field required'});
            return;
        } else {
            setError({error, email: null});
        }


        if (!validator.isEmail(email)) {
            setError({error, email: 'Email field required'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!password) {
            setError({error, password: 'Password field required'});
            return;
        } else {
            setError({error, password: null});
        }

        console.log(user);
    }

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
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
        <Layout>
            <Box sx={{
                backgroundColor: 'secondary.main',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                paddingTop: 2,
                paddingBottom: 2
            }}>
                <Container>
                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} md={4}>
                            <Card variant="outlined" sx={{borderWidth: 2}}>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <Stack spacing={2} direction="column">

                                            <Typography
                                                align="center"
                                                fontWeight='bolder'
                                                variant="h4">
                                                SAWTEL SMS
                                            </Typography>

                                            <Typography
                                                align="center"
                                                variant="h6">
                                                Login
                                            </Typography>

                                            <TextField
                                                name="email"
                                                value={email}
                                                type="email"
                                                variant="outlined"
                                                error={Boolean(error.email)}
                                                label="Email"
                                                placeholder="Enter email"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.email}
                                                margin="dense"
                                                size="small"
                                            />


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
                                                margin="dense"
                                                size="small"
                                            />

                                            <Link to="/forgot-password" className={classes.link}>
                                                <Button
                                                    fullWidth={true}
                                                    size="medium"
                                                    variant="text"
                                                    sx={{borderWidth: 2}}>
                                                    Forgot Password
                                                </Button>
                                            </Link>

                                            <Button
                                                size="medium"
                                                variant="outlined"
                                                sx={{borderWidth: 2}}>
                                                Login
                                            </Button>

                                        </Stack>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default LoginPage;
