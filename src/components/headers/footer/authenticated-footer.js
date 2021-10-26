import {Box, Container, Grid, Typography} from "@mui/material";

const AuthenticatedFooter = () => {

    return (
        <Box pt={4} pb={4} sx={{backgroundColor: 'primary.main', color: 'secondary.main'}}>
            <Container maxWidth="lg">
                <Grid container={true} justifyContent="flex-end">
                    <Grid item={true}>
                        <Typography sx={{color: 'white'}} variant="body2">
                            2021 SAWTEL Bulkm SMS. All right reserved
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AuthenticatedFooter;
