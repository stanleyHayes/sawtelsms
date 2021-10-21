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
                            <TableCell>
                                <Typography variant="h6">#</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Price</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">SMS Package</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Select</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {packages.map((smsPackage, index) => {
                            return (
                                <TableRow key={index} hover={true}>
                                    <TableCell>{smsPackage.number}</TableCell>
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
                <Grid item={true}>
                    <Button
                        size="medium"
                        onClick={handleNextPage}
                        variant="outlined">
                        Next
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Packages;
