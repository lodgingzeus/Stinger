import { makeStyles } from "@mui/material";

export default useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    }
}))