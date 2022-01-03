import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IMenuItemProps{
    active: boolean;
}

export const Container = styled.div`
    padding: 30px 60px;
    height: 100%;

    >div{
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