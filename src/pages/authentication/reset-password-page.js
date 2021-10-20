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
import Layout from "../../components/layout/layout";

const ResetPasswordPage = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const {password, confirmPassword} = user;

    const handleSubmit = event => {
        event.preventDefault();

        if (!password) {
            setError({error, password: 'Password field required'});
            return;
        } else {
            setError({error, password: null});
        }

        if (!confirmPassword) {
            setError({error, confirmPassword: 'Password field required'});
            return;
        } else {
            setError({error, confirmPassword: null});
        }

        if (confirmPassword !== password) {
            setError({error, confirmPassword: 'Password mismatch', password: 'Password mismatch'});
            return;
        } else {
            setError({error, confirmPassword: null, password: null});
        }

        console.log(user);
    }

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

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

                                            <TextField
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                type="password"
                                                variant="outlined"
                                                error={Boolean(error.confirmPassword)}
                                                label="Re-Type Password"
                                                placeholder="Re-Type Password"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.confirmPassword}
                                                margin="dense"
                                                size="small"
                                            />

                                            <Button
                                                size="medium"
                                                variant="outlined"
                                                sx={{borderWidth: 2}}>
                                                Confirm
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

export default ResetPasswordPage;
