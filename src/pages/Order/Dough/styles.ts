import styled from 'styled-components'

interface IDoughItem {
    doughHeight: number;
    selected: boolean;
}

export const Container = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    
    @media(max-width: 767px) {
        width: 100%;
        padding: 30px 10px;
    }

    >ul{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 450px;
    }
`

export const DoughItem = styled.li<IDoughItem>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;

    cursor: pointer;

    >p {
        font-size: 24pt;
        font-weight:  ${props => `${props.doughHeight}00`};
        color: ${props => props.selected ? '#23a723' : '#000'}
    }

    > span{
        border-bottom: ${props => `${props.doughHeight}px`} solid ${props => props.selected ? '#23a723' : '#000'};
        width: 150px;
        height: 2px;
    }
`