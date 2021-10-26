import {Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import AuthenticatedLayout from "../../components/layout/authenticated-layout";

const ChangePasswordPage = () => {

    const [passwords, setPasswords] = useState({});
    const [error, setError] = useState({});

    const {oldPassword, password, confirmPassword} = passwords;

    const handleChange = event => {
        setPasswords({...passwords, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(!password){
            setError({error, password: 'Password field required'});
            return;
        }else {
            setError({error, password: null});
        }

        console.log(passwords)
    }
    return (
        <AuthenticatedLayout>
            <Container>
                <Box sx={{minHeight: '60vh', pt: 8, pb: 8}}>
                    <Container>
                        <Grid
                            container={true}
                            spacing={4}
                            alignItems="stretch"
                            justifyContent="center"
                            sx={{height: '100%'}}>
                            <Grid item={true} xs={12} md={8}>
                                <Card>
                                    <CardContent>
                                        <form onSubmit={handleSubmit}>
                                            <Stack spacing={2}>
                                                <Typography variant="h6">Change Password</Typography>
                                                <Typography paragraph={true}>
                                                    You are kindly adviced to change your password after the reset
                                                </Typography>
                                                <TextField
                                                    name="oldPassword"
                                                    value={oldPassword}
                                                    type="password"
                                                    variant="outlined"
                                                    error={Boolean(error.oldPassword)}
                                                    label="Current Password"
                                                    placeholder="Enter current password"
                                                    onChange={handleChange}
                                                    fullWidth={true}
                                                    required={true}
                                                    helperText={error.oldPassword}
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
                                                    placeholder="Enter password"
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
                                                    label="Password"
                                                    placeholder="Enter password"
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
                                                    Update Password
                                                </Button>
                                            </Stack>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Container>
        </AuthenticatedLayout>
    )
}
export default ChangePasswordPage;
