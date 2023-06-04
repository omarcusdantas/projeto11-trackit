import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UserContext } from "../UserContext";

export default function Menu() {
    const { userData } = React.useContext(UserContext);

    return (
        <MenuBar data-test="menu">
            <MenuContainer>
                <Link to="/habitos" data-test="habit-link">Hábitos</Link>
                <Link to="/hoje" data-test="today-link">
                    <ProgressContainer>
                        <CircularProgressbar
                            value={userData.progress? userData.progress : 0} 
                            text={"Hoje"}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#ffffff",
                            pathColor: "#ffffff",
                            trailColor: "transparent"
                            })}
                        />
                    </ProgressContainer>
                </Link>
                <Link to="/historico" data-test="history-link">Histórico</Link>
            </MenuContainer>
        </MenuBar>

    );
}

const MenuBar = styled.div`
    background-color: #ffffff;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    height: 70px;
    z-index: 1;
`;

const MenuContainer = styled.div`
    width: 375px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 36px;

    a {
        font-size: 18px;
        color: #52B6FF;
        text-decoration: none;
    }
`;

const ProgressContainer = styled.div`
    height: 91px;
    width: 91px;
    position: absolute;
    bottom: 10px;
    left: 136px;
    overflow: hidden;
    border-radius: 50%;
`;