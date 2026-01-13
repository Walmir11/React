import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    width: 320px;
    margin-bottom: 24px;
    line-height: 44px;
    color: #FFFFFF;
`;

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`;

export const Column = styled.div`
    flex: ${({ flex }) => flex};
    padding-right: 24px;
`;

export const Row = styled.div`
    display: flex;
`;


export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
    color: #FFFFFF;
`;
