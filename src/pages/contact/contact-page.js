import Layout from "../../components/layout/layout";
import {
    Box, Button,
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

    const {name, email, message} = contact;

    const handleSubmit = event => {
        event.preventDefault();

        if(!name){
            setError({error, name: 'Name field required'});
            return;
        }else {
            setError({error, name: null});
        }

        if(!email){
            setError({error, email: 'Email field required'});
            return;
        }else {
            setError({error, email: null});
        }

        if(!validator.isEmail(email)){
            setError({error, email: `Invalid email ${email}`});
            return;
        }else {
            setError({error, email: null});
        }
        if(!message){
            setError({error, name: 'Message field required'});
            return;
        }else {
            setError({error, name: null});
        }

        console.log(contact);
    }

    const handleChange = event => {
        setContact({...contact, [event.target.name]: event.target.value});
    }
    return (
        <Layout>
            <Box pb={8} sx={{backgroundColor: 'background.light', height: '100%'}}>
                <Box sx={{height: '60vh'}}>
                    <img src="/assets/about.jpg" className={classes.banner} alt="About banner" title="About banner"/>
                </Box>
                <Container sx={{pt: 8}}>
                    <Grid container={true} spacing={8} justifyContent="center">
                        <Grid item={true} xs={12} md={6}>
                            <form onSubmit={handleSubmit}>
                                <Typography fontWeight="bolder" mb={2} variant="h4">Contact Us</Typography>
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ContactPage;
