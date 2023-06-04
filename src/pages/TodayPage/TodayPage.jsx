import React from "react";
import Menu from "../../components/Menu";
import TopBar from "../../components/TopBar";
import DailyHabit from "../../components/DailyHabit";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { PageContainer, Main, Title, Container } from "../../styles/template";
import styled from "styled-components";
import TodayDate from '../../components/TodayDate';

export default function TodayPage() {
    const { userData, setUserData } = React.useContext(UserContext);
    const [dailyHabits, setDailyHabits] = React.useState([]);

    function updateProgress(habits) {
        let total = 0;
        habits.forEach((habit) => {
            if(habit.done === true) {
                total++;
            }
        })
        const newProgress = Math.round(total/habits.length*100);
        setUserData({...userData, progress: newProgress});
    }

    function getDailyHabits() {
        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", { headers: {"Authorization" : `Bearer ${userData.token}`}})
            .then((response) => {
                setDailyHabits(response.data);
                updateProgress(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    React.useEffect(() => {
        getDailyHabits();
    }, []);

    return (
        <PageContainer>
            <TopBar></TopBar>
            <Main>
                <Title>
                    <TitleContainer>
                        <TodayDate></TodayDate>
                        <ProgressContainer progress={userData.progress} data-test="today-counter">
                            {userData.progress === 0 || isNaN(userData.progress)? `Nenhum hábito concluído ainda` : `${userData.progress}% dos hábitos concluídos`}
                        </ProgressContainer>
                    </TitleContainer>
                </Title>
                <Container>
                    {
                        dailyHabits.length == 0 &&
                        <p>Você não tem nenhum hábito para concluir hoje.</p>
                    }
                    {
                        dailyHabits.length !== 0 &&
                        dailyHabits.map((dailyHabit, index) => (
                            <DailyHabit 
                                key={index} 
                                info={dailyHabit} 
                                token={userData.token}
                                updateDailyHabits={getDailyHabits}
                            ></DailyHabit>
                        ))
                    }
                </Container>
            </Main>
            <Menu></Menu>
        </PageContainer>
    );
}

const ProgressContainer = styled.p`
    font-size: 18px;

    color: ${(props) => {
        if (props.progress === 0 || isNaN(props.progress)) {
            return "#BABABA";
        } 
        return "#8FC549";
    }};
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
