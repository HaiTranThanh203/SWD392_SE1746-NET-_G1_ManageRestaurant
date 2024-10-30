import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import HomePage from "./component/HomePage/HomePage";
import MapHostess from "./pages/hostess/MapHostess";
import BookingTable from "./pages/hostess/BookingTable";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hostess/map" element={<MapHostess />} />
                    <Route
                        path="/hostess/bookingTable"
                        element={<BookingTable />}
                    />
                    <Route path="/tables" element={<TableList />} />
                </Routes>
            </BrowserRouter>
        </DndProvider>
    );
}

export default App;
