import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    font-size: 18px;
    color: #009EE0;
    font-family: 'Montserrat', sans-serif;
}

.container{
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
}

#root{
    position: relative; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

`
export default GlobalStyle
