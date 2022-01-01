import './App.css';
import {Main} from "./controller/Main";
import {Login} from "./controller/Login";
import {Routes, Route, Navigate} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default App;
