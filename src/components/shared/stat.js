import {Card, CardHeader, Typography} from "@mui/material";

const Stat = ({value, label, icon}) => {
    return (
        <Card variant="elevation">
            <CardHeader
                avatar={icon}
                title={<Typography variant="body2">{label}</Typography>}
                subheader={<Typography fontWeight='bold' variant="h5">{value}</Typography>}
            />
        </Card>
    )
}

export default Stat;
