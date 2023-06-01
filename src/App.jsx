import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<LoginPage />}
                />
                <Route 
                    path="/cadastro" 
                    element={<RegisterPage />}
                />
                <Route 
                    path="/habitos" 
                    element={<HabitsPage />}
                />                
            </Routes>
        </BrowserRouter>
    );
}
