import styled from "styled-components";

export default function RollDice({currentDice,setDice}){
    return (
        <DiceContainer>
            <div className="dice" onClick={setDice}>
                <img src={`/images/Dice-${currentDice}.png`} alt="Dice 1"></img>
            </div>
        </DiceContainer>
    )
}

const DiceContainer = styled.div`
    img{
          height : 10rem;
          width : 10rem;  
    }
          display : grid;
          justify-content : center;
          padding-right : 10rem;
          margin-top : 1.5rem;
    .dice{
        cursor: pointer;
        }
`;