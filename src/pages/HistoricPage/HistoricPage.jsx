import React from "react";
import Menu from "../../components/Menu";
import TopBar from "../../components/TopBar";
import { PageContainer, Main, Title, Container } from "../../styles/template";
import Calendar from 'react-calendar';
import { UserContext } from "../../UserContext";
import axios from "axios";
import dayjs from 'dayjs';
import { CalendarContainer } from "../../styles/CalendarContainer";
import DailyHabit from "../../components/DailyHabit";
import { useNavigate } from "react-router-dom";

export default function HistoricPage() {
    const { userData } = React.useContext(UserContext);
    const [history, setHistory] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [showHabits, setShowHabits] = React.useState(false);
    const [habitsInfo, setHabitsInfo] = React.useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", { headers: {"Authorization" : `Bearer ${userData.token}`}})
            .then((response) => {
                setHistory(response.data);
            })
            .catch((error) => {
                console.log(error);
                navigate("/"); 
            });
    }, []);

    function tileClassName({ date }) {
        const formattedDate = dayjs(date).format("DD/MM/YYYY");
        const today = dayjs().format("DD/MM/YYYY");
        const habitsOfDay = history.find((item) => item.day === formattedDate);

        if (formattedDate === today) {
            return null;
        } else if (habitsOfDay && habitsOfDay.habits.some((habit) => !habit.done)) {
            return "not-done";
        } else if (habitsOfDay && habitsOfDay.habits.every((habit) => habit.done)) {
            return "done";
        }
        return null;
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    function handleDateChange(date) {
        const formattedDate = dayjs(date).format("DD/MM/YYYY");
        const formattedDay = capitalizeFirstLetter(dayjs(date).format("dddd").replace(/-feira$/, ""));
        const habitsOfDay = history.find((item) => item.day === formattedDate);
        
        if (habitsOfDay && formattedDate !== dayjs().format("DD/MM/YYYY")) {
            setHabitsInfo({
                date: `${formattedDay}, ${formattedDate}`,
                habits: habitsOfDay.habits
            });
            setShowHabits(true);
        }

        setSelectedDate(date);
    }

    return (
        <PageContainer>
            <TopBar></TopBar>
            {
                !showHabits &&
                <Main>
                    <Title>
                        <h2>Histórico</h2>
                    </Title>
                    <CalendarContainer>
                        <Calendar
                            className="react-calendar"
                            locale="pt-BR"
                            weekStartsOn={0}
                            tileClassName={tileClassName}
                            onChange={handleDateChange}
                            value={selectedDate}
                        ></Calendar>
                    </CalendarContainer>
                </Main>
            }
            {
                showHabits &&
                <Main>
                    <Title>
                        <h2>{habitsInfo.date}</h2>
                        <button onClick={() => setShowHabits(false)}><ion-icon name="close-circle"></ion-icon></button>
                    </Title>
                    <Container>
                        {habitsInfo.habits.map((dailyHabit, index) => (
                            <DailyHabit 
                                key={index} 
                                info={dailyHabit} 
                                isDisabled={true}
                            ></DailyHabit>
                        ))}
                    </Container>
                </Main>
            }
            <Menu></Menu>
        </PageContainer>
    );
}