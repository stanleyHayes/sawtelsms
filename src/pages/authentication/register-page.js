import {
    Box,
    Button,
    Card,
    CardContent, Checkbox,
    Divider, FormControlLabel,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";
import {Link} from "react-router-dom";

const RegisterPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            icon: {}
        }
    });

    const classes = useStyles();

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [hasAgreed, setHasAgreed] = useState(false);
    const [mobileMoneyNumber, setMobileMoneyMobile] = useState("");
    const [mobileMoneyProvider, setMobileMoneyProvider] = useState(" ");
    const [card, setCard] = useState({});
    const {cvv, expiryMonthYear, cardName, cardNumber} = card;
    const {name, email, phone, password, confirmPassword, company, country, website} = user;

    const handleSubmit = event => {
        event.preventDefault();

        if (!name) {
            setError({error, name: 'Name field required'});
            return;
        } else {
            setError({error, name: null});
        }
        console.log(user);
    }

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleCardChange = event => {
        setCard({...card, [event.target.name]: event.target.value});
    }

    const handleHasAgreed = event => {
        setHasAgreed(event.target.checked);
    }
    return (
        <Box sx={{
            backgroundColor: 'secondary.main',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw'
        }}>
            <Grid container={true} justifyContent="center">
                <Grid item={true} xs={12} md={8}>
                    <Card variant="outlined" sx={{borderWidth: 2}}>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Grid
                                    sx={{paddingTop: 4, paddingBottom: 4}}
                                    container={true}
                                    spacing={2}
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item={true}>
                                        <img className={classes.icon} alt="" title=""/>
                                    </Grid>
                                    <Grid item={true}>
                                        <Typography fontWeight='bolder' variant="h4">SAWTEL SMS</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container={true} spacing={3} justifyContent="space-between">
                                    <Grid item={true} xs={12} md={5}>
                                        <Stack spacing={2} direction="column">
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
                                                name="phone"
                                                value={phone}
                                                type="tel"
                                                variant="outlined"
                                                error={Boolean(error.phone)}
                                                label="Phone"
                                                placeholder="Phone"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.phone}
                                                margin="dense"
                                                size="small"
                                            />

                                            <TextField
                                                name="password"
                                                value={password}
                                                type="password"
                                                variant="outlined"
                                                error={Boolean(error.password)}
                                                label="Password"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.password}
                                                margin="dense"
                                                size="small"
                                            />

                                            <TextField
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                type="password"
                                                variant="outlined"
                                                error={Boolean(error.confirmPassword)}
                                                label="Re-Type Password"
                                                placeholder="Re-Type Password"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.confirmPassword}
                                                margin="dense"
                                                size="small"
                                            />

                                            <TextField
                                                name="company"
                                                value={company}
                                                type="text"
                                                variant="outlined"
                                                error={Boolean(error.company)}
                                                label="Company"
                                                placeholder="Company"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.company}
                                                margin="dense"
                                                size="small"
                                            />

                                            <Select
                                                defaultValue="Ghana"
                                                size="small"
                                                value={country}
                                                fullWidth={true}
                                                required={true}>
                                                <MenuItem value=" ">Select Country</MenuItem>
                                                <MenuItem value="Ghana">Ghana</MenuItem>
                                            </Select>

                                            <TextField
                                                name="website"
                                                value={website}
                                                type="url"
                                                variant="outlined"
                                                error={Boolean(error.website)}
                                                label="Website"
                                                placeholder="Website"
                                                onChange={handleChange}
                                                fullWidth={true}
                                                required={true}
                                                helperText={error.website}
                                                margin="dense"
                                                size="small"
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item={true}>
                                        <Divider orientation="vertical"/>
                                    </Grid>
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

                                        <Stack direction="row" spacing={0} mt={3} mb={2}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        required={true}
                                                        onChange={handleHasAgreed}
                                                        checked={hasAgreed}
                                                    />
                                                } label={
                                                <Typography variant="body2">
                                                    I agree to <Link to="/terms">Terms and Conditions</Link>
                                                </Typography>
                                            }/>

                                        </Stack>
                                        <Button
                                            disabled={!hasAgreed}
                                            size="medium"
                                            variant="outlined"
                                            sx={{borderWidth: 2}}>
                                            Sign Up
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default RegisterPage;
