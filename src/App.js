
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {Main} from "./controller/Main";
import {Login} from "./controller/Login";
import { Todo } from './controller/home/Todo';

function App() {

    // return useRoutes(router);
    return (

        <div className="App">
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main/*" element={<Main />} >
                    <Route index element={<Todo />} />
                    {/* <Route path="/" element={<Todo />} /> */}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
