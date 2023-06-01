import React from "react";
import styled from "styled-components";
import DayButton from "./DayButton";

export default function Habit({info}) {
    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
        <Container>
            <h3>{info}</h3>
            <WeekContainer>
                {
                    daysOfWeek.map((day, index) => (
                        <DayButton key={index} text={day} isDisabled={true}></DayButton>
                    ))
                }
            </WeekContainer>
            <ion-icon name="trash-outline"></ion-icon>
        </Container>
    );
}

const Container = styled.div`
    height: 91px;
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