import React, { useState } from 'react'
import ProposalsList from './ProposalsList';
import styled from 'styled-components';
import { FormWrapper } from './FormWrapper';
import Form from './Form';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const API_URL = "http://localhost:777/proposals";

const Dashboard = () => {
    const username = localStorage.getItem('username');
    const [proposals, setProposals] = useState([]);
    let history = useHistory();

    const addProposal = async (proposal) => {
        try {
            await axios.post(API_URL + '/', proposal);
            proposals.push(proposal);
            setProposals([...proposals]);
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <DashboardContainer>
            <Title>MY PROPOSALS</Title>
            <Form addProposal={addProposal} />
            <LogoutButton onClick={logout} variant="contained" size="medium" color="primary" >
                LOGOUT ({username})
                </LogoutButton>
            <ProposalsList
                username={username}
                proposals={proposals}
                setProposals={setProposals}
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
const Row = styled.div`
  display:inline-block;
  position:relative;
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