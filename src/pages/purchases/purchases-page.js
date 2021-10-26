import {
    Alert,
    AlertTitle,
    Box,
    Container,
    LinearProgress,
    Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import {selectTransactions} from "../../redux/transactions/transaction-reducer";
import React from "react";
import moment from "moment";
import AuthenticatedLayout from "../../components/layout/authenticated-layout";

const PurchasesPage = () => {

    const {transactions, transactionsLoading, transactionsError} = useSelector(selectTransactions);

    return (
        <AuthenticatedLayout>
            <Box pt={8} pb={8} sx={{backgroundColor: 'background.default', minHeight: '60vh'}}>
                {transactionsLoading && <LinearProgress variant="query"/>}

                <Container>
                    <Typography variant="h4" mb={2}>Transactions</Typography>

                    {transactionsError &&
                    <Alert severity="error" variant="standard">
                        <AlertTitle>Error</AlertTitle>
                        {transactionsError}
                    </Alert>
                    }

                    {transactions && transactions.length === 0 ? (
                        <Box mt={2} mb={2}>
                            <Typography variant="h6" sx={{textTransform: 'uppercase'}}>
                                No Transactions Available
                            </Typography>
                        </Box>
                    ) : (
                        <TableContainer sx={{mt: 4}} component={Paper} variant="elevation">
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell variant="head">
                                            #
                                        </TableCell>
                                        <TableCell variant="head">
                                            Payment Details
                                        </TableCell>
                                        <TableCell variant="head">
                                            Amount
                                        </TableCell>
                                        <TableCell variant="head">
                                            Status
                                        </TableCell>
                                        <TableCell variant="head">
                                            Date
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {transactions.map((transaction, index) => {
                                        return (
                                            <TableRow key={index} hover={true}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{transaction.paymentDetails}</TableCell>
                                                <TableCell>{parseFloat(transaction.amount).toFixed(2)} GHS</TableCell>
                                                <TableCell>{transaction.status}</TableCell>
                                                <TableCell>{moment(transaction.date).format('YYYY/MM/DD')}</TableCell>
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

export default PurchasesPage;
