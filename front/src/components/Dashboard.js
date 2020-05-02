import React, { useState } from 'react'
import ProposalsList from './ProposalsList';
import styled from 'styled-components';
import Form from './Form';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import API_URL from './../calls/config';
import { AddCircle } from '@styled-icons/material/AddCircle';



const Dashboard = () => {
    const username = localStorage.getItem('username');
    let history = useHistory();

    let [proposals, setProposals] = useState([]);
    const addProposal = async (proposal) => {
        try {
            await axios.post(API_URL + '/', proposal);
            proposals.push(proposal);
            setProposals([...proposals]);
        } catch (error) {
            console.log(error)
        }
    }
    const editProposal = async (oldProposalId, newProposal) => {
        try {
            await axios.patch(`${API_URL}/${oldProposalId}`, newProposal);
            let editedProposal = proposals.find(proposal => proposal._id === oldProposalId);
            proposals.splice(proposals.indexOf(editedProposal), 1, newProposal);
            setProposals([...proposals]);
        } catch (error) {
            console.log(error)
        }
    }
    const removeProposal = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            proposals = proposals.filter(proposal => proposal._id !== id);
            setProposals(proposals);
        } catch (e) {
            console.log(e);
        }
    }

    const emptyProposal = {
        character: '',
        anime: '',
        clues: [],
        author: localStorage.getItem('username'),
        category: '',
        status: 'review'
    }
    const [defaultProposal, setDefaultProposal] = useState(emptyProposal);
    const [open, setOpen] = React.useState(false);
    const [editing, setEditing] = useState(false);
    const showForm = () => { setOpen(true); };
    const closeForm = () => { setOpen(false); };
    const showAdditionForm = () => {
        setDefaultProposal(emptyProposal);
        setEditing(false);
        showForm();
    }
    const showEditingForm = (proposalToEdit) => {
        setDefaultProposal(proposalToEdit);
        setEditing(true);
        showForm();
    };

    const logout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <DashboardContainer>
            <Title>MY PROPOSALS</Title>
            <AddIcon onClick={showAdditionForm} />
            <Form
                open={open}
                closeForm={closeForm}
                defaultProposal={defaultProposal}
                addProposal={addProposal}
                editProposal={editProposal}
                editing={editing}
            />
            <LogoutButton onClick={logout} variant="contained" size="medium" color="primary" >
                LOGOUT ({username})
            </LogoutButton>
            <ProposalsList
                username={username}
                proposals={proposals}
                setProposals={setProposals}
                removeProposal={removeProposal}
                showEditingForm={showEditingForm}
            />
        </DashboardContainer>
    )
}

export default Dashboard



const LogoutButton = styled(Button)`
  &&{
      background-color:#9F2F20;
      position:fixed;
      right:6px;
      bottom:6px;
  }
`;

const AddIcon = styled(AddCircle)`
    width:33px;
    color: green;
    position: relative;
    bottom: 5px;
`;

const Title = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    display:inline-block;
`;

const DashboardContainer = styled.div`
    background-color:#F0F4F9;
    min-height:100vh;
    padding:15px 5%;
`;