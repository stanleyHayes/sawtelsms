import {
    Box,
    Button,
    Grid,
    Paper,
    Radio,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import {selectPackages} from "../../redux/packages/package-reducer";

const Packages = ({handleNextPage, handlePackageSelect}) => {

    const {packages} = useSelector(selectPackages);

    return (
        <Box p={2} variant="outlined" sx={{backgroundColor: 'background.default'}}>
            <Typography variant="h6">
                Buy Bulk SMS Packages
            </Typography>

            <TableContainer sx={{mt: 2}} component={Paper} variant="elevation">
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head">
                                #
                            </TableCell>
                            <TableCell variant="head">
                                Price
                            </TableCell>
                            <TableCell variant="head">
                                SMS Package
                            </TableCell>
                            <TableCell variant="head">
                                Select
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {packages.map((smsPackage, index) => {
                            return (
                                <TableRow key={index} hover={true}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{smsPackage.price} GHS</TableCell>
                                    <TableCell>{smsPackage.package} SMS</TableCell>
                                    <TableCell>
                                        <Radio size="small" onClick={() => handlePackageSelect(smsPackage)}/>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid sx={{marginTop: 2, marginBottom: 2}} container={true} justifyContent="flex-end">
                <Grid item={true} xs={12} md={3}>
                    <Button
                        fullWidth={true}
                        size="medium"
                        onClick={handleNextPage}
                        disableElevation={true}
                        sx={{color: 'secondary.main'}}
                        variant="contained">
                        Next
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Packages;
