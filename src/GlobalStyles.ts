import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
input{
    border: none
}
li{
    list-style-type: none
}
body{
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    font-family: 'Inter', sans-serif;
}
`;

export default GlobalStyle;