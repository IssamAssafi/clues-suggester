import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { CircleWithCross } from '@styled-icons/entypo/CircleWithCross';

const ClueInput = ({ index, initialClue, updateClue, removeClue }) => {
    const [clue, setClue] = useState({ text: '', img: '' });

    useEffect(() => {
        setClue(initialClue);
    })

    return (
        <ClueGroupContainer>
            <CrossIcon onClick={e => removeClue(index)} />
            <ClueGroupTitle>Clue #{index + 1}</ClueGroupTitle>
            <ClueInputsGroup>
                <TextInput
                    value={clue.text}
                    placeholder="Clue 1"
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setClue({ ...clue, text: e.target.value });
                        updateClue({ ...clue, text: e.target.value }, index);
                    }}
                />
                <TextInput
                    value={clue.img}
                    placeholder="Image Link (OPTIONAL)"
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setClue({ ...clue, img: e.target.value });
                        updateClue({ ...clue, img: e.target.value }, index);
                    }}
                />
            </ClueInputsGroup>
        </ClueGroupContainer>
    )
}

export default ClueInput


const CrossIcon = styled(CircleWithCross)`
    width: 22px;
    color: floralwhite;
    position: absolute;
    right: 4px;
    top: 3px;
    cursor: pointer;

    :hover{
        color:black;
    }
`;


const ClueGroupTitle = styled.span`
    color: white;
    font-size: 14px;
    font-family: montserrat;
`;

const ClueInputsGroup = styled.div`
    margin-top:5px; 
`;

const ClueGroupContainer = styled.div`
    position:relative;
    background: linear-gradient(180deg, #018555 0%, #219A67 13.54%, #72DB7C 100%);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.10);
    border:1px solid gray;
    border-radius: 7px;
    padding: 4px;
    padding-bottom: 0px;
    margin: 6px 0px;
`;

const TextInput = styled(TextField)`
&&{
  width:100%;
  .MuiOutlinedInput-root{
    border-radius: 5px;
    background-color: white;
    margin-bottom: 5px;
  }
}
`;