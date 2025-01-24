import styled from "styled-components";

export default function TotalScore({score}){
    console.log(`score:${score}`)
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>

    )
}

const ScoreContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items: center;
    h1{
        font-size : 60px;
        margin : 0;
    }
    p{
        margin:0;
        font-size : 20px;
        font-weight : 500;
    }
`;