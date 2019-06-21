import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from  '@material-ui/core/Modal'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: '45%',
      left: '45%',
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        background: 'linear-gradient(60deg, #FFFFFF 15%, #F2F2F2 100%)'
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
      }
}));
    

const ListCards = (props) =>{

    const [open, setOpen] = React.useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const classes = useStyles();
    return (
        <Grid className={classes.root} item zeroMinWidth xs={12} sm={4} lg={3}>
            <Card className={classes.card}>
                <CardHeader
                    title={
                        <Typography>Orçamento id: {props.budgets.id}
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography>Contratado: {props.budgets.seller}</Typography>
                    <Typography>Contratante: {props.budgets.customer}</Typography>
                    <Typography>Valor: {props.budgets.value}</Typography>
                </CardContent>
                <Button onClick={handleOpen}> Mais Informações</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                        Descrição
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        {props.budgets.description}
                    </Typography>
                    </div>
                </Modal>          
            </Card>
        </Grid>
    )
}
export default ListCards;