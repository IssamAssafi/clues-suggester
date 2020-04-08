import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /* @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap'); */

    html{
        height:100%
    }
    
    *{
        padding:0;
        margin:0;
        font-size:10px;
    }

    body{
        font-family: 'Quicksand', sans-serif;
        height:100%;

    }
`;

export default GlobalStyle;
