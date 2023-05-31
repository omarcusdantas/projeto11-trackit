import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

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
            </Routes>
        </BrowserRouter>
    );
}
