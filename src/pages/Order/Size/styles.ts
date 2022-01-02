import styled from "styled-components";

interface ISizeOption {
    selected: boolean;
}

export const Container = styled.div`
    width: 50%;

    >ul{
        >li:nth-child(1){
            transform: translate(-20%, 140%);
            width: 75px;
            height: 75px;
        }
        
        >li:nth-child(2){
            transform: translate(90%, -35%);
            width: 100px;
            height: 100px;
        }
        
        >li:nth-child(3){
            transform: translate(50%,0%);
            width: 125px;
            height: 125px;
        }
    }
`

export const SizeOption = styled.li<ISizeOption>`
    border: 4px solid ${props => props.selected ? '#23a723' : '#000'};

    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 20pt;
`