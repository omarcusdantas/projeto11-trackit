import { Link, useNavigate } from "react-router-dom";
import { LoginContainer } from "../../styles/template";
import logo from "../../assets/logo.png";
import axios from "axios";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { UserContext } from "../../UserContext";

export default function LoginPage() {
    const [inputEmail, setInputEmail] = React.useState("");
    const [inputPassword, setInputPassword] = React.useState("");
    const [isDisabled, setIsDisabled] = React.useState(false);
    const { setUserData } = React.useContext(UserContext);
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        setIsDisabled(true);

        const data = {
            email: inputEmail,
            password: inputPassword
        };

        axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", data)
            .then((response) => {
                setIsDisabled(false);  
                setUserData({
                    token: response.data.token,
                    img: response.data.image
                });
                navigate("/habitos");             
            })
            .catch((error) => {
                setIsDisabled(false);
                alert(error);
            });
    }

    return (
        <LoginContainer>
            <img src={logo} alt="TrackIt" />
            <form onSubmit={handleForm}>
                <input 
                    type="email" 
                    placeholder="email" 
                    required
                    onChange={(event) => setInputEmail(event.target.value)}
                    value={inputEmail}
                    disabled={isDisabled}
                    data-test="email-input"
                />
                <input 
                    type="password" 
                    placeholder="senha" 
                    required
                    onChange={(event) => setInputPassword(event.target.value)}
                    value={inputPassword}
                    disabled={isDisabled}
                    data-test="password-input"
                />
                <button type="submit" disabled={isDisabled} data-test="login-btn">
                    { isDisabled &&
                        <ThreeDots height="13px" color="#ffffff"></ThreeDots>
                    }
                    { !isDisabled &&
                        "Entrar"
                    }
                </button>
                <Link to="/cadastro" data-test="signup-link">Não tem uma conta? Cadastre-se!</Link>
            </form>
        </LoginContainer>
    );
}
