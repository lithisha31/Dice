import styled from "styled-components";

export const Button = styled.button`
    height : 2rem;
    width : 10rem;
    background-color : black;
    color : white;
    border-radius : 5px;
    transition : 0.3s background ease-in;
    cursor : pointer;

    &:hover {
        background-color : white;
        color : black;
        transition : 0.2s background ease-in;
}
`;
