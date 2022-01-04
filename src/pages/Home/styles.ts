import styled from 'styled-components'

export const Container = styled.div`
    background: url('./images/pizza5.webp');
    background-repeat: no-repeat;
    background-position: 130%;
    background-size: 50%;

    height: 100%;
    width: 100%;

    position: relative;

    >h1{
        padding: 2rem 5rem;
    }

    >div{
        display: flex;
        flex-direction: column; 
        
        width: 25rem;
        position: absolute;
        bottom: 8rem;

        >a{
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
        }

        >div{
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