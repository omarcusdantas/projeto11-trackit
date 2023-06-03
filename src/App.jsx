import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import { UserProvider } from "./UserContext";

export default function App() {
    return (
        <BrowserRouter>
            <UserProvider>
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
                    <Route 
                        path="/hoje" 
                        element={<TodayPage />}
                    />
                    <Route 
                        path="/historico" 
                        element={<HistoricPage />}
                    />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}
