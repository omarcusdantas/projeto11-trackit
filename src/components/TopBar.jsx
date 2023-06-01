import React from "react";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";

export default function TopBar() {
    return (
        <Bar>
            <Container>
                <h1>TrackIt</h1>
                <img src="https://http.cat/411.jpg" alt="" />
            </Container>
        </Bar>

    );
}

const Bar = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    height: 70px;
    z-index: 1;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
    width: 375px;
    display: flex;
    justify-content: space-between;
    padding: 0 18px;
    align-items: center;

    h1 {
        color: #ffffff;
        font-family: "Playball", sans-serif;
        font-size: 39px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;