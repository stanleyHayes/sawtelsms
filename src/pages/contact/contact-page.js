import Layout from "../../components/layout/layout";
import {
    Box, Button, Card, CardContent,
    Container,
    Grid,
    Stack,
    TextField, Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";
import validator from "validator";

const ContactPage = () => {

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

    const [contact, setContact] = useState({});
    const [error, setError] = useState({});

    const {name, email, message, subject, phone} = contact;

    const handleSubmit = event => {
        event.preventDefault();

        if (!name) {
            setError({error, name: 'Name field required'});
            return;
        } else {
            setError({error, name: null});
        }

        if (!email) {
            setError({error, email: 'Email field required'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!validator.isEmail(email)) {
            setError({error, email: `Invalid email ${email}`});
            return;
        } else {
            setError({error, email: null});
        }
        if (!message) {
            setError({error, name: 'Message field required'});
            return;
        } else {
            setError({error, name: null});
        }

        console.log(contact);
    }

    const handleChange = event => {
        setContact({...contact, [event.target.name]: event.target.value});
    }
    return (
        <Layout>
            <Box pb={8} sx={{backgroundColor: 'background.dark', height: '100%'}}>
                <Box sx={{height: '30vh'}}>
                    <img src="/assets/about.jpg" className={classes.banner} alt="About banner" title="About banner"/>
                </Box>
                <Container sx={{pt: 8}}>
                    <Grid container={true} spacing={8} justifyContent="center">
                        <Grid item={true} xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <Typography
                                            align="center"
                                            sx={{textTransform: 'uppercase'}}
                                            mb={2} variant="h4">
                                            Contact Us
                                        </Typography>

                                        <Typography
                                            align="center"
                                            mb={2} variant="body2">
                                            Send us a message
                                        </Typography>

                                        <Stack direction="column" spacing={2}>
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
                                                placeholder="Email"
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
                                                name="subject"
                                                value={subject}
                                                type="text"
                                                variant="outlined"
                                                error={Boolean(error.subject)}
                                                label="Subject"
                                                placeholder="Subject"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.subject}
                                                margin="dense"
                                                size="small"
                                            />

                                            <TextField
                                                name="message"
                                                value={message}
                                                type="text"
                                                variant="outlined"
                                                error={Boolean(error.message)}
                                                label="Message"
                                                placeholder="Type a message"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.message}
                                                margin="dense"
                                                rows={8}
                                                multiline={true}
                                            />

                                            <Grid container={true} justifyContent="flex-end">
                                                <Grid item={true}>
                                                    <Button
                                                        type="submit"
                                                        sx={{borderRadius: 0, borderWidth: 2}}
                                                        variant="outlined">
                                                        Send
                                                    </Button>
                                                </Grid>
                                            </Grid>
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

export default ContactPage;
