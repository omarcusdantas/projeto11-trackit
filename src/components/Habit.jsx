import React from "react";
import styled from "styled-components";
import DayButton from "./DayButton";
import axios from "axios";

export default function Habit({info, days, habitId, updateHabits, token}) {
    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

    function deleteHabit() {
        axios
            .delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`, { headers: {"Authorization" : `Bearer ${token}`}})
            .then(() => {updateHabits()})
            .catch((error) => console.log(error));
    }

    return (
        <Container data-test="habit-container">
            <h3 data-test="habit-name">{info}</h3>
            <WeekContainer>
                {
                    daysOfWeek.map((day, index) => {
                        if(days.includes(index+1)) {
                            return <DayButton key={index} text={day} isDisabled={true} selected={true}></DayButton>
                        }
                        return <DayButton key={index} text={day} isDisabled={true} selected={false}></DayButton>
                    })
                }
            </WeekContainer>
            <ion-icon name="trash-outline" onClick={deleteHabit} data-test="habit-delete-btn"></ion-icon>
        </Container>
    );
}

const Container = styled.div`
    min-height: 91px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 14px 18px;
    position: relative;

    h3 {
        color: #666666;
        font-size: 20px;
    }

    ion-icon {
        position: absolute;
        top: 10px;
        right: 11px;
        cursor: pointer;
    }

`;

const WeekContainer = styled.div`
    display: flex;
    gap: 4px;
    margin: 8px 0 29px 0;
`;