import React from "react";
import Layout from "../../components/layout/layout";
import {
    Box, Button, Card, CardContent, Checkbox,
    Container, Divider,
    FormControl,
    FormControlLabel, FormGroup, FormLabel,
    Grid, Link, MenuItem,
    Radio, RadioGroup, Select, TextField, Typography,
} from "@mui/material";
import {useState} from "react";
import {DatePicker, TimePicker} from "@mui/lab";
import {DateRange} from "@mui/icons-material";

const SendMessagePage = () => {

    const [selectedGroup, setSelectedGroup] = useState(" ");
    const [numbers, setNumbers] = useState(" ");
    const [senderID, setSenderID] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");
    const [audioFileName, setAudioFileName] = useState("");
    const [scheduleDate, setScheduleDate] = useState(new Date());
    const [scheduleTime, setScheduleTime] = useState(new Date());
    const [messageType, setMessageType] = useState("SEND_NOW");

    const handleChangeMessageType = (event, value) => {
        setMessageType(value);
    }

    return (
        <Layout>
            <Box pt={8} pb={8} sx={{backgroundColor: 'background.light', minHeight: '50vh'}}>
                <Container>

                    {/*Message Type Select*/}
                    <Grid container={true}>
                        <Grid item={true} xs={12} md={8}>
                            <Card variant="outlined">
                                <CardContent>
                                    <FormControl>
                                        <RadioGroup
                                            onChange={handleChangeMessageType}
                                            value={messageType} row={true}
                                            name="message-type">
                                            <FormControlLabel
                                                value="SEND_NOW"
                                                control={<Radio size="small"/>}
                                                label="Send Now"
                                            />
                                            <FormControlLabel
                                                value="SCHEDULE_MESSAGING"
                                                control={<Radio size="small"/>}
                                                label="Schedule Messaging"
                                            />
                                            <FormControlLabel
                                                value="EXCEL_MESSAGING"
                                                control={<Radio size="small"/>}
                                                label="Excel Messaging"
                                            />
                                            <FormControlLabel
                                                value="VOICE_MESSAGING"
                                                control={<Radio size="small"/>}
                                                label="Voice Messaging"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{marginTop: 4, marginBottom: 4}}/>

                    {messageType === 'EXCEL_MESSAGING' ? (
                        <React.Fragment>
                            {/*Excel*/}
                            <Grid container={true}>
                                <Grid item={true} xs={12} md={8}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Grid container={true}>
                                                <Grid item={true} xs={12}>
                                                    <Typography fontWeight='bold' variant="body1">
                                                        Excel Messaging
                                                    </Typography>
                                                </Grid>
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
                                                            DO NOT DELETE THE HEADER. FILE MUST HAVE THE HEADER Name, SMS
                                                            Number,
                                                            Whatsapp Number, Email. ADD THE HEADER IF YOU ARE NOT USING THE
                                                            TEMPLATE
                                                            PROVIDED.
                                                        </Typography>
                                                    </li>
                                                    <li>
                                                        <Typography variant="body2">
                                                            Save file and check to be sure it is in the right excel format (.xls
                                                            or
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
                                                    <Grid item={true} xs={12} md={3}>
                                                        <TextField
                                                            name="fileName"
                                                            value={fileName}
                                                            type="fileName"
                                                            variant="outlined"
                                                            label=".xls file"
                                                            placeholder=".xls file"
                                                            onChange={event => setFileName(event.target.value)}
                                                            fullWidth={true}
                                                            required={true}
                                                            margin="dense"
                                                            size="small"
                                                        />
                                                    </Grid>
                                                    <Grid item={true} xs={12} md={3}>
                                                        <Button
                                                            fullWidth={true}
                                                            size="medium"
                                                            variant="outlined"
                                                            sx={{borderWidth: 2}}>
                                                            Browse
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    ): (messageType === 'SCHEDULE_MESSAGING') ? (
                        <React.Fragment>
                            {/*Schedule*/}
                            <Grid container={true}>
                                <Grid item={true} xs={12} md={8}>

                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography fontWeight='bold' variant="body1">
                                                Schedule
                                            </Typography>
                                            <Typography variant="body2">Schedule date and time</Typography>

                                            <Grid
                                                container={true}
                                                alignItems="center"
                                                spacing={2}
                                                xs={12}
                                                md="auto">

                                                <Grid item={true}>
                                                    <DatePicker
                                                        variant="dialog"
                                                        inputVariant="outlined"
                                                        margin="dense"
                                                        date={scheduleDate}
                                                        onChange={date => setScheduleDate(date)}
                                                        fullWidth={true}
                                                        toolbarTitle="Select Schedule Date"
                                                        inputFormat="yyyy/MM/dd"
                                                        renderInput={props => <TextField size="small" {...props} />}
                                                    />
                                                </Grid>
                                                <Grid item={true}>
                                                    <DateRange/>
                                                </Grid>
                                                <Grid item={true}>
                                                    <Typography variant="body2">Time</Typography>
                                                </Grid>
                                                <Grid item={true}>
                                                    <TimePicker
                                                        variant="dialog"
                                                        inputVariant="outlined"
                                                        margin="dense"
                                                        label="Schedule Time"
                                                        value={scheduleTime}
                                                        onChange={time => setScheduleTime(time)}
                                                        fullWidth={true}
                                                        emptyLabel="Select Start Date"
                                                        inputFormat="HH:MM a"
                                                        ampm={true}
                                                        views={['hours', 'minutes']}
                                                        ampmInClock={true}
                                                        toolbarTitle="Select Schedule Time"
                                                        renderInput={props => <TextField size="small" {...props} />}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                        </React.Fragment>
                    ): (
                        <React.Fragment>
                            {/*Text Message */}
                            <Grid container={true}>
                                <Grid item={true} xs={12} md={8}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                    <Typography fontWeight='bold' variant="body1">Send Message As</Typography>
                                                </FormLabel>
                                                <FormGroup row={true}>
                                                    <FormControlLabel value="SMS" control={<Checkbox/>} label="SMS"/>
                                                    <FormControlLabel value="WHATSAPP" control={<Checkbox/>} label="Whatsapp"/>
                                                    <FormControlLabel value="EMAIL" control={<Checkbox/>} label="Email"/>
                                                </FormGroup>
                                            </FormControl>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Divider variant="fullWidth" sx={{marginTop: 4, marginBottom: 4}}/>

                            <Grid container={true}>
                                <Grid item={true} xs={12} md={8}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Grid container={true}>
                                                <Grid item={true} xs={12}>
                                                    <Typography fontWeight='bold' variant="body1">
                                                        Phone Number / Groups
                                                    </Typography>
                                                </Grid>
                                                <Grid item={true} xs={12} md={4}>
                                                    <Select
                                                        fullWidth={true}
                                                        name="mobileMoneyProvider"
                                                        onChange={event => setSelectedGroup(event.target.value)}
                                                        value={selectedGroup}
                                                        variant="outlined"
                                                        size="small"
                                                        defaultValue=" ">
                                                        <MenuItem value=" ">Select Group</MenuItem>
                                                        <MenuItem value="SMS">SMS Group</MenuItem>
                                                        <MenuItem value="WHATSAPP">Whatsapp</MenuItem>
                                                        <MenuItem value="EMAIL">Email Group</MenuItem>
                                                    </Select>
                                                </Grid>
                                            </Grid>

                                            <TextField
                                                name="expiryMonthYear"
                                                value={numbers}
                                                type="text"
                                                variant="outlined"
                                                label="Recipient Numbers"
                                                placeholder="Enter recipient numbers here separate with commas"
                                                onChange={event => setNumbers(event.target.value)}
                                                fullWidth={true}
                                                required={true}
                                                margin="dense"
                                                size="small"
                                                multiline={true}
                                                minRows={5}
                                                sx={{marginTop: 2}}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Divider variant="fullWidth" sx={{marginTop: 4, marginBottom: 4}}/>

                            {/*Text Message */}
                            <Grid container={true} spacing={4} sx={{height: '100%'}}>

                                <Grid item={true} xs={12} md={8}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Grid container={true}>
                                                <Grid item={true} xs={12}>
                                                    <Typography fontWeight='bold' variant="body1">
                                                        Text Message
                                                    </Typography>
                                                </Grid>
                                                <Grid item={true} xs={12} md={4}>
                                                    <TextField
                                                        name="senderID"
                                                        value={senderID}
                                                        type="text"
                                                        variant="outlined"
                                                        label="Sender ID"
                                                        placeholder="Sender ID"
                                                        onChange={event => setSenderID(event.target.value)}
                                                        fullWidth={true}
                                                        required={true}
                                                        margin="dense"
                                                        size="small"
                                                        sx={{marginTop: 2}}
                                                    />
                                                </Grid>
                                            </Grid>

                                            <TextField
                                                name="message"
                                                value={message}
                                                type="text"
                                                variant="outlined"
                                                label="Message"
                                                placeholder="Type message here (max 140 characters)"
                                                onChange={event => setMessage(event.target.value)}
                                                fullWidth={true}
                                                required={true}
                                                margin="dense"
                                                size="small"
                                                multiline={true}
                                                minRows={2}
                                                sx={{marginTop: 2}}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item={true} xs={12} md={4} sx={{height: '100%'}}>
                                    <Card variant="outlined" sx={{height: '100%'}}>
                                        <CardContent>
                                            <Typography fontWeight='bold' variant="body1">
                                                Voice Messaging
                                            </Typography>
                                            <Typography variant="body2">Upload audio file</Typography>
                                            <Grid container={true} spacing={2} alignContent="center" alignItems="center">
                                                <Grid item={true} xs={12} md={6}>
                                                    <TextField
                                                        name="audioFileName"
                                                        value={audioFileName}
                                                        type="audioFileName"
                                                        variant="outlined"
                                                        label="Audio File"
                                                        placeholder=".mp3, .acc"
                                                        onChange={event => setAudioFileName(event.target.value)}
                                                        fullWidth={true}
                                                        required={true}
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
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>

                        </React.Fragment>
                    )}
                    <Divider variant="fullWidth" sx={{marginTop: 4, marginBottom: 4}}/>

                    <Grid container={true} justifyContent="flex-end">
                        <Grid item={true} xs={12} md={6}>

                        </Grid>
                        <Grid item={true} xs={12} md={2}>
                            <Button
                                fullWidth={true}
                                size="medium"
                                variant="outlined"
                                sx={{borderWidth: 2}}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default SendMessagePage;
