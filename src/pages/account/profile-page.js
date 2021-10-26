import {Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import AuthenticatedLayout from "../../components/layout/authenticated-layout";

const ProfilePage = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const {name, email, phone, company, website} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(!name){
            setError({error, name: 'Name field required'});
            return;
        }else {
            setError({error, name: null});
        }
    }

    return (
        <AuthenticatedLayout>
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
                                            <Typography variant="h6">Profile Details</Typography>
                                            <TextField
                                                name="name"
                                                value={name}
                                                type="text"
                                                variant="outlined"
                                                error={Boolean(error.name)}
                                                label="Name"
                                                placeholder="Name"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.name}
                                                margin="dense"
                                                size="small"
                                            />

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
                                                name="phone"
                                                value={phone}
                                                type="tel"
                                                variant="outlined"
                                                error={Boolean(error.phone)}
                                                label="Phone"
                                                placeholder="Phone"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.phone}
                                                margin="dense"
                                                size="small"
                                            />

                                            <TextField
                                                name="company"
                                                value={company}
                                                type="text"
                                                variant="outlined"
                                                error={Boolean(error.company)}
                                                label="Company"
                                                placeholder="Enter company"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.company}
                                                margin="dense"
                                                size="small"
                                            />

                                            <TextField
                                                name="website"
                                                value={website}
                                                type="text"
                                                variant="outlined"
                                                error={Boolean(error.website)}
                                                label="Website"
                                                placeholder="Website"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.website}
                                                margin="dense"
                                                size="small"
                                            />
                                            <Button
                                                size="medium"
                                                variant="outlined"
                                                sx={{borderWidth: 2}}>
                                                Update Details
                                            </Button>
                                        </Stack>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                            md={4}
                            sx={{height: '100%'}}>
                            <Card  sx={{height: '100%'}}>
                                <CardContent>
                                    <Typography variant="h6">Information</Typography>
                                    <Typography paragraph={true}>
                                        You cannot directly modify you company name for security purposes, your request
                                        is submitted and reviewed before the update takes effect.
                                    </Typography>
                                    <Typography paragraph={true}>
                                        Thank you.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AuthenticatedLayout>
    )
}

export default ProfilePage;
