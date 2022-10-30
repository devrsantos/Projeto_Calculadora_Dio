import styled from "styled-components";

const StyleButtons = styled.div`
    width: 352px;
    height: 523px;

    margin: 0 19px;

    margin-top: 5px;

    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

const StyleFooter = styled.div`
    width: 352px;
    height: 33px;

    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyleLineFooter = styled.div`
    width: 135px;
    height: 5px;
    border-radius: 100px;

    margin-top: -15px;

    background-color: #FFFFFF;
`;

export { StyleButtons, StyleFooter, StyleLineFooter }