import Layout from "../../components/layout/layout";
import {useState} from "react";
import Packages from "../../components/shared/packages";
import PaymentMethod from "../../components/shared/payment-method";
import {Box, Container} from "@mui/material";

const PaymentsPage = () => {

    const [page, setPage] = useState(0);

    const renderPage = page => {
        switch (page) {
            case 0:
                return <Packages handleNextPage={() => setPage(1)} />;
            case 1:
                return <PaymentMethod handlePreviousPress={() => setPage(0)} />
            default:
                return <Packages handleNextPage={() => setPage(1)} />;
        }
    }

    return (
        <Layout>
            <Box pt={8} pb={8} sx={{backgroundColor: 'background.light'}}>
                <Container>
                    {renderPage(page)}
                </Container>
            </Box>
        </Layout>
    )
}

export default PaymentsPage;
