import React from 'react'
import styled from 'styled-components';
import Collapse from './Collapse';

const Clue = ({ order, text, img }) => {
    const clueTitle = `Clue ${order}`;
    const clueText = text ? text.toUpperCase() : "";
    const isValidImg = img && (img.endsWith(".png") || img.endsWith(".jpg") || img.endsWith(".jpeg"))
    return (
        <Collapse title={clueTitle}>
            <CollapseText>{clueText}</CollapseText>
            {isValidImg && <CollapseImage src={img} />}
        </Collapse>
    )
}
export default Clue

const CollapseText = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
`;

const CollapseImage = styled.img`
    display:block;
    max-width: 386px;
    width: 91%;
    margin-top: 9px;
    border: 1px solid #dedede;
    border-radius: 9px;
    padding: 6px;
`;

