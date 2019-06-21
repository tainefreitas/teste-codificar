import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    appBar: {
        background: 'linear-gradient(60deg, #000080 15%, #00001a 100%)'
    },
}));

const TopBar = (props) =>{
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar >
                <Typography variant="h6" color="inherit">Orçamentos</Typography>
            </Toolbar>
        </AppBar>
    )
}


export default TopBar;