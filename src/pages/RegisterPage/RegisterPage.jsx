import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import { LoginContainer } from "../../styles/template";
import logo from "../../assets/logo.png";
import { ThreeDots } from "react-loader-spinner";

export default function RegisterPage() {
    const [inputEmail, setInputEmail] = React.useState("");
    const [inputPassword, setInputPassword] = React.useState("");
    const [inputName, setInputName] = React.useState("");
    const [inputPhoto, setInputPhoto] = React.useState("");
    const [isDisabled, setIsDisabled] = React.useState(false);
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        setIsDisabled(true);

        const data = {
            email: inputEmail,
            name: inputName,
            image: inputPhoto,
            password: inputPassword
        };

        axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", data)
            .then(() => {
                setIsDisabled(false);
                navigate("/");                
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
                <input 
                    type="text" 
                    placeholder="nome" 
                    required
                    onChange={(event) => setInputName(event.target.value)}
                    value={inputName}
                    disabled={isDisabled}
                    data-test="user-name-input"
                />
                <input 
                    type="url" 
                    placeholder="foto" 
                    required
                    onChange={(event) => setInputPhoto(event.target.value)}
                    value={inputPhoto}
                    disabled={isDisabled}
                    data-test="user-image-input"
                />
                <button type="submit" disabled={isDisabled} data-test="signup-btn">
                    { isDisabled &&
                        <ThreeDots height="13px" color="#ffffff"></ThreeDots>
                    }
                    { !isDisabled &&
                        "Cadastrar"
                    }
                </button>
                <Link to="/" data-test="login-link">Já tem uma conta? Faça login!</Link>
            </form>
        </LoginContainer>
    );
}
