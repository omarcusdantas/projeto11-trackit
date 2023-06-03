import styled from "styled-components";

export const CalendarContainer = styled.div`
.react-calendar {
    margin-top: 15px;
    border: none;
    width: 335px;
    height: 402px;
    border-radius: 10px;
    line-height: 1.125em;
    max-width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffffff;

    .react-calendar--doubleView {
    width: 700px;
    }

    .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
    }

    .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
    }

    .react-calendar,
    .react-calendar *,
    .react-calendar *:before,
    .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }

    .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    }

    .react-calendar button:enabled:hover {
    cursor: pointer;
    }

    .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
    }

    .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    }

    .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
    }

    .react-calendar__navigation button:enabled:hover {
    background-color: #e6e6e6;
    }

    .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    }

    .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    }

    .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
    }

    .react-calendar__month-view__days__day--weekend {
    color: #d10000;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
    }

    .react-calendar__year-view .react-calendar__tile,
    .react-calendar__decade-view .react-calendar__tile,
    .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
    }

    .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 32px;
    }

    .react-calendar__tile--now {
    background: #ffff76;
    }

    .react-calendar__tile:enabled:hover {
        background-color: #e6e6e6;
    }

    .done {
        background: url("../src/assets/greencircle.svg") center no-repeat;
        color: #000000;
    }

    .not-done {
        background: url("../src/assets/redcircle.svg") center no-repeat;
        color: #000000;
    }

}
`;