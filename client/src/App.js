import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import HomePage from "./component/HomePage/HomePage";
import MapHostess from "./pages/hostess/MapHostess";
import BookingTable from "./pages/hostess/BookingTable";
import Login from "./component/Login/Login";
import ManagerCustomer from "./pages/hostess/ManagerCustomer";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/hostess/map" element={<MapHostess />}></Route>
                    <Route
                        path="/hostess/bookingTable"
                        element={<BookingTable />}
                    ></Route>
                    <Route
                        path="/hostess/ManagerCustomer"
                        element={<ManagerCustomer />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </DndProvider>
    );
}

export default App;
