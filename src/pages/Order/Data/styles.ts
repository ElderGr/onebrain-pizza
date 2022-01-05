import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 40%;

    >div{
        margin: 20px 0;
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;

        >span{
            font-weight: 700;
            font-size: 16pt;
        }

        >span:nth-child(2){
            font-weight: 200;
        }
    }
`