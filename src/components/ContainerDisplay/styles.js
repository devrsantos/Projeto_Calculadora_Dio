import styled from "styled-components";

const StyleDisplay = styled.div`
    width: 352px;
    height: 322px;

    margin: 0 19px;

    padding-top: 50px;

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    margin-top: 5px;
`;

const StyleDisplayView = styled.div`
    width: 352px;
    height: 234px;

    border-radius: 10px;

    background-color: #151515;

    border: 1px solid #FFFFFF;
`;

const StyleDisplayCalc = styled.input`
    width: 100%;
    font-size: 48px;
    font-family: 'Inter';
    font-weight: bold;
    font-style: normal;
    line-height: 16px;
    border-radius: 10px;

    background-color: #151515;
    border: 0;
    text-align: end;
    color: #FFFFFF;

    padding: 20px 10px;
`;

const StyleDisplayResult = styled.p`
    width: 100%;
    font-size: 48px;
    font-family: 'Inter';
    font-weight: bold;
    font-style: normal;

    border-radius: 10px;

    background-color: #151515;
    border: 0;
    text-align: end;
    color: #FFFFFF;

    padding: 20px 10px;
`;

export { StyleDisplay, StyleDisplayView, StyleDisplayCalc, StyleDisplayResult}
