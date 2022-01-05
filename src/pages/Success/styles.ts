import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    >div{
        >div{
            display: flex;
            justify-content: space-between;

            width: 100%;
            margin: 5px 0;

            >span{
                font-weight: 300;
            }
        }

        display: flex;
        flex-direction: column;
        border: 1px solid ${() => lighten(0.8,'#000')};
        padding: 40px 15px;

        >h1{
            font-size: 25pt;
        }

        >h2{
            font-size: 20pt;
            margin: 20px 0;
            font-weight: 300;
        }
    }
`

export const Divisors = styled.span`
    border-bottom: 1px dotted ${() => lighten(0.4,'#000')};
    margin: 15px 0;
`