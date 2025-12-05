import styles from "styled-components";

export const ButtonContainer = styles.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    margin: 20px;

    &:hover {
        background-color: #FAFAFA40;
        cursor: pointer;
    }
`