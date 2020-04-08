import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);
    const Login = () => {
        if (username) {
            localStorage.setItem('username', username);
            history.push("/dashboard");
        }
        else {
            setError(true);
        }
    }
    return (
        <GlobalContainer>
            <LoginContainer>
                <StyledText>Welcome, Please Login!</StyledText>
                <UsernameInput
                    error={error}
                    helperText={error ? "Empty entry." : ""}
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={e => { setUsername(e.target.value); setError(false) }}
                />
                <LargeButton
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={Login}>
                    LOG IN
                </LargeButton>
            </LoginContainer>
        </GlobalContainer>
    );
}
export default Login;

const StyledText = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.size || '24px'};
    line-height: 29px;
`;

const UsernameInput = styled(TextField)`
  &&{
  background-color:white;   
  border-radius:3px;
  width:96%;
  margin:2em 0;
}
`;

const LoginContainer = styled.div`
    background: white;
    border-radius: 7px;
    display: block;
    height: 210;
    margin: 1rem auto;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -90%);
    width:34em;
    max-width: 90%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    padding:20px;

`;

const LargeButton = styled(Button)`
  &&{
      width:96%
  }
`;

const GlobalContainer = styled.div`
  background-color:#F0F4F9;
  min-height:100vh;
`;

