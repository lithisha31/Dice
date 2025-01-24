import styled from "styled-components";

export default function ShowRules(){
    return (
        <RulesContainer>
            <div className="box">
                <h2>How to play dice game</h2>
                <div className="rules">
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>After click on dice ,if selected number is equal to dice number, you will get same point as dice</p>
                    <p>If you get wrong guess then 2 points will be deducted</p>
                </div>
            </div>                       
        </RulesContainer>
    )
}

const RulesContainer = styled.div`
    display : grid;
    height : 6rem;
    max-width : 30rem;
    margin-top : 1rem;
    margin-left : 11rem;
    border : 1px solid black;
    border-radius : 8px;
    background-color : #fbf1f1;

    h2{
    font-size : 10px;
    font-weight : 800;
    margin : 0;
    display : flex;
    justify-content : center;
    }

    .rules p{
    display : flex;
    justify-content : center;
    font-size : 10px;
    margin : 0;
    margin-top : 4px;
    }       
`;