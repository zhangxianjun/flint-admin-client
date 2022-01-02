import './App.css';
import {Main} from "./controller/Main";
import {Login} from "./controller/Login";
import {Routes, Route, Navigate} from "react-router-dom";
import { Todo } from './controller/home/Todo';

function App() {
    return (

        <div className="App">
            
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} >
                    <Route index element={<Todo />} />
                    {/* <Route path="/" element={<Todo />} /> */}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
