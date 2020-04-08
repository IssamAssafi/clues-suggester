import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ClueInput from './ClueInput';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@styled-icons/material/AddCircle';


export const Form = ({ addProposal }) => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const handleConfirm = () => { addProposal(proposal); handleClose(); }

    const [proposal, setProposal] = useState({
        character: '',
        anime: '',
        clues: [],
        author: localStorage.getItem('username'),
        category: '',
        status: 'review'
    })
    const updateClue = (clue, index) => {
        let newClues = [...proposal.clues];
        newClues[index] = clue;
        setProposal({ ...proposal, clues: newClues });
    }
    const removeClue = (index) => {
        let newClues = [...proposal.clues];
        newClues.splice(index, 1);
        setProposal({ ...proposal, clues: newClues });
    }
    const addClue = () => {
        let newClues = [...proposal.clues];
        newClues.push({});
        setProposal({ ...proposal, clues: newClues });
    }

    return (

        <>
            <AddIcon onClick={handleClickOpen} />
            <Dialog fullWidth={true} maxWidth={'md'} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add a new proposal
            </MuiDialogTitle>
                <MuiDialogContent dividers>
                    <FormElementsWrapper>
                        <Row>
                            <Autocomplete
                                freeSolo
                                options={['Freizer']}
                                renderInput={params => (
                                    <StyledInput
                                        {...params}
                                        key={uuidv4}
                                        label="Character Name"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={e => setProposal({ ...proposal, character: e.target.value })}
                                    />
                                )}
                            />

                            <Autocomplete
                                freeSolo
                                options={['Dragon Ball']}
                                renderInput={params => (
                                    <StyledInput
                                        {...params}
                                        key={uuidv4}
                                        label="Anime"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={e => setProposal({ ...proposal, anime: e.target.value })}
                                    />
                                )}
                            />
                        </Row>
                        <StyledButton onClick={e => { addClue() }} variant="contained" size="large" color="primary" >
                            ADD NEW CLUE +
                        </StyledButton>

                        {proposal.clues.map((clue, index) =>
                            <ClueInput
                                index={index}
                                initialClue={clue}
                                updateClue={updateClue}
                                removeClue={removeClue}
                            />)}
                    </FormElementsWrapper>
                </MuiDialogContent>
                <MuiDialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleConfirm} color="primary">
                        Confirm
                    </Button>
                </MuiDialogActions>
            </Dialog>
        </>






    )
}
export default Form;


const FormContainer = ({ children, proposal, addProposal }) => {
    return (
        <>
            <MuiDialogContent dividers>
                {children}
            </MuiDialogContent>
            <MuiDialogActions>
                <Button variant="contained" onClick={e => addProposal(proposal)} color="primary">
                    Confirm
            </Button>
            </MuiDialogActions>
        </>
    );
}

const AddIcon = styled(AddCircle)`
    width:33px;
    color: green;
    position: relative;
    bottom: 5px;
`;

const StyledButton = styled(Button)`
  &&{
      background-color:#018555;
      margin:5px 0px;

      :hover{
          background-color:#219A67;
      }
  }
`;

const FormElementsWrapper = styled.div`
    display:flex;
    flex-direction:column;
    max-width:95%;
    margin:0 auto;
`;

const Row = styled.div`
    display:grid;
    grid-template-columns:auto 45%;
    grid-gap: 1%;
`;

const StyledInput = styled(TextField)`
&&{
  background-color:white;   
  width:100%
}
`;



