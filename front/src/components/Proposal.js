import React from 'react'
import styled from 'styled-components';
import Collapse from './Collapse';
import Clue from './Clue';

function Proposal({ character, anime, clues }) {
    const proposalTitle = `${character} from ${anime}`;
    return (
        <Collapse title={proposalTitle} mtop='7px'>
            {clues && clues.map((clue, index) => (
                <Clue order={index + 1} text={clue.text} img={clue.img} />
            ))}
        </Collapse>
    )
}

export default Proposal


