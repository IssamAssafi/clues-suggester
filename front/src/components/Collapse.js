import React from 'react'
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Collapse = ({ title, children, mtop }) => {

    return (
        <ExpansionPanelStyled mtop={mtop}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <CollapseTitle>{title}</CollapseTitle>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {children}
            </ExpansionPanelDetails>
        </ExpansionPanelStyled>
    )
}
export default Collapse;

const ExpansionPanelStyled = styled(ExpansionPanel)`
  &&{
      width:100%;
      margin-top:${props => props.mtop || '0px'};
      
      div.MuiExpansionPanelDetails-root{
          display:block;
          padding:4px 12px 20px;
      }
  }
`;

const CollapseTitle = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #354B64;
`;