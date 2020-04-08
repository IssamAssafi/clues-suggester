import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import styled from 'styled-components';
import { AddCircle } from '@styled-icons/material/AddCircle';
import { Form } from './Form';

export const FormWrapper = ({ children }) => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AddIcon onClick={handleClickOpen} />
            <Dialog fullWidth={true} maxWidth={'md'} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add a new proposal
                </MuiDialogTitle>
                {children}


            </Dialog>
        </>
    );
}


const AddIcon = styled(AddCircle)`
    width:33px;
    color: green;
    position: relative;
    bottom: 5px;
`;