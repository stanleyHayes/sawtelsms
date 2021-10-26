import {Button, Card, CardContent, Divider, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";

const PurchaseSummary = () => {

    const [voucherCode, setVoucherCode] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        if (!voucherCode) {
            setError("Enter code to apply");
            return;
        } else {
            setError(null);
        }
        console.log(voucherCode);
    }

    return (
        <Card sx={{backgroundColor: 'background.paper'}}>
            <CardContent>
                <Typography variant="h5">Purchase Summary</Typography>
                <Grid container={true} sx={{marginTop: 2}}>
                    <Grid item={true} xs={12} md={6}>
                        <Typography variant="body2">
                            Subtotal
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Typography variant="body2">
                            GHS 20.00
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container={true} sx={{marginTop: 2}}>
                    <Grid item={true} xs={12} md={6}>
                        <Typography variant="body2">
                            Est. Taxes
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Typography variant="body2">
                            GHS 1.00
                        </Typography>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" sx={{marginTop: 2, marginBottom: 2}}/>

                <Typography variant="body1">
                    Voucher Code
                </Typography>
                <Grid container={true} alignItems="center" spacing={2}>
                    <Grid item={true} xs={12} md={8}>
                        <TextField
                            name="voucherCode"
                            value={voucherCode}
                            type="number"
                            variant="outlined"
                            error={Boolean(error)}
                            label="Voucher"
                            placeholder="Enter voucher"
                            onChange={event => setVoucherCode(event.target.value)}
                            fullWidth={true}
                            required={true}
                            helperText={error}
                            margin="dense"
                            size="small"
                        />
                    </Grid>
                    <Grid item={true} xs={12} md={4}>
                        <Button
                            onClick={handleSubmit}
                            fullWidth={true}
                            size="medium"
                            variant="outlined"
                            sx={{borderWidth: 2}}>
                            Apply
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Typography variant="body2">
                            Total
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Typography variant="body2">
                            GHS 21.40
                        </Typography>
                    </Grid>
                </Grid>
                <Divider
                    variant="fullWidth"
                    sx={{marginTop: 2}}
                />
            </CardContent>
        </Card>
    )
}

export default PurchaseSummary;
