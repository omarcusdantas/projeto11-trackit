import { Link, useNavigate } from "react-router-dom";
import LoginContainer from "../../styles/LoginContainer";
import logo from "../../assets/logo.png";
import axios from "axios";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
    const [inputEmail, setInputEmail] = React.useState("");
    const [inputPassword, setInputPassword] = React.useState("");
    const [isDisabled, setIsDisabled] = React.useState(false);
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
                console.log(response.data);                
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
                />
                <input 
                    type="password" 
                    placeholder="senha" 
                    required
                    onChange={(event) => setInputPassword(event.target.value)}
                    value={inputPassword}
                    disabled={isDisabled}
                />
                <button type="submit" disabled={isDisabled}>
                    { isDisabled &&
                        <ThreeDots height="13px" color="#ffffff"></ThreeDots>
                    }
                    { !isDisabled &&
                        "Entrar"
                    }
                </button>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </form>
        </LoginContainer>
    );
}
