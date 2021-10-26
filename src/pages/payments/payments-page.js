import {useState} from "react";
import Packages from "../../components/shared/packages";
import PaymentMethod from "../../components/shared/payment-method";
import {Box, Container} from "@mui/material";
import AuthenticatedLayout from "../../components/layout/authenticated-layout";

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
        <AuthenticatedLayout>
            <Box pt={8} pb={8} sx={{backgroundColor: 'background.default'}}>
                <Container>
                    {renderPage(page)}
                </Container>
            </Box>
        </AuthenticatedLayout>
    )
}

export default PaymentsPage;
