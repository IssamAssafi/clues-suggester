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
  &&&{
    /* background: linear-gradient(180deg, #FFFFFF 0%, rgba(235, 235, 235, 0.91) 100%); */
    background: linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%);
      border-radius: 7px;
      width:100%;
      display:block;
      margin-top:${props => props.mtop || '6px'};
       div.MuiExpansionPanelSummary-expandIcon {
            height:30px;
       }
        .MuiExpansionPanelSummary-root{
            border-radius: 7px;
            &:hover{
                background: #d3ddeb;
            }
        } 

        .Mui-expanded{
            min-height:none;
            /* height: 22px; */
            &:hover{
                background: none;

            }
        }

        .MuiExpansionPanelSummary-root.Mui-expanded{
            min-height:45px;
        }

        div.MuiExpansionPanelDetails-root{
          display:block;   
          padding-bottom:13px;
          padding-top:0;
          .MuiPaper-elevation1{
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
         }
      }
      .MuiExpansionPanel-root:before {
          background-color:rgb(255,255,255,0);
          
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