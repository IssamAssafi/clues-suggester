import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Proposal from './Proposal';
import API_URL from './../calls/config';



const ProposalsList = ({ username, proposals, setProposals, removeProposal, showEditingForm }) => {
    //const [proposals, setProposals] = useState([]);

    const getAllProposals = async () => {
        try {
            const response = await axios.get(API_URL + '/' + username);
            const proposals = response.data;
            setProposals(proposals);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("hey there")
        getAllProposals("");
    }, [])


    return (

        <ListContainer>
            {proposals && proposals.map(proposal => (
                <Proposal
                    proposal={proposal}
                    removeProposal={removeProposal}
                    showEditingForm={showEditingForm}
                />
            ))}
        </ListContainer>

    )
}


const ListContainer = styled.div`
    display:flex;
    flex-flow:column;
    align-items:center;
`;

export default ProposalsList
