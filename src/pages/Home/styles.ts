import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
    background: url('./images/pizza5.webp');
    background-repeat: no-repeat;
    background-position: 130%;
    background-size: 50%;

    height: 100%;
    width: 100%;

    position: relative;

    @media(max-width: 767px) {
        background-position: 205% 130%;
        background-size: 75%;
    }

    >h1{
        padding: 2rem 5rem;

        @media(max-width: 767px) {
            padding: 0;
            text-align: center;
        }
    }

    >div{
        display: flex;
        flex-direction: column; 
        
        width: 20rem;
        position: absolute;
        bottom: 8rem;

        >a{
            width: 100%;
            transition: 0.2s;
            
            &:hover{
                width: 105%;
                color: ${() => lighten(0.5, '#000')}
            }

            border-bottom: 1px solid #000;
            text-decoration: none;
            color: #000;

            text-align: end;
            font-weight: 200;
            font-size: 26pt;

            padding-bottom: 8px;
        }

        >a:nth-child(1){
            margin-bottom: 100px;
            
            @media(max-width: 767px) {
                margin-bottom: 70px;
            }
        }

        >a:nth-child(2):hover ~ div{
            width: 105%;
        }

        >div{
            transition: 0.2s;
            display: flex;
            flex-direction: column;
            align-items: end;

            >span{
                font-size: 26pt;
                margin: 6px 0;
            }
        }
    }
` 