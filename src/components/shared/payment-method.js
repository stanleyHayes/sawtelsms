import {
    Button,
    Divider,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {ChevronLeft} from "@mui/icons-material";
import PurchaseSummary from "./purchase-summary";

const PaymentMethod = ({handlePreviousPress}) => {

    const [mobileMoneyNumber, setMobileMoneyMobile] = useState("");
    const [mobileMoneyProvider, setMobileMoneyProvider] = useState(" ");
    const [card, setCard] = useState({});
    const [error, setError] = useState({});
    const {cvv, expiryMonthYear, cardName, cardNumber} = card;

    const handleCardChange = event => {
        setCard({...card, [event.target.name]: event.target.value});
    }

    const handleSubmit = () => {
        if (!cvv) {
            setError({error, cvv: 'CVV field required'});
            return;
        } else {
            setError({error, cvv: null});
        }
        console.log(card);
    }

    return (
        <Grid container={true} justifyContent="space-between">
            <Grid item={true} xs={12} md={6}>
                <Typography variant="h5">Add Payment Method</Typography>

                <Divider variant="fullWidth" sx={{height: 2, mt: 2, mb: 2}}/>

                <Typography variant="h6">Mobile Money</Typography>

                <Grid container={true} spacing={2} alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <Select
                            fullWidth={true}
                            name="mobileMoneyProvider"
                            onChange={event => setMobileMoneyProvider(event.target.value)}
                            value={mobileMoneyProvider}
                            variant="outlined"
                            size="small"
                            defaultValue=" ">
                            <MenuItem value=" ">Select Payment Method</MenuItem>
                            <MenuItem value="AIRTEL_TIGO_CASH">Airtel Tigo Cash</MenuItem>
                            <MenuItem value="VODAFONE_CASH">Vodafone Cash</MenuItem>
                            <MenuItem value="MTN_MOMO">MTN Mobile Money</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <TextField
                            name="mobileMoneyNumber"
                            value={mobileMoneyNumber}
                            type="tel"
                            variant="outlined"
                            error={Boolean(error.mobileMoneyNumber)}
                            label="Mobile Number"
                            placeholder="Mobile Money Number"
                            onChange={event => setMobileMoneyMobile(event.target.value)}
                            fullWidth={true}
                            required={true}
                            helperText={error.mobileMoneyNumber}
                            margin="dense"
                            size="small"
                        />
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" sx={{height: 2, mt: 2, mb: 2}}/>

                <Stack direction="row" spacing={2}>
                    <Typography variant="h6">Credit / Debit Card</Typography>
                    <Stack direction="row" spacing={1}>

                    </Stack>
                </Stack>

                <TextField
                    name="cardNumber"
                    value={cardNumber}
                    type="tel"
                    variant="outlined"
                    error={Boolean(error.cardNumber)}
                    label="Card Number"
                    placeholder="Card Number"
                    onChange={handleCardChange}
                    fullWidth={true}
                    required={true}
                    helperText={error.cardNumber}
                    margin="dense"
                    size="small"
                />

                <Grid container={true} spacing={1} alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <TextField
                            name="cardName"
                            value={cardName}
                            type="tel"
                            variant="outlined"
                            error={Boolean(error.cardName)}
                            label="Name on Card"
                            placeholder="Name on Card"
                            onChange={handleCardChange}
                            fullWidth={true}
                            required={true}
                            helperText={error.cardName}
                            margin="dense"
                            size="small"
                        />
                    </Grid>
                    <Grid item={true} xs={6} md={3}>
                        <TextField
                            name="cvv"
                            value={cvv}
                            type="number"
                            variant="outlined"
                            error={Boolean(error.cvv)}
                            label="CVV"
                            placeholder="CVV"
                            onChange={handleCardChange}
                            fullWidth={true}
                            required={true}
                            helperText={error.cvv}
                            margin="dense"
                            size="small"
                        />
                    </Grid>
                    <Grid item={true} xs={6} md={3}>
                        <TextField
                            name="expiryMonthYear"
                            value={expiryMonthYear}
                            type="text"
                            variant="outlined"
                            error={Boolean(error.expiryMonthYear)}
                            label="MM/YY"
                            placeholder="MM/YY"
                            onChange={handleCardChange}
                            fullWidth={true}
                            required={true}
                            helperText={error.expiryMonthYear}
                            margin="dense"
                            size="small"
                        />
                    </Grid>
                </Grid>

                <Grid sx={{marginTop: 2}} container={true} spacing={2} alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            onClick={handlePreviousPress}
                            startIcon={<ChevronLeft/>}
                            variant="text"
                            size="medium">
                            Return to Packages
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            onClick={handleSubmit}
                            fullWidth={true}
                            size="medium"
                            variant="outlined"
                            sx={{borderWidth: 2}}>
                            Complete Payment
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item={true} xs={12} md={3}>
                <PurchaseSummary />
            </Grid>
        </Grid>
    )
}

export default PaymentMethod;
