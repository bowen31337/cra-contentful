import  styled  from 'styled-components'



export  const CardStyled = styled.article`
    border: 1px solid green;
    width: 350px;
    position: relative;
    
    figure {
        padding:0;
        margin:0;
    }
    section {
        position: absolute;
        bottom: -10px;
        background-color: white;
        width: 80%;
        left: 10%;
    }
`