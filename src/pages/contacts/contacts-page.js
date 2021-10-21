import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box, Button, Card, CardContent, Container,
    Divider,
    Grid,
    LinearProgress, Link, MenuItem,
    Paper, Select, Stack,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, TextField,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import {selectContacts} from "../../redux/contacts/contact-reducer";
import {useState} from "react";

const ContactsPage = () => {

    const {contacts, contactsError, contactsLoading} = useSelector(selectContacts);

    const [contact, setContact] = useState({});
    const [error, setError] = useState({});
    const [fileName, setFileName] = useState("");

    const {email, name, whatsappNumber, smsNumber, group} = contact;

    const handleSubmit = event => {
        event.preventDefault();

        if (!name) {
            setError({error, name: 'Name Field Required'});
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
            <Box pt={8} pb={8} sx={{backgroundColor: 'background.default', minHeight: '60vh'}}>
                {contactsLoading && <LinearProgress variant="query"/>}
                {contactsError &&
                <Alert severity="error" variant="standard">
                    <AlertTitle>Error</AlertTitle>
                    {contactsError}
                </Alert>
                }
                <Container>
                    <Typography variant="h4" mb={2}>Contacts</Typography>

                    <Grid container={true} justifyContent="space-between">
                        <Grid item={true} xs={12} md={5}>
                            <Card variant="elevation">
                                <CardContent>
                                    <Typography variant="h6" mb={2}>Add New Contact</Typography>
                                    <form onSubmit={handleSubmit}>
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
                                                name="smsNumber"
                                                value={smsNumber}
                                                type="text"
                                                variant="outlined"
                                                error={Boolean(error.smsNumber)}
                                                label="SMS Number"
                                                placeholder="SMS Number"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.smsNumber}
                                                margin="dense"
                                                size="small"
                                            />

                                            <TextField
                                                name="whatsappNumber"
                                                value={whatsappNumber}
                                                type="text"
                                                variant="outlined"
                                                error={Boolean(error.whatsappNumber)}
                                                label="Whatsapp Number"
                                                placeholder="Whatsapp Number"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.whatsappNumber}
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

                                            <Grid container={true} justifyContent="space-between">
                                                <Grid item={true} xs={12} md={5.8}>
                                                    <Select
                                                        fullWidth={true}
                                                        name="group"
                                                        onChange={handleChange}
                                                        value={group}
                                                        variant="outlined"
                                                        size="small"
                                                        defaultValue=" ">
                                                        <MenuItem value=" ">Select Group</MenuItem>
                                                        <MenuItem value="AIRTEL_TIGO">Airtel Tigo</MenuItem>
                                                        <MenuItem value="VODAFONE">Vodafone</MenuItem>
                                                        <MenuItem value="MTN">MTN</MenuItem>
                                                    </Select>
                                                </Grid>
                                                <Grid item={true} xs={12} md={5.8}>
                                                    <Button
                                                        fullWidth={true}
                                                        size="medium"
                                                        variant="outlined"
                                                        sx={{borderWidth: 2}}>
                                                        Add Contact
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true}>
                            <Divider orientation="vertical"/>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation">
                                <CardContent>
                                    <Typography variant="h6" mb={2}>Add Bulk Contacts</Typography>
                                    <ul>
                                        <li>
                                            <Typography variant="body2">
                                                DOWNLOAD <Link>EXCEL TEMPLATE</Link> to fill out with your
                                                contacts
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2">
                                                DO NOT DELETE THE HEADER. FILE MUST HAVE THE HEADER Name, SMS Number,
                                                Whatsapp Number, Email. ADD THE HEADER IF YOU ARE NOT USING THE TEMPLATE
                                                PROVIDED.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2">
                                                Save file and check to be sure it is in the right excel format (.xls or
                                                .xlt or .xlsx)
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2">
                                                Upload the file by clicking the browse button below.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2">
                                                Make sure your excel file is uploaded and click Add contacts.
                                            </Typography>
                                        </li>
                                    </ul>
                                    <Typography variant="body2">Upload a file</Typography>
                                    <Grid container={true} spacing={2} alignContent="center" alignItems="center">
                                        <Grid item={true} xs={12} md={6}>
                                            <TextField
                                                name="fileName"
                                                value={fileName}
                                                type="fileName"
                                                variant="outlined"
                                                error={Boolean(error.fileName)}
                                                label=".xls file"
                                                placeholder=".xls file"
                                                onChange={event => setFileName(event.target.value)}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.fileName}
                                                margin="dense"
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Button
                                                fullWidth={true}
                                                size="medium"
                                                variant="outlined"
                                                sx={{borderWidth: 2}}>
                                                Browse
                                            </Button>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Select
                                                fullWidth={true}
                                                name="group"
                                                onChange={handleChange}
                                                value={group}
                                                variant="outlined"
                                                size="small"
                                                defaultValue=" ">
                                                <MenuItem value=" ">Select Group</MenuItem>
                                                <MenuItem value="AIRTEL_TIGO">Airtel Tigo</MenuItem>
                                                <MenuItem value="VODAFONE">Vodafone</MenuItem>
                                                <MenuItem value="MTN">MTN</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Button
                                                fullWidth={true}
                                                size="medium"
                                                variant="outlined"
                                                sx={{borderWidth: 2}}>
                                                Add Contact
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{marginTop: 4, marginBottom: 4}}/>

                    {contacts && contacts.length === 0 ? (
                        <Box mt={2} mb={2}>
                            <Typography variant="h6" sx={{textTransform: 'uppercase'}}>
                                No Contacts Available
                            </Typography>
                        </Box>
                    ) : (
                        <TableContainer sx={{mt: 4}} component={Paper} variant="elevation">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="h6">Name</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">SMS Number</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Whatsapp Number</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Email</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Group</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Actions</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {contacts.map((contact, index) => {
                                        return (
                                            <TableRow key={index} hover={true}>
                                                <TableCell>{contact.name}</TableCell>
                                                <TableCell>{contact.smsNumber}</TableCell>
                                                <TableCell>{contact.whatsappNumber}</TableCell>
                                                <TableCell>{contact.email}</TableCell>
                                                <TableCell>{contact.group}</TableCell>
                                                <TableCell>
                                                    <Grid container={true}>
                                                        <Grid item={true}>
                                                            <Button variant="text">Edit</Button>
                                                            <Button variant="text">Delete</Button>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Container>
            </Box>
        </Layout>
    )
}

export default ContactsPage;
