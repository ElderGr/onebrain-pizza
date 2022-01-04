import styled from "styled-components";
import { lighten } from 'polished'

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

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #858585;

    font-size: 16pt;

    padding: 10px 0;
    margin: 10px 0;
    background: none;

    &::placeholder{
        font-weight: 100;
    }
`

export const Button = styled.button`
    border: none;
    color: #fff;
    background: #000;

    font-size: 16pt;

    padding: 10px 0;
    cursor: pointer;

    transition: 0.2s;

    &:hover{
        background: ${() => lighten(0.15, '#000')}
    }
`