import React from "react";
import styled from "styled-components";
import DayButton from "./DayButton";
import { ThreeDots } from "react-loader-spinner";

export default function AddHabit({toggleAddHabit}) {
    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [isDisabled, setIsDisabled] = React.useState(false);

    function registerHabit() {
        setIsDisabled(true);
    }

    return (
        <Container>
            <input type="text" placeholder="nome do hábito" disabled={isDisabled}/>
            <WeekContainer>
                {
                    daysOfWeek.map((day, index) => (
                        <DayButton key={index} text={day} isDisabled={isDisabled}></DayButton>
                    ))
                }
            </WeekContainer>
            <ButtonContainer>
                <button onClick={toggleAddHabit}>Cancelar</button>
                <button onClick={registerHabit}>
                    { isDisabled &&
                        <ThreeDots height="13px" color="#ffffff"></ThreeDots>
                    }
                    { !isDisabled &&
                        "Entrar"
                    }
                </button>
            </ButtonContainer>
        </Container>
    );
}

const Container = styled.div`
    height: 180px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 0 18px;

    input {
        width: 100%;
        margin-top: 18px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        padding: 0 11px;

        &::placeholder {
            color: #DBDBDB;
        }
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 23px;

    button:first-child {
        border-radius: 4.6px;
        width: 69px;
        height: 20px;
        font-size: 16px;
        color: #52B6FF;
        background-color: #ffffff;
    }

    button:nth-child(2) {
        background-color: #52B6FF;
        border-radius: 4.6px;
        width: 84px;
        height: 35px;
        font-size: 16px;
        color: #ffffff;
    }
`;

const WeekContainer = styled.div`
    display: flex;
    gap: 4px;
    margin: 8px 0 29px 0;
`;