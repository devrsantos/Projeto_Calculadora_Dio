import styled from "styled-components";

const Btn = styled.button`
    width: 73px;
    height: 75px;
    border-radius: 9px;
    background-color: ${props => props.buttonColor || "#343434"};
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;

    color: #FFFFFF;

    border: 0px;
`;

export { Btn }