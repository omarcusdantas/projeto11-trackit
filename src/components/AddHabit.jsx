import React from "react";
import styled from "styled-components";
import DayButton from "./DayButton";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function AddHabit({toggleAddHabit, updateHabits, token, inputName, setInputName, days, setDays}) {
    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [isDisabled, setIsDisabled] = React.useState(false);

    function manageDays(day) {
        const indexToRemove = days.indexOf(day);
    
        if (indexToRemove !== -1) {
            const updatedDays = [...days];
            updatedDays.splice(indexToRemove, 1);
            setDays(updatedDays);
            return;
        }
    
        setDays([...days, day]);
    }

    function registerHabit() {
        setIsDisabled(true);
        if (inputName !== "" && days.length !== 0) {
            const data = {
                name: inputName,
                days: days
            };

            axios
                .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", data, { headers: {"Authorization" : `Bearer ${token}`}})
                .then(() => {updateHabits(); setDays([]); setInputName(""); toggleAddHabit();})
                .catch((error) => {alert(error); setIsDisabled(false);});
        }
        else {
            alert("Preencha corretamente");
            setIsDisabled(false);
        }
    }

    return (
        <Container data-test="habit-create-container">
            <input 
                type="text" 
                placeholder="nome do hábito" 
                disabled={isDisabled} 
                onChange={(event) => setInputName(event.target.value)}
                value={inputName}
                data-test="habit-name-input"
            />
            <WeekContainer>
                {
                    daysOfWeek.map((day, index) => (
                        <DayButton 
                            key={index} 
                            text={day} 
                            dayIndex={index} 
                            isDisabled={isDisabled} 
                            selected={days.includes(index)} 
                            handleClick={manageDays}
                        ></DayButton>
                    ))
                }
            </WeekContainer>
            <ButtonContainer>
                <button onClick={toggleAddHabit} disabled={isDisabled} data-test="habit-create-cancel-btn">Cancelar</button>
                <button onClick={registerHabit} disabled={isDisabled} data-test="habit-create-save-btn">
                    { isDisabled &&
                        <ThreeDots height="13px" color="#ffffff"></ThreeDots>
                    }
                    { !isDisabled &&
                        "Salvar"
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
    
        &:disabled {
            cursor: default;
        }
    }

    button:nth-child(2) {
        background-color: #52B6FF;
        border-radius: 4.6px;
        width: 84px;
        height: 35px;
        font-size: 16px;
        color: #ffffff;

        &:disabled {
            background-color: #86CCFF;
            cursor: default;
        }
    }
`;

const WeekContainer = styled.div`
    display: flex;
    gap: 4px;
    margin: 8px 0 29px 0;
`;