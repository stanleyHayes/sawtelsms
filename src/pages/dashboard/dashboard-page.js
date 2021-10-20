import Layout from "../../components/layout/layout";
import {Box, Container, Grid} from "@mui/material";
import Stat from "../../components/shared/stat";
import {Contacts, Money, Schedule, ScheduleSend} from "@mui/icons-material";

const DashboardPage = () => {

    return (
        <Layout>
            <Box
                pt={8}
                pb={8}
                sx={{minHeight: '50vh', backgroundColor: 'background.light'}}>
                <Container>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <Stat
                                label="Credit"
                                value="53.00 GHS"
                                icon={<Money sx={{width: 75, height: 75, color: "secondary.main"}}/>}/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <Stat
                                label="Queued"
                                value="2"
                                icon={<ScheduleSend sx={{width: 75, height: 75, color: "secondary.main"}}/>}/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <Stat
                                label="Scheduled"
                                value="2"
                                icon={<Schedule sx={{width: 75, height: 75, color: "secondary.main"}}/>}/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <Stat
                                label="Contacts"
                                value="100"
                                icon={<Contacts sx={{width: 75, height: 75, color: "secondary.main"}}/>}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default DashboardPage;
