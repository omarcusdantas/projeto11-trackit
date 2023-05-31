import styled from "styled-components";

const LoginContainer = styled.div`
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin: 68px 0 33px 0;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 6px;
        height: 300px;
        align-items: center;
    }

    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        padding: 0 11px;

        &::placeholder {
            color: #DBDBDB;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #52B6FF;
        color: #ffffff;
        font-size: 20px;
        width: 303px;
        height: 45px;
        border: none;
        border-radius: 4.6px;

        &:disabled {
            background-color: #86CCFF;
            cursor: default;
        }
    }

    a {
        margin-top: 25px;
        font-size: 14px;
        color: #52B6FF;
    }
`;

export default LoginContainer;