import React from "react";
import Menu from "../../components/Menu";
import TopBar from "../../components/TopBar";
import AddHabit from "../../components/AddHabit";
import Habit from "../../components/Habit";
import styled from "styled-components";
import { UserContext } from "../../UserContext";
import axios from "axios";

export default function HabitsPage() {
    const [isAddHabit, setIsAddHabit] = React.useState(false);
    const [habits, setHabits] = React.useState([]);
    const { userData } = React.useContext(UserContext);

    function getHabits() {
        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", { headers: {"Authorization" : `Bearer ${userData.token}`}})
            .then((response) => {
                setHabits(response.data);
            })
            .catch((error) => console.log(error));
    }

    React.useEffect(() => {
        getHabits();
    }, []);

    function toggleAddHabit() {
        setIsAddHabit(!isAddHabit);
    }

    return (
        <PageContainer>
            <TopBar></TopBar>
            <Main>
                <Title>
                    <h2>Meus hábitos</h2>
                    <button onClick={toggleAddHabit}><p>+</p></button>
                </Title>
                {   
                    isAddHabit &&
                    <AddHabit 
                        toggleAddHabit={toggleAddHabit} 
                        updateHabits={getHabits} 
                        token={userData.token}
                    ></AddHabit>
                }
                <HabitsContainer>
                    {
                        habits.length == 0 &&
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    }
                    {
                        habits.length !== 0 &&
                        habits.map((habit, index) => (
                            <Habit 
                                key={index} 
                                info={habit.name} 
                                days={habit.days} 
                                habitId={habit.id} 
                                updateHabits={getHabits} 
                                token={userData.token}
                            ></Habit>
                        ))
                    }
                </HabitsContainer>
            </Main>
            <Menu></Menu>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    background-color: #F2F2F2;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`;

const Main = styled.div`
    width: 375px;
    margin-top: 92px;
    margin-bottom: 115px;
    padding: 0 18px;
`;

const Title = styled.div`
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: end;

    h2 {
        font-size: 23px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.6px;
        position: relative;

        p {
            color: #ffffff;
            font-size: 27px;
            position: absolute;
            top: -2px;
            left: 12.7px;
        }
    }

`;

const HabitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 29px;

    p {
        font-size: 18px;
        color: #666666;
        line-height: 22px;
    }
`;
