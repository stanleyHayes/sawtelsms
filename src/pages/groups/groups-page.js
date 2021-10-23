import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box, Button,
    Container, Divider,
    Grid,
    LinearProgress,
    MenuItem, Paper,
    Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectContacts} from "../../redux/contacts/contact-reducer";

const GroupsPage = () => {

    const [selectedGroup, setSelectedGroup] = useState(" ");
    const {contacts, contactsError, contactsLoading} = useSelector(selectContacts);

    const [groupName, setGroupName] = useState("");


    return (
        <Layout>
            <Box pt={8} pb={8} sx={{backgroundColor: 'background.dark', minHeight: '60vh'}}>
                {contactsLoading && <LinearProgress variant="query"/>}
                {contactsError &&
                <Alert severity="error" variant="standard">
                    <AlertTitle>Error</AlertTitle>
                    {contactsError}
                </Alert>
                }
                <Container>
                    <Box>
                        <Typography variant="h5">New Group</Typography>
                        <Grid container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                            <Grid item={true} xs={12} md={4}>
                                <TextField
                                    name="groupName"
                                    value={groupName}
                                    type="text"
                                    variant="outlined"
                                    label="Group Name"
                                    placeholder="Group Name"
                                    onChange={event => setGroupName(event.target.value)}
                                    fullWidth={true}
                                    required={true}
                                    margin="dense"
                                    size="small"
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={3}>
                                <Select
                                    fullWidth={true}
                                    name="mobileMoneyProvider"
                                    onChange={event => setSelectedGroup(event.target.value)}
                                    value={selectedGroup}
                                    variant="outlined"
                                    size="small"
                                    defaultValue=" ">
                                    <MenuItem value=" ">All</MenuItem>
                                    <MenuItem value="SMS">SMS Group</MenuItem>
                                    <MenuItem value="WHATSAPP">Whatsapp</MenuItem>
                                    <MenuItem value="EMAIL">Email Group</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Divider variant="fullWidth" sx={{marginTop: 2, marginBottom: 2}}/>


                    </Box>
                    <Box>
                        <Grid container={true} justifyContent="space-between" spacing={2}>
                            <Grid item={true} xs={12} md={9}>
                                <Typography variant="h5">Manage Groups</Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={3}>
                                <Select
                                    fullWidth={true}
                                    name="mobileMoneyProvider"
                                    onChange={event => setSelectedGroup(event.target.value)}
                                    value={selectedGroup}
                                    variant="outlined"
                                    size="small"
                                    defaultValue=" ">
                                    <MenuItem value=" ">Select Group</MenuItem>
                                    <MenuItem value="AIRTEL_TIGO_CASH">AirtelTigo</MenuItem>
                                    <MenuItem value="VODAFONE_CASH">Vodafone</MenuItem>
                                    <MenuItem value="MTN_MOMO">MTN Mobile</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Divider variant="fullWidth" sx={{marginTop: 2, marginBottom: 2}}/>

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

                        <Grid container={true} justifyContent="flex-end">
                            <Grid item={true}>
                                <Button
                                    sx={{borderWidth: 2, mt: 2}}
                                    size="small"
                                    variant="outlined">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default GroupsPage;
