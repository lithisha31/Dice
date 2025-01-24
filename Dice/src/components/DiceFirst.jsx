import styled from "styled-components";
import TotalScore from "./TotalScore";
import Counts from "./Counts";
import RollDice from "./RollDice";
import ShowRules from "./ShowRules";
import { useState } from "react";
import { Button } from "./Button";

export default function DiceStart() {

    const [score,setScore] = useState(0)

    const [selectedNumber, setSelectedNumber] = useState()

    const [currentDice, setCurrentDice] = useState(1);
 
    const [error, setError] = useState("");

    const [displayRules, setDisplayRules] = useState(false);

    const [plusPoint, setPlusPoint] = useState(false);

    const display = () => {
        setDisplayRules(prev => !prev);
    }

    const Message = () =>{
        console.log("WINNER")
    }

    const generateRandomNumber = () => {
        return Math.floor(Math.random()*6 + 1);
    }

    const rand = generateRandomNumber();

    const setDice = () => {
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        setCurrentDice(prev=>rand)
        console.log(`current dice :${currentDice}`)

        if(selectedNumber === rand){
            setScore(prev => prev + rand)
            console.log(`selected number : ${selectedNumber}`)
            setPlusPoint(true);
            setTimeout(() => {
                setPlusPoint(false);
                }, 900);
            Message();
        }
        else{
            setPlusPoint(false);
            setScore(prev=>prev-2)
        }
        setSelectedNumber(undefined)
    }

    const reset = () => {
        setCurrentDice(1);
        setScore(0);
        setSelectedNumber();
    }

    return (
        <Main>
            <div className="flex">
                <TotalScore score={score}/>
                {plusPoint && <h4>+{currentDice}</h4>}
                <Counts setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setPlusPoint={setPlusPoint}/>
            </div>
            <RollDice currentDice={currentDice} setDice={setDice} />
            <div className="btns">
                <Button onClick={reset}>Reset</Button>
                <Button onClick={display}>{displayRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {displayRules && <ShowRules />}
        </Main>
    )
}

const Main = styled.div`
    .flex{
        display : flex;
        flex-direction : row;
        justify- content : space-between;
    }
    .btns{
        display : flex;
        flex-direction : column;
        place-items : center;
        padding-right : 10rem;
        margin-top : 1rem;
        gap : 5px;
    }
    h4{
        font-size : 4rem;
        color : green;
        margin : 0;
        transition : h2 2s ease-in;
    }
    padding : 0 7rem;
`;
