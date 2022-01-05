import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.button`
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