import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

interface IMenuItemProps{
    active: boolean;
}

export const Container = styled.div`
    padding: 30px 60px;
    height: 100%;   

    >div:nth-child(1){
        display: flex;
        align-items: center;
        cursor: pointer;

        >svg{
            color: ${() => lighten(0.7, '#000')};
            margin-right: 10px;
        }
    }

    >div:nth-child(2){
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90%;

        >ul{
            >li{
                padding: 15px 0;
            }
        }
    }
`

export const MenuItem = styled(Link)<IMenuItemProps>`
    color: ${props => props.active ? '#000' : '#c2c2c2'};
    font-weight: 200;
    font-size: 26pt;
    text-decoration: none;

    >span{
        font-weight: 400;
    }
`