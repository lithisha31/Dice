import styled from "styled-components";
import { Button } from "./Button";

export default function DiceMain({toggle}){
    return(
        <Container>
            <Img src="/images/dice.png"></Img>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    max-width : 900px;
    margin : 0 auto;
    height : 500px;
    display: flex;
    align-items : center;
    gap : 6rem;

    .content{
        h1{
        font-size: 5rem;
        white-space : nowrap;
        margin : 0
        }
        display : flex;
        flex-direction : column;
        place-items : end;
        width : 50%;

    }
`;
const Img = styled.img`
    height : 500px;
    width : 50%;
`;




