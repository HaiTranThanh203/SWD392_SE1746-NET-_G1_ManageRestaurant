import logo from "./logo.svg";
import {
    BrowserRouter,
    Route,
    Routes,
    unstable_HistoryRouter,
    useNavigate,
} from "react-router-dom";

import "./App.css";
import HomePage from "./component/HomePage/HomePage";

function App() {
    return (
        <BrowserRouter>
            <HomePage></HomePage>
        </BrowserRouter>
    );
}

export default App;
