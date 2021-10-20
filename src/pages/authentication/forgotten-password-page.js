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

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError('Email field required');
            return;
        } else {
            setError(null);
        }

        if (!validator.isEmail(email)) {
            setError('Invalid email');
            return;
        } else {
            setError(null);
        }

        console.log(email);
    }

    const handleChange = event => {
        setEmail(event.target.value);
    }

    return (
        <Box sx={{
            backgroundColor: 'secondary.main',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw'
        }}>
            <Container>
                <Grid container={true} justifyContent="center">
                    <Grid item={true} xs={12} md={4}>
                        <Card variant="outlined" sx={{borderWidth: 2}}>
                            <CardContent>
                                <form onSubmit={handleSubmit}>
                                    <Stack spacing={2} direction="column">

                                        <Typography
                                            mb={1}
                                            align="center"
                                            fontWeight='bolder'
                                            variant="h4">
                                            SAWTEL SMS
                                        </Typography>

                                        <Typography
                                            mb={1}
                                            align="center"
                                            variant="body2">
                                            Enter email associated with your account
                                        </Typography>

                                        <TextField
                                            name="email"
                                            value={email}
                                            type="email"
                                            variant="outlined"
                                            error={Boolean(error)}
                                            label="Email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            fullWidth={true}
                                            required={true}
                                            helperText={email}
                                            margin="dense"
                                            size="small"
                                        />

                                        <Button
                                            onClick={handleSubmit}
                                            type="submit"
                                            size="medium"
                                            variant="outlined"
                                            sx={{borderWidth: 2}}>
                                            Get New Password
                                        </Button>

                                    </Stack>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ForgotPasswordPage;
