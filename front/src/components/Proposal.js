import React from 'react'
import styled from 'styled-components';
import Collapse from './Collapse';
import Clue from './Clue';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';

function Proposal({ proposal, removeProposal, showEditingForm }) {
    const proposalTitle = `${proposal.character} from ${proposal.anime}`;

    const editProposal = () => {
        showEditingForm(proposal);
    }
    const isAdmin = (localStorage.getItem('username') === "admin");
    return (
        <>
            <Collapse title={proposalTitle} mtop='7px'>
                {proposal.clues && proposal.clues.map((clue, index) => (
                    <Clue order={index + 1} text={clue.text} img={clue.img} />
                ))}
                <ClueFooter>
                    <div>
                        <Button
                            variant="outlined"
                            startIcon={<PersonIcon />}
                            onClick={_ => console.log("yes")}
                        >
                            {`AUTHOR : ${proposal.author}`}
                        </Button>
                        {isAdmin &&
                            <StyledButton
                                variant="outlined"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                onClick={_ => removeProposal(proposal._id)}
                            >
                                Remove
                        </StyledButton>}
                        <StyledButton
                            variant="outlined"
                            color="primary"
                            startIcon={<EditIcon />}
                            onClick={_ => editProposal()}
                        >
                            Edit
                        </StyledButton>
                    </div>
                </ClueFooter>



            </Collapse>

        </>
    )
}

const StyledButton = styled(Button)`
    &&{
        margin-left:5px;
    }
`;
const ClueFooter = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top: 10px;
`;

export default Proposal


