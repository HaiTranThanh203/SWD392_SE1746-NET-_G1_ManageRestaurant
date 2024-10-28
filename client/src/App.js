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
import MapHostess from "./pages/hostess/MapHostess";
import BookingTable from "./pages/hostess/BookingTable";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/hostess/map" element={<MapHostess />}></Route>
                <Route
                    path="/hostess/bookingTable"
                    element={<BookingTable />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
