import styled from "styled-components";

export const Button = styled.button`
    width: 313px;
    height: 39px;
    padding: 12px;
    border-radius: 6px;
    border: none;
    background: #7334EA;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    color: #FFFFFF;

    transition: .15s ease;

    &:hover {
        opacity: 0.9;
    }
`;
