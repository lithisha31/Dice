import styled from "styled-components"

export default function Counts({setError,error,selectedNumber,setSelectedNumber,setPlusPoint}){
    const arr = [1,2,3,4,5,6];

    const selectedNumberHandler = (value) =>{
        setSelectedNumber(value);
        setError("");
        setPlusPoint(false);
    }

    return (
        <Numbers>
            <p className="error">{error}</p>
            <Counter>
             {arr.map((a,i)=>{
                return <Box 
                        isSelected = {a === selectedNumber}
                        key={i}
                        onClick={()=>selectedNumberHandler(a)}>{a}</Box>
            })}
            </Counter>
            <p>Select the number</p>
        </Numbers>
    )
}
const Box = styled.div`
    height : 4rem;
    width : 4rem;
    border : 2px solid black;
    display : grid;
    place-items : center;
    font-size : 24px;
    font-weight : 700;
    background-color :${({isSelected}) => (isSelected ? "black" : "white")};
    color :${({isSelected}) => (!isSelected ? "black" : "white")};
`;

const Counter = styled.div`
    display: flex;
    align-items : center;
    gap : 10px;
    margin-top : 1rem;
`;

const Numbers = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    place-items : end;
    p{
    margin-bottom : 0;
    font-weight : 700;
    }
   .error{
   color : red;
   font-weight : 400;
   }
`;
