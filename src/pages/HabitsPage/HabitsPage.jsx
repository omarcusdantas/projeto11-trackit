import React from "react";
import Menu from "../../components/Menu";
import TopBar from "../../components/TopBar";
import AddHabit from "../../components/AddHabit";
import Habit from "../../components/Habit";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { PageContainer, Main, Title, Container } from "../../styles/template";
import { useNavigate } from "react-router-dom";

export default function HabitsPage() {
    const [days, setDays] = React.useState([]);
    const [inputName, setInputName] = React.useState("");
    const [isAddHabit, setIsAddHabit] = React.useState(false);
    const [habits, setHabits] = React.useState([]);
    const { userData } = React.useContext(UserContext);
    const navigate = useNavigate();

    function getHabits() {
        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", { headers: {"Authorization" : `Bearer ${userData.token}`}})
            .then((response) => {
                setHabits(response.data);
            })
            .catch((error) => {
                console.log(error);
                navigate("/"); 
            });
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
                    <button onClick={toggleAddHabit} data-test="habit-create-btn"><p>+</p></button>
                </Title>
                {   
                    isAddHabit &&
                    <AddHabit 
                        toggleAddHabit={toggleAddHabit} 
                        updateHabits={getHabits} 
                        token={userData.token}
                        inputName={inputName}
                        setInputName={setInputName}
                        days={days}
                        setDays={setDays}
                    ></AddHabit>
                }
                <Container>
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
                </Container>
            </Main>
            <Menu></Menu>
        </PageContainer>
    );
}
