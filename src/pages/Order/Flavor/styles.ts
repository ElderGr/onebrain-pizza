import styled, {css} from 'styled-components'

interface IFlavorItem {
    image: string;
    isSelected: boolean;
}

export const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    
    @media(max-width: 767px) {
        width: 100%;
        justify-content: start;
        overflow-x: scroll;
    }

    >ul{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        width: 650px;

        @media(max-width: 767px) {
            margin-top: 10px;
            flex-wrap: nowrap;
            justify-content: start;
            align-items: start
        }
    }
`

export const FlavorItem = styled.li<IFlavorItem>`
    @media(max-width: 767px) {
        height: 170px;
        width: 500px;
    }

    height: 190px;
    width: 170px;

    display: flex;
    justify-content: center;
    
    font-size: 16pt;
    font-weight: 450;

    margin: 10px;
    ${props => css`
        background: url(${props.image});
    `}

    ${props => css`
        color: ${props.isSelected ? '#23a723' : '#000'};
    `}

    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    cursor: pointer;
`