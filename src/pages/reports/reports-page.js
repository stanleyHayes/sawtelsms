import {
    Alert, AlertTitle,
    Box,
    Button,
    Container,
    Grid,
    LinearProgress,
    Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, TextField,
    Typography
} from "@mui/material";
import {DatePicker} from "@mui/lab";
import React, {useState} from "react";
import {DateRange} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectReports} from "../../redux/reports/report-reducer";
import moment from "moment";
import AuthenticatedLayout from "../../components/layout/authenticated-layout";

const ReportsPage = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const {reports, reportsError, reportsLoading} = useSelector(selectReports);

    return (
        <AuthenticatedLayout>
            <Box pt={8} pb={8} sx={{backgroundColor: 'background.default', minHeight: '60vh'}}>
                {reportsLoading && <LinearProgress variant="query"/>}
                {reportsError &&
                <Alert severity="error" variant="standard">
                    <AlertTitle>Error</AlertTitle>
                    {reportsError}
                </Alert>
                }
                <Container>
                    <Typography variant="h4" mb={2}>Reports</Typography>

                    <Grid container={true} justifyContent="space-between">

                        {/*date filter*/}
                        <Grid
                            container={true}
                            spacing={4}
                            justifyContent="flex-start"
                            item={true} xs={12}
                            md={10}
                            alignItems="center">

                            {/*start date grid*/}
                            <Grid item={true} container={true} alignItems="center" spacing={2} xs={12} md="auto">
                                <Grid item={true}>
                                    <Typography variant="body2">From</Typography>
                                </Grid>
                                <Grid item={true}>
                                    <DatePicker
                                        variant="dialog"
                                        inputVariant="outlined"
                                        margin="dense"
                                        value={startDate}
                                        onChange={date => setStartDate(date)}
                                        fullWidth={true}
                                        emptyLabel="Select Start Date"
                                        format="yyyy/MM/dd"
                                        renderInput={props => <TextField size="small" {...props} />}
                                    />
                                </Grid>
                                <Grid item={true}>
                                    <DateRange/>
                                </Grid>
                            </Grid>

                            {/*end date grid*/}
                            <Grid item={true} container={true} alignItems="center" spacing={2} xs={12} md="auto">
                                <Grid item={true}>
                                    <Typography variant="body2">To</Typography>
                                </Grid>
                                <Grid item={true}>
                                    <DatePicker
                                        variant="dialog"
                                        inputVariant="outlined"
                                        margin="dense"
                                        value={endDate}
                                        onChange={date => setEndDate(date)}
                                        fullWidth={true}
                                        emptyLabel="Select End Date"
                                        format="yyyy/MM/dd"
                                        date={endDate}
                                        renderInput={props => <TextField size="small" {...props} />}
                                    />
                                </Grid>
                                <Grid item={true}>
                                    <DateRange/>
                                </Grid>
                            </Grid>

                            <Grid xs={12} md="auto" item={true}>
                                <Button fullWidth={true} size="medium" variant="outlined">Go</Button>
                            </Grid>
                        </Grid>

                        {/*download button*/}
                        <Grid item={true} xs={12} md={2}>
                            <Button fullWidth={true} size="medium" variant="outlined">Download</Button>
                        </Grid>
                    </Grid>

                    {reports && reports.length === 0 ? (
                        <Box mt={2} mb={2}>
                            <Typography variant="h6" sx={{textTransform: 'uppercase'}}>
                                No Reports Available
                            </Typography>
                        </Box>
                    ) : (
                        <TableContainer sx={{mt: 4}} component={Paper} variant="elevation">
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell variant="head">
                                            Sender
                                        </TableCell>
                                        <TableCell variant="head">
                                            Recipient
                                        </TableCell>
                                        <TableCell variant="head">
                                            Message
                                        </TableCell>
                                        <TableCell variant="head">
                                            Date
                                        </TableCell>
                                        <TableCell variant="head">
                                            Status
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {reports.map((report, index) => {
                                        return (
                                            <TableRow key={index} hover={true}>
                                                <TableCell>{report.sender.id}</TableCell>
                                                <TableCell>{report.recipient.phone}</TableCell>
                                                <TableCell>{report.message}</TableCell>
                                                <TableCell>{moment(report.date).format('DD/MM/YYYY')}</TableCell>
                                                <TableCell>{report.status}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Container>
            </Box>
        </AuthenticatedLayout>
    )
}

export default ReportsPage;
