import React from "react";
import styled from "styled-components";
import checkImg from "../assets/check.png"
import axios from "axios";

export default function DailyHabit({info, token, updateDailyHabits, isDisabled}) {
    function handleHabit() {
        if (info.done === false) {
            axios
                .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/check`, "", { headers: {"Authorization" : `Bearer ${token}`}})
                .then(() => {updateDailyHabits()})
                .catch((error) => console.log(error));
            return;
        }
        axios
            .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/uncheck`, "", { headers: {"Authorization" : `Bearer ${token}`}})
            .then(() => {updateDailyHabits()})
            .catch((error) => console.log(error));
        return;
    }

    return (
        <Container>
            <Text>
                <h3>{info.name}</h3>
                {   
                    info.currentSequence !== undefined &&
                    <div>
                        <p>Sequência atual:{" "} 
                            <HabitInfo status={info.done? "true" : "false"} highest={"false"}>
                                {info.currentSequence === 1? `1 dia` : `${info.currentSequence} dias`}
                            </HabitInfo>
                        </p>
                        <p>Seu recorde:{" "}
                            <HabitInfo highest={info.currentSequence > 0 && info.currentSequence >= info.highestSequence? "true" : "false"} status={"false"}>
                                {info.highestSequence === 1? `1 dia` : `${info.highestSequence} dias`}
                            </HabitInfo>
                        </p>
                    </div>
                }
            </Text>
            <Check onClick={handleHabit} status={info.done? "true" : "false"} disabled={isDisabled}>
                <img src={checkImg} alt="Check" />
            </Check>
        </Container>
    );
}

const Container = styled.div`
    min-height: 91px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 14px 18px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        color: #666666;
        font-size: 20px;
        margin-bottom: 7px;
    }
`;

const Text = styled.div`
    p {
        font-size: 13px;
        color: #666666;
        line-height: 16px;
    }
`;

const HabitInfo = styled.span`
    font-size: 13px;
        
    color: ${(props) => {
        if (props.status === "true" || props.highest === "true") {
            return "#8FC549";
        } 
            return "#666666";
        }};
`;

const Check = styled.button`
    border-radius: 5px;
    width: 69px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => {
        if (props.status === "true") {
            return "#8FC549";
        } 
            return "#EBEBEB";
        }};
    
    border: 1px solid ${(props) => {
        if (props.status === "true") {
            return "#8FC549";
        } 
            return "#E7E7E7";
        }};
        
    &:disabled {
        cursor: default;
    }
`;

